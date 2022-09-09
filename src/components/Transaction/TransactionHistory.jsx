import PropTypes from 'prop-types'
import TransactionEl from './TransactionEl'
import css from './transaction.module.css'

export default function TransactionHistory({ items }) {
    console.log(items)
    const elements = items.map(({ id, type, amount, currency }) => <TransactionEl key={id} type={type} amount={amount} currency={currency} />)
    return (
        <>
            <table className={css["transaction-history"]}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {elements}
                </tbody>
            </table>
        </>
    )
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
     })
    )
}

