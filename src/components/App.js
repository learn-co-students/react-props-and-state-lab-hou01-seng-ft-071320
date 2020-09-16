import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {

  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }

  onChangeType = (newType)=>{
    this.setState({
      filters:{
        type: newType
      }
    })
  }

  filter = {
    all: '/api/pets',
    cat: '/api/pets?type=cat',
    dog: '/api/pets?type=dog',
    micropig: '/api/pets?type=micropig'
  }

  onFindPetsClick = ()=>{
    fetch(this.filter[this.state.filters.type])
    .then(res => res.json())
    .then(filteredPets => {
      this.setState({ pets: filteredPets })
    })
  }


  onAdoptPet = (petId) => {
    const pets = [...this.state.pets].map(pet => {
      return (pet.id === petId ? { ...pet, isAdopted: true } : pet);
    });
    this.setState({ pets: pets });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
