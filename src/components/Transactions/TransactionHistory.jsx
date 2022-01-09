import PropTypes from 'prop-types';
import { TransactionContainer, TransactionsTable, Thead, Tr, Th, Td } from './Transactions.styled';

function TransactionHistory({ items }) {
  return (
  <TransactionContainer>
        <TransactionsTable>
  <Thead>
    <Tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </Tr>
  </Thead>

            <tbody>
                {items.map(item => 
                    <tr key={item.id}>
                        <Td>{item.type}</Td>
                        <Td>{item.amount}</Td>
                        <Td>{item.currency}</Td>
                    </tr>
                )}
  </tbody>
      </TransactionsTable>
  </TransactionContainer>
    )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
};

export default TransactionHistory;
