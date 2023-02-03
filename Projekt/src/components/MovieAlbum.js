import { Component } from 'react';
import MovieCard from './MovieCard';
class MovieAlbum extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			movies: []
		};
	}

	componentDidMount() {
		fetch("https://at.usermd.net/api/movies")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						movies: result
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	render() {
		const { movies } = this.state;
		if (!movies.length) {
			<p>Baza wpisów jest pusta</p>
		}

		return (
			<div class="album py-5">
				<div class="container">
					<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
						{movies.map(movie => (
							<MovieCard movie={movie} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

/*<div class="btn-group">
		<button type="button" class="btn btn-sm btn-outline-secondary">
		View
		</button>
		<button type="button" class="btn btn-sm btn-outline-secondary">
		Edit
		</button>
	</div>
	<small class="text-muted">9 mins</small>*/

export default MovieAlbum;