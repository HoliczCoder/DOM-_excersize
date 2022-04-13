<template>
  <div>
    <div class="mt-14">
      <div class="flex">
        <div class="text-white font-bold text-4xl pt-10">Order Number</div>
      </div>
      <div class="flex flex-row">
        <div class="bg-red-500 w-1/2">
          <div
            class="content p-10 flex flex-row justify-center border-solid border-white"
          >
            <div class="text-white w-72 font-bold text-2xl">Sản phẩm</div>
            <div class="text-white w-72 font-bold text-2xl">Mã</div>
            <div class="text-white w-72 font-bold text-2xl">Số lượng</div>
            <div class="text-white w-72 font-bold text-2xl">Giá/1đv</div>
            <div class="text-white w-72 font-bold text-2xl">Tổng giá</div>
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
        <div class="w-1/2 bg-blue-500">
          <div class="text-white font-bold text-2xl pt-10">Customer</div>
          <div class="wrapper flex justify-center">
            <div class="flex flex-col text-left py-6">
              <div class="name"></div>
              <div class="text-white m-2 font-semibold text-xl">
                {{ userInfo.data.name }}
              </div>
              <div class="text-white m-2 font-semibold text-xl">
                {{ userInfo.data.phone }}
              </div>
              <div class="text-white m-2 font-semibold text-xl">
                shipping address
              </div>
              <div>
                <input type="text" class="m-2 max-w-full px-2" v-model="city" />
              </div>
              <div>
                <input
                  type="text"
                  class="m-2 max-w-full px-2"
                  v-model="district"
                />
              </div>
              <div>
                <input
                  type="text"
                  class="m-2 max-w-full px-2"
                  v-model="street"
                />
              </div>
              <div>
                <input
                  type="text"
                  class="m-2 max-w-full px-2"
                  v-model="number"
                />
              </div>
            </div>
          </div>
          <div
            class="sum-total max-w-full bg-green-500 flex flex-row justify-center"
          >
            <div class="w-1/2 px-5 flex flex-col items-start">
              <div class="text-white m-2">Subtotal</div>
              <div class="text-white m-2">Discount</div>
              <div class="text-white m-2">Shipping fee</div>
              <div class="text-white m-2">Total</div>
            </div>
            <div class="w-1/2 px-5 flex flex-col items-start">
              <div class="text-white m-2">{{ totalItem }}</div>
              <div class="text-white m-2">0</div>
              <div class="text-white m-2">0</div>
              <div class="text-white m-2">{{ totalItem }}</div>
            </div>
          </div>
          <button
            @click="_getOrder()"
            class="text-white font-semibold text-4xl m-5"
          >
            get order
          </button>
          <div v-show="showResult" class="text-white font-semibold text-2xl">
            Order request sent!
          </div>
          <router-link :to="{ name: 'Home' }">
            <div>
              <button class="text-white font-semibold text-2xl">
                Back to home
              </button>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import { Axios } from "../services/Axios";
export default {
  name: "MakeOrder",
  setup() {},
  mounted() {
    this.start();
    this.info();
  },
  data: function () {
    return {
      userInfo: "",
      product: [],
      city: "city",
      district: "district",
      street: "street",
      number: "number",
      totalPrice: 0,
      showResult: false,
    };
  },
  methods: {
    async start() {
      const response = await Axios.get("user");
      const data = await response;
      this.userInfo = data;
    },
    info() {
      const response = JSON.parse(localStorage.getItem("thiscart"));
      this.product = response;
      console.log(this.product);
    },
    _getOrder() {
      this.totalPrice = this.totalItem;
      this.pushProduct = this.mapProduct;
      //console.log(this.product);
      this.sendOrder();
    },
    async sendOrder() {
      console.log(this.totalPrice);
      try {
        const response = await Axios.post("make-order", {
          sub_total: this.totalPrice,
          total: this.totalPrice,
          tax: 1,
          note: 1,
          address: this.city + this.district + this.street + this.number,
          phone: this.userInfo.data.phone,
          name: "Minh",
          products: this.pushProduct,
        });
        const reply = await response;
        console.log(reply);
        this.showResult = true;
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  computed: {
    totalItem: function () {
      let sum = 0;
      for (let i = 0; i < this.product.length; i++) {
        sum +=
          parseFloat(this.product[i].productItem.price) *
          parseFloat(this.product[i].productQuanity);
      }

      return sum;
    },
    mapProduct() {
      return this.product.map((item) => {
        return {
          quantity: item.productQuanity,
          price: item.productItem.price,
          id: item.productItem.id,
          name: item.productItem.name,
        };
      });
    },
  },

  /*  filter() {
    if (typeof value !== "number") {
      return value;
    }
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(value);
  }, */
};
</script>
