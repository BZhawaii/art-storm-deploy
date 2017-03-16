import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { footer } from '../styles/styles.scss';

const App = ({ children }) =>
    <div>
        { children }
        <footer className={footer}>
            <Link to="/">Filterable Table</Link>
            <Link to="/about">About</Link>
            <Link to="/formArtists">Artists Form</Link>
        </footer>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
