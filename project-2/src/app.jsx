import React from "react";
import PropTypes from 'prop-types';
import State from "./components/state";
import Feath from "./components/feath";
import './app.css';
import Hookstudy from "./components/hookstudy";
import Hooktest from "./components/hooktest";
import Study0806 from "./components/study_0806";
const foodLike =[
    {
        id:1,
      name:'월',
      text:'하루하루',
        rating:5
    },
    {
        id:2,
      name:'화',
      text:'지나가는',
        rating:5
    },
    {
        id:3,
      name:'수',
      text:'나의',
        rating:5
    },
    {
        id:4,
      name:'목',
      text:'시간을',
        rating:4.9
    },
    {
        id:5,
      name:'금',
      text:'되돌려',
        rating:4.2
    },
    {
        id:6,
      name:'토',
      text:'하하하',
        rating:3
    },
    {
        id:7,
      name:'일',
      text:'힣히히',
        rating:2
    },
]
    function Food({name,text,ratings}){
        return(
            <div>
                <h2>내가 좋아하는 {name}</h2>
                <p>{ratings}</p>
                <p>{text}</p>
            </div>
        )

    }
    function renderFood (dish){
        return <Food  name={dish.name} text={dish.text}/>
    }
Food.prototype = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    ratings: PropTypes.number.isRequired,
}
function App() {
  return (
    <>
    <div>
        <Study0806/>
        <Hooktest/>
        <h2>------------------절취선---------------------</h2>
        <Hookstudy/>
        {
            foodLike.map(dish => <Food key={dish.id} name={dish.name} text={dish.text} ratings={dish.rating}/>)
            // foodLike.map(renderFood)}
        }
        <State/>
        <Feath/>
    </div>
    </>
  );
}

export default App;
