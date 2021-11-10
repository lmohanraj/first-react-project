import {useFormik} from 'formik';
import * as yup from 'yup';

// export function About() {
 
//   const validateAboutForm = (values) => {

//     const errors = {};

//     errors.email = (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) ? 
//     "Please provide valid email address" : "";
//     errors.password = 
//     (
//       values.password.length < 8) ? 
//     "Password should be min 8 characters long" : 
//     (  (values.password.length > 12) ? 
//        "Password should be max 12 characters long" : ""
//     )
    
//     return errors;
//   };  

//   return (
//    <div> 
//       <Formik
//       initialValues={{email:'email@123',password:'1234'}}
//       validate={validateAboutForm}
//       onSubmit={(values) => {console.log(values)}}
//       >
//         {
//           (formik) => (
//             <form onSubmit={formik.handleSubmit}>
//             <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
//             {formik.errors.email && formik.touched.email && formik.errors.email}
//             <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
//             {formik.errors.password && formik.touched.password && formik.errors.password}
//             <button type='submit'>Submit</button>
//          </form>
//           )
//         }
//       </Formik>
//   </div>
//   );
// }

export function About() {
 
  // const validateAboutForm = (values) => {

  //   const errors = {};

  //   errors.email = (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) ? 
  //   "Please provide valid email address" : "";
  //   errors.password = 
  //   (
  //     values.password.length < 8) ? 
  //   "Password should be min 8 characters long" : 
  //   (  (values.password.length > 12) ? 
  //      "Password should be max 12 characters long" : ""
  //   )
    
  //   return errors;
  // };  
  
    // ); => using destructuring

    // const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik(
    // {
    //   initialValues:{email:'user@email.com',password:''},
    //     validate:validateAboutForm,
    //     onSubmit:(values) => {console.log(values)}
    // }
    
  const aboutValidationSchema = yup.object({
    email : 
    yup.string()
    .required("Please fill the email address")
    .min(6,"Enter a bigger email ID")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Enter a valid email address"),
    password : 
    yup.string()
    .required("Please fill the password")
    .min(8,"Minimum 8 characters required")
    .max(12,"Maximum 12 characters")
  });

  const formik = useFormik({
    initialValues:{email:'user@email.com',password:''},
      // validate:validateAboutForm,
      validationSchema : aboutValidationSchema,
      onSubmit:(values) => {console.log(values)}
  });

  return (

  //  With destructuring
  //   <div> 
  //           <form onSubmit={handleSubmit}>
  //           <input id="email" type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
  //           {errors.email && touched.email && errors.email}
  //           <input id="password" type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
  //           {errors.password && touched.password && errors.password}
  //           <button type='submit'>Submit</button>
  //        </form>   
  // </div>
   <div> 
            <form onSubmit={formik.handleSubmit}>
            <input id="email" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.errors.email && formik.touched.email && formik.errors.email}
            <input id="password" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.errors.password && formik.touched.password && formik.errors.password}
            <button type='submit'>Submit</button>
         </form>   
  </div>
  );
}
