export default {
    title : {
        text: '空气中O2所占比重',
        textStyle: {
            color: '#fff',
            align: 'center',
            fontSize: '15'
        },
        x: 'center'
    },
    grid: {
        show: false,
        top: 40,
        bottom: 20,
        right: 10,
        left: 30
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine:{ lineStyle:{ color:'#999'}},
        splitLine: { show: false },
        data: ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13：30', '14：00']
    },
    yAxis: {
        type: 'value',
        splitLine: { show: false },
        axisLine:{ lineStyle:{ color:'#999'}},
    },
    series: [{
        data: [20, 26, 19, 23, 21, 25, 26,22, 25, 26, 20, 23, 22, 23],
        type: 'line',
        areaStyle: {
            color: '#394867'
        }
    }],
    color: ['#629da9']
};
