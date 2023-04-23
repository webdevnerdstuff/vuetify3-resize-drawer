<template>
	<v-row>
		<v-col
			id="description"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#description"
				>#</a>
				Description
			</h2>

			<v-row>
				<v-col cols="12">
					<p>
						The <code>vuetify3-resize-drawer</code> component extends the
						functionality of the
						<a
							:href="`${links.vuetify}/components/navigation-drawers/`"
							target="_blank"
						>v-navigation-drawer</a>
						so that it is resizable by the user.
					</p>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const classes = inject<string[]>('classes');
const links = inject<string[]>('links');
</script>
