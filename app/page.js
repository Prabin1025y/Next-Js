"use client";
import { handleForm } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
	// const handleSubmit = async () => {
	// 	let data = {
	// 		name: "Prabin Acharya",
	// 		role: "CEO",
	// 	};
	// 	let a = await fetch("/api/add", { method: "POST", headers: { "Content-Type": "applocatin/json" }, body: JSON.stringify(data) });
	// 	let res = await a.json();
	// 	console.log(res);
	// };
	const formRef = useRef();

	return (
		<>
			<div className="container w-full flex justify-center my-32">
				<form
					ref={formRef}
					className="flex flex-col mx-auto"
					action={(e) => {
						handleForm(e);
            formRef.current.reset();
					}}
				>
					<label htmlFor="username">UserName:</label>
					<input className="text-black" type="text" name="username" id="username" />
					<label htmlFor="password">Password:</label>
					<input className="text-black" type="password" name="password" id="password" />
					<button type="submit">Submit</button>
				</form>
			</div>
		</>
	);
}
