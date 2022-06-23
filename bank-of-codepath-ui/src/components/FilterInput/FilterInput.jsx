import * as React from "react"
import "./FilterInput.css"
import {useState} from "react"

export default function FilterInput(props) {
  return (
    <div className="filter-input">
      <i className="material-icons">search</i>
      <input type="text" value="" placeholder="Search transactions" onChange={props.handleOnChange}/>
    </div>
  )
}
