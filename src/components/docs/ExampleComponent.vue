<template>
	<v-row>
		<v-col
			id="example"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#example"
				>#</a>
				Example
			</h2>

			<v-tabs
				v-model="activeTab"
				align-tabs="center"
			>
				<v-tab
					v-for="item in items"
					:key="item.tab"
					:value="item.tab"
				>
					{{ item.tab }}
				</v-tab>
			</v-tabs>

			<v-card-text>
				<v-window v-model="activeTab">
					<v-window-item
						v-for="item in items"
						:key="item.tab"
						:value="item.tab"
					>
						<v-row>
							<v-col
								cols="10"
								offset="1"
							>
								<template v-if="item.tab === 'Template'">
									<CodeBlock
										:code="codeTemplate"
										lang="html"
									/>
								</template>
								<template v-else>
									<CodeBlock
										:code="codeScript"
										lang="javascript"
									/>
								</template>
								<br />
							</v-col>
						</v-row>
					</v-window-item>
				</v-window>
			</v-card-text>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';

const classes = inject<string[]>('classes');
const items: object[] = [
	{ tab: 'Template', content: 'Tab 1 Content' },
	{ tab: 'Script', content: 'Tab 2 Content' },
];

const activeTab = ref('Template');
const codeTemplate = `
<template>
	<v-app id="home">
		<v-resize-drawer
			v-model="drawer"
			app
			clipped
			fixed
			handlePosition="center"
			storageName="my-storage-name"
			width="256px"
			:overflow="true"
			:saveWidth="true"
			@close="drawerClose"
			@handle:click="handleClick"
			@handle:dblclick="handleDoubleClick"
			@handle:drag="handleDrag"
			@handle:mousedown="handleMousedown"
			@handle:mouseup="handleMouseup"
			@input="drawerInput"
			@transitionend="drawerTransitionend"
		>
			<template #handle>
				<v-icon>mdi-arrow-right-circle</v-icon>
			</template>

			<template #prepend>
				<div>
					Prepend Slot
				</div>
			v/template>

			<template #append>
				<div>
					Append Slot
				</div>
			</template>
		</v-resize-drawer>
	</v-app>
</template>
`;
const codeScript = `
import VResizeDrawer from 'vuetify-resize-drawer';

export default {
	name: 'App',
	components: {
		VResizeDrawer,
	},
	data: () => ({
		drawer: true,
	}),
	methods: {
		drawerClose(val) {
			// Do something...
		},
		drawerInput(val) {
			// Do something...
		},
		drawerTransitionend(evt) {
			// Do something...
		},
		handleClick(evt) {
			// Do something...
		},
		handleDoubleClick(evt) {
			// Do something...
		},
		handleDrag(evt) {
			// Do something...
		},
		handleMousedown(evt) {
			// Do something...
		},
		handleMouseup(evt) {
			// Do something...
		},
	},
};
`;

</script>
