import React from 'react';
import CrossButton from './CrossButton';

function CrossButtons(props) {
    const { joycon } = props;
    return <section className={'crossButtons'} >
        <CrossButton joycon={joycon} position={'top'} />
        <CrossButton joycon={joycon} position={'bottom'} />
        <CrossButton joycon={joycon} position={'left'} />
        <CrossButton joycon={joycon} position={'right'} />
    </section>
}

export default CrossButtons;