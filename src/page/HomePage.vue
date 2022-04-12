<template>
  <div>
    <div class="header flex flex-row justify-between bg-black">
      <div class="flex flex-row">
        <div><img class="w-20" src="../assets/nike_symbol.png" /></div>
        <router-link :to="{ name: 'UserProfile' }" class="flex items-center">
          <div class="text-white text-xl px-2">User Profile</div>
        </router-link>
      </div>
      <div class="side-bar flex flex-row justify-center">
        <div class="m-2 text-white flex flex-row items-center">HOME</div>
        <div class="m-2 text-white flex flex-row items-center">DANH MỤC</div>
        <router-link
          :to="{ name: 'RegisterThis' }"
          class="m-2 flex flex-row items-center"
        >
          <div class="m-2 text-white flex flex-row items-center">ĐĂNG KÝ</div>
        </router-link>
        <router-link
          :to="{ name: 'LoginThis' }"
          class="m-2 flex flex-row items-center"
        >
          <div class="m-2 text-white flex flex-row items-center">ĐĂNG NHẬP</div>
        </router-link>
        <router-link
          :to="{ name: 'cart' }"
          class="m-2 flex flex-row items-center"
        >
          <div class="m-2 text-white flex flex-row items-center">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </router-link>
      </div>
    </div>
    <div class="text-white flex flex-row text-2xl font-bold py-3">
      Sản phẩm mới nhất
    </div>
    <div class="w-screen grid grid-cols-2 lg:grid-cols-4 gap-10">
      <div
        class="overflow-hidden w-80 m-1"
        v-for="(item, index) in realData"
        :key="index"
      >
        <router-link
          :to="{
            name: 'detail-product',
            query: {
              id: item.id,
              slug: item.name,
              itemprice: item.price,
              iteminfo: item,
            },
          }"
        >
          <div class="">
            <img class="" :src="item.image.full_image_path" alt="" />
          </div>
        </router-link>
        <div class="wrapper bg-gray-900 px-2 pb-2">
          <div class="product-name flex flex-row justify-between pt-3">
            <div class="text-white text-lg font-bold text-trasform: uppercase">
              {{ item.name }}
            </div>
            <div class="text-white"><i class="fa-solid fa-heart"></i></div>
          </div>
          <div
            class="flex flex-row justify-between text-red-500 font-extrabold"
          >
            {{ item.price }}
          </div>
          <div class="add-to-cart flex flex-row justify-between">
            <div class="flex flex-row">
              <div class="px-2 text-white flex items-center">
                <button @click="addQuantity(item.id, item.quantity)">+</button>
              </div>
              <div class="flex items-center border-solid border-white">
                <input
                  value="1"
                  :id="item.id"
                  class="w-10 bg-gray-700 rounded-md text-white text-center"
                />
              </div>
              <div class="px-2 text-white flex items-center">
                <button @click="reduceQuantity(item.id)">-</button>
              </div>
            </div>
            <div class="flex flex-row justify-between">
              <div class="bg-gray-700 p-2 rounded-md mx-3">
                <button
                  @click="addToCart(item)"
                  class="text-transform: capitalize text-white font-bold"
                >
                  add to cart
                </button>
              </div>
              <div
                class="flex flex-row text-white items-center justify-center bg-gray-700 rounded-md w-10"
              >
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div class="text-white flex flex-row text-2xl font-bold py-3">
      Sản phẩm nhiều lượt xem nhất
    </div>
    <div class="w-screen grid grid-cols-2 lg:grid-cols-4 gap-10">
      <div
        class="overflow-hidden w-80 m-1"
        v-for="(item, index) in bestSale"
        :key="index"
      >
        <div class="">
          <img class="" :src="item.image.full_image_path" alt="" />
        </div>
        <div class="wrapper bg-slate-900 px-2 pb-2">
          <div class="product-name flex flex-row justify-between pt-3">
            <div class="text-white text-lg font-bold text-trasform: uppercase">
              {{ item.name }}
            </div>
            <div class="text-white"><i class="fa-solid fa-heart"></i></div>
          </div>
          <div
            class="flex flex-row justify-between text-red-500 font-extrabold"
          >
            {{ item.price }}
          </div>
          <div class="add-to-cart flex flex-row justify-between">
            <div class="flex flex-row">
              <div class="px-2 text-white flex items-center">+</div>
              <div class="flex items-center border-solid border-white">
                <input
                  placeholder="1"
                  class="w-10 bg-slate-700 rounded-md text-white text-center"
                />
              </div>
              <div class="px-2 text-white flex items-center">-</div>
            </div>
            <div class="flex flex-row justify-between">
              <div class="bg-gray-700 p-2 rounded-md mx-3">
                <button class="text-transform: capitalize text-white font-bold">
                  add to cart
                </button>
              </div>
              <div
                class="flex flex-row text-white items-center justify-center bg-gray-700 rounded-md w-10"
              >
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-white flex flex-row text-2xl font-bold py-3">
      Sản phẩm nhiều người mua
    </div>
    <div class="w-screen grid grid-cols-2 lg:grid-cols-4 gap-10">
      <div
        class="overflow-hidden w-80 m-1"
        v-for="(item, index) in soldSale"
        :key="index"
      >
        <div class="">
          <img class="" :src="item.image.full_image_path" alt="" />
        </div>
        <div class="wrapper bg-slate-900 px-2 pb-2">
          <div class="product-name flex flex-row justify-between pt-3">
            <div class="text-white text-lg font-bold text-trasform: uppercase">
              {{ item.name }}
            </div>
            <div class="text-white"><i class="fa-solid fa-heart"></i></div>
          </div>
          <div
            class="flex flex-row justify-between text-red-500 font-extrabold"
          >
            {{ item.price }}
          </div>
          <div class="add-to-cart flex flex-row justify-between">
            <div class="flex flex-row">
              <div class="px-2 text-white flex items-center">+</div>
              <div class="flex items-center border-solid border-white">
                <input
                  placeholder="1"
                  class="w-10 bg-slate-700 rounded-md text-white text-center"
                />
              </div>
              <div class="px-2 text-white flex items-center">-</div>
            </div>
            <div class="flex flex-row justify-between">
              <div class="bg-gray-700 p-2 rounded-md mx-3">
                <button class="text-transform: capitalize text-white font-bold">
                  add to cart
                </button>
              </div>
              <div
                class="flex flex-row text-white items-center justify-center bg-gray-700 rounded-md w-10"
              >
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: function () {
    return {
      realData: "",
      lastProduct: "",
      bestSale: "",
      soldSale: "",
      cart: [],
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    async start() {
      const response = await fetch("http://128.199.211.17/api/v1/home");
      const data = await response.json();
      this.realData = data.lastProducts;
      this.bestSale = data.topViewProducts;
      this.soldSale = data.topSoldProducts;
    },
    addQuantity(itemId, max) {
      let addValue = document.getElementById(itemId).value;
      if (addValue >= max) {
        return;
      }
      addValue = 1 + Number(addValue);
      document.getElementById(itemId).value = addValue;
      console.log(addValue);
    },
    reduceQuantity(itemId) {
      let reduceValue = document.getElementById(itemId).value;
      if (reduceValue <= 0) {
        return;
      }
      reduceValue = -1 + Number(reduceValue);
      document.getElementById(itemId).value = reduceValue;
      console.log(reduceValue);
    },
    addToCart(item) {
      let permitToPush = true;
      let quantity = document.getElementById(item.id).value;
      if (quantity <= 0) {
        quantity = 1;
      }
      //
      this.cart.map((index) => {
        if (index.productItem.id == item.id) {
          index.productQuanity =
            Number(quantity) + Number(index.productQuanity);
          permitToPush = false;
        }
      });

      //
      if (permitToPush) {
        this.cart.push({
          productItem: item,
          productQuanity: quantity,
        });
      }
      localStorage.setItem("thiscart", JSON.stringify(this.cart));
    },
  },
};
</script>
