import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL, headers} from '../../Services'
import ItemCard from '../ItemCard/ItemCard'
import "./Store.css"
import Pagination from '../Pagination/Pagination'
import Loader from '../Loader'



function Store() {
  const [items, setItems] = useState([])


  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const res = await axios(BASE_URL, { headers })
    setItems(res.data.records)
  }

  
  
  if (!items.fields) {
    <Loader/>
  }

  return (
    <div className="items">
      <Pagination 
      data={items}
        RenderComponent={ItemCard}
        pageLimit={5}
        dataLimit={10}/>
    </div>
  )
}

export default Store
