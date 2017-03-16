// ./sec/components/book/ArtistDetails.js
import React, { PropTypes } from 'react';
// import artistData from '../data/mockData';

// console.log('DATA', PropTypes.object);

// var bucket = {};
// artistData.forEach((p) => {
//   console.log(p);
//     // p.id == 1;
//     // bucket = p;
//     // <ArtistDetails key={p.id} data={p} />
//     console.log('p************', {p});
//     // return <div> Hello </div>;
// },


const ArtistDetailsShow = ({ data }) =>
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={data.img} alt="Placehold" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{data.name}</h4>
          <ul>
            <li><strong>Author: </strong>{data.artist}</li>
            <li><strong>Category: </strong>{data.category}</li>
            <li><strong>Info: </strong>{data.info}</li>
            <br/>
            <button className="btn btn-primary">Buy</button>
          </ul>
        </div>
      </div>;

ArtistDetailsShow.PropTypes = {
    data: PropTypes.object
};

export default ArtistDetailsShow;
