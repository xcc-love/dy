import { defineStore } from "pinia";
// import { getCurrentInstance } from "vue";

// pinia中使用defineStore方法来定义store
//第一个参数是模块名
//第二个参数是一个对象,store的配置项,比如配置store内的数据
export const useVideoStore = defineStore("videos", {
  // state是一个函数 必须有返回值
  state() {
    return {
      // 要播放的视频数据
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
        navIndex: 3, //视频类别索引
        swipeIndex: 0, //轮播索引
        backHomeIndex: 0, //切换回主页时赋值给轮播索引
        videos: [
          {
            videoUrl: "./video/music1.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: true,
            text: "手语音乐",
            name: "手语音乐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "手语音乐",
                chatImg: "./image/jyz.jpg",
                chatText: "今天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/music2.mp4",
            imgUrl: "./image/jyz.jpg",
            likeFlag: false,
            collectionFlag: false,
            sizeFlag: true,
            text: "手语音乐",
            name: "手语音乐",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "手语音乐",
                chatImg: "./image/jyz.jpg",
                chatText: "妈妈做的宫爆鸡丁",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
        ],
      },
      //   手语音乐
      recomData: {},
      //   家长分享
      dramaData: {
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
        navIndex: 3,
        swipeIndex: 0,
        backHomeIndex: 0,
        videos: [
          {
            videoUrl: "./video/jz1.mp4",
            imgUrl: "./image/yc.jpg",
            likeFlag: false,
            collectionFlag: false,
            text: "家长分享",
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
          {
            videoUrl: "./video/jz2.mp4",
            imgUrl: "./image/yc.jpg",
            likeFlag: false,
            collectionFlag: false,
            text: "家长分享",
            name: "家长分享",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "爱好剧",
                chatImg: "./image/yc.jpg",
                chatText: "明天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/jz3.mp4",
            imgUrl: "./image/yc.jpg",
            likeFlag: false,
            collectionFlag: false,
            text: "家长分享",
            name: "家长分享",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "家长分享",
                chatImg: "./image/yc.jpg",
                chatText: "妈妈做的大盘鸡",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/jz4.mp4",
            imgUrl: "./image/yc.jpg",
            likeFlag: false,
            collectionFlag: false,
            text: "家长分享",
            name: "家长分享",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "家长分享",
                chatImg: "./image/yc.jpg",
                chatText: "妈妈做的酱骨头",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/jz5.mp4",
            imgUrl: "./image/yc.jpg",
            likeFlag: false,
            collectionFlag: false,
            text: "家长分享",
            name: "家长分享",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "家长分享",
                chatImg: "./image/yc.jpg",
                chatText: "妈妈做的酱骨头",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
        ],
      },
      //   手语课程
      landscapeData: {
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
        navIndex: 3,
        swipeIndex: 0,
        backHomeIndex: 0,
        videos: [
          {
            videoUrl: "./video/course1.mp4",
            imgUrl: "./image/xishi1.jpg",
            likeFlag: false,
            collectionFlag: false,
            sizeFlag: true,
            text: "手语课程",
            name: "手语课程",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "手语课程",
                chatImg: "./image/xishi1.jpg",
                chatText: "后天吃什么",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          }
        ],
      },
      //  手语学习
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
        navIndex: 3,
        swipeIndex: 0,
        backHomeIndex: 0,
        videos: [
          {
            videoUrl: "./video/learn1.mp4",
            imgUrl: "./image/xishi2.png",
            likeFlag: false,
            collectionFlag: false,
            text: "手语学习",
            name: "手语学习",
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
          {
            videoUrl: "./video/learn2.mp4",
            imgUrl: "./image/xishi2.png",
            likeFlag: false,
            collectionFlag: false,
            sizeFlag: true,
            text: "手语学习",
            name: "手语学习",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "手语学习",
                chatImg: "./image/xishi2.png",
                chatText: "妈妈做的糖醋里脊",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/learn3.mp4",
            imgUrl: "./image/xishi2.png",
            bgImg: "./image/jyz2.jpg",
            // imgFlag: true,
            likeFlag: false,
            collectionFlag: false,
            text: "手语学习",
            name: "手语学习",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "手语学习",
                chatImg: "./image/xishi2.png",
                chatText: "妈妈做的京酱肉丝",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/learn4.mp4",
            imgUrl: "./image/xishi2.png",
            likeFlag: false,
            collectionFlag: false,
            text: "手语学习",
            name: "手语学习",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "手语学习",
                chatImg: "./image/xishi2.png",
                chatText: "妈妈做的可乐鸡腿",
                chatLikeShow: false,
                chatTextShow: false,
              },
            ],
          },
          {
            videoUrl: "./video/learn5.mp4",
            imgUrl: "./image/xishi2.png",
            likeFlag: false,
            collectionFlag: false,
            text: "手语学习",
            name: "手语学习",
            time: "2023-05-10",
            likeTotal: 66,
            collTotal: 66,
            chat: [
              {
                flag: true,
                name: "手语学习",
                chatImg: "./image/xishi2.png",
                chatText: "妈妈做的可乐鸡腿",
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
