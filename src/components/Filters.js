import React from 'react'

class Filters extends React.Component {
  
  state = {
    value: 'All'
  }

  changeState = (e) => {
    this.setState({value: e.target.value}, this.changeTypeOnParent)
  }

  changeTypeOnParent = () => {
    this.props.onChangeType(this.state.value)
  }

  findPetsFn = () => {
    this.props.onFindPetsClick()
  }
    
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.changeState} >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={ this.findPetsFn } className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters