import React from 'react';

const CardTask = () => {
	return (
		<div class="card w-75 mt-3 mx-auto">
			<div className="card-body">
				<h4 className="card-title d-flex justify-content-between">
					<span>La Tarea</span>
					<span class="badge rounded-pill bg-primary">Prioridad</span>
				</h4>
				<p className="card-text">La descripcion</p>
				<button className="btn btn-warning">Editar</button>
				<button className="btn btn-danger ms-2">Eliminar</button>
			</div>
		</div>
	);
};

export default CardTask;
