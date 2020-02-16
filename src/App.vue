<template>
	<v-app class="red">
		<!-- <Dashboard msg="Welcome to Your Vue.js App" /> -->
		<navigation-drawer />
		<tabs />
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import NavigationDrawer from './components/NavigationDrawer.vue';
import Tabs from './components/Tabs.vue';

export default Vue.extend({
	components: { NavigationDrawer, Tabs }
});
</script>

<style></style>
