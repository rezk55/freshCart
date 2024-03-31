import React from "react";

export default function Category({ item }) {
  return (
    <>
      <div className="p-2">
        <img src={item.image} height={200} className="w-100" alt="" />
        <h5>{item.name}</h5>
      </div>
    </>
  );
}
