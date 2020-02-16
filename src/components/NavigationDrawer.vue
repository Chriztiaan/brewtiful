<template>
	<div>
		<v-app-bar color="primary darken-2" dark>
			<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

			<v-toolbar-title>Brewtiful</v-toolbar-title>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" absolute temporary>
			<template v-slot:prepend>
				<v-list-item two-line class="secondary">
					<v-list-item-avatar>
						<v-avatar size="32px" color="secondary darken-1">
							<v-img src="https://img.icons8.com/cotton/64/000000/coffee-maker.png" />
						</v-avatar>
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title>Menu</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</template>

			<v-divider></v-divider>

			<v-list dense>
				<v-list-item v-for="item in items" :key="item.title" @click="">
					<v-list-item-icon>
						<v-icon color="secondary darken-1">{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data() {
		return {
			items: [
				{ title: 'Products', icon: 'mdi-home-city' },
				{ title: 'Overview', icon: 'mdi-account' },
				{ title: 'Users', icon: 'mdi-account-group-outline' }
			],
			drawer: false
		};
	}
});
</script>
