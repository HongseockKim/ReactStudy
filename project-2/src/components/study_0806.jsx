import React,{useState,useEffect} from 'react';
import axios from "axios";

function Study0806(props) {
    const [state,setState] = useState([])

    useEffect(() => {
        axios.get('https://yts-proxy.now.sh/list_movies.json=rating')
            .then((res) =>{
                console.log(res.data.data.movies)
                setState(res.data.data.movies)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])//[] 빈 배열이 핵심

    //위에는 빈 state 에 값을 넣는 행위

    // function transition(){ state 변경시 이런식으로 변경 단 state 값이 배열이면 배열로 숫자면 숫자로 비슷한 값으로
    //     const newState = [...state];
    //     setState(newState);
    // }
    return (
        <>
            <div>
            {
                state.map(state => <div>{state.title}</div>)
            }
            </div>
        </>
    );
}

export default Study0806;