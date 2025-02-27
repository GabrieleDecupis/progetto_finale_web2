import React, { useEffect, useState } from 'react';
import { Container, Table, Form } from 'react-bootstrap';
import { fetchProducts } from '../api';
import backgroundImage from '../assets/sfondo_prodotti.webp'; 

const Prodotti = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState('');

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
    fontSize: 'calc(2rem + 2vw)',
    margin: '20px auto',
    width: '80%',
  };

  const headerCellStyle = { cursor: 'pointer' };

  const inputStyle = {
    padding: '10px',
    width: '80%',
    maxWidth: '400px',
    color: 'rgb(0, 0, 0)',
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const categories = [...new Set(products.map(product => product.categoria))].sort();

  let filteredProducts = products;

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(product => product.categoria === selectedCategory);
  }

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product => 
      product.nome.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (sortField) {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      if (sortField === 'id' || sortField === 'costo' || sortField === 'pezziVenduti') {
        return sortOrder === 'asc' ? a[sortField] - b[sortField] : b[sortField] - a[sortField];
      }
      let aField = a[sortField].toLowerCase();
      let bField = b[sortField].toLowerCase();
      if (aField < bField) return sortOrder === 'asc' ? -1 : 1;
      if (aField > bField) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

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
          <h1 style={titleStyle}>Prodotti</h1>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <input 
              type="text"
              placeholder="Inserisci nome del prodotto"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={inputStyle}
            >
              <option value="">Seleziona categoria</option>
              {categories.map(category => (
                <option key={category} value={category} style={{ color: 'black' }}>
                  {category}
                </option>
              ))}
            </Form.Select>
          </div>
          {filteredProducts.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th style={headerCellStyle} onClick={() => handleSort('id')}>
                    ID {sortField === 'id' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th style={headerCellStyle} onClick={() => handleSort('nome')}>
                    Nome {sortField === 'nome' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th style={headerCellStyle} onClick={() => handleSort('categoria')}>
                    Categoria {sortField === 'categoria' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th style={headerCellStyle} onClick={() => handleSort('costo')}>
                    Costo in €{sortField === 'costo' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th style={headerCellStyle} onClick={() => handleSort('pezziVenduti')}>
                    Pezzi Venduti {sortField === 'pezziVenduti' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(product => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.nome}</td>
                    <td>{product.categoria}</td>
                    <td>{product.costo}</td>
                    <td>{product.pezziVenduti}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}>
              Nessun prodotto trovato con questi parametri.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Prodotti;
