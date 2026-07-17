import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const { name, status, startDate, endDate } = props;

  // "ongoing" cohorts are highlighted green, everything else (e.g. "completed") is blue
  const titleColor = status.toLowerCase() === 'ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: titleColor }}>{name}</h3>
      <dl>
        <dt>Status</dt>
        <dd>{status}</dd>

        <dt>Start Date</dt>
        <dd>{startDate}</dd>

        <dt>End Date</dt>
        <dd>{endDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
