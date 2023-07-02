import Image from "next/image"
import { useState } from "react"
function login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleClick = async() => {
		const res = await fetch("/api/auth/login", {
			method: "post",
			mode:'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		})

		if(res.status==200){
			router.push('/profile')
		}
	}

	return (
		<div className="w-screen h-screen bg-main flex justify-center items-center">
			<div className="bg-secondary rounded-xl w-[30%] h-[60%] flex flex-col justify-evenly items-center p-10">
				<Image
					src={'/mathworks.png'}
					height={100}
					width={300}
				/>

				<h2 className="text-[#414141] text-[3rem]">Welcome!</h2>

				<div className="h-[50%] flex flex-col justify-center w-[90%] items-center">
					<input
						className="h-10 z-30 rounded-lg p-5 my-2 w-full text-[grey] glass bg-[#ffffffaf] "
						value={email}
						onChange={(e)=>setEmail(e.target.value)}
						placeholder="Email">
					</input>

					<input
						className="h-10 z-30 rounded-lg p-5 my-2 w-full text-[grey] glass bg-[#ffffffaf] "
						value={password}
						type="password"
						onChange={(e)=>setPassword(e.target.value)}
						placeholder="Password"
						>
					</input>	
				</div>
				<button 
					className="hover:shadow-md  active:opacity-80 flex flex-col text-secondary rounded-xl p-4 px-10 bg-main justify-center items-center w-[40%] h-[10%] mt-20"
					onClick={handleClick}>
					<p>Sign On</p>
				</button>
			</div>
		</div>
	)
}

export default login