import React, { useState } from 'react';
import data from './data.js';




const Accordian = () => {
    const [selected, setSelected] = useState();
    const [clicked,setClicked] = useState(false);
    const handleClick = (id) => {
        setSelected(id);
        setClicked(!clicked);
    }
    return (
        <>
            {data && data.length > 0 ? (
                <div>
                    {data.map((value) => (
                        <button key={value.id} onClick={() => handleClick(value.id)}>
                            Question: {value.title}
                            {selected === value.id && clicked ? <div>Answer: {value.content}</div>: null}
                        </button>
                    ))}
                </div>
            ) : (
                <h1>Nothing found</h1>
            )}
        </>

    );
}

export default Accordian;