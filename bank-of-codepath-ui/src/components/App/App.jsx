import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import TransactionDetail from "../TransactionDetail/TransactionDetail"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useState } from "react"


export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [transfers, setTransfers] = useState([])
  const [error, setError] = useState("")
  const [filterInputValue, setFilterInputValue] = useState("")
  const [newTransactionForm, setNewTransactionForm] = useState({category:"", description:"", amount:0})
  const [isCreating, setIsCreating] = useState(false)

  return (
    <div className="App">
    
      <BrowserRouter>
        
        <main>
          
          <Navbar setFilterInputValue={setFilterInputValue} filterInputValue={filterInputValue}/>
          <Routes>
            <Route path ="/" element = {<Home transactions={transactions} setTransactions={setTransactions} transfers={transfers} 
              setTransfers={setTransfers} error={error} setError={setError} isLoading={isLoading} setIsLoading={setIsLoading} 
              filterInputValue={filterInputValue} newTransactionForm={newTransactionForm} setNewTransactionForm={setNewTransactionForm}
              isCreating={isCreating} setIsCreating={setIsCreating}/>}/>
            <Route path ="transactions/:transactionId" element = {<TransactionDetail/>}/>
          </Routes>
          
        </main>

      </BrowserRouter>
    
      
      
    </div>
  )
}
