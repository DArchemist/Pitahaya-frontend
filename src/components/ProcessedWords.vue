<template>
    <div id="processed-text" v-show="isShown">
        <WordButton v-for= "(word, index) in words2" :key="index" :word="word.word" :status="word.status"></WordButton>
    </div>
</template>

<script>
import { eventBus } from "../main.js"
import WordButton from "@/components/WordButton.vue"

export default {
    name: "ProcessedWords",
    components: {
        WordButton, 
    },
    data() {
        return {
            words: [],
            isShown: false
        }
    },
    methods: {
        setWords: function(originalTextCap) {
            this.words = originalTextCap
        },
        changeVisibility: function(originalTextCap) {
            if (originalTextCap.length > 0) {
                this.isShown = true
            }
            else {
                this.isShown = false
            }
            
        }
    },
    created: function() {
        eventBus.$on('words-submitted', this.setWords)
        eventBus.$on('words-submitted', this.changeVisibility)
    },
    computed: {
        words2() {
            let statuses = ['learnt', 'consulted', 'unknown']
            let status = ""
            let lista = []
            for (let i = 0; i < this.words.length; i++) {
                let wordsDict = {}
                const random = Math.floor(Math.random() * statuses.length)
                if (/([^a-zA-ZåæøáéíóúÅØÆÁÉÍÓÚ]+)/.test(this.words[i])) {
                    status = "nostyle";
                }
                else {
                    status = statuses[random]
                }
                wordsDict.word = this.words[i]
                wordsDict.status = status
                lista.push(wordsDict)
            }
            return lista
        }
    }
}
</script>

<style scoped>
    #processed-text {
        padding: 10px;
        border: solid 3px var(--olive);
        margin: 15vw auto 15vw auto;
        text-align:justify;
        border-radius: 5px;
        background-color: var(--caqui-most-light);
        width: 80%;
    }

    @media screen and (min-width: 700px) {
        #processed-text {
            margin: 10vw auto 10vw auto;
        }
    }
</style>