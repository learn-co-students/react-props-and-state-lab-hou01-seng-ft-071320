import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import pets from '../data/pets'

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

  fetchPets = () => {
    let PETS_URL = '/api/pets'

    if (this.state.filters.type !== 'all'){
      PETS_URL += `?type=${this.state.filters.type}`;
    }

    fetch(PETS_URL)
    .then(resp => resp.json())
    .then(pets => this.setState({pets: pets}));
  }

  onChangeType = ({ target: {value} }) => { 
    this.setState({filters:{...this.state.filters, type: value}})
  }

  onAdoptPet = petId =>{
    const pets = this.state.pets.map(p =>{
      return p.id === petId ? {...p, isAdopted: true} : p 
    })
    this.setState({pets: pets});
  }

  // onChangeType = (e) => {
  //   console.log(e.target.name)
  //   let peturl = 'api/pets'
  //   if(e.target.name === 'Cats'){
  //     peturl = 'api/pets?type=cats'
  //     })
  //   }else if(e.target.name === 'Dogs'){
  //     this.setState({
  //       ...this.state,
  //       filters: {
  //         type: dogs
  //       }
  //     })
  //   }else if(e.target.name === 'Micropigs'){
  //     this.setState({
  //       ...this.state,
  //       filters: {
  //         type: micropigs
  //       }
  //     })
  //   }
  // }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
              onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets}
              />
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
