import React from 'react'
import "./ItemCard.css"
import { Link } from 'react-router-dom'

function ItemCard(props) {
  return (
    <div className="container">
      <Link className="link" to={`/store/${props.item.id}`}>
      <img className="image" src={props.item.fields?.imageURL} alt={props.item.fields?.itemName}/>
      <h2 className="name">{props.item.fields?.itemName}</h2>
        <h4 className="price">{props.item.fields?.price}</h4>
        </Link>
      </div>
  )
}

export default ItemCard
