<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'WordCard',
    props: { word: Object, isDetail: Boolean },
    computed: {
        abstract() {
            const abstract = this.word.description.slice(0, 150);
            return abstract + '...';
        },
        pubblicationDate() {
            const date = new Date(this.word.created_at);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            let hours = date.getHours();
            let minutes = date.getMinutes();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;
            if (hours < 10) hours = '0' + hours;
            if (minutes < 10) minutes = '0' + minutes;


            return `${day}/${month}/${year} alle ${hours}:${minutes}`;
        }
    }
};
</script>

<template>

    <div class="box-show mt-4">

        <h1>{{ word.title }}</h1>
        <hr>
        <section id="info-word">
            <div class="row pb-3">
                <div class="col-7">
                    <p>{{ word.description }}</p>
                </div>
                <div class="col-5 ">
                    <img :src="word.image" :alt="word.title" class="img-fluid img-word-guest">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <RouterLink :to="{ name: 'home' }" class="btn btn-secondary">Torna Indietro</RouterLink>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 1px solid #258277;
}

.card-header,
.card-footer {
    background-color: #51a59b;

    .show-button {
        background-color: #454c81;
        color: #fff;
    }
}
</style>