import { ECOption } from '@/types/echart';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { debounce } from 'lodash-es'

function randomNum(m: number, n: number): number {
  return Math.floor(Math.random() * (m - n) + n)
}

const option: ECOption = {
  // title: {
  //   text: 'Stacked Area Chart'
  // },
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
      ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
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
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
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



const DatasetPage = () => {
  const chartRef = useRef<echarts.EChartsType | null>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let resizeObserver: ResizeObserver;

    if (divRef.current) {
      chartRef.current = echarts.init(divRef.current)
      chartRef.current.setOption(option);

      const resizeFn = () => chartRef.current?.resize();
      const resizeContainerFn = debounce(resizeFn, 100)

      resizeObserver = new ResizeObserver(() => {
        resizeContainerFn()
      });
      resizeObserver.observe(divRef.current);
    }
    return () => {
      chartRef.current?.dispose(); // 차트객체 제거
      divRef.current && resizeObserver.unobserve(divRef.current); // 리스너객체 제거
    }

  }, []);

  const onClick = () => {
    const newValues = JSON.parse(JSON.stringify(option));
    newValues.series[0].data[0] = randomNum(100, 500);
    chartRef.current?.setOption(newValues);
  }

  return (
    <>
      <div className="chart" style={{ height: 500 }} ref={divRef} ></div>
      <button onClick={onClick}>change</button>
    </>
  );
};

export default DatasetPage;
