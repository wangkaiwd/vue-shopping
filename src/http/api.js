import axios from 'axios';

// 统一config配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://api.com';
axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded;charset=UTF-8";

// 拦截器配置
// axios.interceptors.request.use(config => {

// });

axios.interceptors.response.use( 
    res => {
        if(res.status != '200') {
            alert('响应失败');
            return Promise.reject(res);
        }
        return res;
    },
    err => {
        alert('网络异常');
        return Promise.reject(err);
    }
);


export default axios;
