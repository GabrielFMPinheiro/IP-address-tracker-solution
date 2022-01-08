import React, { Component } from 'react'
import { connect } from 'react-redux'
import tw, { styled }  from 'twin.macro'

import arrowImg from '../images/icon-arrow.svg'
import { fetchTracker, inputHandler } from '../store/actions'

const InputWrapper = styled.div`
  ${
    tw`
      relative
      mt-6
      lg:mt-7
      pl-6
      flex
      justify-between
      items-center
      bg-white
      w-10.8/12
      rounded-2xl
      max-w-104
      cursor-pointer
      z-20
    `
  }
`
const Input = styled.input`
  ${
    tw`
      outline-none
      border-none
      w-11/12
      text-very-dark-gray
      placeholder:text-xs
      sm:placeholder:text-lg
    `
  }
`

const Btn = styled.div`
  ${
    tw`
      bg-black
      py-input-icon
      w-16
      flex
      items-center
      justify-center
      cursor-pointer
      duration-300
      rounded-r-2xl
      hover:bg-very-dark-gray
    `
  }
`

const Error = styled.span`
  ${
    tw`
      text-red-600
      font-semibold
      m-auto
      absolute
      -top-6
      left-0
      sm:left-auto
      sm:top-auto
      sm:right-20
    `
  }

  display: ${props => props.display ? 'initial' : 'none'}
`

class Search extends Component {
  render() {
    const { inputHandler, fetchTracker, ipOrDomain, error } = this.props;

    return (
      <InputWrapper>
        <Input type="text" placeholder="Search for any IP address or domain" onChange={({target:{value}}) => inputHandler(value)}/>

        <Error display={error}>{error}</Error>
        <Btn onClick={() => fetchTracker(ipOrDomain)}>
            <img src={arrowImg} alt="arrow icon" />
        </Btn>
      </InputWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  inputHandler: (value) => dispatch(inputHandler(value)),
  fetchTracker: (endpoint) => dispatch(fetchTracker(endpoint))
})

const mapStateToProps = (state) => ({
  ipOrDomain: state.input.name,
  error: state.fetchAPI.error,
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)