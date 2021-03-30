import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Chart from "react-google-charts";
import { CHART_JSON_API } from '../../../Data/config';
import { flexCenter } from '../../../Styles/theme';

// 차트를 JS함수를 통해 엘리먼트 안에 넣으려 했으나, React스러운 구현을 위해 react-google-charts 서드파티 라이브러리를 활용했습니다.
// 서버 Data 패칭 구현을 위해, public의 json 데이터를 별도로 제작하여 비동기 로직을 반영했습니다.

const PieChart = () => {
  const [chartData, setChartData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(CHART_JSON_API);
    const result = await res.json();
    setChartData(result.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <PieChartPage>
      <Chart 
        width={'1000px'}
        height={'500px'}
        chartType="PieChart"
        loader={<div>Loading Chart...</div>}
        data={chartData}
        options={{
          title: 'Pie Chart: My Daily Activities',
          is3D: true,
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </PieChartPage>
  )
}

const PieChartPage = styled.main`
  ${flexCenter};
  height: 100vh;
`;

export default PieChart
