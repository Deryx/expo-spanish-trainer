import React, { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
    const [data, setData] = useState<string[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ' + ${response.status}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
                setError(null);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Something went wrong');  
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();    
    }, [url]);

    return { data, loading, error };
}

export default useFetch;