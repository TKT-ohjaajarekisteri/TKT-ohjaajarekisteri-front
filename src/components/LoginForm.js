
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { notify, setError } from './../reducers/notificationReducer'
import { login } from './../reducers/loginReducer'

const LoginForm = ({ history, notify, setError, login }) => {

  const [input, setInput] = useState({ username: '', password: '' })

  const handleLogin = (event) => {
    event.preventDefault()
    const { username, password } = input

    login(username, password)
    notify('this is a notification', 5)

    setInput({ username: '', password: '' })
  }

  const handleChange = (event) => {
    const newInput = {
      ...input,
      [event.target.name]: event.target.value
    }
    setInput(newInput)
  }

  return (
    <div className='studentForm'>
      <h2>Sign in with your University of Helsinki credentials</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>username </label>
          <input
            type="text"
            name="username"
            value={input.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>password </label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
        </div>
        <input className="button" type="submit" value="Login" />
      </form>

    </div>
  )
}

// const LoginForm = ({ history, notify, setError, saveUser }) => {

//   const handleLoginSubmit = async (event) => {
//     event.preventDefault()

//     const username = event.target.username.value
//     const password = event.target.password.value

//     event.target.username.value= ''
//     event.target.password.value= ''


//     //post login credentials to server
//     try {
//       const user = await loginService.login({
//         username: username,
//         password: password
//       })
//       //console.log(user,'tietokannastapalautettu user')

//       //set response user to localstore and reduxstore, and tokens
//       window.localStorage.setItem('loggedInUser', JSON.stringify(user))
//       const loggedUser = JSON.parse(window.localStorage.getItem('loggedInUser'))
//       //console.log(loggedUser,'localstoresta haettu user')
//       saveUser(loggedUser)
//       courseService.setToken(loggedUser.token)
//       studentService.setToken(loggedUser.token)
//       notify('user logged in', 5)

//       //checks role of logged user and redirects to right view
//       if (loggedUser.user.role === 'student' && loggedUser.user.email === false) {
//         console.log(loggedUser, ' student false email')
//         history.push('/register')
//       }
//       else {
//         history.push(`/students/${loggedUser.user_id}`)
//       }

//       if (loggedUser.user && loggedUser.user.role === 'admin') {
//         console.log(loggedUser, 'admin')
//         history.push('/courses')
//       }
//     }
//     catch (exception) {

//       console.log('login went wrong')
//       if (exception.response) {
//         if (exception.response.status === 400) {
//           setError('Username or password is missing!', 5)

//         } else if (exception.response.status === 401) {
//           setError('Username or password is incorrect!', 5)
//         }
//       } else {
//         setError('Error occurred, login failed')
//       }
//     }
//   }

//   return (
//     <div className='studentForm'>
//       <h2>Sign in with your University of Helsinki credentials</h2>
//       <form onSubmit={handleLoginSubmit}>
//         <div>
//           <label>username </label>
//           <input
//             type="text"
//             name="username"
//           />
//         </div>

//         <div>
//           <label>password</label>
//           <input
//             type="password"
//             name="password"
//           />
//         </div>
//         <button className="button" type="submit">login</button>
//       </form>

//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     logged: state.loggedUser,
//     username: state.username,
//     password: state.password,

//   }
// }

// export default connect(
//   mapStateToProps,
//   { notify, setError, saveUser }
// )(LoginForm)


const mapStateToProps = (state) => {
  return {
    loggedUser: state.loggedUser
  }
}

export default connect(
  mapStateToProps,
  { notify, setError, login }
)(LoginForm)