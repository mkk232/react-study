import React from 'react';

const caution = () => {
    const object = {
        a: 1,
        b: 2,
        c: 3
    };
    const nextObject = {
        object,
        b: 2
    }
    return (
        <div>
            <h1>{nextObject.a}</h1>
            <h1>{nextObject.c}</h1>
        </div>
    );
};

export default caution;