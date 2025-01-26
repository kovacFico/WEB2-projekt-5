<template>
    <div>
        <RecipeList :recipes="recipes" />
    </div>
</template>

<script>
import RecipeList from '../components/RecipeList.vue';
import { onMounted, computed } from 'vue';
import { useRecipeStore } from '../recipes';

export default {
    components: { RecipeList },
    methods: {
        alert
    },
    
    // ovdje radi lakse preglednosti sam koristio setup() Composition API, ona
    // ukratko spaja Options API-eve data(), methode, computed svojstva, i mounted u jednu cjelinu. 
    // Izvrsava se prije nego je komponenta stvorena, tj prije "beforeCreated()", i tako je lifecycle hook.
    setup() {
        const store = useRecipeStore();

        onMounted(async () => {
        try {
            await store.fetchRecipes(); 
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
        });

        return { 

            recipes: computed(() => store.recipes[0]) 
        };
    }

};
</script>
