from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def load_data(filename, columns, converters=None):
    """
    Legge i dati dal file specificato, interpretando ogni riga come una lista di valori separati da virgola.
    I nomi delle colonne e, opzionalmente, le conversioni (ad es. int, float) vengono applicati ai valori.
    """
    if converters is None:
        converters = {}
    data = []
    try:
        with open(filename, 'r') as f:
            for line in f:
                line = line.strip()
                if line: 
                    parts = line.split(',')
                    record = {}
                    for col, value in zip(columns, parts):
                        if col in converters:
                            try:
                                record[col] = converters[col](value)
                            except ValueError:
                                record[col] = value
                        else:
                            record[col] = value
                    data.append(record)
    except FileNotFoundError:
        print(f"Il file {filename} non è stato trovato.")
    return data

@app.route('/clienti', methods=['GET'])
def get_clienti():
    columns = ['id', 'nome', 'cognome', 'email']
    converters = {'id': int}
    result = load_data('clienti.txt', columns, converters)
    return jsonify(result)

@app.route('/prodotti', methods=['GET'])
def get_prodotti():
    columns = ['id', 'nome', 'categoria', 'costo', 'pezziVenduti']
    converters = {'id': int, 'costo': float, 'pezziVentuti': int}
    result = load_data('prodotti.txt', columns, converters)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
