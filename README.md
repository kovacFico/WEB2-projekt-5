# recepies_app
URL aplikacije u cloudu (npr. Render, Heroku...):
https://web2-projekt-5-7gex.onrender.com/


1. interpolation/one-way binding
		- src/components/RecipeList.vue	 [:7, :14, :19] ->  one-way binding recipe.name-a, ingredient i instruction.

2. two-way binding
		- src/components/RecipeForm.vue  [:8, :15, :24] -> u navedenim redovima s v-model="recipes.(nesto)" vezem input s recipes data objektom u <script>. U 15. redu se to vidi, kada se nakon unosena sastojka, on prikazuje u previewu.
      
3. methods
		- src/components/RecipeForm.vue	 [:44] -> od 44. reda nadalje unutar script dijela su definirane metode za dodavanje, uklanjanje i spremanje recepta.

4. computed properties
		- src/components/RecipeList.vue  [:32] -> computed property "allRecipes" koji dohvaca spremljene recepte iz lokalnog storage-a, i pusha ih u array u kojem je vec asinkrono dohvacen recept iz Pinia storea (pogledaj tocku 11.)

5. barem jedan scoped style
		- src/components/RecipeForm.vue  [:64] -> koristim scoped style za form-label (Naziv recepta, Sastojci, Priprema) zato sto je u App.vue font citave stranice postavljen na "Avenir, Helvetica, Arial, sans-serif".

6. koristiti barem jedan lifecycle hook
		- src/views/HomeView.vue  [:18] -> koristim onMounted() u setup() Composition API-u kako bih asinkrono učitao default recepte iz Pinia store, tek kada se komponenta ucita u stranicu. Setup() Composition API je dodatno objasnjen 
		tamo.

7. routing (više stranica)
		aplikacija mora biti bookmarkable, tako da rade linkovi i dinamičko usmjeravanje s 404 stranicom ("catch all")
		- src/main.js [:11] -> za path: '/' se otvara Home page, a za '/add' AddRecipes page, bilo sta drugo otvara 
		NotFound page.
   
8. (barem) dvije komponente
		- src/components/RecipeList.vue  [:31] -> komponenta bez stanja, koristiti properties koja prikazuje recepte. Dio recepata prima preko props-a (ti recepti su asinkrono dohvaceni sa Pinia storea u HomeView.vue), a ostatak dohvaca sa localStorege-a i zajedno sve prikauje preko comuted property-a "allRecipes".
		- src/components/RecipeForm.vue  [:37] -> komponenta RecipeForm.vue ima stanje definirano u data(), koje se mijenja pomocu two-way bindinga u formi za unos novog recepta.

9. barem jedna komponenta mora emitirati barem jedan event
		nije napravljeno

10. store (Pinia)
		- src/recipes.js -> u file-u se kreira pinia store u kojem se sprema default recept i ujedno se asinkrono dohvaca u HomeView-u.

11. asinkroni dohvat podataka s backenda:
		možete mock napraviti, drzati podatke u memoriji, ali mora biti asinkroni poziv/upis
		- src/views/HomeView.vue [:24]  -> podatci se drze u memoriji (default recept je spremljen u Pinia store-u) i asinkrono se dohvaća pomocu funkcije store.fetchRecipes() u onMounted() dijelu
		ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente)
		- src/main.js  [:11, :15, :19]  stranice './', '/add' i '/:pathMatch(.*)*' za NotFound se lazy loadaju.



POKRETANJE:
1. Project set-up
```
npm install
```

2. Compiles and hot-reloads for development
```
npm run serve
```

