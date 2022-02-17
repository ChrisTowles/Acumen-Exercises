import React, { Component, MouseEvent } from 'react';

interface Props {

}

interface State {
    counter: number;
}

export class MyCounter extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0 } as State;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: MouseEvent<HTMLButtonElement>) {
        this.setState((state: State, props: Props) => {
            return {counter: state.counter};
        });
    }
    
    render() {
        return <div>
            <button>
                Click Me
            </button>
            <p>
                Count: {this.state.counter}
            </p>
        </div>
    }
}