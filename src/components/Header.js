import React from 'react';
//const Header=() => {
function Header(){
	const headerStyle = {
	padding: "20px 0",
	lineHeight: "2em",
	}
	return (
	<header style={headerStyle}>
	<h3 style={{ fontSize: "25px", marginBottom: "15px" }}>Todo App</h3>
	<p style={{ fontSize: "19px" }}>Please add to-dos item(s) through the input field</p>
	</header>)
}
export default Header