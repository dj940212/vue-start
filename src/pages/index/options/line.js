// 折线面积图
export default {
    title : {
        text: '空气中温湿度的变化',
        textStyle: {
            color: '#fff',
            fontSize: '16'
        },
        x: 'center'
    },
    grid: {
        show: false,
        top: 40,
        bottom: 25,
        right: 30,
        left: 30
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
    },
    xAxis: {
        show: true,
        type: 'category',
        boundaryGap: true,
        nameTextStyle: { color: '#fff'},
        axisLabel: { show: true, textStyle: { color: '#999' }},
        splitLine: { show: false },
        axisLine:{ lineStyle:{ color:'#999'}},
        data: ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13：30', '14：00', '14：30', '15：00', '15：30']
    },
    yAxis: [{
        show: true,
        type: 'value',
        position: 'left',
        splitLine: { show: false },
        axisLine:{ lineStyle:{ color:'#999'}}
    },{
        show: true,
        type: 'value',
        position: 'right',
        splitLine: { show: false },
        axisLine:{ lineStyle:{ color:'#999'}}
    }],
    series: [{
        data: [17, 18, 17, 19, 17, 20, 18, 17, 20, 17, 18, 19, 17, 20, 17, 20, 18, 17, 20],
        type: 'line',
    },{
        data: [12, 14, 13,  11, 12, 14, 11, 12, 13, 11,  14, 12, 14, 13, 11, 14, 12,  11],
        type: 'line',
    }],
    color: ['#9a70e0', '#629da9']
};
