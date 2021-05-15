import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import baseUrl from '../api';
import { setItemAsync } from '../store/actions/itemAction';

export default function Detail() {
  const { itemId } = useParams();
  const url = baseUrl + '/item/' + itemId;
  const dispatch = useDispatch();
  const item = useSelector(state => state.itemReducer.item);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setItemAsync({ url, setLoading }));
  }, []);

  return (
    <div className="container mt-5">
      <div class="card mb-3">
        {loading ? <Loading /> :
          <div class="row g-0">
            <div class="col-md-6">
              <img style={{ width: '35em', height: '25em' }} src={item.image} alt={item.name} />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title mb-4">Product Name
                  <span style={{ marginLeft: '80px', color: 'orange' }}>
                    : {item.name}
                  </span>
                </h5>
                <h5 class="card-title mb-4">Product Price
                  <span style={{ marginLeft: '87.7px', color: 'orange' }}>
                    : USD {item.price}
                  </span>
                </h5>
                <h5 class="card-title mb-4">Product Status
                  <span style={{ marginLeft: '75.5px', color: 'orange' }}>
                    : {item.status}
                  </span>
                </h5>
                {/* {item.status === 'import' } */}
                <i class="card-text"><small class="text-muted">**) Harga di atas belum termasuk pajak {item.tax} %</small></i>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
