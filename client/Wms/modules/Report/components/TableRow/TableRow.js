import React from 'react';
import cn from 'classnames';

import styles from './TableRow.css';

const TableRow = ({ lineNumber = '', name = '', quantity = 0 } = {}) => {
  return (
    <tr className={styles.product}>
      <td className={styles.line_number}><span>{lineNumber}</span></td>
      <td className={styles.text}><span>{name}</span></td>
      <td className={cn(styles.number, styles.disabled)}><span>{quantity}</span></td>
    </tr>
  );
};

export default TableRow;