//onChange = event handler used primarily with form element
//ex. <input> ,<textarea>, <select>, <radio>
//Trigger a function every time the value of the input changes



import { useState } from 'react';

function MyComponent(){
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment,setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event){
    setName(event.target.value);
  }
  
  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }

  function handleCommentChange(event){
    setComment(event.target.value);
  }

  function handlePaymentChange(event){
    setPayment(event.target.value);
  }

  function handleShippingChange(event){
      setShipping(event.target.value);
  }

  return(
  <div>
      <input type="text" value={name} onChange={handleNameChange}/>
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange}/>
      <p>Quantity: {quantity}</p>

      <textarea value = {comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
      <p>Comment: {comment} </p>

      <select  value={payment} onChange={handlePaymentChange}></select>
      <option value="">Select an option</option>
      <option value="Visa">Visa</option>
      <option value="MasterCard">MasterCard</option>
      <option value="GiftCard">GiftCard</option>
      <p>Payment :{payment}</p>

    <label htmlFor="">Pick up
      <input type="radio" value ="pick up" checked = {shipping === "pick up"} onChange={handleShippingChange}/>
    </label><br/>
    
    <label htmlFor="">Delivery
      <input type="radio" value ="delivery" checked = {shipping === "delivery"} onChange={handleShippingChange}/>
    </label>
    <p>Shipping : {shipping}</p>


  </div>);
  
}
export default MyComponent