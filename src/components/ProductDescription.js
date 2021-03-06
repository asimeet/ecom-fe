import axios from "axios";
import { useEffect, useState } from "react";
import config  from "../config";

const ProductDescription = () => {

    const [data, setData] = useState({
        info:{ 
            title: 'loading..',
            header: 'loading...',
            description: 'loading...',
            recyleInfo: 'loading..'
        }
    });

    const fetchData = async () => {
        const { data } = await axios.get(
          `${config.PDP_BASEURL}/get-product-description/1234?API_KEY=${config.PDP_API_KEY}`
        );
        setData(data);
    };

    useEffect(() => fetchData(), []);

    return(
        <div>
            <div className="product-description-container">
                <div style={{fontSize: '25px'}}>
                    <b>{data.info.title}</b>
                </div>
                <div style={{marginTop: '10px', fontSize: '20px', fontStyle:'italic'}}>
                    {data.info.header}
                </div>
                <div style={{marginTop: '15px', fontSize: '14px'}}>
                    {data.info.description}
                </div>
                <div style={{marginTop: '20px', fontSize: '12px'}}>
                    {data.info.recyleInfo}
                </div>
            </div>
        </div>
        
    )
}

export default ProductDescription;