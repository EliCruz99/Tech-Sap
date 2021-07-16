import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL, headers } from '../../Services'
import ItemCard from '../ItemCard/ItemCard'
import "./Store.css"
import Pagination from '../Pagination/Pagination'
import Loader from '../Loader'




function Store() {
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)


  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const res = await axios(BASE_URL, {headers})
    setItems(res.data.records)
  }

  const lastSetOfItems = currentPage * itemsPerPage
  const FirstSetOfItems = lastSetOfItems - itemsPerPage
  const currentItems = items.slice(FirstSetOfItems, lastSetOfItems)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  if (!items.fields) {
    <Loader/>
  }

  return (
    <div className="items">
      {currentItems.map(item => {
        return (
          <ItemCard key={item.id} item={item} />
        )
      })}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate} />
    </div>
  )
}

export default Store
