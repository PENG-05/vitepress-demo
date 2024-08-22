<template>
	<div>
		<button @click="add">add</button>
		{{ count }}
	</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const count = ref(1);
const add = () => {
	count.value++;
};
</script>
<style scoped></style>
