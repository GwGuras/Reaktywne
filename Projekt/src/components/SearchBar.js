import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.input = React.createRef();
	}
	
	searchMovies() {
		
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.input.current.value.trim()) {
			return;
		}
		this.input.current.value = '';
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Tytuł filmu" ref={this.input} />
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Szukaj</button>
				</form>
			</div>
		);
	}
}

export default SearchBar;
