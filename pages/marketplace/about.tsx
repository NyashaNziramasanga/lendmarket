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
        <Col span={14}>
          <Row>
            <Col span={12}>
              <p>
                Company Name:
                <Statistic
                  value={'Org name'}
                  valueStyle={{ fontSize: '14px', color: '#52c41a' }}
                />
              </p>
              <p>
                Industry:
                <Statistic
                  value={'Commodity Trading'}
                  valueStyle={{ fontSize: '14px', color: '#52c41a' }}
                />
              </p>
              <p>
                Business Type:
                <Statistic
                  value={'Logistics and Trading commodities'}
                  valueStyle={{ fontSize: '14px', color: '#52c41a' }}
                />
              </p>
              <p>
                Region:
                <Statistic
                  value={'Singapore'}
                  valueStyle={{ fontSize: '14px', color: '#52c41a' }}
                />
              </p>
            </Col>
            <Col span={12}>
              <p>
                Proposed Rate:
                <Statistic
                  suffix={'%'}
                  value={13.03}
                  valueStyle={{ fontSize: '14px', color: '#52c41a' }}
                />
              </p>
              <p>
                Loan term (Month):
                <Statistic
                  value={
                    '12 months revolving and renewable - Debtor Finance Insured'
                  }
                  valueStyle={{ fontSize: '14px', color: '#52c41a' }}
                />
              </p>
              <p>
                Loan Type:
                <Statistic
                  value={'Insured'}
                  valueStyle={{ fontSize: '14px', color: '#52c41a' }}
                />
              </p>
              <p>
                Securities Types:
                <Statistic
                  value={'Security & Corporate Cross Guarantee'}
                  valueStyle={{ fontSize: '14px', color: '#52c41a' }}
                />
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Description: <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                sit suscipit minima officiis illo minus sed aspernatur explicabo
                doloremque eos doloribus dolorum saepe, aperiam temporibus!
                Ipsam aperiam voluptatum necessitatibus nihil dolorum, illum,
                quibusdam facilis labore nam corrupti tempora dignissimos
                commodi. Facere quo vitae recusandae quibusdam veritatis commodi
                repudiandae nulla ullam, earum vel aspernatur at dignissimos est
                non quaerat maiores sunt nesciunt! In quasi velit accusamus
                repudiandae dicta rem error, iusto exercitationem autem minus at
                ducimus ipsum delectus sed quibusdam id odio quis impedit quia,
                atque numquam ratione incidunt totam. Natus soluta nostrum
                debitis at neque! In nihil repudiandae minima. Vitae!
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
