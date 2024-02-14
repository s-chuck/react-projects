import React , {useContext} from 'react';
import RandomContext from '../context/random';

export default function() {
    const data = useContext(RandomContext);
    
    return (
        <>
            
            <button onClick={() => data.setCount(data.count+1)}>Increase</button>
            <button onClick={() => data.setCount(data.count-1)}>Decrease</button>
        </>
    );
}