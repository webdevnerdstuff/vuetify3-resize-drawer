<template>
	<v-row>
		<v-col id="sass-variables" class="mb-5" cols="12">
			<h2 :class="classes.h2">
				<a :class="classes.headerA" href="#sass-variables">#</a>
				SASS Variables
			</h2>

			<v-row>
				<v-col cols="12">
					Vuetify's
					<a
						:href="`${links.vuetify}/api/v-navigation-drawer/#sass`"
						target="_blank"
						>SASS Variables</a
					>
					are supported.
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-card>
						<v-data-table
							:headers="headers"
							hide-default-footer
							:items="items"
							:search="search"
							variant="underlined"
						>
							<template #item="{ item }">
								<tr>
									<td>
										<span
											:id="`events-${item.raw.name}`"
											class="name-item text-mono ml-n2"
										>
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												:href="`#events-${item.raw.name}`"
											>
												{{ item.raw.name }}
											</a>
										</span>
									</td>

									<td class="text-accent">{{ item.raw.default }}</td>
									<td>{{ item.raw.desc }}</td>
								</tr>
							</template>
						</v-data-table>
					</v-card>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';

const classes: string[] = inject('classes');
const links: string[] = inject('links');

const headers: object[] = [
	{
		align: 'start',
		filterable: true,
		key: 'name',
		sortable: false,
		title: 'Name',
		width: '40%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'default',
		sortable: false,
		title: 'Default',
		width: '15%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'desc',
		sortable: false,
		title: 'Description',
	},
];
const items: object[] = [
	{
		name: '$navigation-drawer-border-width',
		default: '1px !default;',
		desc: '',
	},
	{
		name: '$navigation-drawer-mobile-temporary-elevation',
		default: '16 !default;',
		desc: '',
	},
];
const search: string = ref('');
</script>
