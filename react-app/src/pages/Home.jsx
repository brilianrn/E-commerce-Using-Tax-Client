import React, { useEffect, useState } from 'react';
import baseUrl from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, Items } from '../components';
import { setItemsAsync } from '../store/actions/itemAction';

export default function Home() {
  const url = baseUrl + '/item';
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const items = useSelector((state => state.itemReducer.items));

  useEffect(() => {
    dispatch(setItemsAsync({ url, setLoading }));
  }, []);

  return (
    <>
      <div className="container mt-5 mb-5">
        {loading ? <Loading /> :
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {items.map(item => {
              return (
                <Items key={item.id} item={item} />
              )
            })}
          </div>
        }
      </div><hr />
    </>
  )
}
