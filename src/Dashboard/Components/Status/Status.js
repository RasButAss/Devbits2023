import React , { useState } from 'react'
import './status.css'
import Table from '../Table/Table'
import StatusNav from '../StatusNav/StatusNav'

const Status = () => {
  const [page,setPage] = useState('active');
  return (
    <div className='dashboard-status-main-div'>
      <StatusNav setPage={setPage} page={page} />
      {page === 'active' ? <Table data='active' /> : null}
      {page === 'pending' ? <Table data='pending' /> : null}
      {page === 'history' ? <Table data='history' /> : null}
    </div>
  )
}

export default Status