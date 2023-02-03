import React from 'react';
import SearchBar from './SearchBar';

const Header = () => (
		<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">Baza Filmów</a>
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link" href="/login">Login</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/signup">Sign up</a>
					</li>
				</ul>
			</div>
			<SearchBar />
		</nav>
);

export default Header;