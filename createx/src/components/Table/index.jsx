import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table as BootstrapTable } from 'react-bootstrap';
import './Table.scss';

const Table = ({ className, columns, rows }) => {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleExpandRow = (rowIndex) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowIndex]: !prev[rowIndex],
    }));
  };

  const renderCellContent = (cell, column, rowIndex) => {
    if (column.isExpandable) {
      const maxWords = 15;
      const words = cell.split(' ');
      const isExpanded = expandedRows[rowIndex];

      if (words.length > maxWords && !isExpanded) {
        const shortenedText = words.slice(0, maxWords).join(' ') + '...';
        return (
          <div>
            {shortenedText}
            <span className="read-more" onClick={() => toggleExpandRow(rowIndex)}>
              Read More
            </span>
          </div>
        );
      }
      return (
        <div>
          {cell}
          <span className="read-more" onClick={() => toggleExpandRow(rowIndex)}>
            Show Less
          </span>
        </div>
      );
    }
    return cell;
  };

  return (
    <div className="table-container">
      <BootstrapTable className={className} hover bordered={false} striped={false}>
        <thead className="table-heading">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`table-column-${index}`}
                style={{ maxWidth: column.maxWidth }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`table-cell-${cellIndex} table-column-${cellIndex}`}
                  style={{
                    maxWidth: columns[cellIndex].maxWidth,
                    whiteSpace: columns[cellIndex].isExpandable ? 'normal' : 'wrap',
                    overflow: 'hidden',
                    textOverflow: columns[cellIndex].isExpandable ? 'clip' : 'ellipsis',
                  }}
                >
                  {renderCellContent(cell, columns[cellIndex], rowIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </BootstrapTable>
    </div>
  );
};

Table.propTypes = {
    className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      maxWidth: PropTypes.string,
      isExpandable: PropTypes.bool,
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
};

export default Table;
