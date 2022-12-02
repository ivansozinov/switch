import React from 'react';
import YouTube from 'react-youtube';

function youtubeOpts() {
    return {
        height: '470',
        width: '800',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          modestbranding: 1,
          showinfo: 0
        }
    }
}

function _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
}

function SwitchCentral(props) {
    return <section className='centralConsole'>
        <YouTube videoId="7WvjSfCMiGU" opts={youtubeOpts()} onReady={_onReady} />
    </section>
}

export default SwitchCentral;