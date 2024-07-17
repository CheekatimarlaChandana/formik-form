import { Button } from '@mui/material'
import React from 'react'

const ButtonComp = ({type,variant,name,style}) => {
  return (
    <Button
    type={type}
     variant={variant}
     style={style}
     >{name}</Button>
  )
}

export default ButtonComp