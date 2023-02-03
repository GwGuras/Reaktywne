
const MovieCard = (props) => {
	const { movie } = props;
	return (
		<div class="col">
		<div class="card shadow-sm">
		<img src={movie.image} alt="Movie poster"
			class="card-img-top" width="100%" height="500" />
		<div class="card-body">
			<p class="card-title">{movie.title}</p>
			<p class="card-text">{movie.content}</p>
			<div className="d-flex justify-content-between align-items-center">
				<div class="btn-group">
				<button type="button" class="btn btn-sm btn-outline-secondary">
					Edytuj
				</button>
				<button type="button" class="btn btn-sm btn-outline-secondary">
					Usuń
				</button>
				</div>
			</div>
		</div>
		</div>
		</div>
	);
};

export default MovieCard;