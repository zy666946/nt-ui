<script setup>
	import {
		computed,
		ref
	} from 'vue'
	const props = defineProps(['type', 'value', 'password', 'maxlength', 'width', 'height', 'borderRadius',
		'placeholder', 'modelValue'
	])

	defineEmits(['update:modelValue'])

	const style = computed(() => 'width:' + props.width + ';height:' + props.height + ';border-radius:' + props
		.borderRadius + ';')
</script>
<template>
	<nt-view :style="style" type='active'>
		<input style="height: 100%;padding:0 5% ;" :type="props.type" :value="modelValue"
			@input="$emit('update:modelValue', $event.detail.value)" :password="props.password"
			:maxlength="props.maxlength" :placeholder="props.placeholder">
	</nt-view>

</template>



<style lang="scss">

</style>