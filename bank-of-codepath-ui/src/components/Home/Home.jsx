import * as React from "react"
import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"
import {useState, useEffect } from "react"
import {API_BASE_URL} from "../../constants"
import axios from "axios"


export default function Home(props) {
  let handleOnSubmitNewTransaction = (change) => {
    console.log(change.target.value) 
    props.setNewTransactionForm(change.target.value)
  }

  useEffect(() => {
    props.setIsLoading(true)
    async function getTransactions() {
      try {
        const response = await axios.get(API_BASE_URL + "/bank/transactions");
        const data = response.data.transactions
        props.setTransactions(data)
      } catch (error) {
        
        console.log(error)
        props.setError(error)
      }
      props.setIsLoading(false)
    }
    getTransactions();

  }, [])

  useEffect(() => {
    props.setIsLoading(true)
    async function getTransfers() {
      try {
        const response = await axios.get(API_BASE_URL + "/bank/transfers");
        const data = response.data.transfers
        props.setTransfers(data)
      } catch (error) {
        console.log(error)
        props.setError(error)
      }
      props.setIsLoading(false)
      
    }
    getTransfers();
  }, []);

  let isError = false;
  if (props.error != "") {
    isError = true;

  }

  
  {/*
  let filteredTransactions = () => {
    if (props.filterInputValue != "" && props.transactions.length != 0) {
      return props.transactions.filter((trans) =>
        trans.description.toLowerCase().includes(props.filterInputValue.toLowerCase())
      );
    }
    return props.transactions;
  };
  console.log(filteredTransactions)*/}

  let filteredTransactions = []
  if (props.filterInputValue) {
    filteredTransactions = props.transactions.filter(transaction => {
      return (transaction.description.toLowerCase().includes(props.filterInputValue.toLowerCase()))
    })
  } else {
    filteredTransactions = props.transactions
  }
  
  



  return (
    <div className="home">
      {isError ? (<h2>{props.error}</h2>):(<p />)}
      
      <div className="loading">
        {props.isLoading ? (<h1>Loading...</h1>):(<BankActivity transactions={filteredTransactions} />)}
      </div>
      <AddTransaction form={props.newTransactionForm} setForm={props.setNewTransactionForm}
      isCreating={props.isCreating} setIsCreating={props.setIsCreating} handleOnSubmit={handleOnSubmitNewTransaction}/>
      
    </div>
  )
}
