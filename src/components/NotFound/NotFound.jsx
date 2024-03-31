import React from "react";
import notFound from "../../assets/images/not-found.svg";

export default function NotFound() {
  return (
    <>
      <div className="container">
        <div className="content text-center">
          <img className="d-block m-auto" src={notFound} alt="Not Found" />
          <h1>Page Not Found</h1>
          <p>The page you are looking for could not be found.</p>
        </div>
      </div>
    </>
  );
}
