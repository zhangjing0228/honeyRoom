<template>
  <div id="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartCount}})</div></nav-bar>

    <div class="header">
      <div class="address_map" @click="$router.push({name: 'address',params: {city: city}})">
          <img src="../../assets/imgs/position.png">
          <span>{{address}}</span>
        
      </div>
    </div>


    <cart-list class="cart-list" :cart-list="cartList"></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import BottomBar from './childComps/BottomBar'

	export default {
		name: "Cart",
    components: {
		  NavBar,
      CartList,
      BottomBar
    },
    computed: {
		  cartList() {
		    return this.$store.getters.cartList
      },
      cartCount() {
		    return this.$store.getters.cartCount
      },
      address(){
        return this.$store.getters.address;
        
      }
    }
	}
</script>

<style scoped>
  #cart {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }

   .header {
      background-color:#eee;
      padding: 10px 16px;
    }
    .header .address_map {
      color: #fff;
      font-weight: bold;
    }
    .address_map i {
      margin: 0 3px;
      font-size: 18px;
    }
    .address_map span {
      display: inline-block;
      width: 80%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
</style>
