import React from 'react';

type testProps = {
    text: string
}

const TestComponent = ({text}: testProps) => {
    return (
        <h1>{text}</h1>
    )
}

export default TestComponent;
