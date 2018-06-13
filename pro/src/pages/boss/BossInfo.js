import React from 'react';
import { 
	NavBar, 
	InputItem,
	TextareaItem,
	WingBlank, 
	WhiteSpace } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-select/AvatarSelector';



export default class BossInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		}
	}
	onChange (key, val) {
		this.setState({
			[key]: val
		})
	}
	render () {
		return (
			<div>
				<NavBar mode="dark">Boss 信息完善页面</NavBar>
				<AvatarSelector></AvatarSelector>
				<WhiteSpace/>
				<WingBlank>
					<WhiteSpace/>
					<InputItem 
						onChange={(v) => this.onChange('title', v)}>
						接收任务:
					</InputItem>
					<WhiteSpace/>
					<InputItem 
						onChange={(v) => this.onChange('company', v)}>
						受聘组织:
					</InputItem>
					<WhiteSpace/>
					<InputItem 
						onChange={(v) => this.onChange('money', v)}>
						任务薪资:
					</InputItem>
					<WhiteSpace/>
					<TextareaItem 
						onChange={(v) => this.onChange('desc', v)}>
						任务要求:
					</TextareaItem>
					<WhiteSpace/>
				</WingBlank>
			</div>
		)
	}
}



