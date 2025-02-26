import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { fetchUsers } from '../api';
import backgroundImage from '../assets/sfondo_clienti_2.jpg'; 

const Clienti = () => {
  const [Clienti, setUsers] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [letterFilterField, setLetterFilterField] = useState('nome'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', 
    minHeight: '100vh',
    paddingTop: '20px',
    paddingBottom: '20px',
  };

  const titleStyle = {
    color: 'rgba(253, 2, 2, 0.9)',
    textAlign: 'center', 
    fontSize: 'calc(2rem + 2vw)', 
    margin: '20px auto',
    width: '90%',
  };

  const contentStyle = {
    background: 'rgba(255, 255, 255, 0.75)', 
    borderRadius: '8px',
    padding: '20px',
    color: '#fff',
    textShadow: '0px 0px 0px rgba(0, 0, 0, 0.9)',
  };

  const headerCellStyle = { cursor: 'pointer' };

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  let filteredClienti = Clienti;

  if (selectedLetter) {
    filteredClienti = filteredClienti.filter(user => {
      const fieldValue = user[letterFilterField] || '';
      return fieldValue.toLowerCase().startsWith(selectedLetter.toLowerCase());
    });
  }

  if (searchQuery) {
    filteredClienti = filteredClienti.filter(user => {
      return (
        user.nome.toLowerCase() === searchQuery.toLowerCase() ||
        user.cognome.toLowerCase() === searchQuery.toLowerCase() ||
        user.email.toLowerCase() === searchQuery.toLowerCase()
      );
    });
  }

  if (sortField) {
    filteredClienti = [...filteredClienti].sort((a, b) => {
      if (sortField === 'id') {
        return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
      }
      let aField = a[sortField].toLowerCase();
      let bField = b[sortField].toLowerCase();
      if (aField < bField) return sortOrder === 'asc' ? -1 : 1;
      if (aField > bField) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const letterButtonStyle = (letter) => ({
    cursor: 'pointer',
    margin: '5px',
    padding: '5px 10px',
    border: letter === selectedLetter ? '2px solid red' : '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: letter === selectedLetter ? '#fdd' : '#fff'
  });

  const filterBoxStyle = (field) => ({
    cursor: 'pointer',
    marginRight: '10px',
    padding: '10px 20px',
    border: field === letterFilterField ? '2px solid red' : '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: field === letterFilterField ? '#fdd' : '#fff',
    display: 'inline-block'
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <div style={backgroundStyle}>
      <Container className="mt-4">
        <div style={contentStyle}>
          <h1 style={titleStyle}>Clienti</h1>

          <div 
            style={{
              marginBottom: '20px',
              textAlign: 'center',
              color: 'black',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {letters.map(letter => (
              <span
                key={letter}
                style={letterButtonStyle(letter)}
                onClick={() => setSelectedLetter(letter)}
              >
                {letter}
              </span>
            ))}
            
            <span
              style={letterButtonStyle('')}
              onClick={() => setSelectedLetter('')}
            >
              Tutte
            </span>
          </div>

          <div style={{ marginBottom: '20px', textAlign: 'center', color:'black' }}>
            <div 
              style={filterBoxStyle('nome')}
              onClick={() => setLetterFilterField('nome')}
            >
              Nome
            </div>
            <div 
              style={filterBoxStyle('cognome')}
              onClick={() => setLetterFilterField('cognome')}
            >
              Cognome
            </div>
          </div>

          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <input 
              type="text"
              placeholder="Inserisci nome, cognome o email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ padding: '10px', width: '80%', maxWidth: '400px' }}
            />
          </div>

          {filteredClienti.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th 
                    style={headerCellStyle} 
                    onClick={() => handleSort('id')}
                  >
                    ID {sortField === 'id' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th 
                    style={headerCellStyle} 
                    onClick={() => handleSort('nome')}
                  >
                    Nome {sortField === 'nome' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th 
                    style={headerCellStyle} 
                    onClick={() => handleSort('cognome')}
                  >
                    Cognome {sortField === 'cognome' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {filteredClienti.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nome}</td>
                    <td>{user.cognome}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}>
              Nessun cliente trovato con questi parametri. Aggiornare filtri di ricerca.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Clienti;
