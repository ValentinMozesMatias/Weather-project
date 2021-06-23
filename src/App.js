 import React, { useState } from 'react';
import Container from './Components/Container'
import { SearchBar } from './Components/SearchBar/SearchBar';
import Title from './Components/Title/Title'
import './Components/Container.css'
import DateBuilder from './Components/dateBuilder/DateBuilder';

const App = (props) => {
  const [value, setValue] = useState('')
  return (
    <Container city={value}>
      <Title text='Vremea astazi' />
      <DateBuilder />
      <SearchBar
        value={value}
        onChangeText={(text) => setValue(text)} />
      <div className="row-view">
        <div className="container1">
        </div>
      </div>
    </Container>
  )
}

export default App;