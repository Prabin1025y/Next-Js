"use server";
export const handleForm = async e => {
	console.log(e.get("username"), e.get("password"));
};
