import PropTypes from "prop-types";
import css from './statistic.module.css'
import getRandomHexColor from './RandomColor'

export default function StatisticEl({label,percentage}) {
    return (
            <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>
        )
}
StatisticEl.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}