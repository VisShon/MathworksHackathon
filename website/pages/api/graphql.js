import neo4j from "neo4j-driver"
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { Neo4jGraphQL } from "@neo4j/graphql"
import { Neo4jGraphQLAuthJWTPlugin } from "@neo4j/graphql-plugin-auth";
import { OGM } from "@neo4j/graphql-ogm";
import typeDefs from '@/graphql/schema.graphql'
import jwt from 'jsonwebtoken';
import { compare } from "bcrypt";

const driver = neo4j.driver(
	process.env.NEO4J_URI,
	neo4j.auth.basic(
		process.env.NEO4J_USERNAME, 
		process.env.NEO4J_PASSWORD
	),
	// {
	// 	encrypted: process.env.NEO4J_ENCRYPTED ? 'ENCRYPTION_ON' : 'ENCRYPTION_OFF',
	// }
)

const schema = new Neo4jGraphQL({ 
	typeDefs,
	driver 
})

const getSchema = async () => {
	console.log("Building GraphQL Schema")
	return await schema.getSchema()
}

const decodeToken = async (token) =>{
	return jwt.decode(token)
}

const verifyToken = async (token) =>{
	try{
		jwt.verify(token, process.env.JWT_KEY)
		return true
	}
	catch{
		return false
	}
}
	 
const apolloServer = new ApolloServer({
	schema: await getSchema(),
	playground: true,
})


const ogm = new OGM({
	typeDefs,
	driver,
	plugins: {
        auth: new Neo4jGraphQLAuthJWTPlugin({
            secret: process.env.JWT_KEY
        })
    }
})


export const logIn = async(args) =>{
	await ogm.init()
	const Interviewer = ogm.model('Interviewer')
	const Admin = ogm.model('Admin')

	const adminSelectionSet = `{
		userName
		email
		password
	}`

	const interviewerSelectionSet = `{
		interviewerId
		userName
		email
		password
	}`

	const admin = await Admin.find({
		where:{password:args.password},
		adminSelectionSet
	}) 

	const interviewer = await Interviewer.find({
		where:{password:args.password},
		interviewerSelectionSet
	}) 


	if(admin.length!==0){
		const correctPassword = await compare(args.password,admin[0].password)
		if(correctPassword){
			const token = jwt.sign(
				{
					...admin[0],
					id:process.env.ADMIN_ID
				},
				process.env.JWT_KEY,
				{
					expiresIn:2592000
				}
			)
			return token
		}
	}

	if(interviewer.length!==0){
		const correctPassword = await compare(args.password,interviewer[0].password)
		console.log(correctPassword,args.password,interviewer[0].password)
		if(correctPassword){
			const token = jwt.sign(
				{
					...interviewer[0],
					id:interviewer[0]?.id
				},
				process.env.JWT_KEY,
				{
					expiresIn:2592000
				}
			)
			return token
		}
		return 'USER_NOT_EXISTS'
	}

	return 'USER_NOT_EXISTS'
}

export default startServerAndCreateNextHandler(apolloServer,{
	context: async (req) => {
		const token = req.cookies.token;
		let payload = {}
		const validity = await  verifyToken(token)
		if(validity)
			payload = await decodeToken(token)

		return { 
			executionContext: driver,
			jwt: payload
		}
	}
});
