import React, { useState } from 'react';
import { Link } from '@reach/router';

const ArtistSignUp = ({ setHasAccount }) => {
  const [artistInfo, setArtistInfo] = useState({
    username: '',
    password: '',
    bio: '',
    paymentPointer: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(artistInfo);
    //api post request
    setArtistInfo({ username: '', password: '', bio: '', paymentPointer: '' });
    setHasAccount(true);
  };

  return (
    <div>
      <form className="artistSignUpForm" onSubmit={handleSubmit}>
        <label className="artistSignUpLabel">Artist Sign Up</label>
        <input
          className="artistSignUpUsername"
          placeholder="username"
          type="text"
          value={artistInfo.username}
          required
          onChange={(e) =>
            setArtistInfo({ ...artistInfo, username: e.target.value })
          }
        />
        <input
          className="artistLogInPassword"
          placeholder="password"
          type="password"
          value={artistInfo.password}
          required
          onChange={(e) =>
            setArtistInfo({ ...artistInfo, password: e.target.value })
          }
        />
        <textarea
          className="artistSignUpBio"
          placeholder="bio"
          value={artistInfo.bio}
          required
          onChange={(e) =>
            setArtistInfo({ ...artistInfo, bio: e.target.value })
          }
        />
        <input
          className="artistLogInPaymentPointer"
          placeholder="payment pointer"
          value={artistInfo.paymentPointer}
          required
          onChange={(e) =>
            setArtistInfo({ ...artistInfo, paymentPointer: e.target.value })
          }
        />
        <button>Sign Up</button>
      </form>
      <button
        onClick={() => {
          setHasAccount(true);
        }}
      >
        Already have an account? Log in here
      </button>
      <Link to="https://coil.com/about">
        Don't have a payment pointer? Read about web monetization and setting
        one up here
      </Link>
    </div>
  );
};

export default ArtistSignUp;
