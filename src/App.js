import React, { useState } from 'react';
import Container from './Components/Container'
import { SearchBar } from './Components/SearchBar/SearchBar';
import Title from './Components/Title/Title'
import './Components/Container.css'

const App = () => {
  const [value, setValue] = useState('')


  return (
    <Container city={value}>
      <Title text='Vremea astazi' />
      <SearchBar
        value={value}
        onChangeText={(text) => setValue(text)} />
      {/* <ContainerClouds>

      </ContainerClouds> */}
      <div className="row-view">
        <div className="container1">

        </div>
        <div className="container2">

        </div>
        <div className="container1">

        </div>
      </div>

    </Container>
  )
}

export default App;