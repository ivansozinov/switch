import React from 'react';

function positionToClassname(position) {
    return 'crossButtons' + position.charAt(0).toUpperCase() + position.slice(1);
}

function CrossButton(props) {
    const { joycon, position } = props;
    let symbol = '';
    if(joycon === 'right') {
        switch (position) {
            case 'top':
                symbol = 'X';
                break;
            case 'bottom':
                symbol = 'B';
                break;
            case 'left':
                symbol = 'Y';
                break;
            case 'right':
                symbol = 'A';
                break;
        }
    } 

    return <div className={positionToClassname(position)}>{symbol}</div>
}

export default CrossButton; 