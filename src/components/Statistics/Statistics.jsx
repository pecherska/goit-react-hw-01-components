import PropTypes from 'prop-types';
import css from './Statistics.module.css';
console.log(PropTypes);
function genCellColor() {
  return {
    background: `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)
      .concat('75')}`,
  };
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        {stats.map(stat => {
          return (
            <li key={stat.id} className={css.item} style={genCellColor()}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
