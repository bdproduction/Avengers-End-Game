import * as React from "react";
import IGalleryCarousel from "./galleryInterface.interface";

export default class GalleryCarousel extends React.Component<{ cards: any[] }, IGalleryCarousel> {
    constructor(props: any) {
        super(props);
        this.state = { currentImageIndex: 0, cards: [], interval: false };
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }
    prevSlide = () => {
        // find the index of the last image in the array
        const lastIndex = this.props.cards.length - 1;
        // check if we need to start over from the last index again
        const resetIndex = this.state.currentImageIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
        // assign the logical index to currentImageIndex that will use in render method
        this.setState({
            currentImageIndex: index
        });
    }
    hoverPrevSlide = () => {
        // stop carousel
        if (this.state.interval) {
            return;
        }
        this.setState({ interval: true });
        // keep sliding carousel if mouseover
        const intervalTimeout = setInterval(() => {
            this.prevSlide();
            if (!this.state.interval) {
                clearInterval(intervalTimeout);
            }
        },
            300
        );
    }
    onLeavePrevSlide = () => {
        this.setState({ interval: false });
    }
    nextSlide = () => {
        // find the index of the last image in the array
        const lastIndex = this.props.cards.length - 1;
        // check if we need to start over from the first index
        const resetIndex = this.state.currentImageIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
        // assign the logical index to currentImageIndex that will use in render method
        this.setState({
            currentImageIndex: index
        });
    }
    hoverNextSlide = () => {
        // stop carousel
        if (this.state.interval) {
            return;
        }
        this.setState({ interval: true });
        // keep sliding carousel if mouseover
        const intervalTimeout = setInterval(() => {
            this.nextSlide();
            if (!this.state.interval) {
                clearInterval(intervalTimeout);
            }
        },
            300
        );
    }
    onLeaveNextSlide = () => {
        this.setState({ interval: false });
    }
    render() {
        // get current image index
        const heroCardWidth = 200;
        const index = this.state.currentImageIndex;
        // create a new array with N videos from the source images
        let firstNVideo = this.props.cards.slice(index, index + Math.round(window.innerWidth / heroCardWidth));
        // check the length of the new array (it’s less than 5 when index is near the end of the array)
        if (firstNVideo.length < Math.round(window.innerWidth / heroCardWidth)) {
            // if the firstNVideo's length is lower than 5 images than append missing images from the beginning of the original array 
            firstNVideo = firstNVideo.concat(this.props.cards.slice(0, Math.round(window.innerWidth / heroCardWidth) - firstNVideo.length));
        }
        return (<div className="hero-gallery">
            <div className="hero-gallery-sider left" onTouchStart={this.nextSlide} onMouseOver={this.hoverNextSlide}
                onMouseLeave={this.onLeaveNextSlide}>
                <span className="glyphicon glyphicon-chevron-left"></span>
            </div>
            {firstNVideo}
            <div className="hero-gallery-sider right" onTouchStart={this.prevSlide} onMouseOver={this.hoverPrevSlide}
                onMouseLeave={this.onLeavePrevSlide}>
                <span className="glyphicon glyphicon-chevron-right"></span>
            </div>
        </div>
        )
    }
}