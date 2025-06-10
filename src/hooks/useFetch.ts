import React, { useEffect, useState } from 'react';
import { CategoryItem } from '../services/VocabularyService';

type UseFetchResult<T> = {
    data: T[] | null;
    loading: boolean;
    error: string | null;
}

// Option 1: Modify useFetch to handle both URLs and functions
export const useFetch = <T>(fetcher: string | (() => Promise<T[]>)): UseFetchResult<T> => {
    const [data, setData] = useState<T[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                let result;
                if (typeof fetcher === 'string') {
                    const response = await fetch(fetcher);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    result = await response.json();
                } else {
                    result = await fetcher();
                }
                setData(result);
                setError(null);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Something went wrong');  
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();    
    }, [fetcher]);

    return { data, loading, error };
}

export default useFetch;