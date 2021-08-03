import React, {PureComponent} from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <>
                <nav>
                    <h1 className={'navbar-logo '}>
                        <i className={"fab fa-amazon-pay"}></i>
                        <span>Habit Tracker</span>
                    </h1>
                    <span className={"navbar-count"}>진행중 습관<span>{this.props.totalCount}</span></span>
                </nav>
            </>
        );
    }
}

export default Navbar;
