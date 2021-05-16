import axios from 'axios';
import swal from 'sweetalert';

export function setCarts(payload) {
  return { type: 'carts/setCarts', payload };
}

export function setCartsAsync({ url, setLoading }) {
  return ((dispatch) => {
    axios({
      url,
      method: 'GET',
      headers: { access_token: localStorage.access_token }
    })
      .then(({ data }) => {
        dispatch(setCarts(data.data));
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  })
}

export function addCartAsync({ url, payload, history }) {
  axios({
    url,
    method: 'POST',
    headers: { access_token: localStorage.access_token },
    data: payload
  })
    .then(({ data }) => {
      swal({
        title: "Success!",
        text: data.message,
        icon: "success",
        button: "Aww yiss!",
      });
      history.push('/my-cart');
    })
    .catch(err => {
      console.log(err);
    })
}

export function deleteCartAsync({ url, history, id }) {
  axios({
    url: url + '/' + id,
    method: 'DELETE',
    headers: { access_token: localStorage.access_token },
  })
    .then(({ data }) => {
      swal({
        title: "Success!",
        text: data.message,
        icon: "success",
        button: "Aww yiss!",
      });
      history.push('/');
    })
    .catch(err => {
      console.log(err);
    })
}

export function plusAmountAsync({ url, payload, setLoading }) {
  console.log(payload)
  axios({
    url,
    method: 'PUT',
    headers: { access_token: localStorage.access_token },
    data: payload
  })
    .then(({ data }) => {
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
    })
}
