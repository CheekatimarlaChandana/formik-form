import {TextField } from '@mui/material'

import React from 'react'

const InputComp = ({variant,type,value,onChange,onBlur,label,name,endAdornment}) => {
  return (
   <TextField
   name={name}
   label={label}
   type={type}
   variant={variant}
   value={value}
   onChange={onChange}
   onBlur={onBlur}
   fullWidth

   InputProps={{
    endAdornment:endAdornment
  }}

 />
  )
}

export default InputComp
