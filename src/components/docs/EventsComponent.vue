<template>
	<v-row>
		<v-col
			id="events"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#events"
				>#</a>
				Events
			</h2>

			<v-row>
				<v-col cols="12">
					<v-card>
						<v-card-title>
							<v-text-field
								v-model="search"
								append-icon="mdi-magnify"
								hide-details
								label="Search"
								single-line
								variant="underlined"
							></v-text-field>
						</v-card-title>

						<v-data-table
							:headers="headers"
							hide-default-footer
							:items="items"
							:search="search"
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
import { KeyStringObject } from '@/components';

const classes = inject<KeyStringObject>('classes');

const headers: object[] = [
	{
		align: 'start',
		filterable: true,
		key: 'name',
		sortable: false,
		title: 'Name',
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
	// Drawer Events //
	{
		name: 'transitionend',
		desc: 'Emits event object when transition is complete.',
	},
	{
		name: 'input',
		desc: 'The updated bound model',
	},
	{
		name: 'close',
		desc: 'Emits event object when the drawer is closed.',
	},
	// Handle Events //
	{
		name: 'handle:click',
		desc: 'Emits event object when handle is clicked.',
	},
	{
		name: 'handle:dblclick',
		desc: 'Emits event object when handle is double clicked.',
	},
	{
		name: 'handle:drag',
		desc: 'Emits event object when handle is dragged.',
	},
	{
		name: 'handle:mousedown',
		desc: 'Emits event object when mouse down on handle.',
	},
	{
		name: 'handle:mouseup',
		desc: 'Emits event object when mouse up on handle.',
	},
];
const search = ref<string>('');
</script>
