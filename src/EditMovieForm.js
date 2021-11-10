import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import {useFormik} from 'formik';
import * as yup from 'yup';


export function EditMovieForm() {

    const {id} = useParams(); 
    const [formValues, setFormValues] = useState(null)
    const getMovie = () => {
      fetch("https://6180e2e68bfae60017adfc81.mockapi.io/movies/"+id)
      .then( data => data.json())
      .then( mv => setFormValues(mv));
  }
      //Get movie details
      
      useEffect(getMovie,[id]);
      
  return formValues? <EditMovie formValues={formValues} id={id}/> : '';
}

function EditMovie({formValues, id}){

  const history = useHistory();

  const addMovieValidationSchema = yup.object({
    name : 
    yup.string()
    .required("Please fill the movie name")
    .min(3,"Movie name should be atleast 3 characters long"),
    pic : 
    yup.string()
    .required("Movie poster is required"),
    desc : 
    yup.string()
    .required("Please fill the movie description")
    .min(20,"Minimum 20 characters required"),
    trailer : 
    yup.string()
    .required("Movie trailer is required"),
    rating : 
    yup.number()
    .required("Movie rating is required")
    .min(0,"Minimum rating is 0")
    .max(10, "Maximum rating is 10")
    });

  const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik({
    initialValues: formValues,
      validationSchema : addMovieValidationSchema,
      onSubmit:(values) => {editMovie(values)}
  });

  const updateMovie = (editedMovie) => {
    fetch("https://6180e2e68bfae60017adfc81.mockapi.io/movies/" + id,
    {
      method:"PUT",
      body : JSON.stringify(editedMovie),
      headers : {"Content-type" : "application/json"},
  })
    .then( data => data.json())
    .then( () => history.push('/movies'))
  }
  
  const editMovie = (values) => {
    // Function to find element & update data
    const newMovie = {
      name: values.name,
      pic: values.pic,
      desc: values.desc,
      trailer: values.trailer,
      rating : values.rating
    };
     
    updateMovie(newMovie);
  };

  const addbuttonStyles = {
    backgroundColor: "crimson", // Styling for ADD MOVIE button
  };

  return (
    <form className="Add-movie-form" onSubmit={handleSubmit}>
    {/* Input field for adding new movie name */}
    <TextField
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      placeholder="Enter a movie name"
      value={values.name} 
      onChange={handleChange} 
      onBlur={handleBlur}
      error={errors.name && touched.name}
      helperText={errors.name && touched.name && errors.name}
    />

    {/* Input field for adding new movie poster */}
    <TextField
      id="pic"
      name="pic"
      label="Poster"
      variant="outlined"
      placeholder="Enter the movie poster url"
      value={values.pic} 
      onChange={handleChange} 
      onBlur={handleBlur}
      error={errors.pic && touched.pic}
      helperText={errors.pic && touched.pic && errors.pic}
    />

    {/* Input field for adding new movie description */}
    <TextField
      className="TextField"
      id="desc"
      name="desc"
      label="Description"
      variant="outlined"
      placeholder="Enter the movie description"
      value={values.desc} 
      onChange={handleChange} 
      onBlur={handleBlur}
      error={errors.desc && touched.desc}
      helperText={errors.desc && touched.desc && errors.desc}
    />
    
    <TextField
      className="TextField"
      id="rating"
      name="rating"
      label="Rating"
      variant="outlined"
      placeholder="Enter the movie rating"
      value={values.rating} 
      onChange={handleChange} 
      onBlur={handleBlur}
      error={errors.rating && touched.rating}
      helperText={errors.rating && touched.rating && errors.rating}
    />

    <TextField
      className="TextField"
      id="trailer"
      name="trailer"
      label="Trailer"
      variant="outlined"
      placeholder="Enter the movie trailer link"
      value={values.trailer} 
      onChange={handleChange} 
      onBlur={handleBlur}
      error={errors.trailer && touched.trailer}
      helperText={errors.trailer && touched.trailer && errors.trailer}
    />

    {/* ADD MOVIE button */}
     
    <Button
    type="submit"
    variant="contained"
    style={addbuttonStyles}
    >
    Edit movie
  </Button>
  </form>
  );
}