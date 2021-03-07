<template>
<div id="main-input-form">
    <form @submit.prevent="onSubmit">
        <textarea name="input-text" id="input-text" placeholder="Enter text here" v-model="currentText"></textarea>
        <button type="submit"><strong>Let's Go!</strong></button>
    </form>
</div>
</template>

<script>
import { eventBus } from "../main.js"

export default {
    name: "InputForm",
    data() {
        return {
            currentText: "",
            placeholder: "Enter your text",
            processedText: [],
            originalTextCap: [],
        }
    },
    methods: {
      processText: function() {
        let currentText = this.currentText
        let originalTextCap = currentText.split(/([^a-zA-ZåæøáéíóúÅØÆÁÉÍÓÚ]+)/).filter(word => word != '');
        let textArray = currentText.toLowerCase().split(/([^a-zåæøáéíóú]+)/).filter(word => word != '');   
        let textSet = new Set(textArray)
        let reducedArray = Array.from(textSet)
        this.processedText = reducedArray
        this.originalTextCap = originalTextCap
        eventBus.$emit('words-submitted', this.originalTextCap)
      },
      onSubmit: function() {
        this.processText()
        this.currentText = ""
      }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
textarea {
  background-color: var(--caqui-most-light);
  border: solid 3px var(--olive);
  margin-bottom: 20px;	 
  width: 80%;
  height: 30vh;
  padding: 15px;
  border-radius: 5px;
}

button {
  background-color: var(--olive);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  border-radius: 10px;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>