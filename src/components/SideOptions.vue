<template>
    <transition name="slide-fade">
    <div class="side-options" v-show="optionsPaneShown">
        <p class="legend">Language to practice</p>
        <a href="#">English</a>
        <a href="#">German</a>
        <a href="#">Norwegian</a>
        <p class="legend-sec">User Options</p>
        <a href="#">User profile</a>
        <a href="#">Learning stats</a>
        <a href="#">Logout</a>

    </div>
    </transition>
</template>

<script>
import { eventBus } from "../main.js"

export default {
    name: "SideOptions",
    data() {
        return {
            optionsPaneShown: false
        }
    },
    methods: {
        togglePane: function() {
            this.optionsPaneShown = !this.optionsPaneShown
        }
    },
    mounted: function() {
        eventBus.$on('toggle-pane', this.togglePane)
    }
}
</script>

<style scoped>
.side-options {
    background-color: var(--dark-olive);
    height: 65vh;
    position: absolute;
    z-index: 1;
    top:0;
    right: 0;
    overflow-x: hidden;
    padding: 100px 30px 30px 30px;
}

.side-options a {
  padding: 8px 8px 8px 10px;
  text-decoration: none;
  font-size: 14px;
  color:white;
  display: block;
  transition: 0.3s;
}

.side-options a:hover {
  background-color: var(--olive);
}

.legend {
    font-weight: bold;
    color: rgb(209, 202, 202);
    margin-bottom: 10px
}

.legend-sec {
    font-weight: bold;
    color: rgb(209, 202, 202);
    margin-top: 20px;
    margin-bottom: 10px
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

@media screen and (min-width: 490px) {
    .side-options {
        padding: 130px 30px 30px 30px;
    }
}

@media screen and (min-width: 700px) {
    .side-options {
        display: none;
    }
}
</style>