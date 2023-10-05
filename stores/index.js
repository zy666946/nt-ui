import {
	defineStore
} from 'pinia'

export const useGlobalStore = defineStore('globalStore', {
	state: () => ({
		isNight: false,
		datas: {}
	}),
	getters: {

	},
	actions: {
		changeNight() {
			this.isNight = !this.isNight
		}
	}
})