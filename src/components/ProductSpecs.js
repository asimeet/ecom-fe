import axios from "axios";
import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import config  from "../config";

const ProductSpecs = () => {

    const [data, setData] = useState({ 
        info: { title: 'loading..'},
        sizes: [],
        colors: [],
        basePrice: 'loading'
    });

    const fetchData = async () => {
        const { data } = await axios.get(
          `${config.PDP_BASEURL}/get-product-specs/1234?API_KEY=${config.PDP_API_KEY}`
        );
        setData(data);
    };

    useEffect(() => fetchData(), []);

    const sizeSelected = () => {
        console.log('kala');
    }

    let sizeTable = [];
    let rowCells = [];
    for(let i = 0; i < data.sizes.length; i++) {
        if( i >0 && i%6 === 0){
            sizeTable.push(<tr key={'row-'+(i/6)}>{rowCells}</tr>);
            rowCells = [];
        }
        let cellContent = data.sizes[i];    
        if(cellContent.includes('/')){
            const denominator = cellContent.split('/')[1];
            const numerator = cellContent.split('/')[0].split(' ')[1];
            const integer = cellContent.split('/')[0].split(' ')[0];
            cellContent = <span>{integer}<sup>{numerator}</sup>&frasl;<sub>{denominator}</sub></span>
        }
        rowCells.push(<td key={i} className="size-cells" onClick={sizeSelected}>{cellContent}</td>);
    }

    return(
        <div className="product-spec-container">
            <div style={{marginTop:'10px', fontSize: '14px'}}>
                Originals 
                <span style={{float:'right'}}>
                    <b>✭✭✭✭✭ </b><b style={{textDecoration:'underline'}}>639</b>
                </span>                             
            </div>
            <div style={{marginTop:'20px', fontSize: '42px', fontStyle: 'italic'}}>
                {data.info.title}
            </div>   
            <div style={{marginTop:'10px', fontSize: '14px'}}>
                {data.colors.join(' / ')}
            </div> 
            <div style={{marginTop:'30px', fontSize: '24px'}}>
                <b>{data.basePrice}</b>
            </div>
            <div style={{marginTop:'20px', fontSize: '14px'}}>
                <b>Select size</b>
            </div>
            <table style={{marginTop:'20px', fontSize: '14px', width:'100%'}}>
                <thead></thead>
                <tbody>{sizeTable}</tbody>
            </table>
            <Grid container={true} style={{marginTop:'30px'}}>
                <Grid className="add-to-bag" item xs={9} sm={9} md={9} lg={9} xl={9}>
                    <b>ADD TO BAG</b>
                    <span style={{float: 'right'}}>→</span>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                <Grid className="add-to-fav" item xs={2} sm={2} md={2} lg={2} xl={2}>
                    ♡
                </Grid>
            </Grid>   
        </div>
    )
}

export default ProductSpecs;