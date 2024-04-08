<script>
import WordCard from '../components/words/WordCard.vue';
import AppLoader from '../components/AppLoader.vue';
import ShowCard from '../components/words/ShowCard.vue';
import { store } from '../data/store';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/words/';

export default {
    name: 'WordDetailPage',
    components: { ShowCard, AppLoader },
    data: () => ({
        word: null,
        store,
    }),
    methods: {
        getPost() {
            store.isLoading = true;
            axios.get(endpoint + this.$route.params.slug)
                .then(res => { this.word = res.data; })
                .catch(err => { console.error(err) })
                .then(() => { store.isLoading = false; })
        },
    },
    created() {
        this.getPost();
    }
};
</script>

<template>
    <AppLoader v-if="store.isLoading && !word" />
    <ShowCard v-if="!store.isLoading && word" :word="word" :isDetail="true" />

</template>

<style scoped></style>