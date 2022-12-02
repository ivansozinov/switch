import React from 'react';
import CrossButtons from '../CrossButtons/CrossButtons';
import Stick from '../Stick/Stick';

function RightJoyCon(props) {
    return <section className={'rightJoyCon'}>
         <div className={'rightJoyConPlus'}>➕</div>
         <div className={'homeButton'} />
        <CrossButtons joycon={'right'} />
        <Stick />
    </section>
}

export default RightJoyCon;