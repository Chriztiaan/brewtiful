<template>
	<div>
		<v-tabs v-model="tab" dark background-color="primary lighten-2" slider-color="secondary" slider-size="4">
			<v-tab v-for="item in items" :key="item.tab">
				<v-icon left>{{ item.icon }}</v-icon>
				{{ item.tab }}
			</v-tab>
		</v-tabs>
		<v-tabs-items v-model="tab">
			<v-tab-item :transition="false" :reverse-transition="false" v-for="item in items" :key="item.tab">
				<v-card tile color="primary" flat min-height="500px">
					{{ item.content }}
				</v-card>
			</v-tab-item>
		</v-tabs-items>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data() {
		return {
			tab: null,
			items: [
				{ tab: 'Orders', content: 'Tab 1 Content', icon: 'mdi-playlist-edit' },
				{ tab: 'Coffees', content: 'Tab 2 Content', icon: 'mdi-coffee-outline' },
				{ tab: 'Ingredients', content: 'Tab 3 Content', icon: 'mdi-cookie' }
			]
		};
	}
});
</script>
