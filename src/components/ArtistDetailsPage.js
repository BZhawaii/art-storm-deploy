// ./src/components/book/ArtistDetailsPage.js
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ArtistDetailsShow from './ArtistDetailsShow';
import artistData from '../data/mockData';

class ArtistDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log("Props", props);
        console.log("Context", context);
    }

    render() {
      let data = artistData.filter((p) => {
        return p.id == 1;
      })

      let p = data[0]
      console.log('p************', p);

      return <div> <ArtistDetailsShow key={p.id} data={p} /> </div>;
    }


}

const mapStateToProps = (state, ownProps) => {
    return {
        // state mappings here
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // actions mappings here
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetailsPage);
