import Grid from '@material-ui/core/Grid';
import ProductDescription from './ProductDescription';
import ProductSlider from './ProductSlider';
import ProductSpecs from './ProductSpecs';
import lodash from 'lodash';
import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect, useState } from "react";
import config  from "../config";

const ProductDescriptionLayout =  function(props) {

    const [data, setData] = useState({ 
        metadata: null
    });

    const fetchData = async () => {
        const { data } = await axios.get(
          `${config.PDP_BASEURL}/get-product-metadata/1234?API_KEY=${config.PDP_API_KEY}`
        );
        setData(data);
    };

    useEffect(() => fetchData(), []);

    const getMetadata = () => {
        if (!data || !data.metadata) {
            return '';
        }
        const helmetInsides = [];
        if(data.metadata.title){
            helmetInsides.push(<title>{data.metadata.title}</title>)
        }
        Object.keys(data.metadata).forEach( key => {
            if(data.metadata[key]) {
                helmetInsides.push(
                    <meta name={lodash.kebabCase(key)} content={data.metadata[key]}></meta>
                );
            }
        });
        return  <Helmet>
                    {helmetInsides}
                </Helmet>
    }
    
    return (
        <div>
            {getMetadata()}
            <Grid container={true}>
                <Grid item md={8} lg={8}>
                    <ProductSlider></ProductSlider>
                </Grid>
                <Grid item md={4} lg={4}>
                    <ProductSpecs></ProductSpecs>
                </Grid>
                <Grid item md={8} lg={8}>
                    <ProductDescription></ProductDescription>
                </Grid>
                <Grid item md={4} lg={4}>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductDescriptionLayout;