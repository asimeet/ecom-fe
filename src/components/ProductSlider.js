import ImageGallery from 'react-image-gallery';
import axios from "axios";
import { useEffect, useState } from "react";
import config  from "../config";

const ProductSlider = (props) => {

    const [images, setImages] = useState([{
        original: 'https://cdn2.vectorstock.com/i/1000x1000/70/71/loading-icon-load-icon-wait-for-a-wait-please-wait-vector-24247071.jpg',
        thumbnail: 'https://cdn2.vectorstock.com/i/1000x1000/70/71/loading-icon-load-icon-wait-for-a-wait-please-wait-vector-24247071.jpg'
    }]);

    const fetchData = async () => {
        const { data } = await axios.get(
          `${config.PDP_BASEURL}/get-product-images/1234?API_KEY=${config.PDP_API_KEY}`
        );
        setImages(data.imageUrls);
    };

    useEffect(() => fetchData(), []);

    return(
        <div className="slider-container">
            <div className="slider-header">
                <div style={{marginRight: '10px', fontWeight:600}}>↵</div>
                <div style={{marginRight:'10px', textDecoration: 'underline'}}> <b>Back</b></div>
                <div style={{marginRight:'10px', textDecoration: 'underline'}}>Home/</div>
                <div style={{marginRight:'10px', textDecoration: 'underline'}}>Volleyball/</div>
                <div style={{marginRight:'10px', textDecoration: 'underline'}}>Shoes</div>
            </div>
            <ImageGallery items={images}
                          showPlayButton={false}
                          additionalClass="image-gallery-add-class">
            </ImageGallery>
        </div>
    );
}

export default ProductSlider;