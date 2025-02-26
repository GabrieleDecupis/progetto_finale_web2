Il progetto gestisce le informazioni presenti su 2 file txt, clienti.txt e prodotti.txt.
Attraverso un programma python (programma.py) esegue delle chiamate rest con metodo GET e va ad estrapolare i dati da questi due file come se stesse lavorando
con un database.

AVVIAMENTO:

aprire due terminali e posizionarsi sulla cartella in questione:
- Su un terminale avviare il programma python con il comando "python3 programma.py"
  ATTENZIONE Assicurarsi che il programma python stia runnando su http://127.0.0.1:5000
  ATTENZIONE I file txt devono essere nella stessa cartella del programma python
- Sull'altro terminale avviare react con "npm run dev"

Il progetto in questione ha 4 pagine differenti:

- Home
- Clienti
- Prodotti
- About

In ogni pagina è presente un menù a comparsa composto da 3 linee orizzontali che, quando ci si passa sopra con il cursore, mostra i link verso altre pagine, 
non mostrando il link verso la pagina corrente.

HOME

In questa pagina è presente un background e un semplice scritta. Non ha alcuna funzionalità se non quella di accogliere lo user

CLIENTI

In questa pagina vengono restituiti tutti i dati di persone presenti all'interno del file clienti.txt.

Sono presenti nella pagina le seguenti cose:

- Una riga con dei bottoni con tutte le lettere dell'alfabeto.
Selezionando una lettera e uno tra i bottoni Nome o Cognome presenti subito sotto si attiverà un filtro di ricerca che mostrerà solo i clienti
che rispecchiano i filtri selezionati

- Una cella di ricerca in cui inserire un nome o un cognome o una mail 
ATTENZIONE: bisogna inserire tutto il nome o cognome o email per visualizzare i risultati

- Una tabella con le seguenti colonne: id, nome, cognome, email. 
Cliccando sopra la cella di nome e cognome sarà possinbile metterle in ordine alfabetico dalla A-Z o dalla Z-A
Cliccando sopra l'id sarà possibile ordinarli in modo crescente o decrescente

PRODOTTI

In questa pagina vengono restituiti tutti i dati di persone presenti all'interno del file clienti.txt.

Sono presenti nella pagina le seguenti cose:

- Una cella di ricerca in cui inserire un nome di un prodotto

- un filtro a tendina in cui selezionare la categoria di oggette che si vuole visionare

- Una tabella con le seguenti colonne: id, nome, categoria, costo, pezzi venduti. 
Cliccando sopra la cella di nome, categoria, sarà possinbile metterle in ordine alfabetico dalla A-Z o dalla Z-A
Cliccando sopra l'id e costo sarà possibile ordinarli in modo crescente o decrescente.
Cliccando sopra la cella della categoria li ragruppa e li mostra in ordine alfabetico o dalla A-Z o dalla Z-A

ABOUT

E' una seplice pagina che mostra un testo