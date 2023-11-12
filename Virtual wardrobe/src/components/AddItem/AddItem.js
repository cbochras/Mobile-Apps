import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';

import './AddItem.css';
import swal from 'sweetalert';


// import material-ui styling
import { 
  Button, 
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  Grid,
  Paper,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from '@mui/material';


class AddItem extends Component {

  state = {
    type: '',
    kind: '',
    brand: '',
    image_url: '',
    color: '',
    material: '',
    description: '',
    isOther: false
  };

  // updates the local state clothing information 
  handleChangeFor = ( event, propertyName ) => {
      console.log( 'in handleChangeFor:', event.target.value )
      if ( event.target.value === 'other' && propertyName === 'type') {
        this.setState({
          ...this.State,
          isOther: true
          })
        } else {
      this.setState({
          ...this.state,
          [ propertyName ]: event.target.value
      })
      console.log('this.state', this.state )
    }
  }

  // when cancel button is clicked, send user back to home page
  onCancel = () => {
    console.log('in onCancel');
    this.props.history.push( '/home' );
  }

  // when save button is clicked, dispatch info to respective databases
  onSave = () => {
    console.log('in onSave:', this.state );
    this.props.dispatch({
      type: 'ADD_ITEM',
      payload: this.state
    })
    this.props.dispatch({
      type: 'ADD_TYPE',
      payload: this.state
    })
    swal({
      title: "Nice!",
      text: "Your item has been added!",
      icon: "success",
    });
    this.props.history.push( '/home' );
  }

  render() {
    return (
      <div>
        <Nav/>
        <div className='itemHeader'>
          <Typography 
              style={{ fontFamily: 'Quicksand' }}
              variant='h4'>
              Add an item
          </Typography>
        </div>

        <div className='addItemForm'>

        <div className="image_Url"
            style = { { paddingTop: 15 } }>
            <TextField 
              htmlFor="image_Url"
              label='Image URL:'
              variant="outlined"
              onChange={ ( event ) => this.handleChangeFor( event, 'image_url' )}>
            </TextField>
            <div>
              { this.state.image_url === '' ? ( null ) : ( 
              <Card style={{ textAlign: 'center', marginTop: 10 }}>
                <img className='addImage' src={ this.state.image_url }></img>
              </Card> ) }
            </div>
          </div>

        <div className="type" style = { { marginTop: 10 } }>
            <FormControl variant="outlined">
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId='type-label'
              id='type-native-helper'
              native
              label='Type'
              onChange={ ( event ) => this.handleChangeFor ( event, 'type' ) }
              inputProps={{
                name: 'type',
                }}>
              <option aria-label="None" value="" />
              { this.props.store.types.map( type => {
                return (
                  <option key={ type.id } 
                  value={ type.type }>
                  { type.type }
                  </option>
                )
              })}
              <option>other</option>
            </Select>
            </FormControl>
          <div className="hiddenOther"
            style = { { paddingTop: 10 } }>
            { this.state.isOther === false ? (
              null ) : ( <TextField className="otherType"
              id="outlined-basic" 
              label="Enter type:" 
              variant="outlined" 
              onChange={ ( event ) => this.handleChangeFor ( event, 'type' ) }>
            </TextField>
            )}
          </div>

        </div>
          
        <div className="kindRadio">
              
            <FormLabel>Kind:</FormLabel>
              <RadioGroup>

              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={4}>
                    <FormControlLabel
                      control={ <Radio />}
                      label='Top'
                      color='primary'
                      value='top'
                      onClick={ ( event ) => this.handleChangeFor( event, 'kind' )}/>
                  </Grid>

                  <Grid item xs={4}>
                    <FormControlLabel 
                    control={<Radio />} 
                    label="Bottom" 
                    color='primary'
                    value="bottom" 
                    onClick={ ( event ) => this.handleChangeFor( event, 'kind' )}/>
                  </Grid>

                  <Grid item xs={4}>
                    <FormControlLabel 
                      value="Accessory" 
                      color='primary' 
                      control={<Radio />} 
                      label="Accessory" 
                      onClick={ ( event ) => this.handleChangeFor( event, 'kind' )}/>
                  </Grid>

                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={4}>
                    <FormControlLabel 
                    value="Outfit" 
                    color='primary'
                    control={<Radio />} 
                    label="Outfit" 
                    onClick={ ( event ) => this.handleChangeFor( event, 'kind' )}/>
                  </Grid>

                  <Grid item xs={4}>
                  <FormControlLabel 
                    value="Other"
                    color='primary'  
                    onClick={ ( event ) => this.handleChangeFor( event, 'kind' )}
                    control={<Radio />} 
                    label="Other" />
                </Grid>

                </Grid>
              </Grid>
          
            </RadioGroup>
            
          </div>

        <div className="brand"
          style = { { paddingTop: 15 } }>
          <TextField 
            htmlFor="brand"
            label="Brand"
            variant="outlined"
            onChange={ ( event ) => this.handleChangeFor( event, 'brand' )}>
          </TextField>
        </div>

        

        <div className="colorOptions" 
            style = { { paddingTop: 15 } }>
            <FormLabel >
              Color:
            </FormLabel>
            <RadioGroup>

              <Grid container spacing={1}>

                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Red"
                        color="primary"
                        value="Red"
                        onClick={ ( event ) => this.handleChangeFor( event, 'color' )}
                      />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel                   
                        control={ <Radio /> }
                        label="Orange"
                        color="primary"
                        value="Orange"
                        onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                      />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel                
                        control={ <Radio /> }
                        label="Yellow"
                        color="primary"
                        value="Yellow"
                        onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                      />
                  </Grid>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                      <FormControlLabel
              
                        control={ <Radio /> }
                        label="Green"
                        color="primary"
                        value="Green"
                        onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel
                        control={ <Radio /> }
                        label="Blue"
                        color="primary"
                        value="Blue"
                        onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel          
                        control={ <Radio /> }
                        label="Purple"
                        color="primary"
                        value="Purple"
                        onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                      />
                    </Grid>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={4}>
                  <FormControlLabel
                    control={ <Radio /> }
                    label="Black"
                    color="primary"
                    value="Black"
                    onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                  />
              </Grid>
                  <Grid item xs={4}>
                  <FormControlLabel
            
                      control={ <Radio /> }
                      label="White"
                      color="primary"
                      value="White"
                      onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                    />
              </Grid>
                  <Grid item xs={4}>
                  <FormControlLabel
            
                      control={ <Radio /> }
                      label="Cream"
                      color="primary"
                      value="Cream"
                      onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                    />
              </Grid>
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Pink"
                        color="primary"
                        value="Pink"
                        onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                      />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Other"
                        color="primary"
                        value="Other"
                        onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                      />
                  </Grid>
                  
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Multi-color"
                        color="primary"
                        value="Multi-color"
                        onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                      />
                  </Grid>
                </Grid>
              </Grid>
            </RadioGroup>
          </div>       

        <div className="materialOptions" 
            style = { { paddingTop: 15 } }>
            <FormLabel >
              Material:
            </FormLabel>
            <RadioGroup>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        value="Cotton"              
                        label="Cotton"
                        color="primary"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Linen"
                        color="primary"
                        value="Linen"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Cashmere"
                        color="primary"
                        value="Cashmere"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                      <FormControlLabel
                        control={ <Radio /> }
                        label="Nylon"
                        color="primary"
                        value="Nylon"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel
                        control={ <Radio /> }
                        label="Rayon"
                        color="primary"
                        value="Rayon"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel
                        control={ <Radio /> }
                        label="Polyester"
                        color="primary"
                        value="Polyester"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                    </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={ <Radio /> }
                    label="Silk"
                    color="primary"
                    value="Silk"
                    onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={ <Radio /> }
                    label="Spandex"
                    color="primary"
                    value="Spandex"
                    onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                    />
                  </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                      control={ <Radio /> }
                      label="Wool"
                      color="primary"
                      value="Wool"
                      onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Other"
                        color="primary"
                        value="Other"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Unknown"
                        color="primary"
                        value="Unknown"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                  </Grid>
                </Grid>
              </Grid>
            </RadioGroup>
          </div>       

        <div className='descriptionInput'
            style = { { paddingTop: 15 } }>
              <TextField 
                  onChange={ ( event ) => this.handleChangeFor ( event, 'description' ) } 
                  type='text' 
                  label='Item Description'
                  variant='outlined'
                  multiline
                  style = { { width: 300 } }
                  rows={4}
                  maxRows={4}
                  >
              </TextField>
              <FormHelperText>Add Care / Washing Instructions or a Note</FormHelperText>
            </div>
        
        <div className='descriptionBtns'
              style={{ textAlign:'center' }}>
              <Button 
                  className='editItemBtn'
                  onClick={ this.onCancel }
                  variant='outlined'
                  color='primary'>
                  Cancel
              </Button>
              <Button 
                  style={{ marginLeft:'10px' }}
                  onClick= { this.onSave }
                  variant='outlined'
                  color='secondary'>Save
              </Button>
          </div>
        
        </div>
      </div>
    );
  }
}

export default connect( mapStoreToProps ) ( withRouter ( AddItem ));
