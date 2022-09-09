import PropTypes from 'prop-types'
import StatisticEl from './StatisticEl'
import css from './statistic.module.css'

export default function StatisticList({ stats }) { 
  console.log(stats)
  const elements = stats.map(({id,label,percentage}) => <StatisticEl key={id} label={label} percentage={percentage} /> )
  return (  
    <ul className={css["stat-list"]}>{elements}</ul> 
    )
}

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
  id: PropTypes.string.isRequired,
    }),
  ),
}