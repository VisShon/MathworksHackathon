import CandidateInfoPanel from "@/components/CandidateInfoPanel";
import FeedbackResult from "@/components/FeedbackResult";

import { useRouter } from "next/router";
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import nProgress from 'nprogress'
import AdminToolbar from "@/components/AdminCandidateToolbar";

function CandidateProfile() {
	const router = useRouter();
	const {id} = router.query;

	const [candidateData, setCandidateData] = useState({
		id:'1',
		name:'Vishnu Shon',
		phone: '7017495876',
		mail: 'vishnu20414@iiitd.ac.in',
		college:'Computer Science Engineering, IIITD',
		image:'/CandidateProfile.png',
		skills:['FullStack','UI/UX','Marketing','Business'],
		description:'Lorem ipsum dolor sit amet consectetur. Lacus rutrum egestas sollicitudin viverra faucibus vitae. Vitae mi pellentesque sed nulla tortor ac placerat. Non non vitae auctor semper tristique ipsum blandit sapien.',
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
		<main className="flex gap-10 w-screen h-screen p-20 mt-10 justify-between items-top overflow-hidden">
			<CandidateInfoPanel
				id={candidateData.id} 
				image={candidateData.image} 
				name={candidateData.name} 
				college={candidateData.college} 
				skills={candidateData.skills} 
				description={candidateData.description}
			/>

			<div className="flex flex-col gap-10 w-[70%]">
				<FeedbackResult
					id={candidateData.id}
				/>
                <AdminToolbar
                    id={candidateData.id}
                />
			</div>

		</main>
	)
}

export default CandidateProfile