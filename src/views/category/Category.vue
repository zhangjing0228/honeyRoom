<template>
  <!-- <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories"
                @selectItem="selectItem"></tab-menu>

      <scroll id="tab-content" :data="[categoryData]">
        <div>
          <tab-content-category :subcategories="showSubcategory"></tab-content-category>
          <tab-control :titles="['综合', '新品', '销量']"
                       @itemClick="tabClick"></tab-control>
          <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>
        </div>
      </scroll>
    </div>
  </div> -->


  <div id="ify">
    <mt-header class="index-header" title="商品分类" fixed> </mt-header>
    <div class="sort">
    <!-- 左边导航栏 -->
    <div class="left" style="position:fixed;margin:41px 0">
   <mt-navbar class="navbar" v-model="classabc">
    <mt-tab-item id="1">人气推荐</mt-tab-item>
    <mt-tab-item id="2">按品牌</mt-tab-item> 
    <mt-tab-item id="3">按口味</mt-tab-item>
    <mt-tab-item id="4">按人群</mt-tab-item>
   </mt-navbar>
   </div>
   <!-- 右边选择分栏 -->
   <div class="right" style="margin:41px 0 0 23%">
<!-- 面板区域开始 -->
<mt-tab-container v-model="classabc">
  <!-- 人气推荐面板 -->

  <mt-tab-container-item id="1" >
    <p class="roof">————人气推荐———</p>
    <div id="moods">
<router-link :to="{path:'/Page', query:{ cid: t.cid}}" v-for="(t,i) of classfont" :key="i">
    <div class="img1 moodsd">
      <img class="imgsize" :src="t.img_a">
      <p class="f10 wcenter text">{{t.title}}</p>
      <div class="wcenter red price">
      <span >￥{{t.discount_prices}}</span>
      <del>￥{{t.price}}</del>
      </div>
    </div>
</router-link>


    </div>
  </mt-tab-container-item>
  <!-- 按品牌面板 -->
  <mt-tab-container-item id="2">
    <p class="roof">————按品牌———</p>
    <div class="brand">

<router-link to='/' v-for="(t,i) of classwill" :key="i">
<div class="brand1" >
<img :src="t.brand_img">
<p class="wcenter f10">{{t.brand}}</p>
</div>
</router-link>

    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <p class="roof">————按口味———</p>
    <div id="moods">
    <div class="kouwei">
        <div class="ruzhixq">
          <router-link to="/totalrenqun">
          <img class="img3" src="../../assets/zjimg/1ruzhi.png">
          <p class="p">乳脂类</p>
          <span>乳脂蛋糕采用进口品牌的优质原料，纯手工精制而成。</span>
          </router-link>
        </div>
        <hr>
        <div>
          <img class="img3" src="../../assets/zjimg/2musi.png">
          <p class="p">慕斯类</p>
          <span>慕斯蛋糕口感和风味的各种辅料，冷冻后食用其味无穷，成为蛋糕中的极品</span>
        </div>
        <hr>
        <div>
          <img class="img3" src="../../assets/zjimg/3shuiguo.png">
          <p class="p">水果类</p>
          <span>浓浓的奶香味与清新甜蜜的水果相搭配出来的浓郁甜美气息，蕴藏着甜蜜浪漫的温馨情怀，奶油的浓郁奶相结合水果的酸甜，恰到好处的口味与口感的结合，让您的感官与知觉完全得到满足。</span>
          <hr>
        </div>
    </div>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="4">
  <p class="roof">————按人群———</p>
    <div class="renqun">
      <div>
       <router-link to="/totalrenqun">
          <img src="../../assets/zjimg/test2.png">
       </router-link> 
      </div>
      <div>
        <router-link to="/totalrenqun">
          <img src="../../assets/zjimg/test22.png">
       </router-link>
      </div>
      <div>
        <router-link to="/totalrenqun">
          <img src="../../assets/zjimg/test23.png">
        </router-link>
      </div>
      <div>
        <router-link to="/totalrenqun">
          <img src="../../assets/zjimg/test24.png">
       </router-link>
      </div>
    </div>
  </mt-tab-container-item>
</mt-tab-container>
   </div>
    </div>
  </div>
</template>

<script>
  // import NavBar from '../../components/common/navbar/NavBar'

  // import TabMenu from './childComps/TabMenu'
  // import TabControl from '../../components/content/tabControl/TabControl'
  // import Scroll from '../../components/common/scroll/Scroll'
  // import TabContentCategory from './childComps/TabContentCategory'
  // import TabContentDetail from './childComps/TabContentDetail'

  // import {getCategory, getSubcategory, getCategoryDetail} from "../../network/category";
  // import {POP, SELL, NEW} from "../../common/const";
  // import {tabControlMixin} from "../../common/mixin";

  // export default {
	// 	name: "Category",
  //   components: {
	// 	  NavBar,
  //     TabMenu,
  //     TabControl,
  //     Scroll,
  //     TabContentCategory,
  //     TabContentDetail
  //   },
  //   mixins: [tabControlMixin],
  //   data() {
	// 	  return {
	// 	    categories: [],
  //       categoryData: {
  //       },
  //       currentIndex: -1
  //     }
  //   },
  //   created() {
	// 	  // 1.请求分类数据
  //     this._getCategory()
  //   },
  //   computed: {
	// 	  showSubcategory() {
	// 	    if (this.currentIndex === -1) return {}
  //       return this.categoryData[this.currentIndex].subcategories
  //     },
  //     showCategoryDetail() {
	// 	    if (this.currentIndex === -1) return []
	// 	    return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
  //     }
  //   },
  //   methods: {
	// 	  _getCategory() {
	// 	    getCategory().then(res => {
	// 	      // 1.获取分类数据
	// 	      this.categories = res.data.category.list
  //         // 2.初始化每个类别的子数据
  //         for (let i = 0; i < this.categories.length; i++) {
  //           this.categoryData[i] = {
  //             subcategories: {},
  //             categoryDetail: {
  //               'pop': [],
  //               'new': [],
  //               'sell': []
  //             }
  //           }
  //         }
  //         // 3.请求第一个分类的数据
  //         this._getSubcategories(0)
  //       })
  //     },
  //     _getSubcategories(index) {
  //       this.currentIndex = index;
	// 	    const mailKey = this.categories[index].maitKey;
  //       getSubcategory(mailKey).then(res => {
  //         this.categoryData[index].subcategories = res.data
  //         this.categoryData = {...this.categoryData}
  //         this._getCategoryDetail(POP)
  //         this._getCategoryDetail(SELL)
  //         this._getCategoryDetail(NEW)
  //       })
  //     },
  //     _getCategoryDetail(type) {
	// 	    // 1.获取请求的miniWallkey
  //       const miniWallkey = this.categories[this.currentIndex].miniWallkey;
  //       // 2.发送请求,传入miniWallkey和type
	// 	    getCategoryDetail(miniWallkey, type).then(res => {
	// 	      // 3.将获取的数据保存下来
	// 	      this.categoryData[this.currentIndex].categoryDetail[type] = res
  //         this.categoryData = {...this.categoryData}
  //       })
  //     },
  //     /**
  //      * 事件响应相关的方法
  //      */
  //     selectItem(index) {
  //       this._getSubcategories(index)
  //     }
  //   }
  // }
  

export default {
  data() {
    return {
      selectedTab: "fl",
      classabc: "1",
      classfont: [],
      classwill: []
    };
  },
  mounted() {
    this.axios.get("/datalis").then(res => {
      this.classfont = res.data.result;
      // console.log(res.data);
    }),
      this.axios.get("/will").then(res => {
        this.classwill = res.data.result;
        // console.log(res.data.result);
      });
  }
};



</script>

<style scoped>
  /* #category {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
  }

  #tab-content {
    height: 100%;
    flex: 1;
  } */



  p,
body,
span,
h1,
h2,
h3,
h4,
h5,
h6,
div {
  margin: 0;
  padding: 0;
}
#ify .mint-tab-item-label {
  margin: 15px;
}
#ify .mint-tabbar > .mint-tab-item.is-selected {
  color: #ffc0cb;
}
#ify .mint-tab-item {
  color: #b3b3b3;
}
#ify .mint-header {
  background-color: #ffc0cb;
  color: #fff;
}
#sort .mint-header {
  background-color: #ffc0cb;
}

.sort {
  display: flex;
}

.left {
  width: 25%;
  border-top: 1px solid rgb(200, 200, 200);
}
.left .mint-navbar {
  display: block;
}
.left .mint-navbar .mint-tab-item.is-selected {
  border-bottom: 0px;
  border-left: 2px red solid;
  color: rgb(42, 42, 42);
}
.mint-tab-item.is-selected {
  padding-top: 7px;
}
.left .mint-tab-item-label {
  margin-bottom: 20px;
  margin-top: 15px;
  font-size: 15px;
  margin-left: 0;
}
.left .mint-tab-item {
  color: rgb(102, 102, 102);
}

.right {
  position: relative;
  width: 100%;
  border: 1px solid rgb(200, 200, 200);
  border-right: 0;
  border-bottom: 0;
}
.roof {
  text-align: center;
  font-size: 13px;
  color: rgb(122, 119, 119);
  font-weight: 600;
  margin: 15px;
}

/* 人气推荐图片样式 */
#moods {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 7.5px;
  padding-right: 7.5px;
}
.imgsize {
  width: 120px;
  height: 120px;
}
.f10 {
  font-size: 13px;
}
.wcenter {
  text-align: center;
}
.red {
  color: rgb(255, 60, 60);
}
.text {
  margin-top: 3px;
  color: rgb(102, 102, 102);
}
.img1 {
  margin-bottom: 25px;
}
.price {
  margin-top: 5px;
}
.price :last-child {
  color: rgb(102, 102, 102);
  font-size: 13px;
  margin-left: 5px;
}
/* 按品牌 样式 */
.brand {
  display: flex;
  flex-wrap: wrap;
}
.brand1 {
  width: 88px;
  height: 88px;
  border: 1px solid rgb(200, 200, 200);
  margin: 0 0 8px 8px;
}
.brand1 img {
  height: 75%;
  width: 100%;
}
.brand1 p {
  color: rgb(102, 102, 102);
}
/* ============================== */
body {
  margin: 0;
}
.ruzhixq a {
  color: black;
  text-decoration: none;
}
.renqun {
  margin-top: 30px;
}
.renqun > div {
  text-align: center;
  margin-bottom: 5px;
}
#moods {
  margin-right: 5px;
}
.kouwei p {
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 10px;
}
.kouwei span {
  font-size: 15px;
  color: gray;
}
/* .kouwei {
  display: flex;
} */
.kouwei:nth-child(2) {
  color: black;
  font-size: 20px;
  text-align: center;
}
.img3 {
  width: 150px;
  margin-left: 5px;
}
.sort {
  display: flex;
}

.left {
  width: 90px;
  border-top: 1px solid slategray;
}
.mint-navbar {
  display: block;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 0px;
  border-left: 2px red solid;
  color: slategrey;
}
.mint-tab-item.is-selected {
  padding: 0px;
}
.left .mint-tab-item-label {
  margin-bottom: 50px;
  margin-top: 15px;
  font-size: 15px;
  margin-left: 0;
}

.right {
  width: 100%;
  border: 1px solid slategray;
  border-right: 0;
  border-bottom: 0;
}
.roof {
  text-align: center;
  font-size: 13px;
  color: #808080;
}
.kouwei > div {
  text-align: center;
}
</style>
