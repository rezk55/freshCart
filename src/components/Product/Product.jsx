import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "../../context/cartContext";
import { toast } from "react-toastify";

export default function Product({ item }) {
  const { counter, setCounter, addToCart } = useContext(Cartcontext);
  const { counterWish, setCounterWish, addToWishlist, getWishList } =
    useContext(Cartcontext);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [loadingBtnWish, setLoadingBtnWish] = useState(false);
  const [myHeartColor, setMyHeartColor] = useState("");
  let data;

  async function addProductToCart(productId) {
    setLoadingBtn(true);
    const data = await addToCart(productId);
    if (data.status == "success") {
      toast.success("Product added successfully to cart");
      setCounter(data.numOfCartItems);
      setLoadingBtn(false);
    }
  }

  async function addProductToWishlist(productId) {
    setLoadingBtnWish(true);
    data = await addToWishlist(productId);
    if (data.status == "success") {
      toast.success("Product added successfully to Wishlist");
      setCounterWish(data.data.length);
      setLoadingBtnWish(false);
      setMyHeartColor("text-danger");
    }
  }

  useEffect(() => {
    (async () => {
      const data = await getWishList();
      if (data.status == "success") {
        const checkWishList = data.data.find((el) => el._id == item._id);
        if (checkWishList) setMyHeartColor("text-danger");
      }
    })();
  }, []);

  return (
    <>
      <div className="product cursor-pointer p-2 rounded-2 fw-fs">
        <Link to={`/Product-details/${item._id}`}>
          <div className="details">
            <img
              className="w-100"
              src={item.imageCover}
              alt="freshCart products"
            />
            <span className="text-main">{item.category.name}</span>
            <h5 className="fw-fs fs-6">
              {item.title.split(" ").slice(0, 2).join(" ")}
            </h5>
            <div className="d-flex justify-content-between">
              <div className="price">{item.price} EGP</div>
              <div className="rate">
                <i className="fa-solid fa-star rating-color"></i>
                {item.ratingsAverage}
              </div>
            </div>
          </div>
        </Link>
        <button
          disabled={loadingBtnWish}
          onClick={() => addProductToWishlist(item._id)}
          className="bg-transparent my-btn border-0 py-3 fs-6 w-100"
        >
          {loadingBtnWish ? (
            <i className="fa fa-spinner fa-spin"></i>
          ) : (
            <i className={`fa-solid fa-heart ms-2 ${myHeartColor}`}></i>
          )}
        </button>
        <button
          disabled={loadingBtn}
          onClick={() => addProductToCart(item._id)}
          className="btn bg-main w-100 text-white"
        >
          {loadingBtn ? (
            <i className="fa fa-spinner fa-spin"></i>
          ) : (
            "Add To Cart"
          )}
        </button>
      </div>
    </>
  );
}
