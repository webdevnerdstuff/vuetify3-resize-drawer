<template>
	<v-row>
		<v-col
			id="example"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#example"
				>#</a>
				Example
			</h2>
		</v-col>

		<v-col cols="12">
			<CodeBlock
				:code="codeTemplate"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="html"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
			</CodeBlock>
		</v-col>
	</v-row>
</template>

<script setup>
import { computed, inject } from 'vue';


const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
const classes = inject('classes');

const codeTemplate = `<template>
  <v-app id="home">
    <VResizeDrawer
      v-model="drawer"
      :overflow="true"
      :saveWidth="true"
      handlePosition="center"
      storageName="my-storage-name"
      width="256px"
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
    <\/template>

    <template #prepend>
      <div>
        Prepend Slot
      </div>
    <\/template>

    <template #append>
      <div>
       Append Slot
      <\/div>
    <\/template>
    <\/VResizeDrawer>
  <\/v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(true);

function drawerClose(val) {
  // do something awesome...
}

function drawerInput(val) {
  // do something awesome...
}

function drawerTransitionend(evt) {
  // do something awesome...
}

function handleClick(evt) {
  // do something awesome...
}

function handleDoubleClick(evt) {
  // do something awesome...
}

function handleDrag(evt) {
  // do something awesome...
}

function handleMousedown(evt) {
  // do something awesome...
}

function handleMouseup(evt) {
  // do something awesome...
}
<\/script>`;

</script>
