import React,{Component} from "react";
import "./style.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";


const style = {
  papersty: {
    minWidth: 275,
    backgroundColor:'#212121',
    marginTop: 20
  },
  cardsty: {
    minWidth: 270,
    backgroundColor:'#fafafa',
    margin: 20
  }
}


export default class App extends Component {
   constructor(props){
     super(props);
   }

  render(){

    return(
      <>
        <Grid container spacing={3}>
          <Grid item xs={1}/>
          <Grid item xs={10}>
            <paper style={style.papersty}>
            <Grid container>
              <Grid item xs={2}/>
              <Grid item xs={8}>
                <CardContent style={style.cardsty}>
                  <CardActions>
                    <CardContent>
                      <FontAwesomeIcon icon={faEdit}/>Add New Book
                      <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="Title"
                            label="Title"
                            helperText="Enter Book Title"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="Author"
                            label="Author"
                            helperText="Enter Book Author"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="Cover Photo URL"
                            label="Cover Photo URL"
                            helperText="Enter Book Cover Photo URL"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="ISBN Number"
                            label="ISBN Number"
                            helperText="Enter Book ISBN Number"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="Price"
                            label="Price"
                            helperText="Enter Book Price"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="username"
                            label="username"
                            name="username"
                            helperText="Plese enter username"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="Price"
                            label="Price"
                            helperText="Enter Book Price"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      </Grid>
                    </CardContent>
                  </CardActions>
                </CardContent>
              </Grid>
              <Grid item xs={2}/>
            </Grid>
            </paper>
          </Grid>
          <Grid item xs={1}/>
        </Grid>
      </>
    )
  }
}
