import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onFindPetsClick = () => {
    const filterType = this.state.filters.type
    if(filterType === "all") {
      fetch("/api/pets")
      .then(res => res.json())
      .then(pets => this.setState({pets}))
    } else {
      fetch(`/api/pets?type=${filterType}`)
      .then(res => res.json())
      .then(pets => this.setState({pets}))
    }
  }

  onChangeType = (event) =>{
    console.log(event.target.value)
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet
    })

    this.setState({
      pets: pets
      
    })
    console.log(this.state.pets)
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
