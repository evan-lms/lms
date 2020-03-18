<template>
	<view class="all">
		<view class="content">
			<!-- 调用摄像头 -->
			<camera device-position="front" flash="off" @error="error" style="width: 150px; height: 250px;"></camera>
			<!-- 调用图片裁剪插件 -->
			<component :url="src"></component>
		</view>
		<div>
			<button type="primary" @click="takePhoto">拍照</button>
			<button type="primary" @click="delPhoto">取消</button>
		</div>
	</view>
</template>

<script>
	import component from "@/components/ksp-image-cutter/ksp-image-cutter.vue"
	export default {
		components: {
			component
		},
		data() {
			return {
				src: ""
			}
		},
		
	
		methods: {
			takePhoto() {
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => {
						this.src = res.tempImagePath
					}
				});
			},
			error(e) {
				console.log(555);
			},
			delPhoto() {
				this.src = ""
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

</style>
