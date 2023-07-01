import { useState } from "react"
import { useQuery } from "@apollo/client"
import nProgress from 'nprogress'

function FeedbackResult(id) {

	const [feedback,setFeedback] = useState("")
	const [remark,setRemark] = useState("")
	const [params,setParams] = useState([
		{name:'parameter 1', value:false},
		{name:'parameter 2', value:false},
		{name:'parameter 3', value:false},
		{name:'parameter 4', value:false},
		{name:'parameter 5', value:false}
	])

    // const { loading, error, data } = useQuery(GetCandidateFeedback,{
	// 	variables:{
	// 		where:{
	// 			id:id
	// 		}
	// 	}
	// })
	
	// useEffect(() => {
	// 	if(loading){
	// 		nProgress.start()
	// 	}
	// 	if(!loading){
	// 		nProgress.done(false)
	// 		setFeedback(data?.events[0])
	// 	}
	// 	if(error){
	// 		nProgress.done(false)
	// 	}

	return (
		<main className="flex gap-10 bg-secondary w-full h-full rounded-2xl p-10 text-[black]">
			<div className="w-[45%]">
				<div>
					<p>Feedback</p>
					<input 
						className="p-2 border-2 border-[grey] rounded-md w-full"
						type="text" 
						value={feedback}
					/>
				</div>

				<ul className="mt-10">
					{params?.map(({ name, value }, index) => {
					return (
						<li key={index}>
							<div className="my-6 flex gap-5 text-[1.2rem] font-[200] items-center">
								<input
									type="checkbox"
									id={`custom-checkbox-${index}`}
									name={name}
                                    checked={value}
								/>
								<label for={`custom-checkbox-${index}`}>
									{name}
								</label>
							</div>
						</li>
					);
					})}
				</ul>
			</div>

			<div className="w-[50%] h-[90%]">
				<p>Remark</p>
				<textarea 
					className="p-2 border-2 border-[grey] rounded-md w-full h-full"
					value={remark}
				/>
			</div>
		</main>
	)
}

export default FeedbackResult