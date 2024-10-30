import React from 'react'
import { Table } from '../../components';
import { rows, columns } from '../../data/ps';
import './ProblemStatements.scss';
const ProblemStatements = () => {
  return (
    <div className='ps-page'>
      <h1 className='ps-title'>Problem Statements</h1>

      <Table className='ps-table' rows={rows} columns={columns} />
    </div>
  )
}

export default ProblemStatements;