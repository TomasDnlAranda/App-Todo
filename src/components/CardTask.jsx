import React from 'react';

const CardTask = ({ item, handleEdit, handleDelete }) => {
	const { text, description, state, check, id } = item;

	return (
		<div className="card w-75 mt-3 mx-auto">
			<div className="card-body">
				<h4 className="card-title d-flex justify-content-between fs-4">
					<span>{text}</span>
					{check ? <span className="badge rounded-pill bg-primary fs-6">Prioridad</span> : null}
				</h4>
				{state ? (
					<p className="bg-success badge">Finalizado</p>
				) : (
					<p className="bg-success badge">Pendiente</p>
				)}
				<p className="card-text">{description}</p>
				<button className="btn btn-warning" onClick={() => handleEdit(id)}>
					Editar
				</button>
				<button className="btn btn-danger ms-2" onClick={() => handleDelete(id)}>
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default CardTask;
