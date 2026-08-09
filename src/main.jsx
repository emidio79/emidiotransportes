// Importa o modo estrito do React, que ajuda a encontrar problemas no desenvolvimento.
import React from 'react'

// Importa a função que conecta o React ao elemento HTML principal.
import ReactDOM from 'react-dom/client'

// Importa o componente raiz da aplicação.
import App from './App.jsx'

// Importa o Tailwind e os estilos globais configurados no arquivo CSS.
import './styles/globals.css'

// Localiza a div com id="root" do index.html e renderiza a aplicação dentro dela.
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode não altera a interface; ele só oferece verificações extras em desenvolvimento.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)