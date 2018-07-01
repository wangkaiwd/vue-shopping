import Mock from 'mockjs';

// 首页api
const index = Mock.mock('http://api.com/index', {
  // mock图片参数：size,background,foreground（前景色：文字颜色）,format(图片格式'png','jpg','gif'),text(图片文字)
  // text不写的话默认为size
  'swiper': {
    'swiperList': [
      {
        'id': 1,
        'imgPath': 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
      },
      {
        'id': 2,
        'imgPath': 'https://gw.alicdn.com/imgextra/i2/3/TB28QT3p9BYBeNjy0FeXXbnmFXa_!!0-lubanu.jpg',
      },
      {
        'id': 3,
        'imgPath': 'https://img.alicdn.com/simba/img/TB1VxHYNFXXXXbOXpXXSutbFXXX.jpg_q50.jpg',
      },
      {
        'id': 4,
        'imgPath': 'https://gw.alicdn.com/imgextra/i4/157/TB2thkZhiCYBuNkHFCcXXcHtVXa_!!157-0-lubanu.jpg',
      },
    ]
  },
  "section1": {
    'section1List': [
      {
        'id': 1,
        'imgPath': 'https://img.alicdn.com/bao/uploaded/i4/392147177/TB2wKFxXQiHJuJjSZFjXXcGvXXa_!!392147177.png_300x1000Q50s50.jpg_.webp',
      },
      {
        'id': 2,
        'imgPath': '//img.alicdn.com/bao/uploaded/i1/725677994/TB22RYSouuSBuNjy1XcXXcYjFXa_!!725677994.jpg_160x160Q50s50.jpg_.webp',
      },
      {
        'id': 3,
        'imgPath': '//img.alicdn.com/bao/uploaded/i4/619123122/TB2woTfk8DH8KJjSszcXXbDTFXa_!!619123122.png_300x1000Q50s50.jpg_.webp',
      },
      {
        'id': 4,
        'imgPath': '//img.alicdn.com/bao/uploaded/i1/725677994/TB2Aj6vavImBKNjSZFlXXc43FXa_!!725677994.jpg_160x160Q50s50.jpg_.webp',
      },
    ],
    'banner': '//img.alicdn.com/tfs/TB1DcCfhk9WBuNjSspeXXaz5VXa-1125-240.gif?getAvatar=1'
  },
  "section2": {
    "section2List": [
      {
        "id": 1,
        // 标题
        "title": "生鲜水果",
        // 描述
        "detail": "@paragraph",
        // 价格
        "price": "@integer(800,2000)",
        "imgPath": "//img.alicdn.com/tfs/TB15IWNlKOSBuNjy0FdXXbDnVXa-168-168.png_170x120Q90s50.jpg_.webp"
      },
      {
        "id": 2,
        // 标题
        "title": "休闲零食",
        // 描述
        "detail": "@paragraph",
        // 价格
        "price": "@integer(800,2000)",
        "imgPath": "//img.alicdn.com/tps/i4/TB1kMWChhWYBuNjy1zkSutGGpXa.jpg_170x120Q90s50.jpg_.webp"
      },
      {
        "id": 3,
        // 标题
        "title": "奶品水饮",
        // 描述
        "detail": "@paragraph",
        // 价格
        "price": "@integer(800,2000)",
        "imgPath": "//img.alicdn.com/tps/i4/TB1uqxzdb3nBKNjSZFMSuuUSFXa.jpg_170x120Q90s50.jpg_.webp"
      },
      {
        "id": 4,
        // 标题
        "title": "粮油厨房",
        // 描述
        "detail": "@paragraph",
        // 价格
        "price": "@integer(800,2000)",
        "imgPath": "//img.alicdn.com/tps/i4/TB1mFaJcnCWBKNjSZFtSuuC3FXa.jpg_170x120Q90s50.jpg_.webp"
      },
      {
        "id": 5,
        // 标题
        "title": "家用电器",
        // 描述
        "detail": "@paragraph",
        // 价格
        "price": "@integer(800,2000)",
        "imgPath": "//img.alicdn.com/tps/i4/TB1OMFQhXmWBuNjSspdSuvugXXa.jpg_170x120Q90s50.jpg_.webp"
      },
      {
        "id": 6,
        // 标题
        "title": "母婴用品",
        // 描述
        "detail": "@paragraph",
        // 价格
        "price": "@integer(800,2000)",
        "imgPath": "//img.alicdn.com/tps/i4/TB14SqehXuWBuNjSspnSut1NVXa.jpg_170x120Q90s50.jpg_.webp"
      },
      {
        "id": 7,
        // 标题
        "title": "个人护理",
        // 描述
        "detail": "@paragraph",
        // 价格
        "price": "@integer(800,2000)",
        "imgPath": "//img.alicdn.com/tps/i4/TB1FzTLhmtYBeNjSspkSuvU8VXa.jpg_170x120Q90s50.jpg_.webp"
      },
      {
        "id": 8,
        // 标题
        "title": "进口好货",
        // 描述
        "detail": "@paragraph",
        // 价格
        "price": "@integer(800,2000)",
        "imgPath": "//img.alicdn.com/tps/i4/TB1DiCOib5YBuNjSspoSuveNFXa.jpg_170x120Q90s50.jpg_.webp"
      },
    ],
    'banner': '//img.alicdn.com/imgextra/i1/880734502/TB2Hd24hIyYBuNkSnfoXXcWgVXa-880734502.jpg_460x460Q75s50.jpg_.webp'
  },
  "section3": {
    "section3List": [
      {
        "id": 1,
        "imgPath": "//img.alicdn.com/bao/uploaded/i4/725677994/TB25W7vnznD8KJjSspbXXbbEXXa_!!725677994.jpg_160x160Q50s50.jpg_.webp",
        "price": "@integer(99,1000)",
        "goodsName": "@first",
        "startTime": "@time(HH:mm)",
      },
      {
        "id": 2,
        "imgPath": "//img.alicdn.com/imgextra/i1/2919165455/TB2KTqzyAqvpuFjSZFhXXaOgXXa_!!2919165455-0-beehive-scenes.jpg_490x330Q50s50.jpg_.webp",
        "price": "@integer(99,1000)",
        "goodsName": "@first",
        "startTime": "@time(HH:mm)",
      },
      {
        "id": 3,
        "imgPath": "//img.alicdn.com/tfscom/i4/725677994/TB2gneSkXXXXXXkXXXXXXXXXXXX_!!725677994.jpg_490x330Q50s50.jpg_.webp",
        "price": "@integer(99,1000)",
        "goodsName": "@first",
        "startTime": "@time(HH:mm)",
      },
      {
        "id": 4,
        "imgPath": "//img.alicdn.com/bao/uploaded/i3/725677994/TB20NP7dlmWBuNkSndVXXcsApXa_!!725677994.jpg_160x160Q50s50.jpg_.webp",
        "price": "@integer(99,1000)",
        "goodsName": "@first",
        "startTime": "@time(HH:mm)",
      },
    ],
    "banner": "//m.360buyimg.com/babel/jfs/t17029/80/1829375903/98257/c4cc869f/5ad85b0fN2b337986.png"
  },
  "section4": {
    "section4List": [
      {
        "id": 1,
        "goodsName": "@last",
        "goodsPrice": "@integer(99,999)",
        "imgPath": "//img.alicdn.com/bao/uploaded/i2/725677994/TB1BIuBSFXXXXcFXXXXXXXXXXXX_!!0-item_pic.jpg_490x330Q50s50.jpg_.webp",
        "goodsInfo": "@paragraph",
      },
      {
        "id": 2,
        "goodsName": "@last",
        "goodsPrice": "@integer(99,999)",
        "imgPath": "//m.360buyimg.com/babel/jfs/t3016/324/2444728804/61275/33e164b6/57d91e61Nf673d404.jpg!q70.jpg.webp",
        "goodsInfo": "@paragraph",
      },
      {
        "id": 3,
        "goodsName": "@last",
        "goodsPrice": "@integer(99,999)",
        "imgPath": "//m.360buyimg.com/babel/s199x199_jfs/t9478/86/1885013006/43014/1156d442/59c08c5dN8ddddf94.jpg!q50.jpg.webp",
        "goodsInfo": "@paragraph",
      },
      {
        "id": 4,
        "goodsName": "@last",
        "goodsPrice": "@integer(99,999)",
        "imgPath": "//img.alicdn.com/tfscom/i4/725677994/TB2Xz7bbfjM8KJjSZFsXXXdZpXa_!!725677994.jpg_490x330Q50s50.jpg_.webp",
        "goodsInfo": "@paragraph",
      },

      {
        "id": 5,
        "goodsName": "@last",
        "goodsPrice": "@integer(99,999)",
        "imgPath": "//img.alicdn.com/imgextra/i1/2919165455/TB2evUOubXlpuFjSszfXXcSGXXa_!!2919165455-0-beehive-scenes.jpg_490x330Q50s50.jpg_.webp",
        "goodsInfo": "@paragraph",
      },
      {
        "id": 6,
        "goodsName": "@last",
        "goodsPrice": "@integer(99,999)",
        "imgPath": "//img.alicdn.com/imgextra/i1/0/TB1ewaDOFXXXXaVXFXXXXXXXXXX_!!0-item_pic.jpg_490x330Q50s50.jpg_.webp",
        "goodsInfo": "@paragraph",
      },
      {
        "id": 7,
        "goodsName": "@last",
        "goodsPrice": "@integer(99,999)",
        "imgPath": "//img.alicdn.com/tfscom/i2/TB1kks9RpXXXXbuXXXXXXXXXXXX_!!0-item_pic.jpg_490x330Q50s50.jpg_.webp",
        "goodsInfo": "@paragraph",
      },
      {
        "id": 8,
        "goodsName": "@last",
        "goodsPrice": "@integer(99,999)",
        "imgPath": "//img.alicdn.com/imgextra/i4/794115300/TB2fXgiqYJmpuFjSZFwXXaE4VXa_!!794115300-0-beehive-scenes.jpg_490x330Q50s50.jpg_.webp",
        "goodsInfo": "@paragraph",
      },
    ],
    "banner": "//gw.alicdn.com/tfs/TB1r1xOg29TBuNjy0FcXXbeiFXa-1053-240.png_10000x340Q90.jpg_.webp"
  }

});

const category = Mock.mock('http://api.com/category', {
  "aside": [
    {
      "id": 1,
      // 一级分类名称
      "title": '热门推荐',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },

      ]
    }],
  "aside": [
    {
      "id": 1,
      // 一级分类名称
      "title": '热门',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 2,
      // 一级分类名称
      "title": '大家电',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 3,
      // 一级分类名称
      "title": '手机',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 4,
      // 一级分类名称
      "title": '电脑',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "平板电脑",
          "imgPath": "//image.suning.cn/uimg/asbs/ad/1493946965497_app_list.jpg",
        },
        {
          "id": 2,
          "title": "台式机",
          "imgPath": "//image1.suning.cn/uimg/asbs/ad/1493946999339_app_list.jpg",
        },
        {
          "id": 3,
          "title": "一体机",
          "imgPath": "//image1.suning.cn/uimg/asbs/ad/1493947041765_app_list.jpg",
        },
        {
          "id": 4,
          "title": "组装机",
          "imgPath": "//image1.suning.cn/uimg/asbs/ad/1493947221772_app_list.jpg",
        },
        {
          "id": 5,
          "title": "电脑清理",
          "imgPath": "//image2.suning.cn/uimg/asbs/ad/1493947345307_app_list.jpg",
        },
        {
          "id": 6,
          "title": "电脑维修",
          "imgPath": "//image2.suning.cn/uimg/asbs/ad/1493947391245_app_list.jpg",
        },
        {
          "id": 7,
          "title": "U盘",
          "imgPath": "//image.suning.cn/uimg/asbs/ad/1493947457551_app_list.jpg",
        },
        {
          "id": 8,
          "title": "鼠标",
          "imgPath": "//image1.suning.cn/uimg/asbs/ad/1493947483476_app_list.jpg",
        },
        {
          "id": 9,
          "title": "键盘",
          "imgPath": "//image2.suning.cn/uimg/asbs/ad/1493947609222_app_list.jpg",
        },
        {
          "id": 10,
          "title": "键鼠套装",
          "imgPath": "//image1.suning.cn/uimg/asbs/ad/1493947545005_app_list.jpg",
        },
        {
          "id": 11,
          "title": "移动硬盘",
          "imgPath": "//image5.suning.cn/uimg/asbs/ad/1493947580797_app_list.jpg",
        },
        {
          "id": 12,
          "title": "电脑音像",
          "imgPath": "//image5.suning.cn/uimg/asbs/ad/1493947580797_app_list.jpg",
        },
        {
          "id": 13,
          "title": "固态硬盘",
          "imgPath": "//image3.suning.cn/uimg/asbs/ad/1493948180741_app_list.jpg",
        },
        {
          "id": 14,
          "title": "显示器",
          "imgPath": "//image.suning.cn/uimg/asbs/ad/1493948206685_app_list.jpg",
        },
        {
          "id": 15,
          "title": "CPU",
          "imgPath": "//image3.suning.cn/uimg/asbs/ad/1493948226751_app_list.jpg",
        },
        {
          "id": 16,
          "title": "显卡",
          "imgPath": "//image.suning.cn/uimg/asbs/ad/1493948262952_app_list.jpg",
        },
        {
          "id": 17,
          "title": "硬盘",
          "imgPath": "//image2.suning.cn/uimg/asbs/ad/1493948353414_app_list.jpg",
        },
        {
          "id": 18,
          "title": "内存",
          "imgPath": "//image2.suning.cn/uimg/asbs/ad/1493948400975_app_list.jpg",
        },
        {
          "id": 19,
          "title": "电源",
          "imgPath": "//image3.suning.cn/uimg/asbs/ad/1493948493161_app_list.jpg",
        },
      ]
    },
    {
      "id": 5,
      // 一级分类名称
      "title": '厨卫',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 6,
      // 一级分类名称
      "title": '家电',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 7,
      // 一级分类名称
      "title": '海外购',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 8,
      // 一级分类名称
      "title": '居家',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 9,
      // 一级分类名称
      "title": '奶粉',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 10,
      // 一级分类名称
      "title": '女装',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 11,
      // 一级分类名称
      "title": '女鞋',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 12,
      // 一级分类名称
      "title": '男装',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 13,
      // 一级分类名称
      "title": '男鞋',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 14,
      // 一级分类名称
      "title": '医药馆',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 15,
      // 一级分类名称
      "title": '特色馆',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
    {
      "id": 16,
      // 一级分类名称
      "title": '生活',
      // 二级分类内容
      "list": [
        {
          "id": 1,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 2,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 3,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 4,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 5,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 6,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 7,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 8,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 9,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 10,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 11,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 12,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 13,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 14,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 15,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 16,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 17,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
        {
          "id": 18,
          "title": "@cname",
          "imgPath": "@image('200x200','#5169b4','#FFF','jpg','')",
        },
      ]
    },
  ],
});

const detail = Mock.mock('http://api.com/detail', {
  "swiper": {
    "swiperList": [
      {
        "id": 1,
        "imgPath": "https://m.360buyimg.com/n12/s828x828_jfs/t19120/212/1462459643/70836/3a47d693/5acc524aNef5ff688.jpg!q70.jpg",
      },
      {
        "id": 2,
        "imgPath": "https://m.360buyimg.com/n12/jfs/t16861/299/1439497151/55138/cc66a2c0/5acc5249Nfa16f19d.jpg!q70.jpg",
      },
      {
        "id": 3,
        "imgPath": "https://m.360buyimg.com/n12/jfs/t19771/337/1479123733/37266/8e155a27/5acc5249Na8aeb753.jpg!q70.jpg",
      },
      {
        "id": 4,
        "imgPath": "https://m.360buyimg.com/n12/jfs/t17383/125/1470478028/71155/1cb53bc2/5acc5248N6a5f81cd.jpg!q70.jpg",
      },
    ],
  },
  "content": [
    {
      "id": 1,
      "imgPath": "//img.alicdn.com/imgextra/i1/713805254/TB2XtsVgbsTMeJjy1zbXXchlVXa_!!713805254.jpg_760x760Q50s50.jpg_.webp"
    },
    {
      "id": 2,
      "imgPath": "//img.alicdn.com/imgextra/i2/713805254/TB2l9LycamgSKJjSsplXXaICpXa_!!713805254.jpg_760x760Q50s50.jpg_.webp"
    },
    {
      "id": 3,
      "imgPath": "//img.alicdn.com/imgextra/i3/713805254/TB2aYAUbvJNTKJjSspoXXc6mpXa_!!713805254.jpg_760x760Q50s50.jpg_.webp"
    },
    {
      "id": 4,
      "imgPath": "//img.alicdn.com/imgextra/i4/713805254/TB2_52GcamgSKJjSspiXXXyJFXa_!!713805254.jpg_760x760Q50s50.jpg_.webp"
    },
    {
      "id": 5,
      "imgPath": "//img.alicdn.com/imgextra/i2/713805254/TB26p0egwMPMeJjy1XcXXXpppXa_!!713805254.jpg_760x760Q50s50.jpg_.webp"
    },
    {
      "id": 6,
      "imgPath": "//img.alicdn.com/imgextra/i2/751075004/TB2BMlSnXuWBuNjSspnXXX1NVXa_!!751075004.jpg_760x760Q50s50.jpg_.webp"
    },
    {
      "id": 7,
      "imgPath": "//img.alicdn.com/imgextra/i1/751075004/TB2oFBUnf9TBuNjy1zbXXXpepXa_!!751075004.jpg_760x760Q50s50.jpg_.webp"
    },
    {
      "id": 8,
      "imgPath": "//img.alicdn.com/imgextra/i2/751075004/TB2PTgqeOCYBuNkSnaVXXcMsVXa_!!751075004.jpg_760x760Q50s50.jpg_.webp"
    },
    {
      "id": 9,
      "imgPath": "//img.alicdn.com/imgextra/i3/370627083/TB2mDxHfDtYBeNjy1XdXXXXyVXa-370627083.jpg_2200x2200Q90s50.jpg_.webp"
    },
    {
      "id": 10,
      "imgPath": "//img.alicdn.com/imgextra/i2/370627083/TB28vvxfhSYBuNjSsphXXbGvVXa-370627083.gif"
    },
    {
      "id": 11,
      "imgPath": "//img.alicdn.com/imgextra/i3/370627083/TB2iZ3tbiCYBuNkHFCcXXcHtVXa-370627083.jpg_2200x2200Q90s50.jpg_.webp"
    },
    {
      "id": 12,
      "imgPath": "//img.alicdn.com/imgextra/i3/370627083/TB2PigAblsmBKNjSZFsXXaXSVXa-370627083.jpg_2200x2200Q90s50.jpg_.webp"
    },
    {
      "id": 13,
      "imgPath": "//img.alicdn.com/imgextra/i1/370627083/TB2MTsMbnmWBKNjSZFBXXXxUFXa-370627083.jpg_2200x2200Q90s50.jpg_.webp"
    },
    {
      "id": 14,
      "imgPath": "//img.alicdn.com/imgextra/i1/370627083/TB2I7Y7fbSYBuNjSspfXXcZCpXa-370627083.gif"
    },
    {
      "id": 15,
      "imgPath": "//img.alicdn.com/imgextra/i1/370627083/TB2RSUvbljTBKNjSZFwXXcG4XXa-370627083.jpg_2200x2200Q90s50.jpg_.webp"
    },
    {
      "id": 16,
      "imgPath": "//img.alicdn.com/imgextra/i2/370627083/TB2ttcubXooBKNjSZFPXXXa2XXa-370627083.jpg_2200x2200Q90s50.jpg_.webp"
    },

  ],
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
      'Apple iPhone 8 Plus (A1661) 128G 亮黑色 移动联通电信4G手机',
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
