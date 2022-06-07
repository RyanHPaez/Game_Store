import React, { useContext, useState } from "react";
import { GameDataContext } from "../context/gameDataContext";
import { CartContext } from "../context/cartContext";




function Cart (){
 
  const gameData = useContext(GameDataContext);
  console.log(gameData);

  const checkout = useContext(CartContext);
  const [deletedItem, setDeletedItem] = useState([]);

  let cart = [];
  console.log("checkout", checkout);
  console.log(deletedItem);

  const removeItem = (e) => {
    console.log('e')
    // let itemToRemove = checkout.findIndex(e => {
    //   return 
    // })
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

    i++;

    return (
      <div id={`checkoutItem${i}`}>
        <img src={cartItem.gameImage}></img>
        <p>{cartItem.title}</p>
        <p>$ {cartItem.price}</p>
        <button onClick={removeItem(cartItem)}>Remove From Cart</button>
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

  //started a checkout function that will sum the prices from each game and display them onto the cart page
  // const checkout = gameData.map(game)

  return (
    <form
      style={{
        border: "2px solid blue",
        position: "sticky",
        color: "yellow",
        backgroundColor: "black",
        borderBottomColor: "lightblue",
        borderTopColor: "lightblue",
        float: "right",
        padding: "10px",
        marginTop: "0px",
        borderRadius: "20px",
        textAlign: "center",
        display: "inline-table",
      }}
    >
      <h3>Your Cart</h3>

      <div>{display}</div>

      <p>Tax: $ {tax.toFixed(2)} </p>
      <p>Total: $ {total.toFixed(2)}</p>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Checkout
        </button>
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
