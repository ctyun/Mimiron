


var WordCloudOption = {

    title: {
        text: 'WordCloud',
        link: ''
    },
    tooltip: {
        show: true
    },
    series: [{
        type: 'wordCloud',
        size: ['80%', '80%'],
        textRotation : [0, 45, 90, -45],
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 14
        },
        data: [
            /*{
                name: "Macys",
                value: 6181,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Amy Schumer",
                value: 4386,
                itemStyle: createRandomItemStyle()
            }*/
        ]
    }]
}


module.exports = WordCloudOption;