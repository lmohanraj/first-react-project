import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import {  useState } from "react";
import { useHistory } from "react-router";
import {useFormik} from 'formik';
import * as yup from 'yup';

// export function AddMovieForm() {

//     const addbuttonStyles = {
//         backgroundColor: "crimson", // Styling for ADD MOVIE button
//       };

//       const history = useHistory();
//       const [movieName, setMovieName] = useState(""); //useState for new movie name
//       const [moviePoster, setMoviePoster] = useState(""); //useState for new movie poster
//       const [movieDescription, setMovieDescription] = useState(""); //useState for new movie description
//       const [movieTrailer, setMovieTrailer] = useState("");
      
//       const createMovie = (newMovie) => {
//         fetch("https://6180e2e68bfae60017adfc81.mockapi.io/movies",
//         {method:'POST',
//         body : JSON.stringify(newMovie),
//         headers : {"Content-type" : "application/json"}
//       })
//         .then( data => data.json())
//         .then( () => history.push('/movies'))
//       }
//       const addMovie = () => {
//         // Function to add new movie
//         const newMovie = {
//           name: movieName,
//           pic: moviePoster,
//           desc: movieDescription,
//           trailer: movieTrailer,
//         };

//         createMovie(newMovie);
//       };

//   return (
//     <div className="Add-movie-form">
//       {/* Input field for adding new movie name */}
//       <TextField
//         id="outlined-basic"
//         label="Name"
//         variant="outlined"
//         placeholder="Enter a movie name"
//         value={movieName}
//         onChange={(evt) => setMovieName(evt.target.value)} />

//       {/* Input field for adding new movie poster */}
//       <TextField
//         id="outlined-basic"
//         label="Poster"
//         variant="outlined"
//         placeholder="Enter the movie poster url"
//         value={moviePoster}
//         onChange={(evt) => setMoviePoster(evt.target.value)} />

//       {/* Input field for adding new movie description */}
//       <TextField
//         className="TextField"
//         id="outlined-basic"
//         label="Description"
//         variant="outlined"
//         placeholder="Enter the movie description"
//         value={movieDescription}
//         onChange={(evt) => setMovieDescription(evt.target.value)} />

//       <TextField
//         className="TextField"
//         id="outlined-basic"
//         label="Trailer"
//         variant="outlined"
//         placeholder="Enter the movie trailer link"
//         value={movieTrailer}
//         onChange={(evt) => setMovieTrailer(evt.target.value)} />

//       {/* ADD MOVIE button */}
       
//       <Button
//       variant="contained"
//       style={addbuttonStyles}
//       onClick={addMovie}>
//       Add movie
//     </Button>

//     </div>
//   );
// }

export function AddMovieForm() {

  const addbuttonStyles = {
      backgroundColor: "crimson", // Styling for ADD MOVIE button
    };

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
      initialValues:{name:'',pic:'', desc:'', trailer:'', rating:''},
        validationSchema : addMovieValidationSchema,
        onSubmit:(values) => {createMovie(values)}
    });
    
    const createMovie = (newMovie) => {
      fetch("https://6180e2e68bfae60017adfc81.mockapi.io/movies",
      {method:'POST',
      body : JSON.stringify(newMovie),
      headers : {"Content-type" : "application/json"}
    })
      .then( data => data.json())
      .then( () => history.push('/movies'))
    }

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
    Add movie
  </Button>

  </form>
);
}
