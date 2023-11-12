import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import './SearchBar.css'
// import SearchBar from "material-ui-search-bar";
import {
  Card,
  Typography 
} from '@mui/material';

class Searchish extends Component {
    state = {
    inputValue: ''
    }

    addItem = () => {
        this.props.history.push('/addItem')
      }

    // on item click, send to details page
    onItemClick = ( item ) => {
        console.log( 'in onItemClick:', item );
        this.props.dispatch({
        // set recently clicked item
            type: 'SET_BATMAN',
            payload: item
        })
        this.props.history.push('/description');  
    }

    render() {
        const items = this.props.store.clothing.filter(( item )=>{
            if( this.state.inputValue == null) {
            return item
            } else if ( item.color.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
                item.type.toLowerCase().includes(this.state.inputValue.toLowerCase()) || 
                item.material.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
                item.kind.toLowerCase().includes(this.state.inputValue.toLowerCase()) || 
                item.description.toLowerCase().includes(this.state.inputValue.toLowerCase()) || 
                item.brand.toLowerCase().includes(this.state.inputValue.toLowerCase())) {
            return item
            } 
        }).map( (item, i ) =>{
            return (
            
            <div className='closetItem' key={ i }>
                <ul>
                <Card
                style={{ margin: 5 }}>
                    <img src={ item.image_url } 
                        value={ item.key }
                        onClick={() => this.onItemClick( item )}>
                    </img>
                <Typography variant='subtitle2'>{ item.brand }</Typography>
                </Card>
                </ul>
            </div>
        )
        })

    return (
        <div>
            <div className ='searchBar'>
                {/*<SearchBar */}
                {/*    style={{ width: 200, marginLeft: 20 }}*/}
                {/*    value={ this.state.search }*/}
                {/*    onChange={( newValue ) => this.setState({ inputValue: newValue })}*/}
                {/*    onRequestSearch={() => this.filterByInput( this.state.inputValue )}/>*/}

                    { items.length === 0 || items === null ? (
                    <div className='noMatchingSearch'>
                    <Typography variant='body1'>No items matched your search '{ this.state.inputValue }'!</Typography>
                    <Typography variant='body1'>Try different keywords or try checking your spelling!</Typography>
                    </div>
                    ) : 
                    (<div style={{ textAlign:'center' }}>{ items }</div>) }
            </div>
        </div>
    );
  }
}

export default connect(mapStoreToProps)( withRouter ( Searchish ));
