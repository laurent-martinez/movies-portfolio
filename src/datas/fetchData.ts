import { useState, useEffect } from 'react';

// Define the interface for a movie item
type MovieItem = {
  id: number;
  name: string;
  // Add other properties here as needed
};

// Define the interface for the API response
type ApiResponse = {
  items: MovieItem[];
  // Add other properties here as needed
};

// Define the interface for the hook return value
type HookReturn = {
  data: MovieItem[];
  loading: boolean;
  error: string;
};

// Define the custom hook function
const useFetch = (listId: string): HookReturn => {
  // State to hold the fetched data
  const [data, setData] = useState<MovieItem[]>([]);
  // State to indicate if data is being loaded
  const [loading, setLoading] = useState<boolean>(true);
  // State to hold any error that may occur during data fetch
  const [error, setError] = useState<string>(''); 

  // Use the useEffect hook to fetch data when the component mounts
  // or when the listId parameter changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(`https://api.themoviedb.org/3/list/${listId}?api_key=03225d0e89af801477a3dd882952c475&language=fr-FRENCH`);
        // Extract JSON data from the response
        const json: ApiResponse = await response.json();
        // Update the state with the fetched data
        setData(json.items);
        // Update the state to indicate that loading is complete
        setLoading(false);
      } catch (err) {
        // Update the state with any error that occurred
        setError(err.message);
        // Update the state to indicate that loading is complete
        setLoading(false);
      }
    };
    fetchData();
  }, [listId]);

  // Return the state variables as an object
  return { data, loading, error };
};

// Export the custom hook
export default useFetch;
