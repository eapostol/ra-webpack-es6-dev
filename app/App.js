/**
 * Created by Edward_J_Apostol on 2017-04-28.
 */

import VideoPlayer from './VideoPlayer';

export default class App {
    constructor()
    {
        console.log("App: constructor() ");
        this.vp = null;
        this.makeVideoPlayer();
    }

    makeVideoPlayer(){

        window.addEventListener("load",this.onPageLoad,false);

    }

    // onPageLoad was "onReady" event handler
    onPageLoad(e){
        console.log("page is loaded");
        this.vp = new VideoPlayer();
    };
}
