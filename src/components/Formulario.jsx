import React from 'react';
import Swal from 'sweetalert2';
import { useFormulario } from '../hooks/useFormulario';

const Formulario = ({ dataTask }) => {
	const initialState = {
		text: '',
		description: '',
		state: 'Pendiente',
		check: false,
	};

	const [inputs, handleChange, reset] = useFormulario(initialState);

	const { text, description, state, check } = inputs;

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
		reset();
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
			<form onSubmit={handleSubmit} className="mb-5">
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
						checked={check}
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
