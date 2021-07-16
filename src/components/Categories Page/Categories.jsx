import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL, headers } from '../../Services'
import Loader from '../Loader'
import ItemCard from '../ItemCard/ItemCard'
import Pagination from '../Pagination/Pagination'
import "./Categories.css"

function Categories() {
  const [items, setItems] = useState([])
  const [category, setCategory] = useState("Select an option below")
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const res = await axios(BASE_URL, { headers })
    setItems(res.data.records)
  }


  if (!items.fields) {
    <Loader />
  }

  const itemsJSX = filteredItems.map((item)=> ( <div className="sortedItems"><ItemCard key={item.id} item={item} /></div>))

  const handleSubmit = (e) => {
    e.preventDefault()
    const filteredItems = items.filter((item) => item.fields.category === category)
    console.log(filteredItems)
    setFilteredItems(filteredItems)
  }
  const handleChange = (e) => {
    setCategory(e.target.value)
    // console.log(e.target.value)
  }
  console.log(category)

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>What are you looking for today?</h2>
      <select value={category} onChange={handleChange} >
        <option>Select an option below</option>
        <option value="Monitor">Monitor</option>
        <option value="Keyboard">Keyboard</option>
        <option value="Desktop">Desktop</option>
        <option value="Memory (Ram)">Memory</option>
        <option value="CPUs / Processors">CPUs/Processors</option>
        <option value="Motherboards">Motherboards</option>
        <option value="Mouse">Mouse</option>
        <option value="Power Supplies">Power Supplies</option>
        <option value="Storage">Storage</option>
        <option value="Video Card">Video Card</option>
      </select>
      <input type="submit" value="Search" />
    </form>
    <div className="card-container">
        {filteredItems && itemsJSX}
    </div>
  </>
  )

}

export default Categories
