import { useMutation } from "@apollo/client"
import nProgress from "nprogress"
import { useEffect } from "react"

function GoButton() {
    
		// const [addFeedback,{error,loading,data}] = useMutation(AddFeedback);
        const candidatePass = async () =>{
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
		<button 
			className="hover:shadow-md  active:opacity-80 flex flex-col text-secondary rounded-xl p-4 px-10 bg-main justify-center items-center w-[35%] h-full"
			onClick={candidatePass}>
			<p>Go</p>
		</button>
	)
}

export default GoButton