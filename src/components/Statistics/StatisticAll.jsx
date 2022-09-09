import PropTypes from 'prop-types'
import StatisticList from './StatisticList'
import css from './statistic.module.css'

export default function StatisticAll({title,stats}) {
    return (
        <>
        <section className={css.statistics}>
               {title && <h2 className={css.title}>{title}</h2>} 
                <StatisticList stats={stats} />
            </section>         
      </>
    )
}

StatisticAll.propTypes = {
    title: PropTypes.string,
}