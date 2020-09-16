import React from 'react'

class Pet extends React.Component {
  
    state={
      isAdopted: this.props.pet.isAdopted
    }
  

  // onAdoptPet = () => {
  //   console.log("TRUE", this.props.pet.id)
  //   this.setState({
  //     isAdopted: true
  //   })
  // }

  render() {
    const pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {pet.gender === 'male' ? '♂' : '♀'}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
          <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
            this.props.pet.isAdopted ? 
            <button className="ui disabled button">Already adopted</button>
            : <button 
                className="ui primary button" 
                onClick={() => this.props.onAdoptPet(pet.id)}>
                  Adopt pet
                  </button>
          }
          
        </div>
      </div>
    )
  }
}

export default Pet
