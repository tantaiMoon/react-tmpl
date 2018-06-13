import React from 'react';
import { 
	NavBar, 
	InputItem,
	TextareaItem,
	WingBlank, 
	WhiteSpace } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-select/AvatarSelector';



export default class GeniusInfo extends React.Component {
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
				<NavBar mode="dark">Genius 信息完善页面</NavBar>
				<AvatarSelector></AvatarSelector>
				<WhiteSpace/>
				<WingBlank>
					<WhiteSpace/>
					<InputItem 
						onChange={(v) => this.onChange('title', v)}>
						任务类别:
					</InputItem>
					<WhiteSpace/>
					<InputItem 
						onChange={(v) => this.onChange('money', v)}>
						期望薪资:
					</InputItem>
					<WhiteSpace/>
					<TextareaItem 
						onChange={(v) => this.onChange('desc', v)}
						rows={3}
						autoHeight
						title="任务经历:">
						
					</TextareaItem>
					<WhiteSpace/>
				</WingBlank>
			</div>
		)
	}
}



