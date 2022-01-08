import React, { Component } from 'react'
import tw, { styled } from 'twin.macro'
import { connect } from 'react-redux'

import BgImg from './images/pattern-bg.png'

import Header from './components/Header'
import Search from './components/Search'
import Information from './components/Information'
import Map from './components/leaflet/Map'
import Loading from './components/Loading'

import { fetchTracker } from './store/actions'
import { personalIP } from './store/actions/api'

const Wrapper = styled.div`
  ${
    tw`
      min-h-screen
      min-w-full
      flex
      flex-col
      items-center
    `
  }
`
const BackgroundImage = styled.div`
  ${
    tw`
      h-73
      sm:h-71
      absolute
      z-10
      inset-0
      lg:bg-top
    `
  }

  background-image: url(${BgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat
`
class App extends Component {

  async componentDidMount() {
    const { fetchTracker } = this.props
    const myIp = await personalIP();
    await fetchTracker(myIp);
  }

  render() {
    const { dataAPI: {data, isFetching} } = this.props

    if(data === 'empty' || isFetching) {
      return <Loading />
    }

    return (
      <Wrapper>
          <BackgroundImage />
          <Header />
          <Search />
          <Information />
          <Map />
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTracker: (onload, endpoint) => dispatch(fetchTracker(onload, endpoint)),
})

const mapStateToProps = (state) => ({
  dataAPI: state.fetchAPI,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)