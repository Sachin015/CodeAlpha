import LightGallery from 'lightgallery/react';
import './Gallery.css'


const images = [
    {src:'/1.jpg' , alt : 'Morning sunlightt'},
    {src:'/2.jpg' , alt : 'Snow Lake'},
    {src:'/3.jpg' , alt : 'Himalaya'},
    {src:'/4.jpg' , alt : 'Beautiful Mountain'},
    {src:'/5.jpg' , alt : 'Beautiful View'},
    {src:'/6.jpg' , alt : 'Two Men Sitting'},
    {src:'/7.jpg' , alt : 'Playing Childrens'},
    {src:'/8.jpg' , alt : 'Beautiful Green Park'},
    {src:'/9.jpg' , alt : 'Perfect Shot'},
    {src:'/10.jpg' , alt : 'City Vechiels'},
    {src:'/11.jpg' , alt : 'Beautiful Road'},
    {src:'/12.jpg' , alt : 'Beautiful City'},
    {src:'/13.jpg' , alt : 'beautiful Highway'},
    {src:'/14.jpg' , alt : 'Enviromental Society'},
    {src:'/15.jpg' , alt : 'Beautiful Design Houses'},
    {src:'/16.jpg' , alt : 'Beautiful Environment'},
    {src:'/17.jpg' , alt : 'Labours'},
    {src:'/18.jpg' , alt : 'Portrait Sea'},
]

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom , lgAutoplay ,lgFullscreen ,lgShare ,lgRotate]}
            >

            {images.map((image , index)=> {
              return(
                <a href={image.src} key={index}>
                <img alt={image.alt} src={image.src} />
            </a>
              )
            })}

            </LightGallery>
        </div>
    );
}
export default Gallery