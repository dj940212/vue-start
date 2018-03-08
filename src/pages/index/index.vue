<template lang="pug">
    .container
        .title
            .logo
            .text 畅启科技 危化物智能监控管理平台
        .left
            .box.top
                .left-title 智能保存箱或柜的工作状态
                .content
                    .left-box
                        h5 在线
                        span 100/100
                    .left-box
                        h5 电池
                        ul
                            li 1、编号G2001电量不足10%
                            li 1、编号G2001电量不足10%
                            li 1、编号G2001电量不足10%
                    .left-box
                        h5 温湿度
                        span 1、编号G2001温湿度异常
                    .left-box
                        h5 泄露状况
                        span 1、编号G2001甲烷泄露
            .box#middle
                .left-title 易燃易爆气体泄露状况
                .content
                    .half-box
                        ul 2018年泄露情况
                            li 1月2日12:00甲烷泄露
                                span 原因:保存不当
                            li 1月2日12:00甲烷泄露
                                span 原因:保存不当
                            li 1月2日12:00甲烷泄露
                                span 原因:保存不当
                            li 1月2日12:00甲烷泄露
                                span 原因:保存不当
                    .half-box#myChart4
            .box#myChart3
        .middle
            .top
                .middle-top-title 实验室实时夜视图（热成像）
                .middle-top-content
            .bottom#myChart
        .right
            .top
                .right-top-title 视频监控
                .right-top-content
            .bottom#myChart2
</template>
<script>
import Count from '@/components/count'
import lineArea from './options/line-area'
import lineArea2 from './options/line-area2'
import line from './options/line'
import pie from './options/pie'
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
    data() {
        return {
            text: 'hello vue'
        }
    },
    mounted() {
        this.drawLine();
        this.drawLine2();
        this.drawLine3();
        this.drawLine4();
    },
    methods: {
        drawLine() {
          let myChart = echarts.init(document.getElementById('myChart'))
          myChart.setOption(line);
      },
      drawLine2() {
        let myChart = echarts.init(document.getElementById('myChart2'))
        myChart.setOption(lineArea);
      },
      drawLine3() {
        let myChart = echarts.init(document.getElementById('myChart3'))
        myChart.setOption(lineArea2);
      },
      drawLine4() {
        let myChart = echarts.init(document.getElementById('myChart4'))
        myChart.setOption(pie);
      },
    },
    components: {
        Count
    }
}
</script>
<style lang="sass" scoped>
    .container
        width: 100%
        height: 100%
        background-color: #000
        background: url('https://i.loli.net/2018/03/08/5aa0f13803964.png')
        background-size: 100% 100%
        background-repeat: no-repeat
        background-position: center
        display: flex
        justify-content: space-between
        .title
            display: flex
            padding-top: 5px
            justify-content: center
            align-items: center
            position: absolute
            margin-left: 50%
            transform: translateX(-50%)
            .logo
                width: 38px
                height: 38px
                background: url('../../../static/images/logo.png')
            .text
                color: #fff
                font-size: 18px
                font-weight: bold
                margin-left: 10px
        .left
            height: 100%
            width: 28%
            box-sizing: border-box
            border-top: 45px solid transparent
            border-bottom: 30px solid transparent
            display: flex
            padding-left: 35px
            flex-direction: column
            justify-content: space-between
            .box
                width: 100%
                height: 32.5%
                background: url('../../../static/images/border3.png')
                background-size: 100% 100%
                .left-title
                    color: #fff
                    height: 15%
                    border-bottom: 1px solid #374363
                    line-height: 40px
                .content
                    height: 85%
                    display: flex
                    flex-wrap: wrap
                    justify-content: space-around
                    .left-box
                        width: 48%
                        height: 48%
                        margin-left: 1px
                        margin-top: 1px
                        color: #fff
                        h5
                            margin: 8px 0 10px 25px
                            text-align: left
                        span
                            font-size: 12px
                            margin-top: 20px
                        ul
                            padding: 0
                            margin: 0
                            text-align: left
                            font-size: 15px
                            li
                                padding: 0
                                margin: 0
                                margin-left: 24px
                                font-size: 10px
                                list-style: none
                                margin-top: 1px
                    .half-box
                        height: 100%
                        width: 50%
                        ul
                            padding: 0
                            margin: 5px 40px 0 0
                            margin-bottom: 10px
                            color: #fff
                            li
                                margin-top: 5px
                                font-size: 12px
                                list-style: none
                                span
                                    display: block
            .top
                background: url('../../../static/images/img3.png')
                background-size: 100% 100%
                background-repeat: no-repeat
                background-position: center
            #middle
                background: url('../../../static/images/img4.png')
                background-size: 100% 100%
                background-repeat: no-repeat
                background-position: center
        .middle
            height: 100%
            width: 43%
            box-sizing: border-box
            border-top: 80px solid transparent
            display: flex
            flex-direction: column
            border-bottom: 30px solid transparent
            justify-content: space-between
            .top
                height: 70%
                width: 100%
                background: red
                background: url('../../../static/images/small-border.png')
                background-size: 100% 100%
                .middle-top-title
                    color: #fff
                    line-height: 40px
                    height: 40px
                    background-color: #343e5f
                    margin: 15px 15px 0 15px
                    position: absolute
                    width: 41%
                .middle-top-content
                    height: 100%
                    box-sizing: border-box
                    border-top: 65px solid transparent
                    border-bottom: 20px solid transparent
                    border-left: 15px solid transparent
                    border-right: 15px solid transparent
                    background-image: url('https://i.loli.net/2018/03/08/5aa0f18decdc8.png')
                    background-repeat: no-repeat
                    background-size: cover
            .bottom
                height: 29%
                width: 100%
                background: red
                background: url('../../../static/images/border1.png')
                background-size: 100% 100%
        .right
            height: 100%
            width: 28%
            box-sizing: border-box
            display: flex
            flex-direction: column
            border-top: 45px solid transparent
            border-bottom: 30px solid transparent
            padding-right: 35px
            justify-content: space-between
            .top
                height: 64%
                width: 100%
                background: red
                background: url('../../../static/images/border2.png')
                background-size: 100% 100%
                .right-top-title
                    color: #fff
                    line-height: 40px
                    height: 40px
                    background-color: #343e5f
                    margin: 10px 20px 0 10px
                    position: absolute
                    width: 24.2%
                .right-top-content
                    height: 100%
                    width: 97.5%
                    box-sizing: border-box
                    border-top: 55px solid transparent
                    border-bottom: 10px solid transparent
                    border-left: 10px solid transparent
                    border-right: 10px solid transparent
                    background-image: url('https://i.loli.net/2018/03/08/5aa0f19b2c820.png')
                    background-repeat: no-repeat
                    background-size: cover
            .bottom
                height: 35%
                width: 100%
                background: red
                background: url('../../../static/images/border3.png')
                background-size: 100% 100%
</style>
