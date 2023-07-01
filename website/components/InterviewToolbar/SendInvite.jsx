import Image from "next/image"

function SendInvite(phone) {

	const inviteCandidate = () => {
		//setup teams invite
	}

	return (
		<button 
			className="hover:shadow-md active:opacity-80 flex flex-col bg-secondary rounded-xl p-4 px-10 text-[indigo] justify-center items-center w-[35%] h-full"
			onClick={inviteCandidate}>
			<Image
				alt='teams'
				src={'/Teams.svg'}
				height={100}
				width={100}
				className='w-[2.5rem] '
			/>
			<p>Send Meet</p>
		</button>
	)
}

export default SendInvite