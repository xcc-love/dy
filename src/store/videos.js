import { defineStore } from "pinia";
// import { getCurrentInstance } from "vue";

// pinia中使用defineStore方法来定义store
//第一个参数是模块名
//第二个参数是一个对象,store的配置项,比如配置store内的数据
export const useVideoStore = defineStore("videos", {
  // state是一个函数 必须有返回值
  state() {
    return {
      // 要播放的视频数据 --- 推荐视频
      playsData: {
        num: "666666",
        img: "./image/jyz.jpg",
        sex: false,
        collTotal: 66,
        fanTotal: 66,
        collectionFlag: true,
        age: "22",
        address: "北京",
        school: "北京幼儿园",
        isPlay: null,
        navIndex: 0, //视频类别索引
        swipeIndex: 0, //轮播索引
        backHomeIndex: 0, //切换回主页时赋值给轮播索引
        videos: [
          {
            videoUrl: "./video/1.推荐/视频1.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/1.推荐/视频2.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/1.推荐/视频3.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/1.推荐/视频4.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/1.推荐/视频5.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/1.推荐/视频6.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/1.推荐/视频7.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/1.推荐/视频6.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/1.推荐/视频9.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/1.推荐/视频10.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/1.推荐/视频11.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/1.推荐/视频12.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/1.推荐/视频13.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/1.推荐/视频14.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/1.推荐/视频15.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/1.推荐/视频16.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/1.推荐/视频17.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "推荐",
            name: "推荐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "推荐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
        ],
      },
      //   推荐视频
      recomData: {},
      //   新闻
      newsData: {
        num: "666666",
        img: "./image/yc.jpg",
        sex: true,
        collTotal: 66,
        fanTotal: 66,
        collectionFlag: false,
        age: "22",
        address: "北京",
        school: "北京幼儿园",
        isPlay: null,
        navIndex: 1,
        swipeIndex: 0,
        backHomeIndex: 0,
        videos: [
          {
            videoUrl: "./video/2.新闻/视频1.mp4",
            imgUrl: "./image/yc.jpg",
            likeFlag: false,
            collectionFlag: false,
            text: "新闻",
            name: "家长分享",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "家长分享",
                chatImg: "./image/yc.jpg",
                chatText: "明天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/2.新闻/视频2.mp4",
            imgUrl: "./image/yc.jpg",
            likeFlag: false,
            collectionFlag: false,
            text: "新闻",
            name: "家长分享",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "家长分享",
                chatImg: "./image/yc.jpg",
                chatText: "明天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/2.新闻/视频3.mp4",
            imgUrl: "./image/yc.jpg",
            likeFlag: false,
            collectionFlag: false,
            text: "新闻",
            name: "家长分享",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "家长分享",
                chatImg: "./image/yc.jpg",
                chatText: "明天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
        ],
      },
      //   教育
      learnData: {
        num: "134679",
        img: "./image/xishi1.jpg",
        sex: false,
        collTotal: 66,
        fanTotal: 66,
        collectionFlag: false,
        age: "22",
        address: "杭州",
        school: "杭州幼儿园",
        isPlay: null,
        navIndex: 2,
        swipeIndex: 0,
        backHomeIndex: 0,
        videos: [
          {
            videoUrl: "./video/3.教育/视频1.mp4",
            imgUrl: "./image/xishi1.jpg",
            likeFlag: false,
            collectionFlag: false,
            sizeFlag: true,
            text: "教育",
            name: "教育",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "教育",
                chatImg: "./image/xishi1.jpg",
                chatText: "后天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/3.教育/视频2.mp4",
            imgUrl: "./image/xishi1.jpg",
            likeFlag: false,
            collectionFlag: false,
            sizeFlag: true,
            text: "教育",
            name: "教育",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "教育",
                chatImg: "./image/xishi1.jpg",
                chatText: "后天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/3.教育/视频3.mp4",
            imgUrl: "./image/xishi1.jpg",
            likeFlag: false,
            collectionFlag: false,
            sizeFlag: true,
            text: "教育",
            name: "教育",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "教育",
                chatImg: "./image/xishi1.jpg",
                chatText: "后天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/3.教育/视频4.mp4",
            imgUrl: "./image/xishi1.jpg",
            likeFlag: false,
            collectionFlag: false,
            sizeFlag: true,
            text: "教育",
            name: "教育",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "教育",
                chatImg: "./image/xishi1.jpg",
                chatText: "后天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/3.教育/视频5.mp4",
            imgUrl: "./image/xishi1.jpg",
            likeFlag: false,
            collectionFlag: false,
            sizeFlag: true,
            text: "教育",
            name: "教育",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "教育",
                chatImg: "./image/xishi1.jpg",
                chatText: "后天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/3.教育/视频6.mp4",
            imgUrl: "./image/xishi1.jpg",
            likeFlag: false,
            collectionFlag: false,
            sizeFlag: true,
            text: "教育",
            name: "教育",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "教育",
                chatImg: "./image/xishi1.jpg",
                chatText: "后天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
        ],
      },
      //  体育
      sportData: {
        name: "QQ",
        flag: false, //是否是当前登录用户的评论
        img: "./image/xishi2.png",
        sex: true,
        num: "010202",
        collTotal: 66,
        fanTotal: 66,
        isUser: true, //是否是当前登录用户
        age: "22",
        address: "鹤壁",
        school: "鹤壁幼儿园",
        isPlay: null,
        navIndex: 3,
        swipeIndex: 0,
        backHomeIndex: 0,
        videos: [
          {
            videoUrl: "./video/4.体育/1.mp4",
            imgUrl: "./image/xishi2.png",
            likeFlag: false,
            collectionFlag: false,
            text: "体育",
            name: "体育",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "Q音推荐",
                chatImg: "./image/xishi2.png",
                chatText: "每天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/4.体育/2.mp4",
            imgUrl: "./image/xishi2.png",
            likeFlag: false,
            collectionFlag: false,
            text: "体育",
            name: "体育",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "Q音推荐",
                chatImg: "./image/xishi2.png",
                chatText: "每天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/4.体育/3.mp4",
            imgUrl: "./image/xishi2.png",
            likeFlag: false,
            collectionFlag: false,
            text: "体育",
            name: "体育",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "Q音推荐",
                chatImg: "./image/xishi2.png",
                chatText: "每天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
        ],
      },
      //  音乐
      musicData: {
        name: "QQ",
        flag: false, //是否是当前登录用户的评论
        img: "./image/xishi2.png",
        sex: true,
        num: "010202",
        collTotal: 66,
        fanTotal: 66,
        isUser: true, //是否是当前登录用户
        age: "22",
        address: "鹤壁",
        school: "鹤壁幼儿园",
        isPlay: null,
        navIndex: 4,
        swipeIndex: 0,
        backHomeIndex: 0,
        videos: [
          {
            videoUrl: "./video/5.音乐/1.mp4",
            imgUrl: "./image/xishi2.png",
            likeFlag: false,
            collectionFlag: false,
            text: "音乐",
            name: "音乐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "音乐",
                chatImg: "./image/xishi2.png",
                chatText: "每天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/5.音乐/2.mp4",
            imgUrl: "./image/xishi2.png",
            likeFlag: false,
            collectionFlag: false,
            text: "音乐",
            name: "音乐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "音乐",
                chatImg: "./image/xishi2.png",
                chatText: "每天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
        ],
      },
      //  搞笑
      funnyData: {
        name: "QQ",
        flag: false, //是否是当前登录用户的评论
        img: "./image/xishi2.png",
        sex: true,
        num: "010202",
        collTotal: 66,
        fanTotal: 66,
        isUser: true, //是否是当前登录用户
        age: "22",
        address: "鹤壁",
        school: "鹤壁幼儿园",
        isPlay: null,
        navIndex: 5,
        swipeIndex: 0,
        backHomeIndex: 0,
        videos: [
          {
            videoUrl: "./video/6.搞笑/视频15.mp4",
            imgUrl: "./image/xishi2.png",
            likeFlag: false,
            collectionFlag: false,
            text: "搞笑",
            name: "搞笑",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "搞笑",
                chatImg: "./image/xishi2.png",
                chatText: "每天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/6.搞笑/视频16.mp4",
            imgUrl: "./image/xishi2.png",
            likeFlag: false,
            collectionFlag: false,
            text: "搞笑",
            name: "搞笑",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "搞笑",
                chatImg: "./image/xishi2.png",
                chatText: "每天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/6.搞笑/视频17.mp4",
            imgUrl: "./image/xishi2.png",
            likeFlag: false,
            collectionFlag: false,
            text: "搞笑",
            name: "搞笑",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "搞笑",
                chatImg: "./image/xishi2.png",
                chatText: "每天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }, {
            videoUrl: "./video/6.搞笑/视频18.mp4",
            imgUrl: "./image/xishi2.png",
            likeFlag: false,
            collectionFlag: false,
            text: "搞笑",
            name: "搞笑",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "搞笑",
                chatImg: "./image/xishi2.png",
                chatText: "每天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
        ],
      },
      // 收藏的视频数据
      collData: [],
      // 喜欢的视频数据
      likeData: [],
    };
  },

  actions: {
    // 筛选收藏的视频
    handleColl() {
      let arr = [];
      this.playsData.videos.filter((item) => {
        if (item.collectionFlag) {
          arr.push(item);
        }
      });
      this.dramaData.videos.filter((item) => {
        if (item.collectionFlag) {
          arr.push(item);
        }
      });
      this.landscapeData.videos.filter((item) => {
        if (item.collectionFlag) {
          arr.push(item);
        }
      });
      this.musicData.videos.filter((item) => {
        if (item.collectionFlag) {
          arr.push(item);
        }
      });
      let newArr = Array.from(new Set(arr));
      this.collData = newArr;
    },
    // 筛选喜欢的视频
    handleLike() {
      let arr = [];
      this.playsData.videos.filter((item) => {
        if (item.likeFlag) {
          arr.push(item);
        }
      });
      this.dramaData.videos.filter((item) => {
        if (item.likeFlag) {
          arr.push(item);
        }
      });
      this.landscapeData.videos.filter((item) => {
        if (item.likeFlag) {
          arr.push(item);
        }
      });
      this.musicData.videos.filter((item) => {
        if (item.likeFlag) {
          arr.push(item);
        }
      });
      let newArr = Array.from(new Set(arr));
      this.likeData = newArr;
    },
    // 给推荐标签数据
    handleRecom() {
      this.recomData = this.playsData;
    },
    // 添加评论
    addChatData(item, i) {
      this.playsData.videos[i].chat.push(item);
    },
  },
});
