<template>
  <div class="recommend">
    <a href="http://act.mogujie.com/zzlx67">
      <img src="../../../assets/img/home/recommend_bg.jpg" alt="">
    </a>
    
  </div>
</template>

<script>
	export default {
    name: "RecommendView",
    props:{
     
      recommends:{
        type:Array,
        default(){
          return[]
        }
      }
    }
	}
</script>

<style scoped>
.recommend img{
   
    width: 100%;
   
  }
  /* .recommend-item img {
    width: 80px;
    height: 80px;

    
  }
  
  .recommend-item{
    flex: 1;
    margin-bottom: 8px;
  } */
</style>
