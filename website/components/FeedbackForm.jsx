import { useState } from "react"
import { useMutation } from "@apollo/client"
import nProgress from 'nprogress'


function FeedbackForm(id) {

	const [feedback,setFeedback] = useState("")
	const [remark,setRemark] = useState("")
	const [params,setParams] = useState([
		{name:'parameter 1', value:false},
		{name:'parameter 2', value:false},
		{name:'parameter 3', value:false},
		{name:'parameter 4', value:false},
		{name:'parameter 5', value:false}
	])

	// const [addFeedback,{error,loading,data}] = useMutation(AddFeedback);
	const handleFeedbackSubmission = async () =>{
		// await addFeedback({
		// 	variables:{
		// 		input: [
		// 		  {}
		// 		]
		// 	}
		// })
	}

	// useEffect(() => {
	// 	if(loading){
	// 		nProgress.start()
	// 	}
	// 	if(!loading){
	// 		nProgress.done(false)
	// 		if(data)
	// 			router.push(`/event/${data.createEvents.events[0].id}`)
	// 		if(error)
	// 			alert(error)
	// 	}
		
	// 	if(error){
	// 		nProgress.done(false)
	// 	}
	// },[loading])



	return (
		<main className="flex gap-10 bg-secondary w-full h-full rounded-2xl p-10 text-[black]">
			<div className="w-[45%]">
				<div>
					<p>Feedback</p>
					<input 
						className="p-2 border-2 border-[grey] rounded-md w-full"
						type="text" 
						onChange={(e)=>setFeedback(e.target.value)}
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
									value={value}
									onChange={()=>{
										let newParams = params
										newParams[index].value = !params[index].value
										setParams(newParams)
										console.log(params)
									}}
								/>
								<label for={`custom-checkbox-${index}`}>
									{name}
								</label>
							</div>
						</li>
					);
					})}
				</ul>

				<button
					className="bg-main rounded-xl p-2 text-secondary hover:shadow-md active:opacity-95"
					onClick={handleFeedbackSubmission}>
					Submit
				</button>
			</div>

			<div className="w-[50%] h-[90%]">
				<p>Remark</p>
				<textarea 
					className="p-2 border-2 border-[grey] rounded-md w-full h-full"
					onChange={(e)=>setRemark(e.target.value)}
					value={remark}
				/>
			</div>
		</main>
	)
}

export default FeedbackForm