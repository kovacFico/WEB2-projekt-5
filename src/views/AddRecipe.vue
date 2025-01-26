<template>
	<div>
		<RecipeForm @add-recipe="addRecipe" />
	</div>
</template>

<script>
import RecipeForm from '../components/RecipeForm.vue';

export default {
	components: { RecipeForm },
};
</script>