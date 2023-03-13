//pacote responsavel pelo core do react, funcionalidades compartilhadas entre todos os clientes (reactnative,...)
import React from 'react'

//ReactDOM - Integração do react com a DOM (Document Object Model - represenação do html através do javascript), para funcionar no browser
import ReactDOM from 'react-dom/client' 

import App from './App'

// Createroot - recebe um parametro que é qual é elemento raiz da pagina html (root)
// render - metodo que renderiza ( mostra o app em tela)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
