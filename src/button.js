import React, { useState } from "react";

export default function Button() {
	const [buttonText, setButtonText] = useState("Click me, please");

	const handleClick = ()=> {
		return setButtonText("Thanks for clicking!")
	}


	return <button onClick={handleClick}>{buttonText}</button>
	
}