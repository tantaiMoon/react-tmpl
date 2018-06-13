import axios from 'axios';
import { getRedirectPath } from '../../utils';
 
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOAD_DATA = 'LOAD_DATA';

let errorMsg = (msg) => {
	return {msg, type: ERROR_MSG}
}

let registerSuccess = (data) => {
	return {payload: data, type: REGISTER_SUCCESS}
}
let loginSuccess = (data) => {
	return {payload: data, type: LOGIN_SUCCESS}
}

const initState = {
	redirectTo: '',
	msg: '',
	isAuth: '',
	user: '',
	type: ''
}

// reducers

export let user = (state = initState, action) => {
	switch (action.type){
		case REGISTER_SUCCESS: 
			// return {...state, msg: '', redirectTo: '/login', isAuth: true, ...action.payload};
			return {...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload};
		case ERROR_MSG:
			return {...state, msg: action.msg, isAuth: false};
		case LOGIN_SUCCESS:
			return {...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload};
		case LOAD_DATA:
			return {...state, ...action.payload};
		default:
			return state;
	}
	// return state;
}

// register
export let register = ({user, pwd, repeatpwd, type}) => {
	if (!user || !pwd || !type) {
		return errorMsg('用户名和密码必须输入');
	}
	if (pwd !== repeatpwd) {
		return errorMsg('密码不一致');
	}
	return dispatch => {
		axios.post('/user/register', {user, pwd, type})
			.then(res => {
				if (res.status === 200 && res.data.code === 0){
					dispatch(registerSuccess({user, pwd, type}));
				}else {
					dispatch(errorMsg(res.data.msg))
				}
			})
	}
}


// login
export let login = ({user, pwd}) => {
	if (!user || !pwd) {
		return errorMsg('用户名和密码必须输入');
	}

	return dispatch => {
		axios.post('/user/login', {user, pwd})
			.then(res => {
				if (res.status === 200 && res.data.code === 0){
					// console.log(res.data)
					dispatch(loginSuccess(res.data.data));
				}else {
					dispatch(errorMsg(res.data.msg))
				}
			})
	}
}




// get user information
export let loadData = (userinfo) => {
	return {type: LOAD_DATA, payload: userinfo};
	
	
}