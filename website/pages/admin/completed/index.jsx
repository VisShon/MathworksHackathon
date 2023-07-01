import Search from "@/components/Search"
import CandidateCard from "@/components/CandidateCard"

import { useState,useEffect } from "react"
import { useQuery } from "@apollo/client"
import nProgress from "nprogress"

function Candidates() {

	const [sort,setSort] = useState(false)
	const [searchParam,setSearchParam] = useState([])
	const [candidates, setCandidates] = useState(
		[
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Developer',
				college:'IIITD',
				description:'Lorem ipsum dolor sit amet consectetur. Elit arcu odio odio lorem. Interdum quam nec hac tristique ultrices morbi ut viverra. Proin etiam arcu varius facilisi.'
			},
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				description:'Lorem ipsum dolor sit amet consectetur. Elit arcu odio odio lorem. Interdum quam nec hac tristique ultrices morbi ut viverra. Proin etiam arcu varius facilisi.'
			},
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				description:'Lorem ipsum dolor sit amet consectetur. Elit arcu odio odio lorem. Interdum quam nec hac tristique ultrices morbi ut viverra. Proin etiam arcu varius facilisi.'
			},
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				description:'Lorem ipsum dolor sit amet consectetur. Elit arcu odio odio lorem. Interdum quam nec hac tristique ultrices morbi ut viverra. Proin etiam arcu varius facilisi.'
			},
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				description:'Lorem ipsum dolor sit amet consectetur. Elit arcu odio odio lorem. Interdum quam nec hac tristique ultrices morbi ut viverra. Proin etiam arcu varius facilisi.'
			},
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				description:'Lorem ipsum dolor sit amet consectetur. Elit arcu odio odio lorem. Interdum quam nec hac tristique ultrices morbi ut viverra. Proin etiam arcu varius facilisi.'
			},

			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				description:'Lorem ipsum dolor sit amet consectetur. Elit arcu odio odio lorem. Interdum quam nec hac tristique ultrices morbi ut viverra. Proin etiam arcu varius facilisi.'
			},
			{
				id:'vishnu',
				name:'Vishnu Shon',
				branch:'Computer Science and Design',
				role:'Manager',
				college:'IIITD',
				description:'Lorem ipsum dolor sit amet consectetur. Elit arcu odio odio lorem. Interdum quam nec hac tristique ultrices morbi ut viverra. Proin etiam arcu varius facilisi.'
			},
		]
	)

	// const { loading, error, data } = useQuery(GetEventAttend,{
	// 	variables:{
	// 		where:{
	// 		}
	// 	}
	// })
	
	// useEffect(() => {
	// 	if(loading){
	// 		nProgress.start()
	// 	}
	// 	if(!loading){
	// 		nProgress.done(false)
	// 		setEventData(data?.events[0])
	// 	}
	// 	if(error){
	// 		nProgress.done(false)
	// 	}
	// },[loading])

	return (
		<main className="w-screen h-auto relative justify-center items-center flex flex-col p-10">
			<div className="flex w-full justify-between h-[5%] mb-10 z-20 ">
				<button
					className="bg-main rounded-xl p-2 text-secondary hover:shadow-md active:opacity-95 w-[10%]"
					onClick={()=>setSort(prev=>!prev)}>
					Sort
				</button>
				<Search
					searchParam={searchParam}
					setSearchParam={setSearchParam}
				/>
			</div>

			{candidates.filter(item=>
			(searchParam==''?true:
			item?.name?.toLowerCase().includes(searchParam)||
			item?.role?.toLowerCase().includes(searchParam)||
			item?.college?.toLowerCase().includes(searchParam)||
			item?.branch?.toLowerCase().includes(searchParam)))
			.map(({name,college,role,description,id},index)=>(
				<CandidateCard
					key={index}
					id={id}
					name={name}
					college={college}
					role={role}
					description={description}
				/>
			))}
		</main>
	)
}

export default Candidates