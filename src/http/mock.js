import Mock from 'mockjs';

// 首页api
const index = {};
index.swiperData = Mock.mock('http://api.com/index/swiper', {
  // mock图片参数：size,background,foreground（前景色：文字颜色）,format(图片格式'png','jpg','gif'),text(图片文字)
  'swiperList|5': [{
    'id|+1': 1,
    'imgPath': '@image("800*400","#04a1f7","#fff","png","")',
  }]

});

export default index;