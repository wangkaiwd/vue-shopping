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

const detail = Mock.mock('http://api.com/detail', {
  "swiper": {
    "swiperList|3": [{
      "id|+1": 1,
      "imgPath": "@image('400x400','#ffcc33','#fff','jpg','')",
    }]
  },
  "content|10": [{
    "id|+1": 1,
    "imgPath": "@image('600x600','#5a9e6e','#FFF', 'jpg', '')"
  }],
  "view|1": [{
    // 其中随机展示一个
    'title|1': [
      '一加手机5 (A5000) 全网通  移动联通电信4G手机',
      '三星 Galaxy S8 移动联通电信4G手机 ',
      '荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ',
      'OPPO R11 全网通 手机',
      '小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ',
      '新诺基亚（NOKIA）105 移动联通2G手机 老人手机',
      '小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ',
      '锤子 坚果Pro 全网通 移动联通电信4G手机 ',
      '360手机 N5 全网通 移动联通电信4G手机 ',
      '乐视 S3 爵迹版  移动联通电信4G手机 ',
      "Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G手机",
      'Apple iPhone 8 (A1863) 64GB 金色 移动联通电信4G手机',
      'Apple iPhone 6 32GB 金色 移动联通电信4G手机',
      'Apple iPhone 7 Plus (A1661) 128G 亮黑色 移动联通电信4G手机',
    ],
    'intro': '@cparagraph(2)',
    'id': '@id',
    'price|99-1000': 100,
    'chose|4': [{
      'col|+1': [
        '土豪金',
        '东北银',
        '喜庆红',
        '熔岩黑'
      ],
      'size|+1': [
        '32g',
        '64g',
        '128g',
        '256g',
      ]
    }]
  }],
})

const userInfo = [
  { username: 'admin', password: '123456' },
  { username: '张三', password: '111111' },
  { username: 'wangkai', password: '666666' },
]
export {
  index,
  category,
  detail,
  userInfo
};

// export default 和 export 的区别：
// export default:
// 默认输出是一个函数，其它模块加载该模块时，import 可以为该匿名函数指定任意名字
// 为用户提供方便，不用阅读文档就能加载模块
// export:要逐一指定从文件中加载的方法，要知道export(暴露)出了哪些方法
