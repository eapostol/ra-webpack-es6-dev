/**
 * Created by Edward_J_Apostol on 2017-05-01.
 */
export default class VideoPlayer  {
    constructor(videoFigureTag={},videoTag={},sourceTag={},getAllAnchors=[]){
        // note: do not add "extends Object" or "super"
        // when creating this custom object...
        console.log("bite me");
        this.createPlayer();
        this.initLinks();
    }



    createPlayer(){
        let playerComponent = document.createDocumentFragment();

        this.createVideoFigureTag(playerComponent);
        this.createVideoTag(playerComponent);
        this.createSourceTags(playerComponent);
        this.createAnchorTags(playerComponent);
        console.log(playerComponent);
        debugger;
        this.videoFigureTag = playerComponent.querySelector("#video_player");
        this.videoTag = playerComponent.querySelector("#video_player video");
        this.sourceTag = playerComponent.querySelectorAll("#video_player video source");
        this.allAnchors = playerComponent.querySelectorAll("#video_player figcaption a");
        document.querySelector("body").appendChild(playerComponent);

    }

    createVideoFigureTag(playerComponent){
        let figureTag = document.createElement("figure");
        figureTag.setAttribute("id","video_player");
        playerComponent.appendChild(figureTag);
    }

    createVideoTag(playerComponent){
        let videoTag = document.createElement("video");
        let firstPosterImage = "./images/matrix01_red_or_blue_pill.png";
        videoTag.setAttribute("id","videoPlayerTag"); // new added ID
        videoTag.setAttribute("controls","");
        videoTag.setAttribute("poster",firstPosterImage);
        playerComponent.querySelector("#video_player").appendChild(videoTag);
    }

    createSourceTags(playerComponent){

        // default sources
        let firstSources = ["./media/matrix01_red_or_blue_pill.mp4","./videos/nambia1.webm"];
        // create first source tag
        let sourceTag = document.createElement("source");

        sourceTag.setAttribute("src", firstSources[0] );
        sourceTag.setAttribute("type","video/mp4");
        playerComponent.querySelector("#video_player video").appendChild(sourceTag);
        // create second source tag
        sourceTag = document.createElement("source"); // replaces the first
        sourceTag.setAttribute("src", firstSources[1] );
        sourceTag.setAttribute("type","video/webm");
        playerComponent.querySelector("#video_player video").appendChild(sourceTag);

    }

    createAnchorTags(playerComponent){
        let movieList = ["./media/matrix01_red_or_blue_pill.mp4","./media/matrix02_multiple_smiths.mp4","./media/matrix03_bullet_time.mp4"];
        let thumbList = ["./images/matrix01_red_or_blue_pill.png","./images/matrix02_multiple_smiths.png","./images/matrix03_bullet_time.png"];
        let altList = ["The Red Pill or the Blue Pill","Multiple Smiths","Bullet Time"];

        let figCaptionTag = document.createElement("figcaption");
        // use a loop to append them quickly
        for (let i=0; i<movieList.length; i++){
            let anchor = document.createElement("a");
            let img = document.createElement("img");
            anchor.setAttribute("href", movieList[i] );
            img.setAttribute("src", thumbList[i] );
            img.setAttribute("alt", altList[i] );
            anchor.appendChild(img);
            figCaptionTag.appendChild(anchor);
        }
        playerComponent.querySelector("#video_player").appendChild(figCaptionTag);

    }

    initLinks(){
        let currentAnchors = this.allAnchors;
        for (let ai = 0; ai<currentAnchors.length; ai++){
            let currentAnchor = currentAnchors[ai];
            currentAnchor.addEventListener("click",this.onAnchorClick.bind(this),false);
        }
    }

    onAnchorClick(e){
        e.preventDefault();

        let video = this.videoTag;
        video.removeAttribute("controls");
        video.removeAttribute("poster");

        let currentElement = e.target;
        let currentLink = e.target.parentElement;
        console.log(currentLink);
        let currentHref = currentLink.getAttribute("href");
        let source = this.sourceTag;
        debugger;
        source[0].src = currentHref;
        video.load();
        video.play();

    }
}