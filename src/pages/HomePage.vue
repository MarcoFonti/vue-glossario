<script>
import WordsList from '../components/words/WordsList.vue';
import AppAlert from '../components/AppAlert.vue';
import { store } from '../data/store';
import axios from 'axios';
import BasePagination from '../components/BasePagination.vue';
const defaultEndpoint = 'http://localhost:8000/api/words/';


export default {
    name: 'HomePage',
    components: { WordsList, AppAlert, BasePagination },
    data: () => ({
        words: {
            data: [],
            links: [],
        },
        isAlertOpen: false,
        store
    }),
    methods: {
        fetchWords(endpoint = defaultEndpoint) {
            store.isLoading = true
            axios.get(endpoint).then(res => {
                this.isAlertOpen = false;
                const { data, links } = res.data
                this.words = { data, links };
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
    <div class="d-flex justify-content-center flex-column align-items-center">
        <BasePagination class="" :links="words.links" @changePage="fetchWords" />
    </div>
    <AppLoader v-if="store.isLoading" />
    <WordsList v-else :words="words.data" />
</template>

<style scoped></style>