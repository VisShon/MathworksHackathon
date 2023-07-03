import { useMutation } from "@apollo/client"
import nProgress from "nprogress"
import { useState, useEffect } from "react"
import GetInterviewers from '@/apollo/query/getInterviewers.graphql'
import GetCandidates from '@/apollo/query/getCandidates.graphql'
import UpdateCandidateInterview from '@/apollo/mutation/updateCandidateInterview.graphql'
import slotsData from '@/slots.json'
import main from '@/utils/schedule.js'
import AdminManagerToolbar from '@/components/AdminManagerToolbar'
function AutoScheduleButton({candidatesDataAutoButton, interviewersDataAutoButton}) {

        finalInterviews  = main(candidatesDataAutoButton, interviewersDataAutoButton)
        const [updateCandidateInterview, {error, loading, data}]  = useMutation(UpdateCandidateInterview)
        const autoScheduleCandidates = async() =>{
            finalInterviews?.forEach((interview)=>{
                candidateAutoSchedule(interview.candidateId, interview.interviewerId, interview.timestart, interview.end)
            })
        }
        const candidateAutoSchedule = async (candidateId, managerId, timestart, timeend) =>{
            console.table({
                candidateId,
                managerId,
                timestart: new Date(timestart),
                timeend: new Date(timeend),
            })

            // await updateCandidateInterview({
            //     variables:{
            //         "where": {
            //             "candidateId": candidateId
            //           },
            //           "create": {
            //             "interviewList": [
            //               {
            //                 "node": {
            //                   "admin": process.env.ADMIN_ID,
            //                   "candidate": {
            //                     "connect": {
            //                       "where": {
            //                         "node": {
            //                           "candidateId": candidateId
            //                         }
            //                       }
            //                     }
            //                   },
            //                   "interviewer": {
            //                     "connect": {
            //                       "where": {
            //                         "node": {
            //                           "interviewerId": managerId
            //                         }
            //                       }
            //                     }
            //                   },
            //                   "releventLinks": 'link',
            //                   "timeEnd": new Date(timestart),
            //                   "timeStart": new Date(timeend)
            //                 }
            //               }
            //             ]
            //         }
            //     }
            // })
        }
    
        useEffect(() => {
        	if(loading){
        		nProgress.start()
        	}
        	if(!loading){
        		nProgress.done(false)
        	
        	}
            
        	if(error){
        		nProgress.done(false)
        	}
        },[loading])

	return (
		<button 
			className="hover:shadow-md  active:opacity-80 flex flex-col text-secondary rounded-xl p-4 px-10 bg-main justify-center items-center w-[35%] h-full"
			onClick={autoScheduleCandidates}>
			<p>Auto</p>
		</button>
	)
}

export default AutoScheduleButton