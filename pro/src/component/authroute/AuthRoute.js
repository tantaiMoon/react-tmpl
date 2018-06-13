import React from 'react';
import axios from 'axios';
import { 
	withRouter } from 'react-router-dom';
import { 
	loadData } from '../../redux/user/user.redux';
import { connect } from 'react-redux';

@withRouter
@connect(
	state => state.user,
	{ loadData }
)
export default class AuthRoute extends React.Component {
	componentDidMount() {
		// console.log(this.props)
		const publicList = ['/login', '/register'];
		const pathname = this.props.location.pathname;
		if (publicList.indexOf(pathname) > -1) {
			return null;
		}
		// 获取用户信息
	// 是否登录
	// 现在的URL地址，login是不需要跳转的
	// 用户的type，身份是猎人还是猎物
	// 是否完善信息（选择头像，个人简介）
	
		axios.get('/user/info')
			.then(res => {
				if (res.status === 200) {
					if (res.data.code === 0) {
						// 有登陆信息
						this.props.loadData(res.data.data);
					}else {
						// 无登录信息
						console.log(this.props.history);
						this.props.history.push('/login');
					}
					console.log(res.data);
				}
			});
	}
	render () {
		return null
	}
}