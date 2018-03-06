import Mock from 'mockjs';

// 首页api
const index = Mock.mock('http://api.com/index', {
  // mock图片参数：size,background,foreground（前景色：文字颜色）,format(图片格式'png','jpg','gif'),text(图片文字)
  // text不写的话默认为size
  'swiper': {
    'swiperList|4': [{
      'id|+1': 1,
      'imgPath': '@image("800x400","#04a1f7","#FFF","jpg","")',
    }]
  },
  "section1": {
    'section1List|4': [{
      'id|+1': 1,
      'imgPath': '@image("400x400","#b7ddf2","#333","jpg","")',
    }],
    'banner': '@image("400x100","#b97cc9","#FFF","jpg","1-banner")'
  },
  "section2": {
    "section2List|8": [{
      "id|+1": 1,
      // 标题
      "title": "@word",
      // 描述
      "detail": "@paragraph",
      // 价格
      "price": "@integer(800,2000)",
      "imgPath": "@image('200x200','#dec4e0','#333','jpg','')"
    }],
    'banner': '@image("400x100","#ffcc33","#FFF","jpg","2-banner")'
  },
  "section3": {
    "section3List|4": [{
      "id|+1": 1,
      "imgPath": "@image('320x200','#f5f2a5','#333','jpg','')",
      "price": "@integer(99,1000)",
      "goodsName": "@first",
      "startTime": "@time(HH:mm)",
    }],
    "banner": "@image('400x100','#30f673','#FFF', 'jpg', '3-banner')"
  },
  "section4": {
    "section4List|8": [{
      "id|+1": 1,
      "goodsName": "@last",
      "goodsPrice": "@integer(99,999)",
      "imgPath": "@image('400x400','#e2f630', '#333', 'jpg','')",
      "goodsInfo": "@paragraph",
    }],
    "banner": "@image('400x100','#ffcc33','#FFF', 'jpg', '4-banner')"
  }

});

const category = Mock.mock('http://api.com/category', {
  "aside|20": [{
    "id|+1": 1,
    // 一级分类名称
    "title": '@cname',
    // 二级分类内容
    "list|20-40": [{
      "id|+1": 1,
      "title": "@cname",
      "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')"
    }]
  }]
});
export {index,category};

// export default 和 export 的区别：
// export default:
// 默认输出是一个函数，其它模块加载该模块时，import 可以为该匿名函数指定任意名字
// 为用户提供方便，不用阅读文档就能加载模块
// export:要逐一指定从文件中加载的方法，要知道export(暴露)出了哪些方法
