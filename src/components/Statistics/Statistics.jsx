import { getRandomHexColor } from "components/functions/getRandomHexColor";
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div className={css.statisticsWrapper}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li key={id} className={css.statListItem} style={{ backgroundColor: getRandomHexColor() }}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
