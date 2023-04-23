<template>
	<v-row>
		<v-col
			id="usage"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#usage"
				>#</a>
				Usage
			</h2>

			<v-row>
				<v-col cols="12">
					<p>
						The <code>vuetify3-resize-drawer</code> component usage is mostly
						the same as the
						<a
							:href="`${links.vuetify}/components/navigation-drawers/`"
							target="_blank"
						>v-navigation-drawer</a>. It can also be used as a component in its own right for things
						such as a settings panel or to display data.
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
