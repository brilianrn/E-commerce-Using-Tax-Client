import React, { useState, useEffect } from 'react';
import baseUrl from '../api';
import { deleteCartAsync, plusAmountAsync } from '../store/actions/cartAction';
import { useHistory } from 'react-router-dom';

let num = 0;
let flag = num++;

export default function Carts(props) {
  const [loading, setLoading] = useState(false);
  const url = baseUrl + '/cart';
  const { cart, i } = props;
  const history = useHistory();
  const [checkoutData, setCheckoutData] = useState({
    coCheckboxValues: [],
    amountItem: 0,
    totalPriceProducts: 0
  });

  useEffect(() => {
    setCheckoutData({
      ...checkoutData,
      amountItem: cart ? cart.amout : 0,
      totalPriceProducts: cart ? cart.totalPrice : 0
    })
  }, [])

  function deleteCart({ event, id }) {
    event.preventDefault();
    deleteCartAsync({ url, id, history });
  }

  function handleOnChange(event) {
    if (event.target.id === 'checkbox') {
      const checkboxes = document.querySelectorAll(`input[id="${event.target.id}"]:checked`);
      let values = [];
      checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
      });
      setCheckoutData({ ...checkoutData, coCheckboxValues: values });
    } else if (event.target.id === 'amount') {
      setCheckoutData({ ...checkoutData, amountItem: event.target.value });
    }
  }

  function plusAmount({ event, id }) {
    // event.preventDefault();
    setLoading(true);
    num = checkoutData.amountItem;
    flag = checkoutData.amountItem++;

    let payload = {};
    if (flag == num) {
      payload = { amount: checkoutData.amountItem, id }
    } else {
      payload = { amount: flag++, id }
    }
    let urlPlus = url + '/' + id;
    plusAmountAsync({ url: urlPlus, payload, setLoading });
  }

  function minusAmount({ event, id }) {
    // event.preventDefault();
    setLoading(true);
    num = checkoutData.amountItem;
    flag = checkoutData.amountItem--;

    let payload = {};
    if (flag == num) {
      payload = { amount: checkoutData.amountItem, id }
    } else {
      payload = { amount: flag--, id }
    }
    let urlPlus = url + '/' + id;
    plusAmountAsync({ url: urlPlus, payload, setLoading });
  }

  function checkout({ event }) {
    event.preventDefault();
    console.log(checkoutData);
  }

  return (
    <>
      <tr>
        <td>
          <form className="form-check">
            <input onChange={handleOnChange} className="form-check-input" type="checkbox" value={cart.id} id="checkbox" style={{ marginRight: 'auto', marginLeft: 'auto', display: 'flex' }} />
          </form>
        </td>
        <td>
          {cart.name}
        </td>
        <td>
          <div className='text text-center'>
            {/* {loading ? <Loading /> : */}
            <>
              <a className='btn btn-outline-primary rounded-circle' href="" onClick={(event) => { plusAmount({ event, id: cart.id }) }}>+</a>
              <i style={{ marginLeft: '5px', marginRight: '5px' }}>
                {checkoutData.amountItem} pcs
              {/* <input onChange={handleOnChange} className='text text-center' style={{ width: '60px' }} type="text" id='amount' value={checkoutData.amountItem} disabled /> pcs */}
              </i>
              <a className='btn btn-outline-primary rounded-circle' href="" onClick={(event) => { minusAmount({ event, id: cart.id }) }}>-</a>
            </>
            {/* } */}
          </div>
        </td>
        <td>USD {cart.price}</td>
        <td>{cart.tax}%</td>
        <td>USD {cart.totalPrice}</td>
        <td>
          <a href="#" className='btn btn-danger form-control' onClick={(event => { deleteCart({ event, id: cart.id }) })}>Delete</a>
        </td>
      </tr>
    </>
  )
}
