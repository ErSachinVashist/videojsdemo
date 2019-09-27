import React, {Component} from 'react';
import VideoPlayer from 'react-video-js-player';
import {withStyles, Card, CardContent, CardHeader, TextField, Button} from "@material-ui/core";
import {homeCss} from "../../helpers/componentStyle";

class VideoApp extends Component {
    player={}
    state={
        source:''
    }
    onPlayerReady(player) {
        console.log("Player is ready: ", player);
        this.player=player
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

    handleSubmit = (e) => {
        e.preventDefault()
        this.player.src(this.state.source);

    }

    render() {
        const {classes} = this.props;
        return (

            <Card className={classes.card}>
                <CardHeader
                    title="AWS Elemental Media Services Demo"
                    subheader={<span>Video Player : <a href='https://videojs.com' rel="noopener noreferrer" target='_blank'>videojs</a>
                        <br/>
                        <br/>
                        <form onSubmit={this.handleSubmit}>
                          <TextField
                              id="outlined-name"
                              label="Enter url"
                              value={this.state.source}
                              onChange={(e) => this.setState({source: e.target.value})}
                              margin="dense"
                              variant="outlined"
                          />
                            &nbsp;
                            &nbsp;
                            <Button style={{marginTop: 10}} size='large' variant='contained' color='secondary'
                                    type='submit'>Add Url</Button>
                        </form>
                    </span>}
                />
                <CardContent id="player-parent">
                    <VideoPlayer
                        controls={true}
                        src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
                        poster='http://www.example.com/path/to/video_poster.jpg'
                        width="720"
                        height="420"
                        onReady={this.onPlayerReady.bind(this)}
                        // onPlay={this.onVideoPlay.bind(this)}
                        // onPause={this.onVideoPause.bind(this)}
                        // onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                        // onSeeking={this.onVideoSeeking.bind(this)}
                        // onSeeked={this.onVideoSeeked.bind(this)}
                        // onEnd={this.onVideoEnd.bind(this)}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(homeCss)(VideoApp);
