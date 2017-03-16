import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import FormArtists from './components/FormArtists';
import ArtistDetailsPage from './components/ArtistDetailsPage';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={FilterableTable} />
		<Route path="/about" component={About} />
		<Route path="/artistDetailsShow" component={ArtistDetailsPage} />
		<Route path="/formArtists" component={FormArtists} />
	</Route>
);
