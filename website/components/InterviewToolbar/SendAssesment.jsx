import Image from "next/image"

function SendAssesment() {
	const assessCandidate = () => {

	}

	return (
		<button 
			className="hover:shadow-md  active:opacity-80 flex flex-col bg-secondary rounded-xl p-4 px-10 text-main justify-center items-center w-[35%] h-full"
			onClick={assessCandidate}>
			<Image
				alt='assessment'
				src={'/Assesment.svg'}
				height={100}
				width={100}
				className='w-[2rem] '
			/>
			<p>Send Assesment</p>
		</button>
	)
}

export default SendAssesment