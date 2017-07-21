import React from 'react';
import Counter from './Counter';
import propTypes from 'prop-types';
import { List } from 'immutable';

import './CounterList.css';

const CounterList = ({counters,onIncrement,onDecrement,onSetColor}) => {
    const counterList = counters.map(
        (counter,i) => (
            <Counter
                key={i}
                index={i}
                {...counter.toJS()}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
            />
        )
    );

    return (
        <div className="CounterList"> {counterList} </div>
    );
};

CounterList.propTypes = {
    counters : propTypes.instanceOf(List),
    onIncrement:propTypes.func,
    onDecrement : propTypes.func,
    onSetColor : propTypes.func
};

CounterList.defaultProps = {
    counters:[],
    onIncrement : () => console.log('onIncrement is not defined'),
    onDecrement : () => console.log('onDecrement is not defined'),
    onSetColor : () => console.log('onSetColor is not defined'),
};

export default CounterList;