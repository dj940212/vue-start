export default {
    title : {
        text: '空气中CO2所占比重',
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
        data: [2.5, 3.4, 2, 4, 3, 2, 3,3.5, 3.4, 2, 4, 3, 2, 3],
        type: 'line',
        areaStyle: {
            color: '#394867'
        }
    }],
    color: ['#629da9']
};
