import { useState, useEffect } from 'react';

const useFetch = (listId : string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/list/${listId}?api_key=03225d0e89af801477a3dd882952c475&language=fr-FRENCH`);
        const json = await response.json();
        setData(json.items);
        setLoading(false);
      } catch (err) {
        setError(err as string);
        setLoading(false);
      }
    };
    fetchData();
  }, [listId]);

  return { data, loading, error };
};

export default useFetch;
