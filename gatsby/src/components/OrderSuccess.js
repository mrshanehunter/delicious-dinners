import React from 'react';
import { Link } from 'gatsby';

export default function OrderSuccess(message) {
  return (
    <>
      <div>
        <h2>{message}</h2>
      </div>

      <Link to="/">
        <button type="button">Back to Home </button>
      </Link>
      <Link to="/orders">
        <button type="button">Back to Orders </button>
      </Link>
    </>
  );
}
