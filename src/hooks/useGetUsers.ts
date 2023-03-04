import { useEffect, useState } from 'react';
import { User } from '@/types';

export const useGetUsers = (url: string) => {
  const [data, setData] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  },[url]);

  return { data, isLoading, error };
};