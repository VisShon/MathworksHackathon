import { useState } from "react"
import ManagerCard from "./ManagerCard"

function ManagersList({managersList}) {
	const [selected,setSelected] = useState('')
	console.log(selected)
	return (
		<div className="p-5 bg-secondary rounded-2xl w-[30%] h-[80vh] overflow-y-clip flex flex-col gap-5">
			{managersList?.map((manager, index)=>(
				<ManagerCard
					key={index}
					id={manager.interviewerId}
					image={manager.image}
					name={manager.userName}
					role={manager.role}
					selected={selected}
					setSelected={setSelected}
				/>
			))}
		</div>
	)
}

export default ManagersList