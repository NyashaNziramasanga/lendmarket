import MainLayout from '../layouts/main';
import { Table, Button } from 'antd';

const { Column } = Table;

export default function LoanExchange() {
  const data = [
    {
      key: '1',
      business: 'TY Incorp',
      type: 'LOC - Insured',
      risk: 97,
      rate: 11,
      // renewalDate: 12 / 09 / 2020,
      capital: 1000,
      salePrice: 1010,
      premiumDiscount: 2,
      status: 'current',
      noLoanParts: 1,
    },
  ];
  return (
    <MainLayout>
      <Table dataSource={data}>
        <Column
          title='Business'
          dataIndex='business'
          align='left'
          key='business'
        />
        <Column title='Type' dataIndex='type' align='left' key='type' />
        <Column title='Risk' dataIndex='risk' align='center' key='risk' />
        <Column title='Rate' dataIndex='rate' align='center' key='rate' />
        <Column
          title='Capital'
          dataIndex='capital'
          align='center'
          key='capital'
        />
        <Column
          title='Sale Price'
          dataIndex='salePrice'
          align='center'
          key='salePrice'
        />
        <Column
          title='Premium Discount'
          dataIndex='premiumDiscount'
          align='center'
          key='premiumDiscount'
        />
        <Column title='Status' dataIndex='status' align='center' key='status' />
        <Column
          title='NO Loan Parts'
          dataIndex='noLoanParts'
          align='center'
          key='noLoanParts'
        />
        <Column
          title=''
          dataIndex='action'
          render={() => <Button>View</Button>}
        />
      </Table>
    </MainLayout>
  );
}
