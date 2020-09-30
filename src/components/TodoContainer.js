import React from 'react';
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component{
	state = {
		todos: [
		{
			id: uuidv4(),
			title: "Setup development environment",
			completed: true
		},
		{
			id: uuidv4(),
			title: "Develop website and add content",
			completed: false
		},
		{
			id: uuidv4(),
			title: "Deploy to live server",
			completed: false
		}
		]
	};
	// handleChange=(id)=>{
	// 	console.log("clicked",id);
	// }
	handleChange=(id)=>{
		this.setState({
			todos:this.state.todos.map(todo=>{
				if(todo.id===id){
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
		//console.log("clicked",id);
	};
	delTodo=id=>{
		//console.log("deleted",id);
		this.setState({
			todos:[
				...this.state.todos.filter(todo=>{
					return todo.id !==id;
				})
			]
		});

	};
	addTodoItem= title =>{
		const newTodo={
			id:uuidv4(),
			title:title,
			completed:false
		};
		this.setState({
			todos:[...this.state.todos,newTodo]
		});
	};
	render()
	{
		return (
			<div className="container">
			<Header/>
			<InputTodo addTodoProps={this.addTodoItem}/>
				{/*this.state.todos.map(todo => (<li>{todo.title}</li>
					))*/}
				<TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo}/>	
			</div>
			);
	}
}
export default TodoContainer