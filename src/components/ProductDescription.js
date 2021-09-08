import axios from "axios";
import { useEffect, useState } from "react";
import config  from "../config";

const ProductDescription = () => {

    const [info, setInfo] = useState({ 
        title: 'loading..',
        header: 'loading...',
        description: 'loading...',
        recyleInfo: 'loading..'
    });

    const fetchData = async () => {
        const { data } = await axios.get(
          `${config.PDP_BASEURL}/get-product-description/1234?API_KEY=${config.PDP_API_KEY}`
        );
        setInfo(data.info);
    };

    useEffect(() => fetchData(), []);

    return(
        <div className="product-description-container">
            <div style={{fontSize: '30px'}}>
                <b>{info.title}</b>
            </div>
            <div style={{marginTop: '10px', fontSize: '20px', fontStyle:'italic'}}>
                {info.header}
            </div>
            <div style={{marginTop: '15px', fontSize: '14px'}}>
                {info.description}
            </div>
            <div style={{marginTop: '20px', fontSize: '12px'}}>
                {info.recyleInfo}
            </div>
        </div>
    )
}

export default ProductDescription;