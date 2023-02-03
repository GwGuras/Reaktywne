import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class Signup extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		passwordRepeat: '',
		error: ''
	};

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.password !== this.passwordRepeat) {
			this.error.setState("Passwords don't match");
			return;
		}
		console.log('Signing up...');
		console.log(this.state.username);
		console.log(this.state.email);
		console.log(this.state.password);
		//TODO Send request to the server
	};

	render() {
		return (
			<div className="d-flex align-items-center justify-content-center bg-dark vh-100">
				<Form className="bg-light p-5" onSubmit={this.handleSubmit}>
					<h2 className="text-center text-dark mb-4">Rejestracja</h2>
					<Form.Group controlId="username">
						<Form.Label className="text-dark">Nazwa użytkownika</Form.Label>
						<Form.Control
							type="username"
							value={this.state.username}
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<Form.Group controlId="email">
						<Form.Label className="text-dark">Email</Form.Label>
						<Form.Control
							type="email"
							value={this.state.email}
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label className="text-dark">Hasło</Form.Label>
						<Form.Control
							type="password"
							value={this.state.password}
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label className="text-dark">Powtórz hasło</Form.Label>
						<Form.Control
							type="password"
							value={this.state.passwordRepeat}
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<Button className="m-3 " variant="outline-dark" href='/'>
						Powrót
					</Button>
					<Button className="m-3" variant="dark" type="submit">
						Zarejestruj
					</Button>
				</Form>
			</div>
		);
	}
}

export default Signup;
