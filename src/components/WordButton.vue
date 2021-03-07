<template>
    <button class="word-button-instance"
    :class="{learnt: isLearnt, consulted: isConsulted, unknown: isUnknown, nostyle: isNoStyle}">
        {{word}}
    </button>
</template>

<script>
export default {
    name: "WordButton",
    props: ['word', 'status'],
    computed: {
        isLearnt: function() {
            if (this.status && this.status == "learnt") {
                return true
            }
            else {
                return false
            }

        },
        isConsulted: function() {
            if (this.status && this.status == "consulted") {
                return true
            }
            else {
                return false
            }

        },
        isUnknown: function() {
            if (this.status && this.status == "unknown") {
                return true
            }
            else {
                return false
            }

        },
        isNoStyle: function() {
            if (this.status && this.status == "nostyle") {
                return true
            }
            else {
                return false
            }

        }
    },
}
</script>

<style scoped>

button {
    border: none;
    color: rgb(88, 87, 87);
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    margin:3px;
    font-size: 11pt;
    font-weight: bold;
}

.learnt {
    background-color: rgb(214, 214, 230);
}

.consulted {
    background-color:rgb(215, 224, 215);
}

.unknown {
    background-color: rgb(235, 220, 220);
}

.nostyle {
    margin: 0;
    pointer-events: none;
    padding: 0;
}

@media screen and (min-width: 700px) {
    button {
            font-size: 13pt;
    }
}

</style>