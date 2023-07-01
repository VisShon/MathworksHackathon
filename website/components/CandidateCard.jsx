function CandidateCard({name,college,role,description}) {
	return (
		<div className="flex flex-col justify-center items-left text-left relative bg-[white] rounded-xl w-full p-5 shadow-sm my-5 text-[#898989]">
			<h2 className="text-main">
				{name+', '+college}
			</h2>
			<p className="text-[#4D4D4D]">
				{role}
			</p>
			<span className="mt-10">
				{description}
			</span>
		</div>
	)
}

export default CandidateCard