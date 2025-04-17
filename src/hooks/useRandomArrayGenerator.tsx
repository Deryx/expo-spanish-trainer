import React, { useEffect } from "react";

const useRandomArrayGenerator = ( array: string[] ) => {
    const arrayLength = array.length;
    let randomArray: string[] = [];

    useEffect(() => {
        const generateRandomNumber = () => Math.floor(( Math.random() * arrayLength ));
        let index = 0;
        let randomNumbers: number[] = [];

        while( index < arrayLength ) {
            let newNumber = generateRandomNumber();
            
            if( !randomNumbers.includes( newNumber ) ) {
                randomArray = [...randomArray, array[newNumber]];
                index++;
            } else {
              continue;  
            }
        }
    }, []);

    return randomArray;
};  

export default useRandomArrayGenerator;