import GlobalStyle from "./Styles/Global.ts"
import { TransactionProvider } from "./hooks/useTransactions.tsx"
import { useState } from "react"
import Header from "./components/Header/index.tsx"
import Dashboard from "./components/Dashboard/index.tsx"
import NewTransactionModal from './components/NewTransactionModal'

function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsTransactionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <Header 
        openNewTransaction = {handleOpenNewTransactionModal}
      />
      <Dashboard />        
      <NewTransactionModal 
        ModalIsOpen={isTransactionModalOpen} 
        onRequestCloseModal={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionProvider>
  )
}

export default App
