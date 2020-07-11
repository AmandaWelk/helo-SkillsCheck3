import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Nav from './Components/Nav/Nav';
import Auth from './Components/Auth/Auth';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';

function App() {
  return (
    <div>
      <Nav />
      <Auth />
      <Dashboard />
      <Form />
      <Post />
    </div>
  );
}

export default App;
