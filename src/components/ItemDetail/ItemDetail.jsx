import React from 'react'
import { useParams, useHistory } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL, headers } from '../../Services'
import Loader from '../Loader'
import "./ItemDetail.css"

function ItemDetail() {
  const [itemDetail, setItemDetail] = useState({})
  const { id } = useParams()
  const history = useHistory()
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = `${BASE_URL}/${id}`
        const res = await axios(URL, { headers })
        if (res.data.id) {
          setItemDetail(res.data.fields)
        } else {
          history.push("/store")
        } 
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [id, history])

  if (!itemDetail.fields) {
    <Loader />
  }


  return (
    <div>
      <div className="imgContainer">
        <img className="itemImg" src={itemDetail.imageURL} alt={itemDetail.itemName} />
      </div>
      <div className="textContainer">
        <h1 className="itemName">{itemDetail.itemName}</h1>
        <p className="itemDescription">{itemDetail.description}</p>
        <h3 className="itemPrice">{itemDetail.price}</h3>
      </div>
    </div>
  )
}

export default ItemDetail
