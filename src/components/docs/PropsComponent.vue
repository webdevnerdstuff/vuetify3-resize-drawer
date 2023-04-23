<template>
	<v-row>
		<v-col
			id="props"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#props"
				>#</a>
				Props
			</h2>

			<v-row>
				<v-col cols="12">
					Vuetify Resize Drawer uses Vuetify's
					<a
						:href="`${links.vuetify}/api/v-navigation-drawer/`"
						target="_blank"
					>Navigation Drawer</a>
					behind the scenes. Most props that work for the
					<code>v-navigation-drawer</code> are supported. For a list of those
					props, you can find them
					<a
						:href="`${links.vuetify}/api/v-navigation-drawer/#props`"
						target="_blank"
					>here</a>.
				</v-col>
			</v-row>

			<v-row id="additional-props">
				<v-col cols="12">
					<h3 :class="classes.h3">
						<a
							:class="classes.headerA"
							href="#additional-props"
						>#</a>
						Additional props
					</h3>
				</v-col>
			</v-row>

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
							:headers="propsSupported.headers"
							hide-default-footer
							:items="propsSupported.items"
							:search="search"
						>
							<template #[`item.name`]="{ item }">
								<td>
									<span
										:id="`props-${item.raw.name}`"
										class="name-item text-mono ml-n2"
									>
										<span class="text-primary">#</span>
										<a
											class="text-primary"
											:class="classes.appLink"
											:href="`#props-${item.raw.name}`"
										>{{ item.raw.name }}</a>
									</span>
								</td>
							</template>

							<template #[`item.type`]="{ item }">
								<td class="text-success">
									{{ item.raw.type }}
								</td>
							</template>

							<template #[`item.default`]="{ item }">
								<td
									class="text-accent"
									v-html="item.raw.default"
								></td>
							</template>

							<template #[`item.desc`]="{ item }">
								<td v-html="item.raw.desc"></td>
							</template>
						</v-data-table>
					</v-card>
				</v-col>
			</v-row>

			<v-row>
				<v-col>
					<v-btn
						class="float-right"
						color="primary"
						@click="dialog = !dialog"
					>
						Try out some of the props
					</v-btn>
				</v-col>
			</v-row>

			<v-row id="props-not-supported">
				<v-col cols="12">
					<h3 :class="classes.h3">
						<a
							:class="classes.headerA"
							href="#props-not-supported"
						>#</a>
						Props with partial and/or no support
					</h3>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-card>
						<v-data-table
							:headers="propsNotSupported.headers"
							hide-default-footer
							:items="propsNotSupported.items"
							:search="search"
						>
							<template #[`item.name`]="{ item }">
								<td>
									<span
										:id="`props-${item.raw.name}`"
										class="name-item text-mono ml-n2"
									>
										<span class="text-primary">#</span>
										<a
											class="text-primary"
											:class="classes.appLink"
											:href="`#props-${item.raw.name}`"
										>{{ item.raw.name }}</a>
									</span>
								</td>
							</template>

							<template #[`item.status`]="{ item }">
								<td
									:class="{
											'text-warning': item.raw.status === 'pending',
											'text-error': item.raw.status === 'debugging',
											'text-secondary':
												item.raw.status !== 'debugging' &&
												item.raw.status !== 'pending',
										}"
									v-html="item.raw.status"
								></td>
							</template>

							<template #[`item.notes`]="{ item }">
								<td v-html="item.raw.notes"></td>
							</template>
						</v-data-table>
					</v-card>
				</v-col>
			</v-row>
		</v-col>
	</v-row>

	<v-dialog
		v-model="dialog"
		width="500px"
	>
		<v-card>
			<v-toolbar
				color="primary"
				density="compact"
			>
				<v-toolbar-title>Try out props</v-toolbar-title>
			</v-toolbar>

			<v-card-text class="py-2">
				<v-row>
					<v-col
						cols="12"
						md="6"
						sm="12"
					>
						<v-switch
							v-model="options.resizable"
							class="switch-label"
							color="primary"
							density="comfortable"
							:false-value="false"
							:value="true"
						>
							<template #label>
								<span>
									resizable:
									<span class="boolean-color text-primary">
										{{ options.resizable }}
									</span>
								</span>
							</template>
						</v-switch>
					</v-col>

					<v-col
						cols="12"
						md="6"
						sm="12"
					>
						<v-switch
							v-model="options.location"
							class="switch-label"
							color="primary"
							density="comfortable"
							false-value="left"
							value="right"
						>
							<template #label>
								<span>
									location:
									<span class="boolean-color text-primary">
										{{ options.location }}
									</span>
								</span>
							</template>
						</v-switch>
					</v-col>

					<v-col
						cols="12"
						md="6"
						sm="12"
					>
						<v-select
							v-model="handleColor"
							density="comfortable"
							:items="selectOptions.handleColor"
							label="handleColor"
							variant="outlined"
						></v-select>
					</v-col>

					<v-col
						cols="12"
						md="6"
						sm="12"
					>
						<v-select
							v-model="options.handlePosition"
							density="comfortable"
							:items="selectOptions.handlePosition"
							label="handlePosition"
							variant="outlined"
						></v-select>
					</v-col>

					<v-col
						cols="12"
						md="6"
						sm="12"
					>
						<v-text-field
							v-model="options.handleBorderWidth"
							density="comfortable"
							label="handleBorderWidth"
							type="number"
							variant="outlined"
						>
						</v-text-field>
					</v-col>

					<v-col
						cols="12"
						md="6"
						sm="12"
					>
						<v-switch
							v-model="options.theme"
							class="switch-label"
							color="primary"
							density="comfortable"
							false-value="light"
							value="dark"
						>
							<template #label>
								<span>
									theme:
									<span class="boolean-color text-primary">
										{{ options.theme }}
									</span>
								</span>
							</template>
						</v-switch>
					</v-col>

					<v-col cols="12">
						<p><strong>Local Storage Options</strong></p>
						<p class="mb-0">
							Values can be viewed in the browser DevTools Application tab under
							Local Storage
						</p>
					</v-col>

					<v-col
						cols="12"
						md="6"
						sm="12"
					>
						<v-switch
							v-model="options.saveWidth"
							class="switch-label"
							color="primary"
							density="comfortable"
						>
							<template #label>
								<span>
									saveWidth:
									<span class="boolean-color text-primary">
										{{ options.saveWidth }}
									</span>
								</span>
							</template>
						</v-switch>
					</v-col>

					<v-col
						cols="12"
						md="6"
						sm="12"
					>
						<v-text-field
							v-model="options.storageName"
							density="comfortable"
							label="storageName"
							variant="outlined"
						>
						</v-text-field>
					</v-col>
				</v-row>
			</v-card-text>

			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					color="default"
					text
					@click="dialog = false"
				> Close </v-btn>
				<v-btn
					color="primary"
					text
					@click="resetOptions"
				> Reset </v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script setup lang="ts">
import { inject, onMounted, reactive, ref, watch } from 'vue';
import { DrawerOptions, KeyStringObject } from '@/components';

const emit = defineEmits(['updateOptions']);

const links = inject<KeyStringObject>('links');
const classes = inject<KeyStringObject>('classes');
const drawerOptions: DrawerOptions = inject('drawerOptions');
const handleColor = ref<string>('');

let defaultOptions: DrawerOptions = {};
const dialog = ref<boolean>(false);
const options = ref<DrawerOptions>(drawerOptions);
const propsSupported = reactive<{ headers: object[]; items: object[]; }>({
	headers: [
		{
			align: 'start',
			filterable: true,
			key: 'name',
			sortable: true,
			title: 'Name',
			width: '15%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'type',
			sortable: false,
			title: 'Type',
			width: '10%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'default',
			sortable: false,
			title: 'Default',
		},
		{
			align: 'start',
			filterable: false,
			key: 'desc',
			sortable: false,
			title: 'Description',
		},
	],
	items: [
		{
			name: 'handle-border-width',
			type: 'string | number',
			default: '8',
			desc: 'Specifies the width of the handle if the handle position <code>border</code> is selected.',
		},
		{
			name: 'handle-color',
			type: 'object',
			default: "<pre><code>{ dark: '#555', light: '#ccc' }</code></pre>",
			desc: 'Determines the background color of the handle for dark and light modes. Used when the <code>handlePosition</code> is set to <code>top</code>. Alternatively you can use CSS styles to adjust the colors.',
		},
		{
			name: 'handle-position',
			type: 'string',
			default: 'center',
			desc: 'Specifies the position of the handle. Valid values are <code>border</code>, <code>center</code>, <code>top</code>, <code>top-icon</code>.',
		},
		{
			name: 'location',
			type: 'string',
			default: 'left',
			desc: 'Places the navigation drawer position on the the screen. Valid values are <code>left</code> and <code>right</code>.',
		},
		{
			name: 'resizable',
			type: 'boolean',
			default: 'true',
			desc: 'Enables resize functionality.',
		},
		{
			name: 'save-width',
			type: 'boolean',
			default: 'true',
			desc: 'Determines if the width of the component is saved in local storage.',
		},
		{
			name: 'storage-name',
			type: 'string',
			default: 'v-resize-drawer-width',
			desc: 'Determines the name of the local storage item.',
		},
	],
});
const propsNotSupported = reactive<{ headers: object[]; items: object[]; }>({
	headers: [
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
			key: 'status',
			sortable: false,
			title: 'Status',
			width: '10%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'notes',
			sortable: false,
			title: 'Notes',
		},
	],
	items: [
		{
			name: 'disable-route-watcher',
			status: 'pending',
			notes: 'An environment that uses routes is needed to test.',
		},
		{
			name: 'expand-on-hover',
			status: 'partial support',
			notes: 'The <code>expand-on-hover</code> prop will work, but the resizable functionality is disabled.',
		},
		{
			name: 'rail',
			status: 'partial support',
			notes: 'The <code>rail</code> prop will work, but the resizable functionality is disabled.',
		},
		{
			name: 'rail-width',
			status: 'partial support',
			notes: 'The <code>rail-width</code> prop for use with the <code>rail</code> prop will work, but the resizable functionality is disabled.',
		},
		{
			name: 'touchless',
			status: 'debugging',
			notes: 'Drawer does not function like it should with <code>touchless</code> enabled.',
		},
	],
});
const search = ref<string>('');
const selectOptions: { handleColor: object[], handlePosition: string[]; } = {
	handleColor: [
		{ title: 'Default', value: 'default' },
		{ title: 'Primary', value: 'primary' },
		{ title: 'Secondary', value: 'secondary' },
		{ title: 'Success', value: 'success' },
		{ title: 'Warning', value: 'warning' },
		{ title: 'Error', value: 'error' },
		{ title: 'Info', value: 'info' },
	],
	handlePosition: ['border', 'center', 'top', 'top-icon'],
};

watch(handleColor, (value: string): void => {
	options.value.handleColor = {
		dark: value,
		light: value
	};
	emit('updateOptions', options.value);
});

onMounted((): void => {
	defaultOptions = JSON.parse(JSON.stringify(drawerOptions.value));
	handleColor.value = defaultOptions.handleColor.dark;
});

function resetOptions(): void {
	options.value = JSON.parse(JSON.stringify(defaultOptions));

	emit('updateOptions', options.value);
}
</script>

<style lang="scss" scoped>
.type {
	color: #690;

	&__ {
		&default {
			color: #905;
		}
	}
}

:deep(code) {
	background-color: rgba(255, 255, 255, 0.1) !important;
	border-radius: 3px;
	font-size: 85%;
	font-weight: normal;
	padding: 0.2em 0.4em;
}

.v-theme--light {
	:deep(code) {
		background-color: rgba(0, 0, 0, 0.05) !important;
	}
}

:deep(.v-input__details) {
	max-height: 10px;
	min-height: 10px;
}

.switch-label {
	:deep(.v-label) {
		opacity: 1 !important;

		.boolean-color {
			font-weight: 500;
		}
	}
}
</style>
