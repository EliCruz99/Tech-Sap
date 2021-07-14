import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL, headers } from '../Services'
import ItemCard from './ItemCard/ItemCard'

function Homepage() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const res = await axios(BASE_URL, {headers})
    console.log(res.data.records)
    setItems(res.data.records)
  }

  

  return (
    <div>
      
      {items.map(item => {
        return <ItemCard key={item.id} item={item}/>
      })}
    </div>
  )
}

export default Homepage
