import React, {PureComponent} from 'react';

class Habit extends PureComponent {
    //habits 에 있는 함수 인자 를 받아온다
    //이놈의 자식 프롭의 온인크리먼트 의 그녀석 의 프롭 함수 인자 핫빗
    handelIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handelDecrement = () => {
        this.props.onDcrement(this.props.habit);
    };

    handelDelete = () => {
        this.props.onDelete(this.props.habit);
    };



    // state = {
    //     count:0,
    //
    // };
    // handleIncrement = ()=>{
    //     //state obj 안에있는 count 를 증가한뒤 state 를 업데이트
    //     this.setState({count : this.state.count + 1});
    // };
    // handleDecrease = ()=>{
    //     const count = this.state.count - 1;
    //     this.setState({count: count < 0 ? 0 : count});
    // };
    render() {
        console.log(this.props.habit)//애의 부모의 habis 에서 받아온 props
        //애는 habits 에 있는 이넘의 props 를 받아오는거임 this.props 의 카운트 는 this.props
        const {name,count} = this.props.habit;

        return (
            <li className={"habit"}>
             <span className={'habit-name'}>{name}</span>
             <span className={'habit-count'}>{count}</span>
                <button className={'habit-button habit-increase'} onClick={this.handelIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className={'habit-button habit-decrease'} onClick={this.handelDecrement}>
                    <i className="fas fa-minus-square "></i>
                </button>
                <button className={'habit-button habit-delete'} onClick={this.handelDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;