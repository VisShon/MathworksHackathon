import Head from 'next/head'
import Timings from '@/components/Timings'
import ManagerInfoPanel from '@/components/ManagerInfoPanel'

import GetInterviewer from '@/apollo/query/getInterviewer.graphql'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import nProgress from 'nprogress'

export default function Home() {
	const [managerData, setManagerData] = useState()
	const { loading, error, data } = useQuery(GetInterviewer,{
		variables:{
			where: {
			  interviewerId: "5183141a-2884-4726-8ff1-39faec665f7c"
			}
		}
	})

	useEffect(() => {
		if(loading){
			nProgress.start()
		}
		if(!loading){
			nProgress.done(false)
			setManagerData(data?.interviewers[0])
			sessionStorage.setItem(data?.interviewers[0].image,'image')
		}
		if(error){
			nProgress.done(false)
		}
	},[loading])

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
						image={managerData?.image} 
						name={managerData?.userName} 
						role={managerData?.role}
						skills={managerData?.skillset}
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
