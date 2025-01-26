import { defineStore } from 'pinia';


export const useRecipeStore = defineStore('recipeStore', {
    state: () => ({ 
        recipes: [] 
    }),
    actions: {
        async fetchRecipes() {
            this.recipes = await new Promise(resolve =>
                setTimeout(() => resolve([
                    { 
                        id: 1, 
                        name: 'Tjestenina u umaku od rajčice', 
                        ingredients: [
                            "Tjestenina",
                            "rajčica",
                            "Maslinovo ulje",
                            "Crveni luk",
                            "Sol",
                            "Papar",
                            "Parmezan"
                        ],
                        instructions: "1. Skuhajte tjesteninu. 2. U loncu zagrijte maslinovo ulje i prepržite crveni luk. 3. Dodajte isjeckanu rajčicu, začine i kuhajte 10 minuta. 4. Pomješajte tjesteninu sa umakom i dodajte parmezan."
                    }]), 1000)
            );
        },
    }
});