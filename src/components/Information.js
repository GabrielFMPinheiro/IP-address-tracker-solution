import PropTypes from "prop-types"
import React, { Component } from 'react'
import { connect } from 'react-redux'
import tw, { styled } from 'twin.macro'

const InfoWrapper = styled.section`
  ${
    tw`
      bg-white
      drop-shadow-md
      flex
      flex-col
      md:flex-row
      items-center
      md:items-start
      justify-center
      md:justify-start
      rounded-2xl
      w-10.8/12
      max-w-208
      mt-6
      md:mt-12
      gap-5
      md:gap-3
      lg:gap-8
      py-6
      md:pl-8
      md:pt-8
      md:pb-10
      z-20
    `
  }
` 

const Container = styled.div`
  ${
    tw`
      relative
      md:flex
      md:flex-col
      md:items-start
      md:w-64
      sm:min-h-[5rem]
    `
  }
`

const Subtitle = styled.h2`
  ${
    tw`
      uppercase
      text-dark-gray
      font-bold
      text-xss
      md:text-[0.8rem]
      text-center
      tracking-wider
      md:tracking-widest
      mb-1
      md:mb-3
    `
  }
`

const Separator = styled.div`
  ${
    tw`
      md:w-[0.01rem]
      md:bg-gray-300
      md:h-[4.5rem]
      md:absolute
      md:right-0
      md:top-3
    `
  }
`

const Info = styled.p`
  ${
    tw`
      text-very-dark-gray
      text-xl
      lg:text-2xl
      md:w-36
      lg:w-full
      md:leading-8
      font-medium
    `
  }
`

class Information extends Component {
  render() {
    const {ip, location: {city, region, timezone, postalCode}, isp} = this.props.data

    return (
      <InfoWrapper>

        <Container>
          <Subtitle>Ip addresss</Subtitle>
          <Info>{ip}</Info>
          <Separator />
        </Container>

        <Container>
          <Subtitle>Location</Subtitle>
          <Info>{region}, {city} {postalCode}</Info>
          <Separator />
        </Container>

        <Container>
          <Subtitle>Timezone</Subtitle>
          <Info>UTC{timezone}</Info>
          <Separator />
        </Container>

        <Container>
          <Subtitle>Isp</Subtitle>
          <Info>{isp}</Info>
        </Container>

      </InfoWrapper>
    )
  }
}

Information.propTypes = {
  data: PropTypes.shape({
    ip: PropTypes.string,
    isp: PropTypes.string,
    location: PropTypes.shape({
      city:PropTypes.string,
      region:PropTypes.string,
      timezone:PropTypes.string,
      postalCode:PropTypes.string,
    }).isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
  data: state.fetchAPI.data,
})

export default connect(mapStateToProps)(Information);
