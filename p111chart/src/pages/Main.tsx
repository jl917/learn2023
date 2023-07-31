import useChartResize from '@/hooks/useChartResize';
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
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
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
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};



const MainPage = () => {
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
      divRef.current && resizeObserver.unobserve(divRef.current)
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

export default MainPage;
