<template>
	<v-row>
		<v-col id="license" class="mb-5" cols="12">
			<h2 :class="classes.h2">
				<a :class="classes.headerA" href="#license">#</a>
				License
			</h2>

			<v-row>
				<v-col cols="12">
					Copyright &copy; {{ new Date().getFullYear() }}
					<a :href="links.github" target="_blank">WebDevNerdStuff</a>
					<br />
					Licensed under the
					<a :href="`${links.repo}/blob/master/LICENSE.md`" target="_blank">
						MIT License
					</a>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const classes: string[] = inject('classes');
const links: string[] = inject('links');
</script>
