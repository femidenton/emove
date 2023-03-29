import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url:string) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setResult(response.data);
      } catch (error:any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { result, error, isLoading };
};

export default useFetch;
