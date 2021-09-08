import axios from "axios";
import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import config  from "../config";
import triggerNotImplemented from "../commons/notImpletedTrigger";
import lodash from 'lodash';

const ProductSpecs = () => {
    
    const [data, setData] = useState({ 
        info: { title: 'loading..'},
        items: [],
        ratings: []
    });

    const [selectedItem, setSelectedItem] = useState({});
    const [selectedCell, setSelectedCell] = useState(null);

    const fetchData = async () => {
        const { data } = await axios.get(
          `${config.PDP_BASEURL}/get-product-specs/1234?API_KEY=${config.PDP_API_KEY}`
        );
        setSelectedItem(data.items[0]);
        setData(data);
    };

    useEffect(() => fetchData(), []);

    
    const sizeSelected = (size, event) => {
        if(selectedCell){
            selectedCell.classList.remove('selected-cell');
        }else {
            // as default 1st cell was selected, we need to remove the selected-cell class
            event.target.parentElement.parentElement.firstElementChild.firstElementChild.classList.remove('selected-cell')
        }
        event.target.classList.add('selected-cell');
        setSelectedCell(event.target);
        let newItem = data.items.find( item => item.size === size && item.color === selectedItem.color);
        if(!newItem){
            //add dummy item out of stock
            newItem = {
                stock: 0,
                itemId: 'dummy-item',
                size,
                color: selectedItem.color
            }
        }
        setSelectedItem(newItem);
    }

    const colorSelected = (color) => {
        let newItem = data.items.find( item => item.color === color && item.size === selectedItem.size);
        if(!newItem){
            //add dummy item out of stock
            newItem = {
                stock: 0,
                itemId: 'dummy-item',
                size: selectedItem.color,
                color
            }
        }
        setSelectedItem(newItem);
    }

    const sizes = lodash.uniq(data.items.map( item => item.size )).sort((a,b) => a < b ? -1: 1);
    const colors = lodash.uniq(data.items.map( item => item.color));

    const selectColor =  <select 
        id='color' 
        style={{padding:'5px'}} 
        onChange={event => colorSelected(event.target.value)}>
        {colors.map( color => {
            return <option key={color} value={color}>{lodash.startCase(color)}</option>
        })}
    </select>

    
    const getRating = () => {
        let avgRating = 0;
        data.ratings.forEach( rating => avgRating += rating.stars);
        avgRating = avgRating/ data.ratings.length;
        let ratingStar = '';
        for (let i = 0; i < avgRating; i++) {
            ratingStar += '✭'
        }
        return <div>
                    <b>{ratingStar} </b>
                    <b style={{textDecoration:'underline'}}>{data.ratings.length}</b>
                </div>
    }
    
    const getSizeTable = () => {
        let sizeTable = [];
        let rowCells = [];
        for(let i = 0; i < sizes.length; i++) {
            if( (i >0 && i%5 === 0)){
                sizeTable.push(<tr key={'row-'+(i/5)}>{rowCells}</tr>);
                rowCells = [];
            } 
            rowCells.push(
                <td key={i} 
                    className={ i === 0 ? 'size-cells selected-cell': 'size-cells' } 
                    onClick={(event) => sizeSelected(sizes[i], event)}>
                        {sizes[i]}
                </td>
            );
            if(i === sizes.length - 1){
                sizeTable.push(<tr key={'row-'+(i/5)}>{rowCells}</tr>);
            }
        }
        return <table width={'100%'}>
                    <thead></thead>
                    <tbody>{sizeTable}</tbody>
                </table>
    }

    const getSizeGuidanceAndOutOfOrder = () => {
        return  <Grid container={true}>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}
                        onClick={triggerNotImplemented}>
                        <div>
                            <span style={{fontSize:'18px',verticalAlign: 'top'}}>&#5770; </span>
                            <span style={{textDecoration:'underline'}}>Size Guidance</span>
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}
                        onClick={triggerNotImplemented}>
                        <div style={{float: 'right', marginTop:'-10px'}}>
                            <span style={{fontSize:'25px',verticalAlign: 'sub'}}>&#9993; </span>
                            <span style={{textDecoration:'underline'}}>Size out of stock?</span>
                        </div>
                    </Grid>
                </Grid> 
    }

    const getAddToBagAndFavorite = () => {
        return  <Grid container={true}>
                    <Grid className="add-to-bag" item xs={9} sm={9} md={9} lg={9} xl={9}
                        onClick={triggerNotImplemented}>
                        <b>ADD TO BAG</b>
                        <span style={{float: 'right'}}>→</span>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                    <Grid className="add-to-fav" item xs={2} sm={2} md={2} lg={2} xl={2}
                        onClick={triggerNotImplemented}>
                        ♡
                    </Grid>
                </Grid> 
    }

    return(
        <div className="product-spec-container">
            <div style={{marginTop:'10px', fontSize: '12px'}}>
                Volleyball 
                <span style={{float:'right'}}
                    onClick={triggerNotImplemented}>
                    {getRating()}
                </span>                             
            </div>
            <div style={{marginTop:'15px', fontSize: '35px', fontStyle: 'italic'}}>
                {data.info.title}
            </div>   
            <div style={{marginTop:'5px', fontSize: '14px'}}>
                { colors.map( color => lodash.startCase(color)).join(' / ') }
            </div> 
            <div style={{marginTop:'20px', fontSize: '18px'}}>
                <b>{selectedItem.stock === 0? 'Out Of Stock' : '€ ' + selectedItem.price}</b>
            </div>
            <div style={{marginTop:'15px', fontSize: '14px'}}>
                <b>Select color</b>
            </div>
            <div style={{marginTop:'15px', fontSize: '14px'}}>
                {selectColor}
            </div>
            <div style={{marginTop:'15px', fontSize: '14px'}}>
                <b>Select size</b>
            </div>
            <div style={{marginTop:'15px', fontSize: '12px'}}>
                {getSizeTable()}
            </div>
            <div style={{marginTop:'15px', fontSize: '12px'}}>
                {getSizeGuidanceAndOutOfOrder()}
            </div>
            <div style={{marginTop:'20px'}}>
                {getAddToBagAndFavorite()}
            </div>
        </div>
    )
}

export default ProductSpecs;