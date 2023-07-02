import Link from "next/link"

function CandidateSlot({id,name,college,role,selected,setSelected}) {
	return (
		selected==id?
		<button 
			className="flex flex-col justify-center items-left text-left relative bg-[white] rounded-xl w-full p-5 shadow-sm my-5 text-[#898989] hover:shadow-md"
			onClick={()=>setSelected(id)}>
			<h2 className="text-main">
				{name+', '+college}
			</h2>
			<p className="text-[#4D4D4D]">
				{role}
			</p>
		</button>:
		<button 
			className="flex flex-col justify-center items-left text-left relative bg-[white] rounded-xl w-full p-5 shadow-sm my-5 text-[#898989] hover:shadow-md border-2 border-main"
			onClick={()=>setSelected('')}>
			<h2 className="text-main">
				{name+', '+college}
			</h2>
			<p className="text-[#4D4D4D]">
				{role}
			</p>
		</button>
	)
}

export default CandidateSlot