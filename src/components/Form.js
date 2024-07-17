import React, { useState } from 'react'
import {useFormik} from "formik";
import * as Yup from "yup";
import { Card, IconButton, InputAdornment,} from '@mui/material';
import InputComp from './InputComp';
import {Visibility,VisibilityOff} from '@mui/icons-material';
import ButtonComp from './ButtonComp';

const initialValues = {
    name:"",
    email:"",
    password:"",
    cpassword:""
}

const validationSchema = Yup.object({
    name:Yup.string().min(3).required("name is required"),
    email:Yup.string().email("enter valid email").required("email is required"),
    password:Yup.string().min(5).required("password is required"),
    cpassword:Yup.string().oneOf([Yup.ref("password")],"password didnot match").required("confirm password is required")
})

const Form = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showcpassword,setShowcpassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    const handleClickShowConfirmPassword = () => {
        setShowcpassword(prev => !prev)

    }

   const {values,handleBlur,handleChange,handleSubmit,errors,touched}= useFormik({
        initialValues:initialValues,
        validationSchema:validationSchema,
        onSubmit:(values,{setValues})=>{
            console.log(values)
            // setValues(initialValues)

        }
    })
   

  return (
    <div style={{display: 'flex', justifyContent: 'center',  height: '100vh'}}>
    <Card style={{width:"600px",padding:"20px",height:"500px",}}>
     <form onSubmit={handleSubmit}>
        <h2>Form</h2>
        <InputComp
        label="first name"
        variant="outlined"
        type="text"
        name="name"
        value={values.name}
        onBlur={handleBlur}
        onChange={handleChange}
           /><br/>  <br/>   
        {/* <input type='text'  name='name' value={values.name} onBlur={handleBlur} onChange={handleChange}/><br/> */}
        {errors.name && touched.name ? (<div style={{color:"red"}}>{errors.name}</div>) : null} 
        <InputComp 
        type="email"
         variant="outlined"
        name="email"
        value={values.email}
        label="email"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br/><br/>
        {/* <input type='text'  name='email' value={values.email} onBlur={handleBlur} onChange={handleChange}/><br/> */}
        {errors.email && touched.email ? (<div style={{color:"red"}}>{errors.email}</div>) : null}
         <InputComp 
        type={showPassword ? "text" :"password"}
         variant="outlined"
        name="password"
        value={values.password}
        label="password"
        onChange={handleChange}
        onBlur={handleBlur}
        endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <br/><br/>
       {/* <input type='password'  name='password' value={values.password} onBlur={handleBlur} onChange={handleChange}/><br/> */}
        {errors.password && touched.password ? (<div style={{color:"red"}}>{errors.password}</div>) : null}
        

        <InputComp
        variant="outlined"
        label="confirm password"
         type={showcpassword ? "text" :"password"}
        name="cpassword"
        value={values.cpassword}
        onBlur={handleBlur}
        onChange={handleChange}

        endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmPassword}
                edge="end"
              >
                {showcpassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {/* <input type='password'  name='cpassword' value={values.cpassword} onBlur={handleBlur} onChange={handleChange}/><br/> */}
        {errors.cpassword && touched.cpassword ? (<div style={{color:"red"}} >{errors.cpassword}</div>) : null}<br/><br/>
        {/* <button type='submit'>submit</button> */}
        <ButtonComp type="submit" variant="contained" name="submit" style={{color:"white",textTransform:"capitalize"}}/>
        
    </form>
   </Card>
   </div>
  )
}

export default Form