<script>
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
    <div class="card w-75 d-flex  my-3">
        <div class="card-header d-flex align-items-center justify-content-between">
            {{ word.title }}
            <RouterLink v-if="!isDetail" class="btn btn-sm btn-primary"
                :to="{ name: 'word-detail', params: { slug: word.slug } }">Vedi
            </RouterLink>
        </div>
        <div class="card-body clearfix">
            <img v-if="word.image" :src="word.image" :alt="word.title" class="img-fluid float-start">

            <span class="badge ms-2" :style="{ backgroundColor: word.type?.color }">{{ word.type?.label }}</span>
            <p>

                {{ isDetail ? word.description : abstract }}
            </p>

            <div v-if="word.tags.length" class="d-flex align-items-center justify-content-end">
                <span v-for="tag in word.tags" :key="tag.id" class="me-2 badge rounded-pill"
                    :class="`text-bg-${tag.color}`">{{ tag.label }}</span>
            </div>
        </div>
        <div class="card-footer d-flex align-items-center justify-content-between">
            <address>By Team 4</address>
            <small>Pubblicato il {{ pubblicationDate }}</small>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.card {
    border: none;
}

.card-header,
.card-footer {
    background-color: #CBF3EB;
    border: none;
}
</style>