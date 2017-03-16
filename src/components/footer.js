import React from 'react';

class Footer extends React.Component {
    render() {
        return (
          <footer id="contact" className="page-footer default_color scrollspy">
              <div className="container">
                  <div className="row">
                      <div className="col l12 s12">
                          <form className="col s12" action="contact.php" method="post">
                              <div className="row">
                                  <div className="input-field col s6">
                                      <i className="mdi-action-account-circle prefix white-text"></i>
                                      <input id="icon_prefix" name="name" type="text" className="validate white-text"/>
                                      <label htmlFor="icon_prefix" className="white-text">First Name</label>
                                  </div>
                                  <div className="input-field col s6">
                                      <i className="mdi-communication-email prefix white-text"></i>
                                      <input id="icon_email" name="email" type="email" className="validate white-text"/>
                                      <label htmlFor="icon_email" className="white-text">Email</label>
                                  </div>
                                  <div className="input-field col s12">
                                      <i className="mdi-editor-mode-edit prefix white-text"></i>
                                      <textarea id="icon_prefix2" name="message" className="materialize-textarea white-text"></textarea>
                                      <label htmlFor="icon_prefix2" className="white-text">Message</label>
                                  </div>
                                  <div className="col offset-s7 s5">
                                      <button className="btn waves-effect waves-light green darken-1" type="submit">Submit
                                          <i className="mdi-content-send right white-text"></i>
                                      </button>
                                  </div>
                              </div>
                          </form>
                        </div>
                      </div>
                  </div>
                  <div className="footer-copyright default_color">
                      <div className="container">
                        Beat Media Inc, 2017
                      </div>
                  </div>
              </footer>
        );
    }
}

export default Footer;
