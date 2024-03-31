import axios from "axios";
import { createContext, useState } from "react";
import { baseURL } from "../utils/baseUrl";
import { token } from "../utils/token";

export const WishlistContext = createContext(0);

export default function WishlistProvider({ children }) {
  let [counterWish, setCounterWish] = useState(0);

  async function addToWishlist(productId) {
    return axios
      .post(
        baseURL + "wishlist",
        { productId },
        {
          headers: {
            token: token,
          },
        }
      )
      .then(({ data }) => data)
      .catch((error) => error);
  }

  return (
    <WishlistContext.Provider
      value={{
        counterWish,
        setCounterWish,
        addToWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
