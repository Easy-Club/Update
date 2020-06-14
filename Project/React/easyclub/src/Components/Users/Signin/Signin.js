
import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import Inputs from '../../Input/Input';
import 'semantic-ui-css/semantic.min.css';
class Signin extends Component {
    state = {
        Input: [
            {icon:'user', iconPosition:'left', placeholder:'Name',type:'text',required:'required'},
            { icon:'envelope outline', iconPosition: "left", placeholder: "E-mail address", type: "email", required: "required" },
            {icon:"lock", iconPosition:"left", placeholder:"Password",type:"password",required:"required"},
            {icon:"phone", iconPosition:"left", placeholder:"Phone",type:"tel",required:"required"},
            {icon:"sort", iconPosition:"left", placeholder:"Level",type:"number",required:"required"},
            {icon:"birthday cake", iconPosition:"left", placeholder:"BirthDate",type:"text",required:"required"},
        ] 
    }
    render() {
        return (<div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/Images/logo.png' /> Signin to your account
                  </Header>
                    <Form size='large'>
                        <Segment stacked>
                            {this.state.Input.map((x, i) => {
                                return <Form.Input key={i}  icon={x.icon} iconPosition={x.iconPosition} placeholder={x.placeholder}required={x.required} type={x.type} >
                                </Form.Input>
                            })}
                            <Button color='teal' fluid size='large'>
                                Signin
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
        )
    }

}
export default Signin;