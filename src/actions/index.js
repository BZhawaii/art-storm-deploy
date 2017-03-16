import * as types from './types';
// import Axios from 'axios';
import ArtistData from '../data/mockData.js';
// const apiUrl = 'artStormAPI';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}


export const fetchArtSuccess = (art) => {
    return {
        type: types.FETCH_ART_SUCCESS,
        art
    };
};

// Async Action
export const fetchArt = () => {
  // Returns a dispatcher function that dispatches an action at a later time
    return () => {
    // Returns a promise
        return ArtistData;

        // Axios.get(apiUrl)
        // .then(response => {
        // // Dispatch another action to consume data
        //     dispatch(fetchArtSuccess(response.data));
        // })
        // .catch(error => {
        //     throw(error);
        // });
    };
};

export const fetchArtistSuccess = (id) => {
    return {
      type: types.FETCH_ARTIST_SUCCESS,
      text: 'Fetched Artist Sucessfully'
    };
};

export const fetchArtist = () => {
    return () => {
      return ArtistData;
    };
};
