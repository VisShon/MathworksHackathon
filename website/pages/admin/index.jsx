import ManagersList from '@/components/ManagersList'
import AdminManagerToolbar from '@/components/AdminManagerToolbar'
import CandidateSlot from '@/components/FreeSlot'
import FreeSlot from '@/components/FreeSlot'

import GetInterviewers from '@/apollo/query/getInterviewers.graphql'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import nProgress from 'nprogress'

function admin() {
	const [managersData, setManagersData] = useState()
	const { loading, error, data } = useQuery(GetInterviewers)

	useEffect(() => {
		if(loading){
			nProgress.start()
		}
		if(!loading){
			nProgress.done(false)
			setManagersData(data?.interviewers)
		}
		if(error){
			nProgress.done(false)
		}
	},[loading])

	return (
		<div className='w-screen h-[80%] flex items-center justify-between p-2 px-5'>
			<ManagersList
				managersList={managersData}
			/>
			<div className='flex flex-col gap-10 w-[70%] px-8'>
				<div className='bg-secondary w-full h-[20vh] rounded-2xl flex'>

				</div>
				<div className='bg-secondary w-full h-[43vh] rounded-2xl flex'>

				</div>
				<AdminManagerToolbar/>
			</div>
		</div>
	)
}

export default admin