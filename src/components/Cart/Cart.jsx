import React, { useContext, useEffect, useState } from "react";
import { Cartcontext } from "../../context/cartContext";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

export default function Cart() {
  const { getCart, removeCart, setCounter, updateQTY } =
    useContext(Cartcontext);
  const [dataCart, setDataCart] = useState([]);
  const [loading, setLoading] = useState(true);

  async function deleteProduct(id) {
    const data = await removeCart(id);
    if (data.status == "success") {
      setDataCart(data);
      setCounter(data.numOfCartItems);
      toast.error("Product deleted successfully!");
    }
  }

  async function updateProductQTY(id, count) {
    const data = await updateQTY(id, count);
    if (data.status == "success") {
      if (count === 0) return deleteProduct(id);
      setDataCart(data);
      toast.success("Product updated successfully!");
    }
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getCart();
      if (data.status == "success") {
        setDataCart(data);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loading />;

  if (dataCart.numOfCartItems == 0 || dataCart == null)
    return (
      <div className="text-main text-center mt-5 p-5 fs-5 fw-bolder">
        Your cart is empty
      </div>
    );

  return (
    <>
      <section className="car mt-5 py-3 pt-5 bg-bg-body-tertiary" id="cart">
        <div className="container bg-main-light shadow py-3">
          <h3 className="fw-bolder">Shopping Cart:</h3>
          <p className="text-main fw-bold">
            Total Cart Price: <span>{dataCart?.data?.totalCartPrice}</span> EGP
          </p>
          {dataCart?.data?.products.map((item) => {
            return (
              <div className="row py-2 border-bottom" key={item._id}>
                <div className="col-1">
                  <img
                    className="w-100"
                    src={item.product.imageCover}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="col-11 d-flex justify-content-between">
                  <div className="details">
                    <h6 className="fw-bold mb-1">{item.product.title}</h6>
                    <p className="text-main mb-1 fw-fs fs-6">
                      Price: <span>{item.price}</span>
                    </p>
                    <button
                      onClick={() => deleteProduct(item.product._id)}
                      className="btn p-0 m-0 border-0"
                    >
                      <i class="fa-solid fa-trash-can text-main"></i>{" "}
                      <span className="fw-fs fs-6 text-muted">Remove</span>
                    </button>
                  </div>
                  <div className="inc-dec">
                    <button
                      disabled={item.count > item.product.quantity}
                      onClick={() =>
                        updateProductQTY(item.product._id, item.count + 1)
                      }
                      className="btn inc my-brdr py-1 px-2"
                    >
                      +
                    </button>
                    <span className="mx-2 fw-fs fs-6">{item.count}</span>
                    <button
                      onClick={() =>
                        updateProductQTY(item.product._id, item.count - 1)
                      }
                      className="btn dec my-brdr py-1 px-2"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <button></button>
        </div>
      </section>
    </>
  );
}
