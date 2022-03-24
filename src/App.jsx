import { useState } from 'react';
import CardTask from './components/CardTask';
import Formulario from './components/Formulario';

function App() {
	const [tasks, setTasks] = useState([]);

	const dataTask = (task) => {
		// pushea la task dentro del arr vacio tasks
		setTasks((old) => [...old, task]);
	};

	return (
		<>
			<div className="container">
				<h1 className="text-light text-center mb-3">App Todo</h1>
				<Formulario dataTask={dataTask} />
				{tasks.map((item) => (
					<CardTask key={item.id} item={item} />
				))}
			</div>
		</>
	);
}

export default App;
