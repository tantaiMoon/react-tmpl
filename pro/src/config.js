import axios from 'axios';
import { Toast } from 'antd-mobile';


axios.interceptors.request.use((config) => {
  Toast.loading('加载中...', 0);
  return config;
});



// 拦截响应

axios.interceptors.response.use((config) => {
	// console.log(config)
	if (config.status === 200) {
		Toast.hide();
	}
  
  return config;
});