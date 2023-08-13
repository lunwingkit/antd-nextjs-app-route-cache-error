import React from 'react';
import { Button, ConfigProvider } from 'antd';
import theme from './themeConfig';

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App">
      <div>
        <Button type="primary">Home</Button>
      </div>
    </div>
  </ConfigProvider>
);

export default HomePage;