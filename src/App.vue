<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Moji Recepti</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-item" to="/">Home</router-link> |
                </li>
                <li class="nav-item">
                    <router-link class="nav-item" to="/add">Novi recept</router-link> |
                </li>
            </ul>
        </div>
    </nav>
    <router-view/>
</template>

<script>

export default {
    name: "App",
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

.nav-item {
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
}

nav a {
    font-weight: bold;
    color: #f2f3f5;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
