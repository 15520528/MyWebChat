import React, {Component} from 'react';
import {connect} from 'react-redux';
import {UserActions} from '../../Redux/Actions/UserActions';
import {
    Form, Icon, Input, Button, Checkbox, Row, Col,
} from 'antd';
import axios from 'axios';
import {UserService} from "../../Services/UserService";


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                phone: '',
                password: '',
                rePassword: '',
            },
            submitted: false
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
    handleSubmit = (e) => {
        if (this.state.user.password !== this.state.user.rePassword) {
            alert("Mật khẩu không khớp")
        } else {
            console.log(this.state.user.username);
            console.log(this.state.user.phone)
            console.log(this.state.user.password);
            console.log(this.state.user.rePassword);
            UserService.register(this.state.user.username, this.state.user.password, this.state.user.phone)
                .then(error => {
                    alert(error);
                })
                .catch(error => {
                    console.log(error);
                })
        }


        // console.log("xxxxxxxxxxxx")
        // let user1={
        //     userName: "mtSiniChi",
        //     password: "1234567",
        //     phone:'09998887711'
        // };
        // const x = JSON.stringify(user1);
        // axios.post(
        //     'http://localhost:6898/login',
        //     x,
        //     { responseType:'stream'}
        // )
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    render() {
        return (
            <Row style={{marginTop: '200px'}}>
                <Col span={8} offset={8}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="Username" name="username" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="Phone" name="phone" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Password" name="password" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Password" name="rePassword" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" className="login-form-button" onClick={this.handleSubmit}>
                                Register
                            </Button>
                             Or <a href="/login">Login now!</a>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {}
}

const mapDispatchToProps = (dispatch) => ({
    Login: (username, password) => dispatch(UserActions.login(username, password)),
});

export default Register;