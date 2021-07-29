import React, {Component} from 'react';

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
        return (
            <form ref={this.formRef} className={'add-from'} onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className={'add-input'} placeholder={'habit'}/>
                <button className={'add-button'}>Add</button>
            </form>
        );
    }
}

export default HabitAddForm;