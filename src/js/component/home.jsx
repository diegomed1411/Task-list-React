import React, { useState } from "react";

const Home = () => {
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState([]);
	const agregarTarea = evento => {
		if (evento.key == "Enter") {
			setTaskList([...taskList, task]);
			setTask("");
		}
	};
	const borrarTarea = indice => {
		let result = taskList.filter((task, index) => index !== indice);
		setTaskList(result);
	};

	return (
		<div className="superContenedor container d-flex justify-content-start flex-column align-items-center">
			<h1>TODOS</h1>
			<div className="contenedorTareas">
				<input
					type="text"
					className="form-control"
					placeholder="Agregar tarea"
					onChange={e => setTask(e.target.value)}
					onKeyPress={f => agregarTarea(f)}
					value={task}
				/>

				<ul>
					{taskList.map((item, index) => {
						return (
							<li key={index}>
								{item}{" "}
								<span onClick={() => borrarTarea(index)}>
									&#10006;
								</span>{" "}
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<p>Task Counter {taskList.length}</p>
			</div>
		</div>
	);
};

export default Home;
