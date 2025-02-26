import React from 'react';
import { Container, Card } from 'react-bootstrap';
import backgroundImage from '../assets/about.jpg';

const About = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    paddingTop: '20px',
    paddingBottom: '20px',
  };

  const contentStyle = {
    background: 'rgba(255, 255, 255, 0.75)',
    borderRadius: '8px',
    padding: '20px',
    color: '#fff',
    textShadow: '0px 0px 0px rgba(0, 0, 0, 0.9)',
  };

  const titleStyle = {
    color: 'rgba(253, 2, 2, 0.9)',
    textAlign: 'center',
    fontSize: '4rem',
    margin: '20px auto',
    width: '80%',
  };

  return (
    <div style={backgroundStyle}>
      <Container className="mt-4">
        <div style={contentStyle}>
          <h1 style={titleStyle}>About</h1>
          <Card>
            <Card.Body>
              <Card.Text>
                Questo è il primo progetto con React e Bootstrap. Ogni riferimento a persone o cose è puramente casuale. <br />
                Il progetto gestisce delle chiamate rest di tipo GET verso uno script in python, il quale prende i dati da due file diversi, 
                clienti.txt e prodotti.txt, come se stesse lavorando con un database.<br />
                Per avviarlo bisogna runnare sia react che il programma python.

              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default About;
