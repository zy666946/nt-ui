<template>
	<view class="" style="width: 80vw;  margin: 50rpx auto;">
		<text>拟态突出块</text>
		<nt-view style="overflow: hidden;display: flex;flex-direction: column;align-items: center;" width="100%"
			borderRadius='10px'>
			<text>拟态凹陷块</text>
			<nt-view style="margin: 20rpx;display: flex;justify-content: center;align-items: center;" type='active'
				width="60%" height="200rpx" borderRadius='10px'>
				<nt-view @click='btn1' type="btn" width="80rpx" height="80rpx" borderRadius='10px'>
					<text>按钮</text>
				</nt-view>
			</nt-view>
			<text>普通输入框</text>
			<nt-input style="margin: 20rpx;" :maxlength='10' :width="'300rpx'" height="60rpx" borderRadius='10px'
				:placeholder="'请输入账号'" :password='false' v-model="value1"></nt-input>
			<text>靠右输入框</text>
			<nt-input type='number' style="margin: 20rpx;text-align: right;" :maxlength='10' :width="'300rpx'"
				height="60rpx" borderRadius='10px' :placeholder="'请输入年龄'" :password='false' v-model="value1"></nt-input>
			<text>居中输入框</text>
			<nt-input style="margin: 20rpx;text-align: center;" :maxlength='10' :width="'300rpx'" height="60rpx"
				borderRadius='10px' :placeholder="'请输入密码'" :password='true' v-model="value1"></nt-input>
			<text>滑动开关</text>
			<nt-switch @click='changeNight' style="margin: 20rpx;" width="200rpx" height="60rpx" v-model="value2">
				{{value2?'🌙':'☀️'}}
			</nt-switch>

		</nt-view>

	</view>

</template>

<script setup>
	import {
		ref,
		useAttrs
	} from 'vue'
	import {
		useGlobalStore
	} from '@/stores/index.js'
	const globalStore = useGlobalStore()

	const attrs = ref(useAttrs())
	const btn1 = () => {
		uni.showToast({
			title: '按钮被点击了'
		});
	}
	const value1 = ref('')
	const value2 = ref(false)
	//暗夜模式
	const changeNight = () => {
		globalStore.changeNight()
	}
</script>

<style>

</style>