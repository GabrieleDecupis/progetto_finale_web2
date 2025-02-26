import React from 'react';
import { Container } from 'react-bootstrap';
import backgroundImage from '../assets/terra.png'; 

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
  };

  return (
    <Container fluid style={{ padding: 0 }}>
      <div style={backgroundStyle}>
        <h1>Benvenuto!</h1>
      </div>
    </Container>
  );
};

export default Home;

