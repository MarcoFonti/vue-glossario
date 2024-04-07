<script>
import WordsList from '../components/words/WordsList.vue';
import AppAlert from '../components/AppAlert.vue';
import { store } from '../data/store'

import axios from 'axios';
const endpoint = 'http://localhost:8000/api/words/';
export default {
    name: 'HomePage',
    components: { WordsList, AppAlert },
    data: () => ({
        words: [],
        isAlertOpen: false,
        store
    }),
    methods: {
        fetchWords() {
            store.isLoading = true
            axios.get(endpoint).then(res => {
                this.words = res.data
                this.isAlertOpen = false;
            }).catch(err => {
                console.error(err)
                this.isAlertOpen = true;
            }).then(() => {
                store.isLoading = false;
            })
        }
    },
    created() {
        this.fetchWords();
    }
};
</script>

<template>
    <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" @retry="fetchWords" />
    <AppLoader v-if="store.isLoading" />
    <WordsList v-else :words="words" />

</template>

<style scoped></style>