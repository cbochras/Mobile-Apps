import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './EditItem.css';

// import swal from '@sweetalert/with-react';

// import material-ui styling
import { 
  Button, 
  Card,
  Grid,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from '@mui/material';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class EditItem extends Component {

  state = {
    id: this.props.store.recentClothing.id,
    type: this.props.store.recentClothing.type,
    kind: this.props.store.recentClothing.kind,
    brand: this.props.store.recentClothing.brand,
    image_url: this.props.store.recentClothing.image_url,
    color: this.props.store.recentClothing.color,
    material: this.props.store.recentClothing.material,
    description: this.props.store.recentClothing.description,
    date_worn: this.props.store.recentClothing.date_worn,
    isOther: false
};

  onCancel = () => {
    console.log('in onCancel');
    this.props.history.push( '/home' );
  }

  onSaveClick = () => {
    swal({
      title: "Your item was updated!",
      icon: "success",
    });
      this.onSave();
  }

  onSave = () => {
    console.log('in onSave', this.state );
    this.props.dispatch({
      type: 'UPDATE_ITEM',
      payload: this.state
    })
    this.props.history.push('/home')
  }

  onDeleteClick = () => {
    // swal({
    //   title: "Are you sure?",
    //   text: "This can't be undone!",
    //   icon: "warning",
    //   buttons: [ "AS IF!", true ],
    //   dangerMode: true,
    //   }).then(( willDelete ) => {
    //     if ( willDelete ) {
    //     this.onDeleteItem( this.state.id )
    //     swal( <div>
    //       <hr/>
    //       <Typography style={{ marginTop: 20 }}variant='body1'>DONATE</Typography>
    //       <img style={{ width: 100, height: 70 }} src='https://www.roadrunnerwm.com/hs-fs/hubfs/Donate_Icon.png?name=Donate_Icon.png'></img>
    //
    //       <Typography><a href="https://www.homelessshelterdirectory.org/" target="_blank"><b>Find nearby locations</b></a> to donate your gently-used clothing for those in need.</Typography>
    //       <Typography style={{ marginTop: 20 }} variant='body1'>RECYCLE</Typography>
    //       <img style={{ width: 100, height: 70 }} src='https://www.roadrunnerwm.com/hs-fs/hubfs/RecycleClothing_Icon.png?name=RecycleClothing_Icon.png'></img>
    //
    //       <Typography variant='body1'> Too worn out to donate?</Typography>
    //       <Typography variant='body1'>Nearly 100% of textiles can be recycled!</Typography>
    //     </div>, {
    //       title: "Deleted!",
    //       icon: "success",
    //       });
    //     }
    // })
  }

  // delete item
  onDeleteItem = ( itemId ) => {
    this.props.dispatch({
        type: 'DELETE_ITEM',
        payload: itemId
    })
  this.props.history.push('/home');  
  } // end onDeleteItem

  // updates the local state 
  handleChangeFor = ( event, propertyName ) => {
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
    }
  }

  render() {
    console.log( 'EDIIIIIIT ITEM:', this.state )
    return (
      <div>
        <Nav/>

      <div className='descriptionImg' style={{ textAlign: 'center'}}>
        <Card>
        <Typography
              style={{ fontFamily: 'Quicksand' }}
                variant='h5'>
                Edit this item
            </Typography>
            { this.state.image_url === '' ? ( null ) : ( 
              <Card style={{ textAlign: 'center', marginTop: 10 }}>
                <img className='addImage' src={ this.state.image_url }></img>
              </Card> ) }
        </Card>
      </div>
      <div className='editItemForm'>

      {/* drop down with type names */}
        <div className='editType'>
          <FormControl variant='outlined'>
            <InputLabel id="type-native-helper">Type</InputLabel>
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
                {this.props.store.types.map( type => {
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
              label="If 'Other', enter type:" 
              variant="outlined" 
              onChange={ ( event ) => this.handleChangeFor ( event, 'type' ) }>
            </TextField>
            )}
          </div>
          
        </div>

       <div className="kindRadio"
            style = { { paddingTop: 15 } }>
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

        <div className="image_Url"
          style = { { paddingTop: 20 } }>
          <TextField 
            htmlFor="image_Url"
            label='Image URL:'
            variant="outlined"
            onChange={ ( event ) => this.handleChangeFor( event, 'image_url' )}>
          </TextField>
        <div>
          
            </div>
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

        <div className='descriptionInput'>
          <TextField 
              value={ this.state.description }
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
              style={{textAlign:'center'}}>
              <Button 
                  style={{marginRight:'10px'}}
                  className='editItemBtn'
                  onClick={ this.onCancel }
                  variant='outlined'
                  color='primary'>
                  Cancel
              </Button>
              <Button 
                  onClick= { this.onSaveClick }
                  variant='contained'
                  >Save
              </Button>
              <br/>
              <Button 
                    style={{ marginTop: 10 }}
                    onClick= { this.onDeleteClick }
                    variant='contained'
                    color='secondary'>Delete Item
                </Button>
          </div>
      
      </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter ( EditItem ));