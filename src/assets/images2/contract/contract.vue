<template>
	<div class="contract">
		<div class="Reward" @click="onReward">
		    <div class="Rewardimg">
		        <img src="@/assets/images/index/qianbao.png" alt="">
		    </div>
		    <div class="RewardText">
		        {{ $t('components.html.HTML_REWARD') }}
		    </div>
		</div>
		<div class="TITLE">
		    {{ $t('components.html.HTML_CONTACTUS') }}
		</div>
		<div class="imgList">
		    <div class="imgs" @click="goTuite">
		        <img src="@/assets/images/index/1.png" alt="">
		    </div>
		    <!-- <div class="imgs" @click="godiscord">
		        <img src="@/assets/images/index/2.png" alt="">
		    </div> -->
		    <div class="imgs" @click="goEmail">
		        <img src="@/assets/images/index/email.png" alt="">
		    </div>
		    <div class="imgs" @click="goM">
		        <img src="@/assets/images/index/mmm.png" alt="">
		    </div>
		    <div class="imgs" @click="goDianbao">
		        <img src="@/assets/images/index/5.png" alt="">
		    </div>
		    <!-- <div class="imgs">
		        <img src="@/assets/images/index/6.png" alt="">
		    </div> -->
		    <div class="imgs" @click="goYoutube">
		        <img src="@/assets/images/index/7.png" alt="">
		    </div>
		</div>
		<div class="bootomText">
		    {{ $t('components.html.HTML_COPYRIGHT') }}
		</div>
		<div class="topimg" @click="goTop">
			<img src="@/assets/images/index/Top.png" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			onReward() {
				this.$emit('on-reward')
			},
			goTop(){
				this.$emit('on-top')
			},
            //跳转推特
            goTuite(){
                window.open("https://twitter.com/MetaResearchVip")
            },
            // //跳转Discord
            // godiscord(){
            //     this.$message("暂无联系方式")
            // },
            //跳转Email
            goEmail(){
                window.open("http://metaresearchvip@gmail.com")
            } ,
            //跳转Medium  
            goM(){
                window.open("http://medium.com/@Meta_Research ")
            } , 
            
            //跳转电报
            goDianbao(){
                window.open(" https://t.me/MetaResearch_Official")
            },
            //跳转youtube
             goYoutube(){
                window.open("https://www.youtube.com/channel/UCrL7lbwI2PnIwpv_8Etc4qQ")
            },
            
		}
	}
</script>

<style lang="scss" scoped>
	.contract {
		.Reward {
		    width: 340px;
		    height: 58px;
		    padding: 0px;
		    border-radius: 8px;
		    background: #ffc300;
		    margin-top: 36px;
		    display: flex;
		    justify-content: center;
		    align-items: center;
			&:hover {
				cursor: pointer;
			}
		    .Rewardimg {
		        width: 28.01px;
		        height: 27.99px;
		        img {
		            width: 100%;
		            height: 100%;
		        }
		    }
		    .RewardText {
		        width: 92px;
		        height: 24px;
		        font-family: MicrosoftYaHei-Bold;
		        font-size: 24px;
		        font-weight: 800;
		        line-height: 24px;
		        letter-spacing: 0em;
		        color: #000000;
		        margin-left: 9px;
		    }
		}
		.TITLE {
		    width: 134px;
		    height: 20px;
		    font-family: MicrosoftYaHei-Bold;
		    font-size: 20px;
		    font-weight: 800;
		    line-height: 20px;
		    text-transform: uppercase;
		    letter-spacing: 0em;
		    color: #000000;
		    margin-top: 36px;
		    margin-left: 103px;
		}
		.imgList {
		    width: 100%;
		    height: 28px;
		    margin-top: 20px;
		    display: flex;
		    justify-content: space-between;
		    .imgs {
		        width: 28px;
		        height: 28px;
		        img {
		            width: 100%;
		            height: 100%;
		        }
				&:hover {
					cursor: pointer;
				}
		    }
		}
		.bootomText {
		    width: 318px;
		    height: 36px;
		    font-family: MicrosoftYaHei;
		    font-size: 14px;
		    font-weight: 800;
		    line-height: 18px;
		    letter-spacing: 0em;
		    margin-top: 24px;
		    color: #C5C5C5;
		    text-align: left;
		}
		.topimg{
			width: 66px;
			height: 63px;
			background: #C5C5C5;
			margin: 0 auto;
			margin-top: 150px;
			cursor: pointer;
			border-radius: 8px;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
