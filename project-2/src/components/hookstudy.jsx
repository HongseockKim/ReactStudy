import React, {Component,useState} from 'react';
import Hookchild from "./hookchild";
class Hookstudy extends Component {

    onCliss = () => {
        console.log('클릭!')
    }

    render() {
        return (
            <>
                <Hookchild propFunction={this.onCliss}/>
            </>
        );
    }
}

export default Hookstudy;