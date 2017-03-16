import React from 'react';

class Artists extends React.Component {
    render() {
        return (
          <div className="section scrollspy" id="work">
              <div className="container">
                  <h2 className="header text_b"></h2>
                  <div className="row">
                      <div className="col s12 m4 l4">
                          <div className="card">
                              <div className="card-image waves-effect waves-block waves-light">
                                  <img className="activator" src="img/project1.jpg"></img>
                              </div>
                              <div className="card-content">
                                  <span className="card-title activator grey-text text-darken-4">Project 1 <i className="mdi-navigation-more-vert right"></i></span>
                                  <p><a href="#">Project link</a></p>
                              </div>
                              <div className="card-reveal">
                                  <span className="card-title grey-text text-darken-4">Project 1 <i className="mdi-navigation-close right"></i></span>
                                  <p>Here is some more information about this project that is only revealed once clicked on.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col s12 m4 l4">
                          <div className="card">
                              <div className="card-image waves-effect waves-block waves-light">
                                  <img className="activator" src="img/project2.jpeg"></img>
                              </div>
                              <div className="card-content">
                                  <span className="card-title activator grey-text text-darken-4">Project 2 <i className="mdi-navigation-more-vert right"></i></span>
                                  <p><a href="#">Project link</a></p>
                              </div>
                              <div className="card-reveal">
                                  <span className="card-title grey-text text-darken-4">Project 2 <i className="mdi-navigation-close right"></i></span>
                                  <p>Here is some more information about this project that is only revealed once clicked on.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col s12 m4 l4">
                          <div className="card">
                              <div className="card-image waves-effect waves-block waves-light">
                                  <img className="activator" src="img/project3.png"></img>
                              </div>
                              <div className="card-content">
                                  <span className="card-title activator grey-text text-darken-4">Project 3<i className="mdi-navigation-more-vert right"></i></span>
                                  <p><a href="#">Project link</a></p>
                              </div>
                              <div className="card-reveal">
                                  <span className="card-title grey-text text-darken-4">Project 3 <i className="mdi-navigation-close right"></i></span>
                                  <p>Here is some more information about this project that is only revealed once clicked on.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col s12 m4 l4">
                          <div className="card">
                              <div className="card-image waves-effect waves-block waves-light">
                                  <img className="activator" src="img/project4.jpg"></img>
                              </div>
                              <div className="card-content">
                                  <span className="card-title activator grey-text text-darken-4">Project 4<i className="mdi-navigation-more-vert right"></i></span>
                                  <p><a href="#">Project link</a></p>
                              </div>
                              <div className="card-reveal">
                                  <span className="card-title grey-text text-darken-4">Project 4<i className="mdi-navigation-close right"></i></span>
                                  <p>Here is some more information about this project that is only revealed once clicked on.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col s12 m4 l4">
                          <div className="card">
                              <div className="card-image waves-effect waves-block waves-light">
                                  <img className="activator" src="img/project5.png"></img>
                              </div>
                              <div className="card-content">
                                  <span className="card-title activator grey-text text-darken-4">Project 5<i className="mdi-navigation-more-vert right"></i></span>
                                  <p><a href="#">Project link</a></p>
                              </div>
                              <div className="card-reveal">
                                  <span className="card-title grey-text text-darken-4">Project 5<i className="mdi-navigation-close right"></i></span>
                                  <p>Here is some more information about this project that is only revealed once clicked on.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col s12 m4 l4">
                          <div className="card">
                              <div className="card-image waves-effect waves-block waves-light">
                                  <img className="activator" src="img/project6.jpeg"></img>
                              </div>
                              <div className="card-content">
                                  <span className="card-title activator grey-text text-darken-4">Project 5<i className="mdi-navigation-more-vert right"></i></span>
                                  <p><a href="#">Project link</a></p>
                              </div>
                              <div className="card-reveal">
                                  <span className="card-title grey-text text-darken-4">Project 6 <i className="mdi-navigation-close right"></i></span>
                                  <p>Here is some more information about this project that is only revealed once clicked on.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

        );
    }
}

export default Artists;
