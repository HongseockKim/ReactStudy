import React,{useState,useEffect} from 'react';

function Hooktest(props) {

    const [eamil,setEmail] = useState("");
    const [itme,setItem] = useState(1);


    const sayHello = () => { console.log('hello') }
    const [state,setState] = useState(0);
    useEffect(sayHello,[state])//deps 갑을 빈값으로 두면 모든 state가 작동할때마다 useEffect 가 작동하지만
    //deps 에 변하는 state 값을 지정해주면 그 state 값이 변할때만 useEffect 가 동작한다
    //만약 위 형태에서 deps 값을 빈값으로 두면 mount 될때 한번 실행하고 끝난다

    // useEffect({
    //     sayHello(); 이런 형태랑 위 형태랑 다르다
    // },[])


    const updateEmail = (e) => {
        const {
            target: {value}
        } = e;
        setEmail(value)
    }
    const incrementItem = () =>{
        setItem(itme + 1);
    }
    const DcrementItem = () =>{
        setItem(itme - 1);
    }
    return (
        <>
            {state}
            <button onClick={() => setState(state + 1)}>Incremeant</button>
            <button onClick={() => setState(state - 1)}>Decremeant</button>
            <button onClick={incrementItem}>Incremeant type_2 {itme}</button>
            <button onClick={DcrementItem}>Dcremeant type_2 {itme}</button>
            <input type="text" value={eamil} onChange={updateEmail}/>
        </>
    );
}

export default Hooktest;