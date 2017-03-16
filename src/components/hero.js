import React from 'react';

class Hero extends React.Component {
    render() {
        return (
          <div className="section no-pad-bot" id="index-banner">
              <div className="container">
                  <h1 className="text_h center header cd-headline letters type">
                      <span>Where artists and art lovers </span>
                      <span className="cd-words-wrapper waiting">
                          <b className="is-visible">gather.</b>
                          <b>collaborate.</b>
                          <b>meet.</b>
                      </span>
                  </h1>
              </div>
          </div>
        );
    }
}

export default Hero;
