import logo from './logo.svg';
import './App.css';
import {Card, TextField, Typography, Button} from "@mui/material"
import {useFormik} from "formik"
import * as Yup from "yup"


function App() {


  const schema = Yup.object({
    email:Yup.string().email("Please Enter a valid email").required("Email is required"),
    password:Yup.string().min(7, "Password is not secure").required("Password is required")
  })

  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit: async (values, helpers) => {
      console.log(values)
      try {
        alert("Form Submitted")
      } catch(error){
        helpers.setErrors({submit:error.message})
      }
    },
    validationSchema:schema
  })
  return (
    <div className="App" style={{marginTop:"10%"}}>
        <Typography>Sign In</Typography>
        <Card style={{padding:"5% 20% 5% 20%"}}>
          <form onSubmit={formik.handleSubmit}>
          <TextField
          fullWidth
          label="Email Address"
          name="email"
          error={formik.errors.email}
          helperText={formik.errors.email}
          onChange={formik.handleChange}
          >
          </TextField>
          <TextField
          type="password"
          fullWidth
          label="Password"
          name="password"
          error={formik.errors.password}
          helperText={formik.errors.password}
          onChange={formik.handleChange}
          >
          </TextField>
          <Button variant="contained" type="submit" name="submit">Submit</Button>
          </form>
        </Card>
    </div>
  );
}

export default App;
