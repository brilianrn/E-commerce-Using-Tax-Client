import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Loading } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import baseUrl from '../api';
import { setItemAsync } from '../store/actions/itemAction';
import { addCartAsync } from '../store/actions/cartAction';

export default function Detail() {
  const { itemId } = useParams();
  const url = baseUrl + '/item/' + itemId;
  const dispatch = useDispatch();
  const item = useSelector(state => state.itemReducer.item);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    dispatch(setItemAsync({ url, setLoading }));
  }, []);

  function addCart({ event }) {
    const cartUrl = baseUrl + '/cart';
    let payload = {
      name: item.name,
      amount: 1,
      type: item.type,
      itemStatus: item.status,
      cartStatus: 'cart',
      price: item.price
    };

    event.preventDefault();
    addCartAsync({ url: cartUrl, payload, history });
  }

  return (
    <>
      <div className="container mt-5 mb-5">
        <div class="card mb-3">
          {loading ? <Loading /> :
            <div class="row g-0">
              <div class="col-md-6">
                <img style={{ width: '35em', height: '30em' }} src={item.image} alt={item.name} />
              </div>
              <div class="col-md-6">
                <div class="card-body mt-5">
                  <h5 class="card-title mb-4" style={{ color: '#f94d49' }}>Product Name
                  <span style={{ marginLeft: '80px', color: 'black' }}>
                      : {item.name}
                    </span>
                  </h5>
                  <h5 class="card-title mb-4" style={{ color: '#f94d49' }}>Product Price
                  <span style={{ marginLeft: '87.7px', color: 'black' }}>
                      : USD {item.price}
                    </span>
                  </h5>
                  <h5 class="card-title mb-4" style={{ color: '#f94d49' }}>Product Status
                  <span style={{ marginLeft: '75.5px', color: 'black' }}>
                      : {item.status}
                    </span>
                  </h5>
                  <h5 class="card-title mb-4" style={{ color: '#f94d49' }}>Product Type
                  <span style={{ marginLeft: '91px', color: 'black' }}>
                      : {item.type}
                    </span>
                  </h5>
                  <h5 class="card-title mb-4" style={{ color: '#f94d49' }}>Product Stocks
                  <span style={{ marginLeft: '73px', color: 'black' }}>
                      : {item.amount} pcs
                  </span>
                  </h5>
                  {/* {item.type === 'book' || item.type === 'food' || item.type === 'medicine' && item.status === 'local' ? <></> : (
                  (item.type !== 'book' || item.type !== 'food' || item.type !== 'medicine' && item.status === 'local' ? <i class="card-text"><small class="text-muted">**) Harga di atas belum termasuk ppn 10%</small></i> : (
                    (item.type === 'book' || item.type === 'food' || item.type === 'medicine' && item.status === 'import' ? <i class="card-text"><small class="text-muted">**) Harga di atas belum termasuk pajak import 5%</small></i> : (
                      (item.type !== 'book' || item.type !== 'food' || item.type !== 'medicine' && item.status === 'import' ? <i class="card-text"><small class="text-muted">**) Harga di atas belum termasuk ppn dan pajak import 15%</small></i> : null)
                    ))
                  ))
                )} */}

                  {/* {item.type === 'book' || item.type === 'food' || item.type === 'medicine' ? <></> : (
                  (item.status === 'local' ? <></> : (
                    (item.type !== 'book' || item.type !== 'food' || item.type !== 'medicine' ? <></> : (
                      (item.status === 'local' ? <i class="card-text"><small class="text-muted">**) Harga di atas belum termasuk ppn 10%</small></i> : (
                        (item.type === 'book' || item.type === 'food' || item.type === 'medicine' ? <></> : (
                          (item.status === 'import' ? <i class="card-text"><small class="text-muted">**) Harga di atas belum termasuk pajak import 5%</small></i> : (
                            (item.type !== 'book' || item.type !== 'food' || item.type !== 'medicine' ? <></> : (
                              (item.status === 'import' ? <i class="card-text"><small class="text-muted">**) Harga di atas belum termasuk ppn dan pajak import 15%</small></i> : <></>)
                            ))
                          ))
                        ))
                      ))
                    ))
                  ))
                )} */}
                  <i class="text-muted">**) This product is subject to a tax of {item.tax} %</i>
                </div>
                <a onClick={(event => { addCart({ event }) })} href="#" className='btn btn-outline-warning text text-dark' style={{ marginLeft: '15px' }}>
                  <img id='cart-img' style={{ width: '30px' }} src="https://i.imgur.com/069f9NU.png" alt="cart" />
                Add to Cart
              </a>
              </div>
            </div>
          }
        </div>
      </div><hr />
    </>
  )
}
