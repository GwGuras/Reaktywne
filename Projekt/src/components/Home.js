import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieAlbum from './MovieAlbum';

function Home() {
	return (
		<>
			<Header />
			<main className="d-flex flex-column h-100 m-5">
				<div className="flex-grow-1">
				<MovieAlbum/>
				{/*<MoviePanel/>*/}
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Home;
