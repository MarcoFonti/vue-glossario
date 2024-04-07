<script>

export default {
    name: 'AppJumbotron',
    data:() => ({
        search: ''
    }),
    emits: ['filter'],
}
</script>

<template>
    <section id="jumbotron" class="mb-5 bg-success py-5">
    <div class="row h-100 d-flex justify-content-center align-items-center">
        <div class="col-6">
            <h1 class="text-center text-light mb-5">Impara a programmare</h1>
            <form>
                <div class="input-group">
                    <input type="search" class="form-control" placeholder="Es: Array.." name="search"
                        v-model="search" @input="$emit('filter', search)">
                    <button class="btn btn-secondary" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>
        </div>
    </div>
</section>
</template>

<style scoped>

</style>