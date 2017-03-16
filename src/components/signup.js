import React from 'react';

class SignUp extends React.Component {
  render() {
    return (

      <div className="row">
        <div className="col s2"></div>

        <form className="col s8">

          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
              <label for="firstName">First Name</label>
            </div>

            <div className="input-field col s12">
              <input id="last_name" type="text" className="validate"/>
              <label for="lastName">Last Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="text" className="validate"/>
              <label for="username">Username</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate"/>
              <label for="password">Password</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="phoneNumber" type="number" className=""/>
              <label for="phoneNumber">Phone Number</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"/>
              <label for="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="websiteURL" type="url" className=""/>
              <label for="websiteURL">Website URL</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="bio" type="text" className=""/>
              <label for="bio">Bio (optional)</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="quickIntro" type="text" className="validate"/>
              <label for="quickIntro">Quick Intro</label>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              This is an inline input field:
              <div className="input-field inline">
                <input id="email" type="email" className="validate"/>
                <label for="email" data-error="wrong" data-success="right">Email</label>
              </div>
            </div>
          </div>

        </form>
        <div className="col s2"></div>
      </div>

    );
  }
}

export default SignUp;
