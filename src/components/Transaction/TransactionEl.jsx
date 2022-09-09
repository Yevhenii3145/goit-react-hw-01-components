import PropTypes from 'prop-types'

export default function TransactionEl({ type, amount, currency }) {
    return (
       <>
        <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
        </tr> 
       </>
    )
}

TransactionEl.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}