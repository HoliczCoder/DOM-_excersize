<template>
  <div id="app">
    <div class="thumb"><img   :src="image"  :alt="imageAlt"></div>
    <div  class="container">
    <div :class="{valid:inStock}"  class="stuff" :id="stuff">{{product}}</div>
    <div>{{behalf}}</div>
    <div>Quantity {{quantity  | noMoney}}</div>
    <div>Price {{price | noMoney}}</div>
    <div>Discount {{discount}}</div>

    <a :href="productLink">Link san pham o day</a>
    <div><button  v-on:click="greet" >Chon mua</button></div>
    <div>So tien duoc giam la {{remain}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
   return {
      image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
      imageAlt: 'ps5 alt',
      product: 'ps5',
      productLink: 'https://bachtungps.com.vn/may-sony-playstation-5-ps5-1',
      quantity: 10,
      price: 10000,
      discount: 0.2,
      inStock: true,
      classObject: {
        'bg-green': true,
        'bg-blue': false
      },
      remain: null
    }
  },
  methods: {
    greet: function (event) {
      this.remain = this.price*this.discount
      return (this.remain)
    }
  },
  computed: {
    behalf: function (){
      return("day la may loc khong khi speedmaster 5")
    }
  }

}


</script>

<style >
.valid {
  background-color: red;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.stuff{
  width: 100px;
  margin: auto
}

.thumb{
  width: 500px;
  height: 500px;
  overflow: hidden;
  margin: auto
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
div {
  margin: 10px;
}





</style>

