import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL, headers } from '../../Services'
import ItemCard from '../ItemCard/ItemCard'
import "./Store.css"


function Store() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const res = await axios(BASE_URL, {headers})
    setItems(res.data.records)
  }

  return (
    <div className="items">
      {items.map(item => {
        return <ItemCard key={item.id} item={item}/>
      })}
    </div>
  )
}

export default Store
