import React, { PropTypes } from 'react';
import ArtShow from './ArtShow';
import ArtistData from '../data/mockData.js';


const ArtTable = ({ filter }) => {
    let rows = [];

    ArtistData.forEach((p) => {
        const nameLC = p.name.toLowerCase();
        const filterLC = filter.toLowerCase();

        if (nameLC.indexOf(filterLC) !== -1) {
            rows.push(
                <ArtShow key={p.name} data={p} />
            );
        }
    });

    return <div> {rows} </div>;
};

ArtTable.propTypes = {
    filter: PropTypes.string
};

export default ArtTable;
