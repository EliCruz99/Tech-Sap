import React from 'react'
import "./ItemCard.css"
import { Link } from 'react-router-dom'

function ItemCard(props) {
  return (
    <Link to={`${props.item.id}`}>
    <div className="container">
      <img src={props.item.fields.imageURL} alt={props.item.fields.itemName}/>
      <h2 className="name">{props.item.fields.itemName}</h2>
      <h4 className="price">{props.item.fields.price}</h4>
      </div>
    </Link>
  )
}

export default ItemCard
