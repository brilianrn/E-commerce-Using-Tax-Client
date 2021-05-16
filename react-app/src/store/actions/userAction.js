import axios from 'axios';
import swal from 'sweetalert';

export function setUser(payload) {
  return { type: 'user/setUser', payload };
}

export function loginAsync({ url, setLoading, payload, history }) {
  axios({
    url,
    method: 'POST',
    data: payload
  })
    .then(({ data }) => {
      swal({
        title: "Welcome!",
        text: `Happy shopping ${data.name}`,
        icon: "success",
        button: "Aww yiss!",
      });
      setLoading(false);
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('name', data.name);
      history.push('/');
    })
    .catch(err => {
      console.log(err);
    })
}