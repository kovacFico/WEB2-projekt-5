<template>
    <ul>
        <li v-for="recipe in allRecipes" :key="recipe.id">
            <div class="container mt-5">
                <div class="card">
                <div class="card-header text-center">
                    <h2>{{ recipe.name }}</h2>              <!-- 1. interpolation/one-way binding -->
                </div>
                <div class="card-body">
                    <div class="row">
                    <div class="col-md-6">
                        <h4>Potrebni sastojci:</h4>
                        <ul>
                            <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h4>Priprema:</h4>
                            <p>{{ recipe.instructions }}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['recipes'],             // 8. komponenta bez stanja, koristi properties
    computed: {                     // 4. computed properties
        allRecipes() {
            let savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
            if (this.recipes) {
                savedRecipes.push(this.recipes); 
            }
            return savedRecipes; 
        }
    }
};
</script>
