<template>
    <header>
        <div class="logo"><img id="logo" src="/Pitahaya.svg" alt="Logo" > <span class="brand-text">Pitahaya</span></div>
        <div class="options-wrapper">
            <div class="menu">
                <v-app-bar-nav-icon @click.stop="emitTogglePane"></v-app-bar-nav-icon>
            </div>
            <div class="lang-options dropdown" style="display:none;">
                <button class="dropbtn"><strong>Language to practice</strong> </button>
                <div class="dropdown-content">
                    <a href="#">English</a>
                    <a href="#">German</a>
                    <a href="#">Norwegian</a>
                </div>
            </div>
            <div class="user-options dropdown" style="display:none;">
                <button class="dropbtn"> <strong>User</strong> </button>
                <div class="dropdown-content">
                    <a href="#">User profile</a>
                    <a href="#">Learning stats</a>
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { eventBus } from "../main.js"
export default {
    name: "Header",
    methods: {
        emitTogglePane: function() {
            eventBus.$emit('toggle-pane')
        }
    }

    
}
</script>

<style scoped>
header {
    display:flex;
    grid-area: header;
    align-items: center;
    justify-content: space-between;
    color: white;
    background-color: var(--olive);
    z-index: 10;
}

.logo {
    margin-left: 5vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.brand-text {
    font-size: 18pt;
    padding-top: 10px;
}

#logo {
    width: 60px;
}

.options-wrapper {
    margin-right: 5vw;
    display: flex;
}

.dropbtn {
  background-color: var(--olive);
  color: white;
  padding: 16px;
  border: none;
  cursor: pointer;
  pointer-events: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0px;
  top: 54px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  font-size: 11pt;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: var(--dark-olive);
}

@media screen and (min-width: 490px) {
    .logo {
        margin-left: 30px;
    }
    .options-wrapper {
        margin-right: 30px;
    }
}

@media screen and (min-width: 700px) {
    .lang-options, .user-options {
        display: inline-flex !important;
    }
    .menu {
        display: none;
    }
}

@media screen and (max-width: 400px) {
    #logo {
    width: 17%;
}
}

</style>