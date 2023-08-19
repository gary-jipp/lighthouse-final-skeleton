import {useEffect, useState} from "react";
import axios from 'axios';

const useAxios = function(url, depends) {
  const [body, setBody] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setPending(true);
    setError(null);
    setBody(null);

    axios.get(url)
      .then(res => {
        setBody(res.data);
        setPending(false);
      })
      .catch(err => {
        setError(err.message);
        setPending(false);
      });

  }, [url, depends]);

  return [body, error, pending];
};

export default useAxios;