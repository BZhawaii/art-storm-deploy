import React, { PropTypes } from 'react';
import { pictureBox, multipleRow } from '../styles/styles.scss';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import fetchArtist from '../actions/index';

const ArtShow = ({ data }) =>
    // <div className={multipleRow}>
    //     <p>{data.name}  {data.price} </p>
    //     <p>{data.artist}</p>
    //     <img className={pictureBox} src={data.img}/>
    // </div>;
    <div className={multipleRow}>
      <Row className={pictureBox}>
        <Col>
          <Card header={<CardTitle reveal image={data.img} waves="light"/>}
            title={data.name}
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a onClick={() => fetchArtist(data.id)} href="/artistDetailsShow">This is a link</a></p>
          </Card>
        </Col>
      </Row>
    </div>;

            //   {this.props.books.map((b, i) => <tr key={i}>
            //    <td>{b.title}</td>
            //    <td><Link to={`/books/${b.id}`}>View</Link></td>
            //  </tr> )}   or this

ArtShow.propTypes = {
    data: PropTypes.object
};

export default ArtShow;
