import { useEffect, useState } from 'react';
import CardTask from './components/CardTask';
import Formulario from './components/Formulario';

function App() {
	const [tasks, setTasks] = useState([]);

	const dataTask = (task) => {
		// pushea la task dentro del arr vacio tasks y cambio el orden de los valores
		setTasks((old) => (task.check === true ? [task, ...old] : [...old, task]));
	};

	const handleDelete = (id) => {
		const deleteTask = tasks.filter((item) => item.id !== id);
		setTasks(deleteTask);
	};

	const handleEdit = (id) => {
		const editTask = tasks.map((item) => (item.id === id ? { ...item, state: !item.state } : item));
		setTasks(editTask);
	};

	useEffect(() => {
		if (localStorage.getItem('key')) {
			setTasks(JSON.parse(localStorage.getItem('key')));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('key', JSON.stringify(tasks));
	}, [tasks]);

	return (
		<>
			<div className="container">
				<h1 className="text-light text-center mb-3">App Todo</h1>
				<Formulario dataTask={dataTask} />
				{tasks.map((item) => (
					<CardTask key={item.id} item={item} handleDelete={handleDelete} handleEdit={handleEdit} />
				))}
			</div>
		</>
	);
}

export default App;
