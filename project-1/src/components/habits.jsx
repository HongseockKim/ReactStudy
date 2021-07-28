import React, {Component} from 'react';
import Habit from "./habit";

class Habits extends Component {

//전달 역할
    handelIncrement = (habit) => {//여기서 habit은 함수안에 있는 매개변수 즉 인자임 와우
       this.props.onIncrement(habit);
    };
    //handelIncrement 라는 변수에 habit 함수를 담는다

    handelDecrement = (habit) => {
        this.props.onDcrement(habit)
    };

    handelDelete = (habit) => {
        this.props.onDelete(habit)
    };


    render() {
        return (
            <ul>
                {
                    //내 스테이트 하빗 객체 개수만큼 배열을 뿌려주는 map 을 사용하여 habit을 뿌려줌
                    //리액트에서는 자식 컴포넌트가 있으면 고유 키 값이 있어야한다
                    //리액트에서 이 키값을 이용해 변경되었을때 id 값을 조회해서 성능 개선을 위해 불필요한
                    //렌더링을 줄여준다
                    //배열의 인덱스를 key 값으로 주면 안된다 고유키값을 사용해야한다

                    this.props.habit.map(habit => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.handelIncrement}
                            onDcrement={this.handelDecrement}
                            onDelete={this.handelDelete}
                        >
                        </Habit>
                    ))
                }
            </ul>
        );
    }
}

export default Habits;