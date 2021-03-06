import React from 'react';
import './App.css';
import Header from './Components/Header';
import ArtistSignUp from './Components/ArtistSignUp';
import UserLogIn from './Components/UserLogIn';
import LiveArt from './Components/LiveArt';

function App() {
  return (
    <div className="App">
      <Header />
      <LiveArt path="/" />
      <ArtistSignUp path="/sign-up" />
      <UserLogIn path="/coil-log-in" />
    </div>
  );
}

export default App;
