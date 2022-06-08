import React, { useContext, useEffect, useState } from "react";
import { GameDataContext } from "../context/gameDataContext";
import { CartContext } from "../context/cartContext";

function Cart(props) {

  useEffect(()=>{},[])
  const cartItems = props;
  const gameData = useContext(GameDataContext);
  console.log(gameData);

  const checkout = useContext(CartContext);
  const [deletedItem, setDeletedItem] = useState([]);

  let cart = [];
  console.log("checkout", checkout);
  console.log(deletedItem);

  
  const removeItem = (e) => {
    e.preventDefault()
    console.log("e");
    // let itemToRemove = checkout.findIndex((e) => {
    //   return;
    const removeGame = e.title;
    console.log('remove game', removeGame)
  
    // const updateCheckout = checkout.filter(item => cartItem !== item.title)
    // let checkoutItem= document.getElementById(`checkoutItem${i}`);
    // // checkoutItem.remove()
    // console.log('checkout', checkoutItem)
    // const e = () => {
    //   checkoutItem.remove()
    // }
  };

  let i = 0;

  const display = checkout.map((cartItem) => {
    cart.push(cartItem.price);
    return (
      <div>
        <img src={cartItem.gameImage}></img>
        <p>{cartItem.title}</p>
        <p>$ {cartItem.price}</p>
        <button onClick={()=>{setDeletedItem(cartItem)}}>Remove From Cart</button>
      </div>
    );
  });

  let sum = 0;
  let tax = 0;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i];
  }

  tax = sum * 0.1;

  total = sum + tax;
  console.log("sum", sum);

  const emptyCart = !total ? 'Cart is empty!' : 'Thank you for shopping!' 

  //started a checkout function that will sum the prices from each game and display them onto the cart page
  // const checkout = gameData.map(game)

  return (
    <form
      style={{
        background: "black",
      width: "90%",
      margin: "0px",
      textAlign: "center",
      display: "inline-block",
      backgroundColor: "black",
      borderBottomColor: "blue",
      color: "red",
      borderRadius: "20px",
      position: "relative",
      border: "2px solid lightblue",
      borderTop: "2px solid lightblue",
      }}
    >
      <h3>Your Cart</h3>
      <h4>{emptyCart}</h4>
      <div
      style={{
        display: "inline-table",
        position: "relative",
      }}
      >
        {display}
        

      <p>Tax: $ {tax.toFixed(2)} </p>
      <p>Total: $ {total.toFixed(2)}</p>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Checkout
        </button>
      </div>
      </div>
    </form>
  );

  // return (
  //   <div id='home-cart' >

  //   <h5>Games: {display} </h5>
  // </div>
  // )
}

export default Cart;
