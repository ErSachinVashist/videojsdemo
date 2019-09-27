import React, {Component} from 'react';
import VideoPlayer from 'react-video-js-player';
import {withStyles} from "@material-ui/core";
import {homeCss} from "../../helpers/componentStyle";

class VideoApp extends Component {
    player = {};
    state={
        source:''
    }
    onPlayerReady(player) {
        this.player = player;
    }

    onVideoPlay(duration) {
        console.log("Video played at: ", duration);
    }

    onVideoPause(duration) {
        console.log("Video paused at: ", duration);
    }

    onVideoTimeUpdate(duration) {
        console.log("Time updated: ", duration);
    }

    onVideoSeeking(duration) {
        console.log("Video seeking: ", duration);
    }

    onResolutionchange(resolution) {
        console.log("Resolution changed", resolution);
    }

    onVideoSeeked(from, to) {
        console.log(`Video seeked from ${from} to ${to}`);
    }

    onVideoEnd() {
        console.log("Video ended");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.video.src!==this.state.source){
            this.setState({source:nextProps.video.src})
        }
        return true;
    }

    render() {
        const {video}=this.props
        console.log("gsss",this.state.source)
        return (

            <VideoPlayer
                controls={true}
                src={video.src}
                poster={this.state.source}
                width="720"
                height="420"
                // onReady={this.onPlayerReady.bind(this)}
                // onPlay={this.onVideoPlay.bind(this)}
                // onPause={this.onVideoPause.bind(this)}
                // onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                // onSeeking={this.onVideoSeeking.bind(this)}
                // onSeeked={this.onVideoSeeked.bind(this)}
                // onEnd={this.onVideoEnd.bind(this)}
            />
        );
    }
}

export default withStyles(homeCss)(VideoApp);
