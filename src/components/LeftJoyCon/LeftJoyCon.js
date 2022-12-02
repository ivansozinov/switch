import React from 'react';
import CrossButtons from '../CrossButtons/CrossButtons';
import Stick from '../Stick/Stick';

function LeftJoyCon(props) {
    return <section className={'leftJoyCon'}>
        <div className={'leftJoyConMinus'}>➖</div>
        <div className={'captureButton'} />
        <CrossButtons joycon={'left'} />
        <Stick />
    </section>
}

export default LeftJoyCon;