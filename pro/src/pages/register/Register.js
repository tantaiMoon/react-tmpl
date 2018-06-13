/**
 * @ Title: Register.js
 * @ Description: TODO
 * @ author Tantaiqiuyue@gmail.com
 * @ createDate 2018/06/10
 * @ createTime: 15:28
 * @ version V1.0
 **/

// 'use strict';
import React from 'react';
import { Redirect } from 'react-router-dom';
import Logo from '../../component/logo/Logo';

import { 
	List, 
	InputItem, 
	WingBlank, 
	Button, 
	Radio,
	WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../../redux/user/user.redux';



@connect(
	state => state.user,
	{ register }
)
export default class Register extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			user: '',
			pwd: '',
			repeatpwd: '',
			type: 'genius'
		};
		this.handleRegister = this.handleRegister.bind(this);
	}
	handleChange (key, val) {
		this.setState({
			[key]: val
		})
	}
	handleRegister () {
		console.log(this.state);
		this.props.register(this.state);
	}
  render () {
  	const RadioItem = Radio.RadioItem;
    return (
      <div>
      	{this.props.redirectTo ? 
      		<Redirect to={this.props.redirectTo} />
      		: null}
      	<Logo></Logo>
        <WingBlank>
					<List>
						{ this.props.msg 
							? <p className='error-msg'>{ this.props.msg}</p>
							: null}
						<InputItem 
							onChange={v => this.handleChange('user', v)}>
							用&nbsp;&nbsp;户&nbsp;名：
						</InputItem>
						<WhiteSpace/>
						<InputItem
							type='password'
							onChange={v => this.handleChange('pwd', v)}>
							密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：
						</InputItem>
						<WhiteSpace/>
						<InputItem
							type='password'
							onChange={v => this.handleChange('repeatpwd', v)}>
							确认密码：
						</InputItem>
						<WhiteSpace/>
						<RadioItem 
							checked={this.state.type === 'genius'}
							onChange={() => this.handleChange('type', 'genius')}>
							猎物
						</RadioItem> 
						<RadioItem 
							checked={this.state.type === 'boss'}
							onChange={() => this.handleChange('type', 'boss')}>
							猎人
						</RadioItem>
						<WhiteSpace/>
						<WhiteSpace/>
						<Button type='primary'
							onClick={this.handleRegister}>注册</Button>
        	</List>
        </WingBlank>
        
      </div>
    )
  }
}