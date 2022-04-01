<template>
  <div id="app">
    <li  v-for="item in products" :key="item.id">
    <div> {{item.name}}</div> 
     <div> {{item.price}}</div> 
     <div> {{item.publicDate}}</div> 
    <div><img  :src=item.image></div> 
    </li>
      <div>loc san pham hot hay khong</div>
    <li v-for="item in hotProducts"  :key="item">
    <div> {{item.name}}</div> 
     <div> {{item.price}}</div> 
     <div> {{item.publicDate}}</div>
     <div><img  :src=item.image></div> 
     </li>
    <div>Hien thi san pham dat re</div>
    <div v-for="item in products"  :key="item"  >
    <div   v-if="item.price >= 4000">
      <div> {{item.name}}</div> 
     <div> {{item.price}}</div> 
     <div> {{item.publicDate}}</div> 
      </div>
</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
 return {
   cart: [],
   products: [
     {
       id: 1,
       name: "PS5",
       price: 5555,
       publicDate: "05-05-2021",
       image:
         "https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg",
       hot: true,
     },
     {
       id: 2,
       name: "PS4",
       price: 4444,
       publicDate: "04-04-2021",
       image:
         "https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$",
       hot: true,
     },
     {
       id: 3,
       name: "PS3",
       price: 3333,
       publicDate: "03-03-2021",
       image:
         "https://game.haloshop.vn/image/catalog/blogs/ps3-co-con-dang-mua/ps3-co-con-dang-mua-21.jpg",
       hot: false,
     },
   ],
   paymentMethods: [
     { text: "COD", value: 1 },
     { text: "Banking", value: 2 },
     { text: "Ứng dụng bên thứ 3", value: 3 },
   ],
   selectedPayment: 2,
 };
},
computed: {
        hotProducts: function() {
            return this.products.filter(product => product.hot);
        },
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
