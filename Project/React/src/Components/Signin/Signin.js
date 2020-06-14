import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import Input from '../Input/Input';
import 'semantic-ui-css/semantic.min.css';
 class Signin extends Component {
     state={
         Input:[
             {icon:'user', iconPosition:'left' ,placeholder:'E-mail address' ,type:'email', required:'required'}
         ]
     }
  render() {
    return (
        <div>
            {this.state.Input.map((x,i)=>{
return <Input key={i} icon={x.icon} iconPosition={x.iconPosition} required={x.required} type={x.type} >
fdgdfg
</Input>
            })}
        </div>
    //   <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    //   <Grid.Column style={{ maxWidth: 450 }}>
    //     <Header as='h2' color='teal' textAlign='center'>
    //       <Image src='/logo.png' /> Log-in to your account
    //     </Header>
    //     <Form size='large'>
    //       <Segment stacked>
    //         <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' type='email' required/>
    //         <Button color='teal' fluid size='large'>
    //           Login
    //         </Button>
    //       </Segment>
    //     </Form>
    //     <Message>
    //       New to us? <a href='#'>Sign Up</a>
    //     </Message>
    //   </Grid.Column>
    // </Grid>
     )
   }

 }
 export default Signin;