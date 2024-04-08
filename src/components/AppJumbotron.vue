<script>

export default {
    name: 'AppJumbotron',
    data: () => ({
        search: ''
    }),
    emits: ['filter'],
}
</script>

<template>
    <section id="jumbotron" class="mb-5 py-5">
        <div class="row h-100 d-flex justify-content-center align-items-center">
            <div class="col-6">
                <form>
                    <div class="input-group">
                        <input type="search" class="form-control" placeholder="Es: Array.." name="search"
                            v-model="search" @input="$emit('filter', search)">
                        <button class="btn btn-secondary" type="submit"><i
                                class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
#jumbotron {
    background-color: #184D47;
}
</style>