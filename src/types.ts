type SeriesSize = 'sm' | 'md' | 'lg';
type CircleColor = 'red' | 'green' | 'blue';

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  color: CircleColor;
}

export interface ApplicationProps {
  height: number;
  width: number;
  index: number
  total_length: number;
  availability: number;
  name: any
}
