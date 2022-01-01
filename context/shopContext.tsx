import { createContext, useState, useEffect } from "react";
import { createCheckout } from "../lib/shopify";


export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([])
  const [checkout, setCheckout] = useState({
    id: "",
    webUrl: ""
  })

  async function addToCart(newItem) {
    if(!cart.length) {
      setCart([newItem])

      const checkout = await createCheckout(newItem.id, newItem.variantQuantity)

      setCheckout({
        id: checkout.id,
        webUrl: checkout.webUrl
      })

      localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]));
    } else {
      let newCart = [...cart];

      cart.map(item => {
        if(item.id === newItem.id) {
          // if item exists already in cart increase quantity
          item.variantQuantity++;
          newCart = [...cart]
        } else {
          // Add new item onto cart
          newCart = [...cart, newItem]
        }
      })
      setCart(newCart)
    }
  }

  return (
    <div>

    </div>
  )
}
