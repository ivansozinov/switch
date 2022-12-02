import React from 'react';
import SwitchCentral from '../SwitchCentral/SwitchCentral';
import LeftJoyCon from '../LeftJoyCon/LeftJoyCon';
import RightJoyCon from '../RightJoyCon/RightJoyCon';

function SwitchCommon(props) {
    return <section className='switchWrapper'>
        <div className='reference' />
        <LeftJoyCon />
        <SwitchCentral />
        <RightJoyCon />
    </section>
    
}

export default SwitchCommon;