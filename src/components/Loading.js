import React, { Component } from 'react'
import { CircularProgress } from '@mui/material'
import { Backdrop } from '@mui/material'

export default class Loading extends Component {
  render() {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
        data-testid="loading"
      >
      <CircularProgress color="inherit" />
    </Backdrop>
    )
  }
}
