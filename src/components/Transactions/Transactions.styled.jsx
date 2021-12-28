import styled from '@emotion/styled'

export const TransactionContainer = styled.div`
  background-color: #ddc7e4;
  padding: 30px 0;  
`;

export const TransactionsTable = styled.table`
  border-collapse: collapse;
  width: 70vw;
  text-align: center;
  margin: 0 auto;
`;  

export const Thead = styled.thead`
  padding: 20px;
  color: #ffffff;
  background-color: #86c9f0;
  text-transform: uppercase;
  font-size: 20px;

  tr:nth-child(even) {
  background-color: #c9e1e7;
  }
`;

export const Th = styled.th`
  padding: 12px 0;
  border-left: 1px solid #dfdcdc;
  border-right: 1px solid #dfdcdc;
`;

export const Td = styled.td`
  padding: 12px 0;
  border-left: 1px solid #dfdcdc;
  border-right: 1px solid #dfdcdc;
`;