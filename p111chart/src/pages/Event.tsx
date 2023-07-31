import { ECOption } from '@/types/echart';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { debounce } from 'lodash-es'

function randomNum(m: number, n: number): number {
  return Math.floor(Math.random() * (m - n) + n)
}

const option: ECOption = {
  title: {
    text: 'Stacked Area Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  dataset: {
    source: [
      ['Date', 'Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      ['Mon', 120, 220, 150, 320, 820],
      ['Tue', 132, 182, 232, 332, 932],
      ['Wed', 101, 191, 201, 301, 901],
      ['Thu', 134, 234, 156, 334, 934],
      ['Fri', 90, 290, 190, 390, 1290],
      ['Sat', 230, 330, 330, 330, 1330],
      ['Sun', 210, 310, 410, 320, 1320],
    ]
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    name: 'hello xa',
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    // 轴线
    axisLine: {
      symbol: 'dot',
      lineStyle: {
        type: 'dashed'
        // ...
      }
    },
    // 刻度
    axisTick: {
      length: 60,
      lineStyle: {
        type: 'dashed'
        // ...
      }
    },

    // 标签
    axisLabel: {
      formatter: '요일: {value}',
      align: 'center'
      // ...
    }

  },
  yAxis: [
    {
      name: 'y좌표',
      type: 'value'
    },
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
    }
  ]
};



const EventPage = () => {
  const chartRef = useRef<echarts.EChartsType | null>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (divRef.current) {
      chartRef.current = echarts.init(divRef.current)
      chartRef.current.setOption(option);

      // point Click
      chartRef.current.on('click', (params) => {
        console.log(params)
      })

      // legendselectchanged
      chartRef.current.on('legendselectchanged', (params) => {
        console.log(params)
      })

      // 空白处
      chartRef.current.getZr().on('click', function (event) {
        if (!event.target) {
          console.log(event)
        }
      });
    }
  }, []);

  return (
    <>
      <div className="chart" style={{ height: 500 }} ref={divRef} ></div>
    </>
  );
};

export default EventPage;
