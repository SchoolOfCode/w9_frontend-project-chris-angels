import { Checkbox } from '@mui/material'
import React from 'react'


function Hint({key, text}) {
  console.log(text)
  return (
    <li key={key} >{text.hint}<Checkbox></Checkbox></li>
  )
}

export default Hint