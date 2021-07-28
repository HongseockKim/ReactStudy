import React, {Component} from 'react';
import './app.css';
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
    state ={
        habits:[
            {id:1,name:'Reading',count:0},
            {id:2,name:'Running',count:0},
            {id:3,name:'Coding',count:0},
        ]
    };

    handelIncrement = (habit) => {//여기서 habit은 함수안에 있는 매개변수 즉 인자임 와우
        console.log(`습관추가${habit.name}`);
        // habit.count++
        // this.setState(this.state)
        //이렇게해도 좋치만 리액트에서는 직접적으로 state를 건드리는건 좋치않다
        const newHabits = [...this.state.habits];
        //... 은 위에있는 habits 배열안에있는 아이템들을 하나하나씩 새로운 배열안으로 복사하는 개념
        const idx = newHabits.indexOf(habit);
        newHabits[idx].count++;
        this.setState({habit:newHabits})
    };
    //handelIncrement 라는 변수에 habit 함수를 담는다

    handelDecrement = (habit) => {
        console.log(`습과감소${habit.name}`);
        const newHabits = [...this.state.habits];
        const idx = newHabits.indexOf(habit);
        const count = newHabits[idx].count -1;
        newHabits[idx].count = count < 0 ? 0 : count;
        this.setState({habit:newHabits})
    };

    handelDelete = (habit) => {
        console.log(`습관삭제${habit.name}`);
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
    };


    render() {
        return (
            <>
                <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}></Navbar>
                <Habits
                    habit = {this.state.habits}
                    onIncrement={this.handelIncrement}
                    onDcrement={this.handelDecrement}
                    onDelete={this.handelDelete}
                ></Habits>
            </>
        );
    }
}

export default App;