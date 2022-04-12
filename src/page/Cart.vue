<template>
  <div>
    <div class="header flex flex-row justify-between bg-black">
      <div><img class="w-20" src="../assets/nike_symbol.png" /></div>
      <div class="side-bar flex flex-row justify-center">
        <div class="m-2 text-white flex flex-row items-center">HOME</div>
        <div class="m-2 text-white flex flex-row items-center">DANH MỤC</div>
        <div class="m-2 text-white flex flex-row items-center">ĐĂNG KÝ</div>
        <div class="m-2 text-white flex flex-row items-center">ĐĂNG NHẬP</div>
        <div class="m-2 text-white flex flex-row items-center"></div>
      </div>
    </div>
    <div class="mt-14">
      <div class="text-white font-bold text-4xl pt-10">Giỏ hàng</div>
      <div
        class="content p-10 flex flex-row justify-center border-solid border-white"
      >
        <div class="text-white w-72 font-bold text-3xl">Sản phẩm</div>
        <div class="text-white w-72 font-bold text-3xl">Mã</div>
        <div class="text-white w-72 font-bold text-3xl">Số lượng</div>
        <div class="text-white w-72 font-bold text-3xl">Giá/1đv</div>
        <div class="text-white w-72 font-bold text-3xl">Tổng giá</div>
      </div>
      <div
        class="this-is-product"
        v-for="(productItem, productIndex) in product"
        :key="productIndex"
      >
        <div class="wrapper p-2 flex flex-row justify-center">
          <div class="w-72 flex justify-center">
            <div class="thumb overflow-hidden w-48 h-48">
              <img
                class="object-cover"
                :src="productItem.productItem.image.full_image_path"
              />
            </div>
          </div>
          <div class="text-white w-72 flex justify-center">
            {{ productItem.productItem.name }}
          </div>
          <div class="w-72 flex justify-center">
            <div>
              <input
                class="w-12"
                type="text"
                :value="productItem.productQuanity"
              />
            </div>
          </div>
          <div class="text-white w-72 flex justify-center">
            {{ productItem.productItem.price }}
          </div>
          <div class="text-white w-72 flex justify-center">
            {{ productItem.productItem.price * productItem.productQuanity }}
          </div>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'MakeOrder' }">
      <div class="text-white text-4xl font-extrabold m-10">Get order</div>
    </router-link>
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
  name: "cartShop",
  setup() {},
  data() {
    return { product: [], total: null };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      const response = JSON.parse(localStorage.getItem("thiscart"));
      this.product = response;
      console.log(this.product);
    },
  },
  watch: {},
};
</script>
