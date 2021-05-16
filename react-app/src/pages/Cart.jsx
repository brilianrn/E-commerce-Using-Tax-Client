import React, { useState, useEffect } from 'react';
import baseUrl from '../api';
import { Loading, Carts } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setCartsAsync } from '../store/actions/cartAction';

let payment = 0;

export default function Cart() {
  const [loading, setLoading] = useState(true);
  const url = baseUrl + '/cart';
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartReducer.carts);
  const [isCart, setIsCart] = useState([])

  useEffect(() => {
    payment = 0;
    dispatch(setCartsAsync({ url, setLoading }));
    carts.map(e => {
      payment += e.totalPrice;
    })
    setIsCart(carts.filter(e => e.cartStatus == 'cart'));
  }, [loading]);

  return (
    <>
      <div className='container mt-5 mb-5'>
        {loading ? <Loading /> :
          <>
            <table className="table text text-center table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Amounts</th>
                  <th scope="col">Price</th>
                  <th scope="col">Tax</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {isCart.map((cart, i) => {
                  return (
                    <>
                      <Carts key={i} cart={cart} i={[]} />
                    </>
                  )
                })}
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th colspan="2">Total Payment :</th>
                  <th style={{ textAlign: 'left' }} colspan="2">USD {payment}</th>
                </tr>
              </tbody>
            </table>
            <a href="#" className='btn btn-success form-control mb-1'>Checkout</a>
          </>
        }
      </div><hr />
    </>
  )
}
