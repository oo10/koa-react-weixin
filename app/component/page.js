import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PageEditor from './pageEditor';
import 'antd/style/index.less';

export default class Page extends Component {
  render() {
    return (
      <Row>
        <Col span="2" offset="1">
          <PageEditor/>
        </Col>
      </Row>
      );
  }
}
