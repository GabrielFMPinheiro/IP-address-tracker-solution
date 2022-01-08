import React, { Component } from 'react'
import tw, { styled } from 'twin.macro'

const Title = styled.h1`
  ${
    tw`
      text-white
      text-font-title
      font-medium
      md:text-3xl
      mt-6
      md:mt-8
      relative
      z-20
    `
  }
`

export default class Header extends Component {
  render() {
    return (
      <div>
        <Title>IP Address Tracker</Title>
      </div>
    )
  }
}
