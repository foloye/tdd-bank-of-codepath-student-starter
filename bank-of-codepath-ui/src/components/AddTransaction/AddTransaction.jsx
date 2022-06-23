import * as React from "react"
import "./AddTransaction.css"

export default function AddTransaction(props) {

  let handleOnFormFieldChange = (change) => {
    let value = change.target.value
    props.setNewTransactionForm({category:value, description:value, amount:value})
  }
  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <AddTransactionForm handleOnFormFieldChange ={handleOnFormFieldChange } handleOnSubmit={props.handleOnSubmit}
      form={props.form} setForm={props.setForm} isCreating={props.isCreating} setIsCreating={props.setIsCreating} />
    </div>
  )
}

export function AddTransactionForm(props) {
  return (
    <div className="form">
      <div className="fields">
        <div className="field">
          <label>Description</label>
          <input />
        </div>
        <div className="field">
          <label>Category</label>
          <input />
        </div>
        <div className="field half-flex">
          <label>Amount (cents)</label>
          <input />
        </div>

        <button className="btn add-transaction" type="submit" onClick={props.handleOnSubmit}>
          Add
        </button>
      </div>
    </div>
  )
}
