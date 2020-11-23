<template>
  <div id="home">
    
      <div class="sousuo">
      <div>
        <input type="text" placeholder="请输入要搜索的信息">
      </div>
      <div>
        <button>搜索</button>
      </div>
    </div>
   
   
    <!-- <swiper>
      <swiper-item v-for="(item,index) of banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
      </swiper-item>
    </swiper> -->
    <!-- <tab-control v-show="isTabFixed" class="fixed" @itemClick="tabClick"
                 :titles="['创意网红', '当日达', '热卖','全部']"></tab-control> -->

    <!-- <div>
    <div class="dswiper">
      <mt-swipe class="swiper">
        <mt-swipe-item >
          <img src="../../assets/img/swiper/timg (1).jpg" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    
  </div> -->


      <mt-swipe :auto="4000" class="dswiper">
        <mt-swipe-item><img src="../../assets/img/swiper/u=2842627706,1511339593&fm=26&gp=0.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>

    <scroll class="content"
            ref="scroll"
            @scroll="contentScroll"
            @pullingUp="loadMore"
            :data="showGoodsList"
            :pull-up-load="true"
            :probe-type="3">
      <div>
        <home-swiper :banners="banners"
                     ref="hSwiper"></home-swiper>
        <feature-view :features="recommends"></feature-view>
        <recommend-view :recommends="recommend"></recommend-view>
        <tab-control @itemClick="tabClick"
                     :titles="['人群推荐', '品牌馆', '口味推荐','人气推荐']"
                     ref="tabControl"></tab-control>
        <goods-list :goods-list="showGoodsList"></goods-list>
      </div>
    </scroll>
    <back-top @backTop="backTop" class="back-top" v-show="showBackTop">
      <img src="../../assets/img/common/top.png" alt="">
    </back-top>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  import Scroll from '../../components/common/scroll/Scroll'
  import TabControl from '../../components/content/tabControl/TabControl'
  import BackTop from '../../components/content/backTop/BackTop'
  import HomeSwiper from './childComps/HomeSwiper'
  import FeatureView from './childComps/FeatureView'
  import RecommendView from './childComps/RecommendView'
  import GoodsList from './childComps/GoodsList'
  import {Swiper,SwiperItem} from '../../components/common/swiper'
  import {getHomeMultidata, getHomeData, RECOMMEND, BANNER} from "../../network/homepage";
  import {NEW, POP, SELL, BACKTOP_DISTANCE} from "../../common/const";
  export default {
		name: "Homepage",
    components: {
		  NavBar,
      Scroll,
      TabControl,
      BackTop,
      HomeSwiper,
      FeatureView,
      RecommendView,
      GoodsList,
        
    },
    data() {
		  return {
		    banners: [],
        recommends: [],
        goodsList: {
          'pop': {page: 1, list: [
            
          ]},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        currentType: POP,
        isTabFixed: false,
        tabOffsetTop: 0,
        showBackTop: false
      }
    },
    computed: {
		  showGoodsList() {
		    return this.goodsList[this.currentType].list
      }
    },
    mounted() {
      console.log('创建Home');
      // 1.请求多个数据
      this.getMultiData()

      // 2.请求商品数据
      this.getHomeProducts(POP)
      this.getHomeProducts(NEW)
      this.getHomeProducts(SELL)
    },
    activated: function () {
      this.$refs.hSwiper.startTimer()
    },
    deactivated: function () {
      this.$refs.hSwiper.stopTimer()
    },
    updated() {
      // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      // console.log(this.tabOffsetTop);
    },
    methods: {
		  tabClick(index) {
		    switch (index) {
          case 0:
            this.currentType = POP
            break
          case 1:
            this.currentType = NEW
            break
          case 2:
            this.currentType = SELL
            break
        }
      },
      contentScroll(position) {
		    // 1.决定tabFixed是否显示
        this.isTabFixed = position.y < -this.tabOffsetTop

        // 2.决定backTop是否显示
        this.showBackTop = position.y < -BACKTOP_DISTANCE
      },
      loadMore() {
		    this.getHomeProducts(this.currentType)
      },
      backTop() {
        this.$refs.scroll.scrollTo(0, 0, 300)
      },
      /**
       * 网络请求相关方法
       */
      getMultiData() {
        getHomeMultidata().then(res => {
          console.log(res)
          this.banners = res.data[BANNER]
          this.recommends = res.data[RECOMMEND]
          // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
          this.$nextTick(() => {
            this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
          })
        })
      },
      getHomeProducts(type) {
        getHomeData(type, this.goodsList[type].page).then(res => {
          console.log("======================")
          console.log(res)
          const goodsList = res.banners;
          this.goodsList[type].list.push(...goodsList)
          this.goodsList[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    }
	}
</script>

<style scoped>
  #home {
    /*position: relative;*/
    height: 100px;
    /* padding-top:55px ; */
  }

  /* .nav-bar {
    position: fixed;
    background-color: var(--color-tint);
    font-weight: 900;
    color: #fff;
   
  } */
  
 .sousuo{
  margin: 10px auto;
  position: fixed;
  display: flex;
}
.sousuo>div{
  float: left;
}

.sousuo>div:first-child>input{
  border: 2px solid #ffc0cb;
  height: 25px;
  width: 300px;
  border-radius: 8px;
  padding:15px;
  outline: none;
}
.sousuo>div:first-child>input::-webkit-input-placeholder{
  color: #ccc;
  font-size: 6px;
  padding: 15px;
}
.sousuo>div:last-child>button{
  border: 0;
  background-color: #ffc0cb;
  color: #fff;
  height: 35px;
  width: 50px;
  border-radius: 8px;
  margin-left: 5px;
}
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
   
</style>
