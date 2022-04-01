<template>
  <div id="app">
    <div class="output">
      {{ addOperation }}
    </div>
    <div v-for="(item, timeIndex) in numberContainer" :key="timeIndex">
      <div>
        <button @click="addThisValue = item.value">{{ item.value }}</button>
      </div>
    </div>

    <div>
      <button @click="addThisValue = addOperator">{{ addOperator }}</button>
    </div>
    <div>
      <button @click="addThisValue = reduceOperator">
        {{ reduceOperator }}
      </button>
    </div>
    <div>
      <button @click="addThisValue = equal">
        {{ equal }}
      </button>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      numberContainer: [
        {
          id: 1,
          value: 1
        },
        {
          id: 2,
          value: 2
        },
        {
          id: 3,
          value: 3
        },
        {
          id: 4,
          value: 4
        },
        {
          id: 5,
          value: 5
        },
        {
          id: 6,
          value: 6
        },
        {
          id: 7,
          value: 7
        },
        {
          id: 8,
          value: 8
        },
        {
          id: 9,
          value: 9
        }
      ],
      addThisValue: "",
      addThisOperator: "",
      cunrrentValue: 0,
      addOperator: "+",
      reduceOperator: "-",
      firstNumber: "",
      secondNumber: "",
      equal: "="
    };
  },
  computed: {
    addOperation: function() {
      if (isNaN(this.addThisValue)) {
        if (this.addThisValue == "=") {
          this.secondNumber = this.cunrrentValue;
          alert("ket qua");
          return parseInt(this.secondNumber) + parseInt(this.firstNumber);
        }
        this.firstNumber = this.cunrrentValue; //  khởi tạo số đầu tiên
        this.cunrrentValue = this.cunrrentValue + this.addThisValue;
        this.cunrrentValue = "";
        return this.cunrrentValue;
      }
      this.cunrrentValue = this.cunrrentValue + this.addThisValue;
      return this.cunrrentValue;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: flex;
  width: 500px;
  height: 50px;
  margin: auto;
  justify-content: center;
}
.output {
  margin: 20px;
  width: 200px;
  height: 50px;
  border: solid 1px black;
}
</style>
