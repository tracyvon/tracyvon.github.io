---
icon: pen-to-square
date: 2023-10-24
category:
  - FE
tag:
  - ECharts
---

# 趋势图

<!-- #region -->

::: echarts

```js
/**
 * @description: 根据开始年份和结束年份生成年月数据
 * @param {Int} start 格式:2007
 * @param {Int} end 格式:2023
 * @return {Array} ["2007.01","2007.02"]
 */
function buildDateData(start, end) {
  let list = [];
  const monthList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  for (let index = start; index < end; index++) {
    for (let j = 0; j < monthList.length; j++) {
      list.push(`${index}.${monthList[j]}`);
    }
  }
  // console.log(list);
  return list;
}

/**
 * @description: 根据一维数组计算最大值和最小值以及两个极值之间的间隔值，其中最大值的偏差值为1.25，最小值的偏差值为0.75
 * @param {Array} list
 * @return {Object}
 */
function calcExtreme(list) {
  const min = Math.ceil(Math.min(...list) / 100) * 100 * 0.75;
  const max = Math.ceil(Math.max(...list) / 100) * 100 * 1.25;
  const interval = Math.ceil((max - min) / 100) * 10;

  return { min, max, interval };
}

/**
 * @description: 动态生成事件区间数据
 * @param {Array} xAxisData
 * @param {Array} yAxisData
 * @param {Object} data
 * @return {Array}
 */
function buildMarkAreaData(
  xAxisData,
  yAxisData,
  data = { name: null, isRise: true, start: null, end: null, rotate: [0, 0] }
) {
  const dataList1 = yAxisData[0].data;
  const dataList2 = yAxisData[1].data;

  if (data) {
    const { name, isRise, start, end } = data;
    yAxisData[0].markAreaDataList.push([
      {
        name: name,
        xAxis: start,
      },
      {
        xAxis: end,
      },
    ]);
    yAxisData[0].markAreaDataList.push([
      {
        name: isRise ? "↑增长" : "↓下降",
        xAxis: start,
        label: {
          color: isRise ? "#67C23A" : "#303133",
          offset: [0, 30],
        },
      },
      {
        xAxis: end,
      },
    ]);

    yAxisData[1].markAreaDataList = yAxisData[0].markAreaDataList;
  }

  /**
   * @description: 计算两个Y轴区间数据的极值并生成箭头配置
   * @param {Array} eventData
   * @param {Array} yAxisList
   * @return {Array}
   */
  function calcYAxisData(eventData, yAxisList) {
    eventData = eventData.filter((item, index) => {
      if (index % 2 === 0) {
        return item;
      }
    });

    let extremeList = [];
    for (const data of eventData) {
      const start = data[0].xAxis;
      const end = data[1].xAxis;
      const startIndex = xAxisData.findIndex((item) => item === start);
      const endIndex = xAxisData.findIndex((item) => item === end);
      const startValue = yAxisList[startIndex];
      const endValue = yAxisList[endIndex];

      const yAxisListArea = yAxisList.filter((item, index) => {
        if (index >= startIndex && index <= endIndex) {
          return item;
        }
      });
      const maxValue = Math.max(...yAxisListArea);
      const minValue = Math.min(...yAxisListArea);
      const extreme = {
        startValue,
        startIndex,
        endValue,
        endIndex,
        maxValue,
        maxIndex: yAxisListArea.findIndex((item) => item === maxValue) + startIndex,
        minValue,
        minIndex: yAxisListArea.findIndex((item) => item === minValue) + startIndex,
        middleIndex: (endIndex - startIndex) / 2 + startIndex,
        interval: endIndex - startIndex,
        intervalValue: endValue - startValue,
      };
      extreme.coord = extreme.intervalValue > 0 ? [extreme.maxIndex, maxValue] : [extreme.minIndex, minValue];
      extreme.symbolOffset =
        extreme.intervalValue > 0
          ? [(extreme.maxIndex > extreme.middleIndex ? -5 : 5) * (extreme.maxIndex - extreme.middleIndex), -24]
          : [(extreme.minIndex > extreme.middleIndex ? -5 : 5) * (extreme.minIndex - extreme.middleIndex), 24];
      extremeList.push(extreme);
      // console.log("开始值：", startValue);
      // console.log("结束值：", endValue);
      // console.log("最大值：", maxValue);
      // console.log("最小值：", minValue);
      // console.log(start, end, startIndex, endIndex, yAxisListArea);
    }
    // console.log("极值", extremeList);
    return extremeList;
  }

  const data1Extreme = calcYAxisData(yAxisData[0].markAreaDataList, dataList1);
  const data2Extreme = calcYAxisData(yAxisData[0].markAreaDataList, dataList2);

  // INFO: 当两个Y轴同时增长或下降时调整两轴的箭头配置（确定一方在上一方在下）
  for (let index = 0; index < data1Extreme.length; index++) {
    const data1 = data1Extreme[index];
    const data2 = data2Extreme[index];

    // 两个Y轴都增长或都下降
    if (data1.intervalValue > 0 && data2.intervalValue > 0) {
      if (data1.maxValue / debtMap.max > data2.maxValue / stockMap.max) {
        data1.coord = [data1.maxIndex, data1.maxValue];
        data2.coord = [data2.minIndex, data2.minValue];
        data1.symbolOffset = [
          (data1.maxIndex > data1.middleIndex ? -5 : 5) * (data1.maxIndex - data1.middleIndex),
          -24,
        ];
        data2.symbolOffset = [(data2.minIndex > data1.middleIndex ? 5 : -5) * (data2.minIndex - data2.middleIndex), 24];
      }
    } else if (data1.intervalValue < 0 && data2.intervalValue < 0) {
      if (data1.maxValue / debtMap.max > data2.maxValue / stockMap.max) {
        data1.coord = [data1.maxIndex, data1.maxValue];
        data2.coord = [data2.minIndex, data2.minValue];
        data1.symbolOffset = [
          (data1.maxIndex > data1.middleIndex ? 5 : -5) * (data1.maxIndex - data1.middleIndex),
          -24,
        ];
        data2.symbolOffset = [(data2.minIndex > data1.middleIndex ? -5 : 5) * (data2.minIndex - data2.middleIndex), 24];
      }
    }
  }
  // console.log(data1Extreme, data2Extreme);

  /**
   * @description: 生成箭头配置
   * @param {Array} dataExtreme
   * @param {Array} rotate
   * @return {Array}
   */
  function buildMarkPointData(dataExtreme, rotate) {
    const dataArray = [];
    for (const extreme of dataExtreme) {
      // 已有事件区间数据的场景下自动生成倾斜角度
      if (rotate === 0) {
        if (extreme.interval >= 1 && extreme.interval < 6) {
          rotate = extreme.interval * 9;
        } else if (extreme.interval >= 6 && extreme.interval < 10) {
          rotate = extreme.interval * 6.5;
        } else if (extreme.interval >= 10 && extreme.interval < 15) {
          rotate = extreme.interval * 4;
        } else if (extreme.interval >= 15 && extreme.interval < 20) {
          rotate = extreme.interval * 1.5;
        }
      }

      dataArray.push({
        symbol: "path://M0 0 h 300 v -20 l 80 40 l -80 40 v -20 h -300 z",
        symbolSize: [extreme.interval * 4, 10],
        symbolOffset: extreme.symbolOffset,
        itemStyle: {
          color: extreme.intervalValue > 0 ? "#67C23A" : "#303133",
        },
        coord: extreme.coord,
        // 箭头倾斜角度
        symbolRotate: extreme.intervalValue > 0 ? rotate : -rotate,
      });
    }
    // console.log(dataArray);
    return dataArray;
  }

  yAxisData[0].markPointDataList = buildMarkPointData(data1Extreme, data?.rotate[0] || 0);
  yAxisData[1].markPointDataList = buildMarkPointData(data2Extreme, data?.rotate[1] || 0);
}
// end tools

// start PBI 传参
const dataConfig = {
  // X轴数据 TODO
  xAxisData: buildDateData(2007, 2023),
  // Y轴数据
  yAxisData: [
    {
      // TODO
      data:
        // prettier-ignore
        [1857.75, 1857.75, 1537.55, 1495.25, 1376.05, 1518.4, 1518.4, 1575.4, 1580.6, 1553.6, 1520.45, 1520.45, 1620.15, 1751.5, 1740.25, 1756.6, 1844.3, 1778.45, 1821.1, 1790, 1687.65, 1740.9, 1678.25, 1621.5, 1639.5, 1649.8, 1615.05, 1659.15, 1753.380952, 1890.952381, 1847.571429, 1913.666667, 1872.095238, 1862.857143, 1843.47619, 1824.333333, 1850.333333, 1927.47619, 1954.761905, 1838.333333, 1790.809524, 1718.619048, 1703.2, 1710.55, 1703.2, 1767, 1750.2, 1750.2, 1769.55, 1769.55, 1672.15, 1662.65, 1645.75, 1696.4, 1728.7, 1728.7, 1786.95, 1766.6, 1786.9, 1802.7, 1797.85, 1769.6, 1715.7, 1715.7, 1719.95, 1756.25, 1691.545455, 1834.272727, 1816.090909, 1900.272727, 1982.363636, 2069, 2046.318182, 2012.545455, 2045.636364, 1954.636364, 1850.636364, 1846, 1938.863636, 1925.5, 1810.181818, 1707.227273, 1762.45, 1810.95, 1750.95, 1680.1, 1680.1, 1824.15, 1675.15, 1797.7, 1798.8, 1737.6, 1662.6, 1618.1, 1759.5, 1748.23, 1622.19, 1634.0925, 1638.865, 1634.0925, 1662.4975, 1716.4325, 1633.6325, 1596.66, 1576.9375, 1567.335, 1576.9375, 1696.365, 1731.6125, 1731.6125, 1890.7725, 1860.0365, 1854.782, 1805.1, 1805.1, 1784.15, 1813, 1813.25, 1806.8, 1806.8, 1945.85, 1945.05, 1940.35, 1940.35, 1957, 1910.1, 1870.35, 1810.85, 1810.85, 1806.45, 1737.8, 1740.6, 1787.55, 1805.15, 1805.15, 2017.445, 1929.125, 1855.2375, 1855.2375, 1784.6275, 1824.5325, 1764.2725, 1947.4675, 1883.1825, 1854.605, 1814.24, 1757.9475, 1806.1325, 1890.6, 2057.25, 2038.725, 1945.58, 1779.44, 1683.435, 1649.7, 1758.445, 1834.95, 1928.16, 1961.505, 2046.33, 2067.65, 2112.5, 2042.885, 2066.09, 2131.87, 2072.655, 2056.6, 1979.25, 2308.35, 2127.225, 2133.75, 2158.2, 2229.9, 2118.75, 2081.55, 2024.775, 2024.775, 2081.25, 2090.85, 2128.95, 2056.95, 2115.375, 2067, 1966.875, 2070.075, 1982.475, 2163.75, 2126.475, 2126.475, 2173.275, 2176.275, 2148.9],
      // TODO
      name: "中国国债",
      markAreaDataList: [
        [
          {
            name: "股灾及世界金融危机",
            xAxis: "2008.01",
          },
          {
            xAxis: "2008.07",
          },
        ],
        [
          {
            name: "↓下降",
            xAxis: "2008.01",
            label: {
              color: "#303133",
              offset: [0, 30],
            },
          },
          {
            xAxis: "2008.07",
          },
        ],
        [
          {
            name: "4万亿刺激结束，去杠杆化",
            xAxis: "2010.07",
          },
          {
            xAxis: "2012.01",
          },
        ],
        [
          {
            name: "↓下降",
            xAxis: "2010.07",
            label: {
              color: "#303133",
              offset: [0, 30],
            },
          },
          {
            xAxis: "2012.01",
          },
        ],
        [
          {
            name: "股灾",
            xAxis: "2015.10",
            isRise: true,
          },
          {
            xAxis: "2016.08",
          },
        ],
        [
          {
            name: "↑增长",
            xAxis: "2015.10",
            label: {
              color: "#67C23A",
              offset: [0, 30],
            },
          },
          {
            xAxis: "2016.08",
          },
        ],
        [
          {
            name: "贸易摩擦",
            xAxis: "2018.05",
            isRise: false,
          },
          {
            xAxis: "2018.10",
          },
        ],
        [
          {
            name: "↓下降",
            xAxis: "2018.05",
            label: {
              color: "#303133",
              offset: [0, 30],
            },
          },
          {
            xAxis: "2018.10",
          },
        ],
        [
          {
            name: "经济放缓",
            xAxis: "2021.05",
            isRise: false,
          },
          {
            xAxis: "2022.12",
          },
        ],
        [
          {
            name: "↓下降",
            xAxis: "2021.05",
            label: {
              color: "#303133",
              offset: [0, 30],
            },
          },
          {
            xAxis: "2022.12",
          },
        ],
      ],
      markPointDataList: [],
    },
    {
      // TODO
      data:
        // prettier-ignore
        [3558.709, 3927.952, 3764.078, 4460.564, 5296.813, 5580.813, 5688.543, 4737.408, 5338.275, 4620.401, 4674.55, 3790.53, 3959.119, 3611.33, 2791.819, 2805.21, 2391.64, 2243.657, 1663.66, 1829.924, 1817.722, 2032.682, 2140.489, 2507.789, 2622.926, 2759.712, 3166.474, 3734.622, 2830.271, 3004.805, 3280.372, 3511.669, 3575.684, 3204.155, 3281.666, 3345.607, 3067.365, 2773.264, 2563.07, 2868.846, 2903.188, 2935.574, 3379.983, 3136.985, 3128.261, 3076.508, 3239.559, 3223.288, 3192.723, 3001.556, 3044.089, 2972.079, 2846.776, 2581.351, 2695.307, 2521.52, 2345.742, 2464.26, 2634.143, 2454.899, 2626.157, 2632.042, 2461.612, 2332.922, 2204.868, 2293.106, 2254.82, 2139.661, 2522.952, 2686.882, 2673.327, 2495.083, 2447.306, 2606.426, 2200.639, 2193.021, 2313.91, 2409.037, 2373.718, 2438.944, 2330.026, 2202.45, 2178.971, 2146.305, 2158.659, 2156.464, 2165.118, 2350.251, 2338.287, 2450.988, 2508.325, 2808.819, 3533.705, 3434.39, 3572.843, 4051.204, 4749.886, 4840.829, 4472.998, 3816.699, 3366.536, 3202.948, 3534.079, 3566.412, 3731.005, 2946.0902, 2877.4666, 3218.0879, 3156.7451, 3169.5598, 3153.921, 3203.9304, 3327.7938, 3253.2848, 3336.2778, 3538.001, 3310.08, 3387.9606, 3452.8103, 3456.05, 3439.75, 3492.8845, 3666.7977, 3737.8732, 3822.0928, 3836.5013, 4006.7179, 4006.0993, 4030.8549, 4275.8986, 4023.6415, 3898.4977, 3756.8765, 3802.3759, 3510.9845, 3517.6568, 3334.5, 3438.86, 3153.82, 3172.69, 3010.65, 3201.63, 3669.37, 3872.34, 3913.21, 3629.79, 3825.59, 3835.36, 3799.59, 3814.53, 3886.75, 3828.67, 4096.58, 4003.9, 3940.05, 3686.16, 3912.58, 3867.02, 4163.96, 4695.05, 4816.22, 4587.4, 4695.33, 4960.25, 5211.29, 5351.96, 5336.76, 5048.36, 5123.49, 5331.57, 5224.04, 4811.17, 4805.61, 4866.38, 4908.77, 4832.03, 4940.37, 4563.77, 4581.65, 4222.6, 4016.24, 4091.52, 4485.01, 4170.1, 4078.84, 3804.89, 3508.7, 3853.04, 3871.63, 4156.86, 4069.46, 4039.09],
      // TODO
      name: "沪深300",
      markAreaDataList: [
        [
          {
            name: "股灾及世界金融危机",
            xAxis: "2008.01",
          },
          {
            xAxis: "2008.07",
          },
        ],
        [
          {
            name: "↓下降",
            xAxis: "2008.01",
            label: {
              color: "#303133",
              offset: [0, 30],
            },
          },
          {
            xAxis: "2008.07",
          },
        ],
        [
          {
            name: "4万亿刺激结束，去杠杆化",
            xAxis: "2010.07",
          },
          {
            xAxis: "2012.01",
          },
        ],
        [
          {
            name: "↓下降",
            xAxis: "2010.07",
            label: {
              color: "#303133",
              offset: [0, 30],
            },
          },
          {
            xAxis: "2012.01",
          },
        ],
        [
          {
            name: "股灾",
            xAxis: "2015.10",
            isRise: true,
          },
          {
            xAxis: "2016.08",
          },
        ],
        [
          {
            name: "↑增长",
            xAxis: "2015.10",
            label: {
              color: "#67C23A",
              offset: [0, 30],
            },
          },
          {
            xAxis: "2016.08",
          },
        ],
        [
          {
            name: "贸易摩擦",
            xAxis: "2018.05",
            isRise: false,
          },
          {
            xAxis: "2018.10",
          },
        ],
        [
          {
            name: "↓下降",
            xAxis: "2018.05",
            label: {
              color: "#303133",
              offset: [0, 30],
            },
          },
          {
            xAxis: "2018.10",
          },
        ],
        [
          {
            name: "经济放缓",
            xAxis: "2021.05",
            isRise: false,
          },
          {
            xAxis: "2022.12",
          },
        ],
        [
          {
            name: "↓下降",
            xAxis: "2021.05",
            label: {
              color: "#303133",
              offset: [0, 30],
            },
          },
          {
            xAxis: "2022.12",
          },
        ],
      ],
      markPointDataList: [],
    },
  ],
  title: "以债券和股票为例",
};
// end PBI 传参

// 计算两侧Y轴的极值及间隔数值
const debtMap = calcExtreme(dataConfig.yAxisData[0].data);
const stockMap = calcExtreme(dataConfig.yAxisData[1].data);
// console.log(debtMap, stockMap);

let option;

/**
 * @description: 生成图表
 * @return {*}
 */
function buildChart() {
  option = {
    title: {
      text: dataConfig.title,
      left: "center",
      padding: 0,
    },
    tooltip: {
      trigger: "axis",
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
      top: 0,
    },
    legend: {
      show: true,
      top: 28,
      formatter: function (name) {
        if (name === dataConfig.yAxisData[0].name) {
          return `${name}（左轴）`;
        }
        if (name === dataConfig.yAxisData[1].name) {
          return `${name}（右轴）`;
        }
      },
      data: [dataConfig.yAxisData[0].name, dataConfig.yAxisData[1].name],
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      min: dataConfig.xAxisData[0],
      max: dataConfig.xAxisData[dataConfig.xAxisData.length - 1],
      data: dataConfig.xAxisData,
      axisLabel: {
        interval: 24,
        formatter: function (value, index) {
          // console.log(value, index);
          return value.replace(/\.\d{2}/, "");
        },
      },
    },
    yAxis: [
      {
        type: "value",
        // 对应legend
        name: dataConfig.yAxisData[0].name,
        nameTextStyle: {
          align: "right",
        },
        min: debtMap.min,
        max: debtMap.max,
        interval: debtMap.interval,
        axisLabel: {
          show: false,
          formatter: "{value}",
        },
        axisLine: { show: true },
        splitLine: { show: false },
        alignTicks: true,
      },
      {
        type: "value",
        // 对应legend
        name: dataConfig.yAxisData[1].name,
        nameTextStyle: {
          align: "left",
        },
        min: stockMap.min,
        max: stockMap.max,
        interval: stockMap.interval,
        axisLabel: {
          show: false,
          formatter: "{value}",
        },
        axisLine: { show: true },
        splitLine: { show: false },
        alignTicks: true,
      },
    ],
    series: [
      {
        // 对应legend
        name: dataConfig.yAxisData[0].name,
        type: "line",
        smooth: true,
        data: dataConfig.yAxisData[0].data,
        markArea: {
          emphasis: {
            disabled: true,
          },
          itemStyle: {
            color: "#f2f4f5",
          },
          label: {
            show: true,
            position: "insideTop", // markArea中文字（name）位置
            offset: [0, 10], // markArea中文字（name）显示在位置基础上x、y轴偏移
          },
          /* tooltip: {
                trigger: "item",
                formatter: function (params, ticket, callback) {
                  const { name, isRise } = params.data;
                  return `事件: ${name}<br />驱动因素: ${isRise ? "增长" : "下降"}`;
                },
              }, */
          data: dataConfig.yAxisData[0].markAreaDataList,
        },
        markPoint: { data: dataConfig.yAxisData[0].markPointDataList || [] },
        // 显示数据对应哪个Y轴（yAxis的index）
        yAxisIndex: 0,
      },
      {
        name: dataConfig.yAxisData[1].name,
        type: "line",
        smooth: true,
        data: dataConfig.yAxisData[1].data,
        markArea: {
          emphasis: {
            disabled: true,
          },
          itemStyle: {
            color: "#f2f4f5",
          },
          label: {
            show: true,
            position: "insideTop", // markArea中文字（name）位置
            offset: [0, 10], // markArea中文字（name）显示在位置基础上x、y轴偏移
          },
          /* tooltip: {
                trigger: "item",
                formatter: function (params, ticket, callback) {
                  const { name, isRise } = params.data;
                  return `事件: ${name}<br />驱动因素: ${isRise ? "增长" : "下降"}`;
                },
              }, */
          data: dataConfig.yAxisData[1].markAreaDataList,
        },
        markPoint: { data: dataConfig.yAxisData[1].markPointDataList || [] },
        // 显示数据对应哪个Y轴（yAxis的index）
        yAxisIndex: 1,
      },
    ],
  };

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }
}
buildMarkAreaData(dataConfig.xAxisData, dataConfig.yAxisData, null);
buildChart();

const width = 1080;
const height = 600;
```

:::

<!-- #endregion -->
