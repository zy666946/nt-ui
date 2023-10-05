<script setup>
	import {
		computed,
		ref
	} from 'vue-demi';
	import {
		useGlobalStore
	} from '@/stores/index.js'
	const globalStore = useGlobalStore()
	const props = defineProps(['width', 'height',
		'modelValue'
	])
	defineEmits(['update:modelValue'])

	//取高
	const height = computed(() => {
		let regex = /(\-?\d*\.?\d+)(.*)/
		let match = props.height.match(regex)
		if (match) return parseFloat(match[1])
		else return 0
	})


	//取宽
	const width = computed(() => {
		let regex = /(\-?\d*\.?\d+)(.*)/
		let match = props.width.match(regex)
		if (match) return parseFloat(match[1])
		else return 0
	})


	//圆角为高度的一半
	const borderRadius = computed(() => {
		let regex = /(\-?\d*\.?\d+)(.*)/
		let match = props.height.match(regex)
		if (match) return parseFloat(match[1]) / 2 + match[2]
		else return 0
	})
	//滑动状态
	const toRight = computed(() => {
		if (props.modelValue) {
			return `margin-left: ${width.value-height.value}rpx;`
		} else return ''
	})
</script>
<template>
	<nt-view @click="$emit('update:modelValue', !props.modelValue)" style="cursor: pointer;" class="switchArea"
		:width="props.width" :height="props.height" :type="props.modelValue?'active':''" :borderRadius='borderRadius'>
		<nt-view class="switchItem" style="display: flex;
		justify-content: center;
		align-items: center;" :style="toRight" :width="props.height" :height="props.height" borderRadius='50%'>
			<slot></slot>
		</nt-view>
	</nt-view>
</template>



<style lang="scss" scoped>
	.switchItem {
		// margin-left: 0;
		transition: margin-left 0.382s;
	}
</style>