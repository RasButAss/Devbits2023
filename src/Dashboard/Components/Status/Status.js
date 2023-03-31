import React , { useState, useRef, useEffect } from 'react'
import './status.css'
import Table from '../Table/Table'
import StatusNav from '../StatusNav/StatusNav'
import axios from 'axios'

const Status = () => {
  const [page,setPage] = useState('active');
  return (
    <div className='dashboard-status-main-div'>
      <StatusNav setPage={setPage} page={page} />
      {page === 'active' ? <Table page='active' /> : null}
      {page === 'pending' ? <Table page='pending' /> : null}
      {page === 'history' ? <Table page='history' /> : null}
    </div>
  )
}

export default Status