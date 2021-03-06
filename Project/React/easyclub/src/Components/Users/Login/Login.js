import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink} from 'react-router-dom';
class Login extends Component {
  render() {
    error=(event)=>{
      if()
    }
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src= '/Images/logo.png'/> Log-in to your account
        </Header>
        <Form size='tiny'>
          <Segment stacked>
            <Form.Input 
            fluid icon='user' 
            iconPosition='left'
             placeholder='E-mail address'
             required 
            type='email'
            // error={{
            //   content: 'Please enter a valid email address',
            //   pointing: 'below',
            // }}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              required
              
              // className={!value.valid?'error':null}
            />            
            <Button color='teal' fluid size='large'onClick={()=> error(event)}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>  
          New to us?  <NavLink to="/users/signin" exact>Sign Up</NavLink>&nbsp;
        </Message>
      </Grid.Column>
    </Grid>
    )
  }
}
export default Login;