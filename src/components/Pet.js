import React from 'react'

class Pet extends React.Component {

  genderDecision = () => {
    if (this.props.gender === "female") {
      return '♀'
    } else {
      return '♂'
    }
  }

  adoptThisAngel = (e) => {
   this.props.onAdoptPet(this.props.id)
  }

  toggleAdoption = () => {
    if (this.props.isAdopted === true) {
      return (
        <div>
          <button className="ui primary button">Already adopted</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.adoptThisAngel} className="ui primary button">Adopt pet</button>
        </div>
      )
    }
  }

  render() {

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderDecision()}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
            { this.toggleAdoption() }
        </div>
      </div>
    )
  }
}

export default Pet
