/**
 * @ Title: login.js
 * @ Description: TODO
 * @ author Tantaiqiuyue@gmail.com
 * @ createDate 2018/06/10
 * @ createTime: 15:25
 * @ version V1.0
 **/

import React from 'react';
import Logo from '../../component/logo/Logo';

import { 
	List, 
	InputItem, 
	WingBlank, 
	Button, 
	WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/user/user.redux';


@connect(
	state => state.user,
	{ login }
)
export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			user: '',
			pwd: ''
		};
		this.register = this.register.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}
	register () {
		console.log(this.props);
		this.props.history.push('/register')
	}
	handleChange (key, val) {
		this.setState({
			[key]: val
		})
	}
	handleLogin () {
		console.log(this.state);
		console.log(this.props);
		this.props.login(this.state)
	}
  render () {
    return (
      <div>
      	{this.props.redirectTo ? 
      		<Redirect to={this.props.redirectTo} />
      		: null}
      	<Logo></Logo>
      	<WhiteSpace/>
        <WhiteSpace/>
        <WingBlank>
        	<List>
        		{ this.props.msg 
							? <p className='error-msg'>{ this.props.msg}</p>
							: null}
        		<InputItem
        			onChange={ v => this.handleChange('user', v)}
        			>用户名：</InputItem>
        		<WhiteSpace/>
        		<InputItem
        			type='password'
        			onChange={ v => this.handleChange('pwd', v)}
        			>密&nbsp;&nbsp;&nbsp;码：</InputItem>
        	</List>
        	<WhiteSpace/>
        	<Button 
        		type="primary"
        		onClick={this.handleLogin}>登录</Button>
        	<WhiteSpace/>
        	<Button onClick={this.register} type="primary">注册</Button>
        </WingBlank>
      </div>
    )
  }
}