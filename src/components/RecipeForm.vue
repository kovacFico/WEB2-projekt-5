<template>
    <div class="container mt-5">
        <h2 class="text-center">Unos recepta</h2>
        <div class="card p-4">
            <form @submit.prevent="saveRecipe">
                <div class="mb-3">
                    <label class="form-label">Naziv recepta:</label>
                    <input type="text" class="form-control" v-model="recipe.name" required>        <!-- 2. two-way binding -->
                </div>

                <div class="mb-3">
                    <label class="form-label">Sastojci:</label>

                    <div class="input-group mb-2" v-for="(ingredient, index) in recipe.ingredients" :key="index">
                        <input type="text" class="form-control" v-model="recipe.ingredients[index]" required>
                        <button type="button" class="btn btn-danger" @click="removeIngredient(index)">✖</button>
                    </div>

                    <button type="button" class="btn btn-primary" @click="addIngredient">Dodaj sastojak</button>
                </div>

                <div class="mb-3">
                    <label class="form-label">Priprema:</label>
                    <textarea class="form-control" v-model="recipe.instructions" rows="4" required></textarea>
                </div>

                <button type="submit" class="btn btn-success w-100">Spremi recept</button>
            </form>
        </div>
    </div>
</template>
  
<script>  
export default {
    data() {                // 8. komponenta sa stanjem
        return {
            recipe: {
                name: "",
                ingredients: [""],
                instructions: ""
            }
        };
    },
    methods: {                                  // 3. metode
        addIngredient() {
            this.recipe.ingredients.push(""); 
        },
        removeIngredient(index) {
            this.recipe.ingredients.splice(index, 1); 
        },
        saveRecipe() {
            let savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
            savedRecipes.push({ ...this.recipe });
            localStorage.setItem("recipes", JSON.stringify(savedRecipes));

            this.recipe = { name: "", ingredients: [""], instructions: "" };
            this.$emit("alert-add-recipe", 'Recept je uspješno dodan!');
        }
    }
    
};
</script>

<style scoped>               /*5. scoped style*/
.form-label {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
</style>