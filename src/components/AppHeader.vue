<script>
export default {
    name: 'AppHeader'
};
</script>

<template>
    <header>
        <nav class="navbar d-flex flex-column navbar-expand-lg py-3">
            <div class="container-fluidflex-column">
                <RouterLink class="navbar-brand m-0 text-white" :to="{ name: 'home' }">
                    <h1 class="display-1 m-0">Glossario</h1>
                </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        <div class="d-flex justify-content-center mt-2">
            <ul class="d-flex gap-3 mt-3 list-unstyled">
                <li class="">
                    <RouterLink class="nav-link mt-2 fs-4 fw-semibold" :to="{ name: 'home' }">Home</RouterLink>
                </li>
                <li class="">
                    <RouterLink class="nav-link mt-2 fs-4 fw-semibold" :to="{ name: 'members' }">Membri</RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
nav {
    background-color: #184D47;
}
</style>