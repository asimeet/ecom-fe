import Grid from '@material-ui/core/Grid';
import ProductDescription from './ProductDescription';
import ProductSlider from './ProductSlider';
import ProductSpecs from './ProductSpecs';
const ProductDescriptionLayout =  function(props) {
    return (
        <div>
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