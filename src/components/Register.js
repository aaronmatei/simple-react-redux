import React, { Component } from 'react';
import { addUser } from '../actions/actions';
import { connect } from 'react-redux';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      username: '',
      password: ''
    };
    // actions
    // reducers
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    this.props.addUser(this.state.user);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='exampleInputUsername'>Username</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputUsername'
              placeholder='Enter Username'
              name='username'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
