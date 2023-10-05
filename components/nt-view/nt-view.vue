<script setup>
	import {
		computed,
		ref
	} from 'vue'
	import {
		useGlobalStore
	} from '@/stores/index.js'
	const globalStore = useGlobalStore()
	const props = defineProps(['type', 'isActive', 'width', 'height', 'borderRadius'])

	const style = computed(() => 'width:' + props.width + ';height:' + props.height + ';border-radius:' + props
		.borderRadius + ';')
</script>

<template>
	<view :style="style" :class="[type,'nt-view-area',{'nt-view-area-night': globalStore.isNight}]">
		<slot></slot>
	</view>
</template>



<style lang="scss">
	.nt-view-area {
		background-color: #eaedf2;
		font-weight: bold;
		box-shadow: -3rpx -3rpx 3px #fff,
			5rpx 5rpx 30rpx #aaa;

		.btn {
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.btn:active {
			box-shadow: inset 3px 3px 3px #ccc,
				inset -3px -3px 3px #fff;
		}

		.active {
			box-shadow: inset 3px 3px 3px #ccc,
				inset -3px -3px 3px #fff;
		}
	}



	.nt-view-area-night {
		background-color: #1b1f20;
		color: #5f6275;
		font-weight: bold;
		box-shadow: -3rpx -3rpx 8px #333,
			5rpx 5rpx 30rpx #000;

		.btn {
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.btn:active {
			box-shadow: inset 3px 3px 3px #000,
				inset -3px -3px 3px #333;
		}

		.active {
			box-shadow: inset 3px 3px 3px #000,
				inset -3px -3px 3px #333;
		}
	}
</style>