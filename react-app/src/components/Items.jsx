import React from 'react';
import { useHistory } from 'react-router-dom';
import baseUrl from '../api';

export default function Items({ item }) {
  const history = useHistory();
  const url = baseUrl + '/cart'

  function toDetail({ event, id }) {
    event.preventDefault();
    history.push('/item-detail/' + id);
  }

  return (
    <div class="col">
      <div class="card h-100">
        <a href="#" onClick={(event) => { toDetail({ event, id: item.id }) }} style={{ textDecoration: 'none' }}>
          <img id='items' style={{ height: '15em' }} src={item.image} class="card-img-top" alt={item.name} />
        </a>
        <div class="card-body">
          <a href="#" onClick={(event) => { toDetail({ event, id: item.id }) }} style={{ textDecoration: 'none' }}>
            <h5 style={{ color: 'black' }} class="card-title">{item.name}</h5>
          </a>
          <i>USD {item.price}</i>
        </div>
        {/* <button className="btn btn-outline-secondary form-control my-2 my-sm-0 mr-4" type="submit">Add to Cart</button> */}
        {/* <div className='border text text-center p-2'>
          <a className='btn btn-outline-success rounded-circle' href="#">+</a>
          <b style={{ marginLeft: '5px', marginRight: '5px' }}>{item.amount} pcs</b>
          <a className='btn btn-outline-success rounded-circle' href="#">-</a>
        </div> */}
      </div>
    </div>
  )
}
