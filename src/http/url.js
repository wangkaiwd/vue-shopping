/**
 * @description 对请求url路径的录入
 * @author wangkai 2018/4/6
 */
import createAjax from '@/utils/ajax';

// 首页
export const fetchIndex = createAjax('/index');

// 分类页
export const fetchCategory = createAjax('/category');

// 详情页
export const fetchDetail = createAjax('/detail');

// 登录页
export const fetchLetchloginIndex = createAjax('/login');