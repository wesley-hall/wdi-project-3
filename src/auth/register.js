// import React from 'react'
// import axios from 'axios'
//
// class Register extends React.Component {
//   constructor() {
//     super()
//
//     this.state = {
//       data: {
//         username: '',
//         email: '',
//         password: '',
//         passwordConfirmation: ''
//       },
//       errors: {}
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//
//   handleChange({ target: { name , value }}) {
//     const data = {...this.state.data, [name]: value}
//     const errors = {...this.state.errors, [name]: ''}
//     this.setState({data,errors})
//   }
//
//   handleSubmit(e) {
//     e.preventDefault()
//     axios.post('our api/register', this.state.data)
//       .then(() => this.props.history.push('/login'))
//       .catch(err => this.setState({errors: err.response.data.errors}))
//   }
//
//   render() {
//     console.log(this.state.errors)
//     return (
//       <main className="section">
//         <div className="container">
//           <form onSubmit={this.handleSubmit}>
//             <h2 className="title">Register</h2>
//             <div className="field">
//               <label className="label">Username</label>
//               <div className="control">
//                 <input
//                   className={`input ${this.state.errors.username ? 'is-danger': ''}`}
//                   name="username"
//                   placeholder="Username"
//                   value={this.state.data.username}
//                   onChange={this.handleChange}
//                 />
//               </div>
//               {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
//             </div>
//             <div className="field">
//               <label className="label">Email</label>
//               <div className="control">
//                 <input
//                   className={`input ${this.state.errors.email ? 'is-danger': ''}`}
//                   name="email"
//                   placeholder="Email"
//                   value={this.state.data.email}
//                   onChange={this.handleChange}
//                 />
//               </div>
//               {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
//             </div>
//             <div className="field">
//               <label className="label">Password</label>
//               <div className="control">
//                 <input
//                   className={`input ${this.state.errors.password ? 'is-danger': ''}`}
//                   name="password"
//                   type="password"
//                   placeholder="Password"
//                   value={this.state.data.password}
//                   onChange={this.handleChange}
//                 />
//               </div>
//               {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
//             </div>
//             <div className="field">
//               <label className="label">Password Confirmation</label>
//               <div className="control">
//                 <input
//                   className={`input ${this.state.errors.password ? 'is-danger': ''}`}
//                   name="passwordConfirmation"
//                   type="password"
//                   placeholder="Password Confirmation"
//                   value={this.state.data.passwordConfirmation}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             <button className="button is-info">Register</button>
//           </form>
//         </div>
//       </main>
//     )
//   }
// }
//
// export default Register
