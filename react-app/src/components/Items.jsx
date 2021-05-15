import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Items({ item }) {
  const history = useHistory();

  function toDetail({ event, id }) {
    event.preventDefault();
    history.push('/item-detail/' + id);
  }
  return (
    <div class="col">
      <div class="card h-100">
        <a href="#" onClick={(event) => { toDetail({ event, id: item.id }) }} style={{ textDecoration: 'none' }}>
          <img style={{ height: '15em' }} src={item.image} class="card-img-top" alt={item.name} />
        </a>
        <div class="card-body">
          <a href="#" onClick={(event) => { toDetail({ event, id: item.id }) }} style={{ textDecoration: 'none' }}>
            <h5 style={{ color: 'black' }} class="card-title">{item.name}</h5>
          </a>
          <i>USD {item.price}</i>
        </div>
      </div>
    </div>
  )
}
