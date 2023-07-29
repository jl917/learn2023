import * as echarts from "echarts/core";
import {
  BarSeriesOption,
  LineSeriesOption,
} from "echarts/charts";
import {
  TitleComponentOption,
  GridComponentOption,
  DatasetComponentOption,
} from "echarts/components";

export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;
