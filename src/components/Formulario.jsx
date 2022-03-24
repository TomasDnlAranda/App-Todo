import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Formulario = ({ dataTask }) => {
	const initialState = {
		text: '',
		description: '',
		state: 'Pendiente',
		check: false,
	};

	const [task, setTask] = useState(initialState);

	const { text, description, state, check } = task;

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		setTask((old) => ({
			...old,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!text.trim()) {
			alertFalse(e, 0, 'tarea', 'error');
			return;
		}

		if (!description.trim()) {
			alertFalse(e, 1, 'descripcion', 'error');
			return;
		}

		dataTask({
			text,
			description,
			state: state === 'Pendiente' ? false : true,
			check,
			id: Date.now(),
		});

		Swal.fire({
			title: 'Exito!',
			text: 'Los datos se enviaron con exito',
			icon: 'success',
			confirmButtonText: 'Ok',
		});

		// cuando se envien los datos, reiniciar los campos
		setTask(initialState);
	};

	const alertFalse = (e, n, type, icon) => {
		e.target[n].focus();
		Swal.fire({
			title: 'Error!',
			text: `No deje vacio el campo de la ${type}`,
			icon: `${icon}`,
			confirmButtonText: 'Ok',
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					name="text"
					className="form-control mb-2"
					placeholder="Agregar Tarea"
					onChange={handleChange}
					value={text}
				/>
				<textarea
					name="description"
					className="form-control mb-2"
					placeholder="Agregar Descripcion"
					onChange={handleChange}
					value={description}
				></textarea>
				<select className="form-control mb-2" onChange={handleChange} name="state" value={state}>
					<option className="text-dark">Pendiente</option>
					<option className="text-dark">Finalizado</option>
				</select>
				<div className="form-check mb-2">
					<input
						name="check"
						className="form-check-input"
						type="checkbox"
						id="flexCheckChecked"
						onChange={handleChange}
						value={check}
					/>
					<label className="form-check-label text-white" htmlFor="flexCheckChecked">
						Dar Prioridad
					</label>
				</div>
				<button className="btn btn-primary" type="submit">
					Agregar
				</button>
			</form>
		</>
	);
};

export default Formulario;
