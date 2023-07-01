import React from 'react'
import Link from 'next/link'

function Timings({id, name, college, role, timings}) {
  return (
    <Link className="flex flex-col justify-center items-left text-left relative bg-[white] rounded-xl w-full p-5 shadow-sm mb-5 text-[#898989] hover:shadow-md"
            href={`/interview/${id}`}>
        <h2 className="text-main">
            {timings[0]+'-'+timings[1]}
        </h2>
        <p className="text-[#4D4D4D]">
            {name+', '+college}
        </p>
        <span className="mt-10">
            {role}
        </span>
    </Link>
  )
}

export default Timings