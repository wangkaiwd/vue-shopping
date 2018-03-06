import axios from 'axios';
import { Indicator } from 'mint-ui';

// 统一config配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://api.com';
axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded;charset=UTF-8";

// 拦截器配置
axios.interceptors.request.use(config => {
    Indicator.open('正在加载...');
    return config;
});

axios.interceptors.response.use(
  res => {
    if (res.status != '200') {
      alert('响应失败');
      return Promise.reject(res);
    }
    setTimeout(() => {
        Indicator.close();
    }, 300)
    return res;
  },
  err => {
    alert('网络异常');
    return Promise.reject(err);
  }
);


export default axios;
