<template>
  <div id="app">
    <div class="wrapper">
    <div class="thumb"  v-on:click="show"><img   :src="image" ></div>
    <div class="thumb"  v-on:click="show"><img   :src="image" ></div>
    <div class="thumb"  v-on:click="show"><img   :src="image" ></div>
    </div>
    <div class="wrapper">
    <div class="thumb" v-on:click="show"><img   :src="image" ></div>
    <div class="thumb" v-on:click="show"><img   :src="image" ></div>
    <div class="thumb" v-on:click="show"><img   :src="image" ></div>
    </div>
    <ul id="example-1">
</ul>
  </div>
</template>

<script>
export default {
  data (){
    return {
    image: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png',
    }
    
  
  },
  methods: {
  
  },
  computed: {

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
  width: 200px;
  height: 200px;
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
.wrapper {
  display: flex;
  justify-content: center;
}






</style>

