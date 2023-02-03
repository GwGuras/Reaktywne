import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class Login extends Component {
	state = {
		username: '',
		password: '',
	};

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log('Logging in...');
		console.log(this.state.username);
		console.log(this.state.password);
		//TODO Send request to the server
	};

	render() {
		return (
			<div className="d-flex align-items-center justify-content-center bg-dark vh-100">
				<Form className="bg-light p-5" onSubmit={this.handleSubmit}>
					<h2 className="text-center text-dark mb-4">Login</h2>
					<Form.Group controlId="email">
						<Form.Label className="text-dark">Nazwa użytkownika</Form.Label>
						<Form.Control
							type="login"
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
					<Button className="m-3 " variant="outline-dark" href='/'>
						Powrót
					</Button>
					<Button className="m-3" variant="dark" type="submit">
						Zaloguj się
					</Button>
				</Form>
			</div>
		);
	}
}

export default Login;
