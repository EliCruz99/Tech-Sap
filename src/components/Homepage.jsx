import React from 'react'
import axios from 'axios'
import "./Homepage.css"
import { useState, useEffect } from 'react'
import { BASE_URL, headers } from '../Services'
import ItemCard from './ItemCard/ItemCard'

const pageSizeURL = `${BASE_URL}?pageSize=10`

function Homepage() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const res = await axios(pageSizeURL, {headers})
    console.log(res.data.records)
    setItems(res.data.records)
  }

  

  return (
    <div className='popular-items'>
      
      {items.map(item => {
        return <ItemCard key={item.id} item={item}/>
      })}
    </div>
  )
}

export default Homepage
