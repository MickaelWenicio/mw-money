import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import React from 'react';
import { createServer, Model } from 'miragejs';

createServer({
  models:{
    transaction: Model,
  },

  routes(){
    this.namespace = 'api'
    this.get('/transactions',()=>{
      return this.schema.all('transaction')
    })
    
    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);