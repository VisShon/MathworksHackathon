import Image from "next/image"

function SendMail(mail) {

	const mailCandidate = () =>{
		//mail candidate
	}

	return(
		<button 
			className="hover:shadow-md active:opacity-80 flex flex-col bg-secondary rounded-xl p-4 px-10 text-[red] justify-center items-center w-[35%] h-full"
			onClick={mailCandidate}>
			<Image
				src={'/Mail.svg'}
				height={100}
				width={100}
				className='w-[2rem] '
			/>
			<p>Send Mail</p>
		</button>
	)
}

export default SendMail