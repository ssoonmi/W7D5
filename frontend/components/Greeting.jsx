import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = (props) => {
  const {currentUser: name, currentUserId} = props;
  if (currentUserId) {
    return (
      <React.Fragment>
        <h2>Hello {name}!</h2>
        <button onClick={props.logout}>Log Out</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </React.Fragment>
    );
  }
};

export default Greeting;
