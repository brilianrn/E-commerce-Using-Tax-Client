import axios from 'axios';

export function setItems(payload) {
  return { type: 'items/setItems', payload };
}

export function setItemsAsync({ url, setLoading }) {
  return ((dispatch) => {
    axios({
      url,
      method: 'GET',
      headers: { access_token: localStorage.access_token }
    })
      .then(({ data }) => {
        setLoading(false);
        dispatch(setItems(data));
      })
      .catch(err => {
        console.log(err);
      })
  })
}

export function setItem(payload) {
  return { type: 'item/setItem', payload };
}

export function setItemAsync({ url, setLoading }) {
  return ((dispatch) => {
    axios({
      url,
      method: 'GET',
      headers: { access_token: localStorage.access_token }
    })
      .then(({ data }) => {
        dispatch(setItem(data));
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  })
}