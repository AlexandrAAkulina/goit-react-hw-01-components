// export const Statistics = ({ title, stats }) => {
//   return (
//     <section className="statistics">
//       <h2 className="title">Upload stats</h2>
//       <ul className="stat-list">
//         <li className="item">
//           <span className="label">{stats.label}</span>
//           <span className="percentage">{stats.percentage}%</span>
//         </li>
//         <li className="item">
//           <span className="label">{stats.label}</span>
//           <span className="percentage">{stats.percentage}%</span>
//         </li>
//         <li className="item">
//           <span className="label">{stats.label}</span>
//           <span className="percentage">{stats.percentage}%</span>
//         </li>
//         <li className="item">
//           <span className="label">{stats.label}</span>
//           <span className="percentage">{stats.percentage}%</span>
//         </li>
//       </ul>
//     </section>
//   );
// };

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <div>
        {title}
        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => {
            return (
              <li key={id} className="item">
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
