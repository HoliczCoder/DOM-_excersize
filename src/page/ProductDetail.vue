<template>
  <div class="container">
    <div class="header flex flex-row justify-between bg-black">
      <div><img class="w-20" src="new\src\assets\logo.png" /></div>
      <div class="side-bar flex flex-row justify-center">
        <div class="m-2 text-white flex flex-row items-center">HOME</div>
        <div class="m-2 text-white flex flex-row items-center">DANH MỤC</div>
        <div class="m-2 text-white flex flex-row items-center">ĐĂNG KÝ</div>
        <div class="m-2 text-white flex flex-row items-center">ĐĂNG NHẬP</div>
        <div class="m-2 text-white flex flex-row items-center">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
    <div class="container p-20">
      <div class="flex flex-row">
        <div class="px-20">
          <div class="thumb overflow-hidden w-96">
            <img
              class="object-cover"
              :src="productInfo.images[0].full_image_path"
              alt=""
            />
          </div>
          <div class="thumb overflow-hidden w-16 pt-5">
            <img
              class="object-cover"
              :src="productInfo.images[0].full_image_path"
              alt=""
            />
          </div>
        </div>
        <div class="right-text flex flex-col justify-start">
          <div class="name flex text-white font-bold text-5xl">
            {{ productInfo.name }}
          </div>
          <div class="flex text-red-700 text-3xl font-semibold mt-5">
            {{ productInfo.price }}
          </div>
          <div>
            <div class="add-to-cart flex flex-row justify-start pt-10">
              <div class="flex flex-row px-3">
                <div class="px-2 text-white flex items-center text-2xl">+</div>
                <div class="flex items-center border-solid border-white">
                  <input
                    placeholder="1"
                    class="w-11 bg-gray-700 rounded-md text-white text-center"
                  />
                </div>
                <div class="px-2 text-white flex items-center text-2xl">-</div>
              </div>
              <div class="flex flex-row justify-between">
                <div class="bg-gray-700 p-2 rounded-md mx-3">
                  <button
                    class="text-transform: capitalize text-white font-bold"
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="describe px-20 mt-10">
        <div class="flex py-5 text-white font-bold text-4xl">
          Mô tả sản phẩm
        </div>
        <div class="text-white text-justify text-2xl">
          {{ productInfo.short_desc }}
        </div>
        <div class="flex py-5 text-white font-bold text-4xl mt-16">
          Có thể bạn sẽ thích
        </div>
      </div>
      <div class="may-you-like grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div v-for="(item, index) in mayLikeProduct" :key="index">
          <div class="overflow-hidden w-36">
            <img
              class="object-cover"
              :src="item.image.full_image_path"
              alt=""
            />
          </div>
          <div class="wrapper bg-gray-900 px-2 pb-2">
            <div class="product-name flex flex-row justify-between pt-3">
              <div
                class="text-white text-lg font-bold text-trasform: uppercase"
              >
                {{ item.name }}
              </div>
              <div class="text-white"><i class="fa-solid fa-heart"></i></div>
            </div>
            <div
              class="flex flex-row justify-between text-red-500 font-extrabold"
            >
              {{ item.price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { defineComponent } from "@vue/composition-api";

export default {
  setup() {},
  data() {
    return {
      productId: "",
      productName: "",
      productPrice: "",
      productInfo: "",
      product: "",
      mayLikeProduct: "",
    };
  },
  mounted() {
    this.productId = this.$route.query.id;
    //this.productName = this.$route.query.slug;
    //this.productPrice = this.$route.query.itemprice;
    //this.productInfo = this.$route.query.iteminfo;
    //console.log(this.productId + "va" + this.productName);
    //console.log(this.productInfo.price);
    this.start();
  },
  methods: {
    async start() {
      const response = await fetch(
        " http://128.199.211.17/api/v1/products/" + this.productId
      );
      this.product = await response.json();
      this.productInfo = await this.product.product;
      this.mayLikeProduct = await this.product.mightYouLikeProducts;
      console.log(this.productInfo.images[0].full_image_path);
    },
  },
};
</script>
