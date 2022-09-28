import { useState, useEffect } from 'react';

function CartItem({ item }) {
  let [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);


  function incCount() {
    setCount(count + 1)
  }

  function decCount() {
    setCount(count - 1)
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button onClick={incCount}
          className="cart-item-button"
        >
          +
        </button>
        <button onClick={decCount}
          className="cart-item-button"
        >
          -
        </button>
        <button
          className="cart-item-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;