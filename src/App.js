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
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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


export default function App()  {
  //  constructor(props){
  //    super(props);
  //    this.state={
  //      Title:""
  //    }
  //  }

  //  handelTitleChange= (event) =>{
  //    this.setState({
  //      Title: event.target.value
  //    })
  //  }

  // render(){

  const classes = useStyles();


  // const [State, setState] = React.useState({Title:"", age:""});
  // const Title= State.Title

  // const handleChange = (event) => {
  //   handelTitleChange(event.target.value);
  // };

  const [age, setAge] = React.useState('');
  const [Title, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
                            // value={Title}
                            // onChange={handelTitleChange}
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
                            type="text"
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
                        <FormControl variant="outlined" className={classes.formControl}>
                          <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                          <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={age}
                          onChange={handleChange}
                          label="Age"
                          defaultValue="Select Lanuage"
                          >
                              <MenuItem selected value={"Select Lanuage"}>Select Lanuage</MenuItem>
                              <MenuItem value={"English"}>English</MenuItem>
                              <MenuItem value={"Tamil"}>Tamil</MenuItem>
                          </Select>
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
// }
