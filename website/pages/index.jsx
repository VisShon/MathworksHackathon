import Head from 'next/head'
import Timings from '@/components/Timings'
import ManagerInfoPanel from '@/components/ManagerInfoPanel'
import { useState } from 'react'

export default function Home() {
	const [managerData, setManagerData] = useState({
		id:'1',
		name:'R. Raghavendra',
		mail: 'vishnu20414@iiitd.ac.in',
		role:'EDG Manager',
		image:'/ManagerProfile.png',
		skills:['Management','QE','Development','Business'],
		timings: [
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Developer',
				college:'IIITD',
				start:'9:30',
				end:'10:30',
			},
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				start:'9:30',
				end:'10:30',
			},
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				start:'9:30',
				end:'10:30',
			},
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				start:'9:30',
				end:'10:30',
			},
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				start:'9:30',
				end:'10:30',
			},
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				start:'9:30',
				end:'10:30',
			},

			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				start:'9:30',
				end:'10:30',
			},
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				start:'9:30',
				end:'10:30',
			},
		]
	})

	// const { loading, error, data } = useQuery(GetCandidate,{
	// 	variables:{
	// 		where:{
	// 			id:candidateId
	// 		}
	// 	}
	// })
	
	// useEffect(() => {
	// 	if(loading){
	// 		nProgress.start()
	// 	}
	// 	if(!loading){
	// 		nProgress.done(false)
	// 		setEventData(data?.events[0])
	// 	}
	// 	if(error){
	// 		nProgress.done(false)
	// 	}
	// },[])
	return (
		<main>
			<Head>
				<title>InterviewLink</title>
				<meta
					name="description"
					content="MathWorks interviewing platform"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className='flex w-full p-10'>
				<div className='flex flex-col w-[30%] px-10 relative'>
					<ManagerInfoPanel
						image={managerData.image} 
						name={managerData.name} 
						role={managerData.role}
						skills={managerData.skills}
					/>
				</div>

				<div className='flex flex-col w-[70%]'>
					{managerData?.timings?.map(({name,college,role,start,end,id},index)=>(
						<Timings
							key={index}
							id={id}
							name={name}
							college={college}
							role={role}
							timings={[start,end]}
						/>
					))}
				</div>
			</div>
		</main>
	)
}
