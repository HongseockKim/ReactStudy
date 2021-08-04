import React from 'react';

function Hookchild({propFunction}) {

    const hohoho = () => {
        console.log('이건 후크차일드함수')
        propFunction()
    }
    return (
        <>
            <button onClick={hohoho}>클릭</button>
        </>
    );
}

export default Hookchild;