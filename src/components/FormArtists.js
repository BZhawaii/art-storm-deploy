// ./src/components/book/BookForm.js
import React, {PropTypes} from 'react';


const ArtistForm = (props) => {
    // Collector variables
    let firstName;
    let lastName;
    let username;
    let password;
    let email;
    let phoneNumber;
    let websiteURL;
    let portraitURL;
    let bio;
    let quickIntro;
    return (
      <form onSubmit={e => {
          e.preventDefault();
  // Assemble data into object
          const input = {
              firstName: firstName.value,
              lastName: lastName.value,
              username: username.value,
              password: password.value,
              email: email.value,
              phoneNumber: phoneNumber.value,
              websiteURL: websiteURL.value,
              portraitURL: portraitURL.value,
              bio: bio.value,
              quickIntro: quickIntro.value
          };
            // Call method from parent component
            // to handle submission
          props.submitArtistProfile(input);
            // Reset form
          e.target.reset();
      }}
      >
        <div className="">
          <label className="" htmlFor="firstName" >First Name: </label>
          <div className="">
            <input type="text" id="firstName" name="firstName" ref={node => {firstName = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="lastName" >Last Name: </label>
          <div className="">
            <input type="text" id="lastName" name="lastName" ref={node => {lastName = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="username" >First Name: </label>
          <div className="">
            <input type="text" id="username" name="username" ref={node => {username = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="password" >First Name: </label>
          <div className="">
            <input type="text" id="password" name="password" ref={node => {password = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="email" >First Name: </label>
          <div className="">
            <input type="email" id="email" name="email" ref={node => {email = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="phoneNumber" >First Name: </label>
          <div className="">
            <input type="text" id="phoneNumber" name="phoneNumber" ref={node => {phoneNumber = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="websiteURL" >First Name: </label>
          <div className="">
            <input type="URL" id="websiteURL" name="websiteURL" ref={node => {websiteURL = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="portraitURL" >First Name: </label>
          <div className="">
            <input type="URL" id="portraitURL" name="portraitURL" ref={node => {portraitURL = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="bio" >First Name: </label>
          <div className="">
            <input type="text" id="bio" name="bio" ref={node => {bio = node;}} className="" />
          </div>
        </div>
        <br/>

        <div className="">
          <label className="" htmlFor="quickIntro" >First Name: </label>
          <div className="">
            <input type="text" id="quickIntro" name="quickIntro" ref={node => {quickIntro = node;}} className="" />
          </div>
        </div>
        <br/>

      </form>
    );
};

ArtistForm.propTypes = {
    submitArtistProfile: PropTypes.function
};

export default ArtistForm;
