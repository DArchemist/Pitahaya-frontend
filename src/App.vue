<template>
  <div id="main-wrapper">
    <Header />
    <div id="content">
      <SideOptions />
      <InputForm />
      <ProcessedWords />
      
    </div>

  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SideOptions from "./components/SideOptions.vue"
import InputForm from "./components/InputForm.vue"
import ProcessedWords from "./components/ProcessedWords.vue"

export default {
  name: "App",

  components: {
    Header,
    SideOptions,
    InputForm,
    ProcessedWords
  },

  data: () => ({
    //
  })
};
</script>

<style>
:root {
  --lima: #EDE580;
  --caqui: #FFE0B5;
  --olive: #A4AF69;
  --dark-olive: #7F894A;
  --dark-brown: #4C2719;
  --zapote: #D35269;
  --caqui-light: #FFF7EC;
  --caqui-most-light: #FFFBF5;
  --light-brown: #BF6240;
  font-family: 'Comfortaa', cursive;
  font-size: 14pt;
}

* {
  box-sizing: border-box;
}

#main-wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 15vw 1fr;
  grid-template-areas: 
  "header"
  "content"
  "botomBar";
  background-color: var(--caqui-light);
}

#content {
  grid-area: content;
  margin-top: 10vw;
}


@media screen and (min-width: 490px) {
  #main-wrapper {
    grid-template-rows: 90px 1fr;
  }

  #content {
    margin-top: 5vw
  }
}
</style>