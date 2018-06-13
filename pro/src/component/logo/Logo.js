import React from 'react';
import './logo.css';

import logoImg from './not_allowed.png';

export default class Logo extends React.Component {
	render () {
		return (
			<div className="logo-container">
				<img src={logoImg} alt=""/>
			</div>
		)
	}
}