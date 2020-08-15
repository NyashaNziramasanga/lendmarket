import { Row, Col, Card, Progress, Statistic } from 'antd';

export default function about() {
  return (
    <div>
      <Row>
        <Col span={8}>
          <Card
            style={{ width: '80%' }}
            cover={
              <img
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />
            }
          >
            <p>
              Funding:
              <Progress
                percent={70}
                size='small'
                strokeColor={{ from: '#52c41a', to: '#52c41a' }}
              />
            </p>

            <p>
              Total Offered:
              <Statistic
                prefix={'$'}
                value={30000}
                valueStyle={{ fontSize: '14px', color: '#52c41a' }}
              />
            </p>
            <p>
              Average Rate:
              <Statistic
                suffix={'%'}
                value={13.03}
                valueStyle={{ fontSize: '14px', color: '#52c41a' }}
              />
            </p>
            <p>
              Risk:
              <Statistic
                suffix={'+'}
                value={90}
                valueStyle={{ fontSize: '14px', color: '#52c41a' }}
              />
            </p>
            <p>
              Deadline:
              <Statistic
                value={'19/08/2020'}
                valueStyle={{ fontSize: '14px', color: '#52c41a' }}
              />
            </p>
          </Card>
        </Col>
        <Col span={14}>More Info</Col>
      </Row>
    </div>
  );
}
