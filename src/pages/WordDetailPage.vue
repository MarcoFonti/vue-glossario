<script>
import WordCard from '../components/words/WordCard.vue';
import AppLoader from '../components/AppLoader.vue';
import { store } from '../data/store';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/words/';

export default {
    name: 'WordDetailPage',
    components: { WordCard, AppLoader },
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
    <WordCard v-if="!store.isLoading && word" :word="word" :isDetail="true" />
    <div class="box-show mt-4">

        <h1>show guest</h1>
        <section id="info-word">
            <div class="row pb-3">
                <div class="col-7">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eum porro consequuntur possimus
                        ipsa incidunt vel ab vero voluptas voluptatibus magnam unde, totam eaque esse distinctio
                        eveniet. Porro, perspiciatis dolor.</p>
                </div>
                <div class="col-5 ">
                    <img src="" alt="" class="img-fluid img-word-guest">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <a href="" class="btn btn-secondary">Torna Indietro</a>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>