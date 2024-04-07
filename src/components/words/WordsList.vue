<script>

import WordCard from './WordCard.vue';
export default {
    name: 'WordsList',
    components: { WordCard },
    props: { words: Array }
};
</script>

<template>
    <section id="words-list">
        <div v-if="words.length" class="d-flex justify-conten-center align-items-center flex-column">
            <WordCard v-for="word in words" :key="word.id" :word="word" />

        </div>
        <h4 v-else>Non ci sono Vocaboli</h4>
    </section>

</template>

<style scoped></style>