import { CircularProgress, Container } from '@material-ui/core'
import React from 'react'

const Loading = props => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <CircularProgress color="secondary" />
  </div>
)

export default Loading
