import React, {Component} from 'react';
//최상위 에 있는 데이터가 변하지 않으면 렌더 되지 않게해준다
//component 를 PureComponent 로 바꿔주면
class HabitAddForm extends Component {
    inputRef = React.createRef();
    formRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault();
        console.log('submit')
        console.log(this.inputRef.current.value);
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = '';
        this.formRef.current.reset();
    };
    render() {
        console.log('addForm');
        return (
            <form ref={this.formRef} className={'add-from'} onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className={'add-input'} placeholder={'habit'}/>
                <button className={'add-button'}>Add</button>
            </form>
        );
    }
}

export default HabitAddForm;