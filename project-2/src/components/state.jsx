import React, {Component} from 'react';

class State extends Component {
    constructor(props) {
        super(props)
        console.log('hi 렌더순서1')
    }
    state ={
        count:0
    };

    add = () =>{
      console.log('add')
        //스테이트 값을 변경 할때는 이렇게 하는게 가장 나은 방법
        //this.state 로 변경하는건 좋치 않다
        //state 가 변경 될때마다 render 함수가 계속 렌더된다
        this.setState( current =>({count : current.count + 1}))
    };
    minus = () =>{
        console.log('minus');
        this.setState( current =>({count : current.count - 1}))
    };
    componentDidMount() {
        console.log('componentDid rendered 렌더순서3')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('upDate')
    }
    componentWillUnmount() {
        console.log('componetUnmount')
    }

    render() {
        console.log('render 렌더순서2')
        return (
            <>
                <h2>State</h2>
                <p>{this.state.count}</p>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </>
        );
    }
}

export default State;