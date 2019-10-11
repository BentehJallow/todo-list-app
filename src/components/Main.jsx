
import React, { Component } from 'react';

import { Card, Button, Form, FormGroup, Input } from 'reactstrap';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      input: ''
    }
  }

  handleAddFriend = () => {
    this.setState((currentState) => {
      return {
        friends: currentState.friends.concat([{
          name: currentState.input,
          active: true
        }]),
        input: ''
      }
    })
  }

  handleRemoveFriend = (name) => {
    this.setState((currentState) => {
      return {
        friends: currentState.friends.filter((friend) => friend !== name)
      }
    })
  }

  handleInput = (event) => {
    const value = event.target.value
    this.setState({
      input: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div style={{ width: '400px', margin: '10px auto' }}>
        <h3 className="text-center text-uppercase">Todo List App</h3>
        <Card className="p-4">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input type="text"
                name="todo"
                placeholder="Add todo"
                value={this.state.input} onChange={this.handleInput}
              />
              <Button className="mt-3 btn-block"
                color="primary"
                size='md'
                onClick={this.handleAddFriend}> Submit
              </Button>
            </FormGroup>
            <FormGroup>
              <Button size='sm' onClick={() => this.setState({ friends: [] })}>
                Clear All
              </Button>
            </FormGroup>
          </Form>
          <div>
            <ul>
              {this.state.friends.map((friend) => (
                <li key={friend.name}>
                  <div className="wrapper">
                    <span className="list">{friend.name}</span>
                    <Button className="pull-right"
                      color='danger'
                      size='sm'
                      onClick={() => this.handleRemoveFriend(friend)}>
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    )
  }
}

export default Main;
