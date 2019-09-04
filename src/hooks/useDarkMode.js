import useLocalStorage from './useLocalStorage.js';
import { useEffect } from 'react';

const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage(setValue);
    console.log(setValue);

    useEffect(() => {
        if (storedValue) {
            setvaluedocument.body.className='darkMode';
        } else {
            document.body.classNme='';
        }
    }, [setValue]) 
    return (
        [storedValue, setValue]
    )

};

export default useDarkMode;