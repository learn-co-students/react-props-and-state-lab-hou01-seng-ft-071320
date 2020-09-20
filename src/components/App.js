import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'All'
      }
    }
  }

  changeType = (petType) => {
      this.setState({
      filters: {
        ...this.state.filters,
        type: petType
      }
    })
  }

  generateFilterPath = () => {
    if (this.state.filters.type === 'All') {
      return "/api/pets"
    } else if (this.state.filters.type === 'cat') {
      return "/api/pets?type=cat"
    } else if (this.state.filters.type === 'dog') {
      return "/api/pets?type=dog"
    } else if (this.state.filters.type === 'micropig') {
      return "/api/pets?type=micropig"
    }
  }

  getPets = () => {
    let filterPath = this.generateFilterPath()

    fetch(filterPath)
    .then(res => res.json())
    .then(filteredPets => this.setState({ pets: filteredPets }))
  }

  adoptionProcess = (id) => {
    let newPets = this.state.pets.map(pet => {
        if (pet.id === id) {
          let adoptedPet = pet
          adoptedPet.isAdopted = true
          return adoptedPet
        } else { return pet}
      }
    )
    this.setState( {pets: newPets})
  }

  petIdFn = (id) => {
    //console.log(id)
    this.adoptionProcess(id)
  }

  componentDidMount() {
    this.getPets()
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.getPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.petIdFn} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App