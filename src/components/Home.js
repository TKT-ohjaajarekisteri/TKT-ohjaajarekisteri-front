import React from 'react'
import { Redirect } from 'react-router'





class Home extends React.Component {

  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }
  render() {
    return (
      <div>
        <h2>Do you want to work as an assistant in TKT courses?</h2>
        <p>Login to apply</p>
        <button className="button" type="submit" onClick={this.setRedirect}>login</button>
      </div>)
  }
}


// const Home = () => {

//   const handleClick = () => {
//     render() {
//       <Redirect to='/login'/>
//     }
//   }
//   return (
//     <div>
//       <h2>Do you wanna assist TKT courses?</h2>
//       <p>Login to apply</p>
//       <button  className="button" type="submit" onClick={ this.setRedirect }>login</button>
//     </div> )
// }

export default Home