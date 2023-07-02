
function FreeSlot({id,timings,day,selected,setSelected}) {
	return (
		selected==id?
		<button 
			className="flex flex-col justify-center items-left text-left relative bg-[white] rounded-xl w-[30%] p-5 shadow-sm my-5 text-[#898989] hover:shadow-md"
			onClick={()=>setSelected(id)}>
			<h2 className="text-main">
				{timings[0]+'-'+timings[1]}
			</h2>
			<p className="text-main">
				{day}
			</p>
		</button>:
		<button 
			className="flex flex-col justify-center items-left text-left relative bg-[white] rounded-xl w-[30%] p-5 shadow-sm my-5 text-[#898989] hover:shadow-md border-2 border-main"
			onClick={()=>setSelected('')}>
			<h2 className="text-main">
				{timings[0]+'-'+timings[1]}
			</h2>
			<p className="text-main">
				{day}
			</p>
		</button>
	)
}

export default FreeSlot