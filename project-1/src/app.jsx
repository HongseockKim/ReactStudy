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

    // handelIncrement = (habit) => {//여기서 habit은 함수안에 있는 매개변수 즉 인자임 와우
    //     console.log(`습관추가${habit.name}`);
    //     // habit.count++
    //     // this.setState(this.state)
    //     //이렇게해도 좋치만 리액트에서는 직접적으로 state를 건드리는건 좋치않다
    //     const newHabits = [...this.state.habits];
    //     //... 은 위에있는 habits 배열안에있는 아이템들을 하나하나씩 새로운 배열안으로 복사하는 개념
    //     const idx = newHabits.indexOf(habit);
    //     newHabits[idx].count++;
    //     this.setState({habit:newHabits})
    // };
    //handelIncrement 라는 변수에 habit 함수를 담는다


    handelIncrement = (habit) => {
            console.log(`습관추가${habit.name}`);

            //여기서 habits 는 state habits 이다
            //변수 선언해서 다른 이름으로 했더니 상태 변경이 안되 고생했다
        //state 값에 setstate 값으로 해주는 부분이라 state 값으로해야한다
        //내가했던 setstate({value :[.../})이거랑 같은거부분
            const habits = this.state.habits.map(item => {
                if(item.id === habit.id){
                    return {...habit, count: habit.count + 1};
                }
                return item;
            })
            this.setState({habits})
        };

    handelDecrement = (habit) => {

        const habits = this.state.habits.map(item => {
            if(item.id === habit.id){
                const count = habit.count - 1;
                return {...habit, count: count < 0 ? 0 : count};
            }
            return item
        })
        this.setState({habits})
    };

    handelDelete = (habit) => {
        console.log(`습관삭제${habit.name}`);
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
    };
    handleAdd = (name) => {
        const habits = [...this.state.habits, {id:Date.now(), name: name,count : 0}];
        this.setState({habits});
    }
    handleReset = () =>{
        const habits = this.state.habits.map(habits => {
           if(habits.count !== 0 ){
               return {...habits, count : 0};
           }
           return  habits;
        });
        this.setState({habits})
    }
    render() {
        return (
            <>
                <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
                <Habits
                    habit = {this.state.habits}
                    onIncrement={this.handelIncrement}
                    onDcrement={this.handelDecrement}
                    onDelete={this.handelDelete}
                    onAdd={this.handleAdd}
                    onReset={this.handleReset}
                />
            </>
        );
    }
}

export default App;