import { createContext, useState, useEffect } from "react";
import { createCheckout, updateCheckout } from "../lib/shopify";

const CartContext = createContext({} as any);

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkout, setCheckout] = useState({
    id: "",
    webUrl: "",
  });

  useEffect(() => {
    if(localStorage.checkout_id) {
      const cartObj = JSON.parse(localStorage.checkout_id);
      // first element on cartObj contains an array of objects
      if(cartObj[0].id) {
        setCart([cartObj[0]])
      } else if(cartObj[0].length > 0) {
        setCart([...cartObj[0]])
      }
      // second element contains checkout id and url
      setCheckout({
        id: cartObj[1].id,
        webUrl: cartObj[1].webUrl,
      });
    }
  }, [])

  async function addToCart(newItem) {
    if (!cart.length) {
      setCart([newItem]);

      const checkout = await createCheckout(
        newItem.id,
        newItem.variantQuantity
      );
      setCheckout({
        id: checkout.id,
        webUrl: checkout.webUrl,
      });

      localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]));
    } else {
      let newCart = [...cart];

      cart.map((item) => {
        if (item.id === newItem.id) {
          // if item exists already in cart increase quantity
          item.variantQuantity++;
          newCart = [...cart];
        } else {
          // Add new item onto cart
          newCart = [...cart, newItem];
        }
      });
      setCart(newCart);
      const newCheckout = await updateCheckout(checkout.id, newCart);
      localStorage.setItem(
        "checkout_id",
        JSON.stringify([newCart, newCheckout])
      );
    }
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        cartDrawerOpen,
        setCartDrawerOpen,
        addToCart,
        url: checkout.webUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };
