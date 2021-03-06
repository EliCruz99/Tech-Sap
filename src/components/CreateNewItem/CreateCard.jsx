import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import { BASE_URL, headers } from '../../Services'
import { toast } from 'react-toastify';
import "./CreateCard.css"

const defaultForm = {
  itemName: "",
  price: "",
  imageURL: "",
  description: "",
  category: "",
}

function CreateCard() {
  const [input, setInput] = useState(defaultForm)
  // eslint-disable-next-line
  const [category, setCategory] = useState("Select an option below")
  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
    setCategory(e.target.value)
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    // eslint-disable-next-line
    const res = await axios.post(BASE_URL, { fields: input }, { headers })
    toast.success("Created new Item")
    history.push("/store")
  }

  return (
    <>
      <h1>Create your own item!</h1>
      <form className="newCardInfo" onSubmit={handleSubmit}>
        <input
          className="productName"
          placeholder="Product Name"
          name="itemName"
          value={input.itemName}
          onChange={handleChange}
          type="text" />
        <input
          className="itemPrice"
          placeholder="Product Price"
          name="price"
          value={input.price}
          onChange={handleChange}
          type="text" />
        <input
          className="itemImageURL"
          placeholder="Product Image URL"
          name="imageURL"
          value={input.imageURL}
          onChange={handleChange}
          type="text" />
        <textarea
          className="itemDescription"
          placeholder="Product Description"
          name="description"
          value={input.description}
          onChange={handleChange}
          type="text" />
        <select className="itemCategory" name='category' value={input.category} onChange={handleChange}>
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
        <button>Submit</button>
      </form>
      <h3>Example Card</h3>
      <div className="exampleCard">
      <img className="image" src={input.imageURL} alt={input.itemName}/>
        <h2 className="name">{input.itemName}</h2>
        <h4 className="price">{input.price}</h4>
      </div>
    </>
  )
}

export default CreateCard
