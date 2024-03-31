import axios from "axios";
import { createContext, useState } from "react";
import { baseURL } from "../utils/baseUrl";
import { token } from "../utils/token";

export const Cartcontext = createContext(0);

//cart
async function addToCart(productId){
    return axios.post(baseURL+'cart',{productId}, {
       headers: {
            token: token,
       }
    }).then(({data})=>data).catch(error => error);
}

async function getCart(productId){
    return axios.get(baseURL+'cart', {
       headers: {
            token: token,
       }
    }).then(({data})=>data).catch(error => error);
}


async function removeCart(productId){
    return axios.delete(baseURL+'cart/'+ productId, {
       headers: {
            token: token,
       }
    }).then(({data})=>data).catch(error => error);
}

async function updateQTY(productId,count){
    return axios.put(baseURL+'cart/'+ productId,{count}, {
       headers: {
            token: token,
       }
    }).then(({data})=>data).catch(error => error);
}
/*--------------------------------------------------*/

//whishlist
async function addToWishlist(productId){
    return axios.post(baseURL+'wishlist',{productId}, {
       headers: {
            token: token,
       }
    }).then(({data})=>data).catch(error => error);
}

async function getWishList(productId){
    return axios.get(baseURL+'wishlist', {
       headers: {
            token: token,
       }
    }).then(({data})=>data).catch(error => error);
}


async function removeWishlist(productId){
    return axios.delete(baseURL+'wishlist/'+ productId, {
       headers: {
            token: token,
       }
    }).then(({data})=>data).catch(error => error);
}





export default function CartContextProvider({children}){
    const [counter,setCounter] = useState(0);
    let [counterWish, setCounterWish] = useState(0);


    return (
        <Cartcontext.Provider  value={{
            counter,
            setCounter,
            addToCart,
            getCart,
            removeCart,
            updateQTY,
            counterWish,
            setCounterWish,
            addToWishlist,
            getWishList,
            removeWishlist
             }}>
            {children}
        </Cartcontext.Provider>
    )
}