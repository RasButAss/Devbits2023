import React , { useState, useRef, useEffect } from 'react'
import './status.css'
import Table from '../Table/Table'
import StatusNav from '../StatusNav/StatusNav'
import axios from 'axios'

const Status = () => {
  const [page,setPage] = useState('active');

  const didFetchFromBack1 = useRef(true)  
  useEffect(() => {
      function getData() {

      }
      if(didFetchFromBack1.current) {
        getData();
        didFetchFromBack1.current = false;
      }
  },[])


  const didFetchFromBack2= useRef(true)
  useEffect(() => {
    function getData() {
    }
      if(didFetchFromBack2.current) {
        getData();
        didFetchFromBack2.current = false;
      }
  },[])


  const didFetchFromBack3 = useRef(true)
  useEffect(() => {
    function getData() {
      axios({
        method: "GET",
        url:"/",
      })
      .then((response) => {
        const res =response.data
        console.log(res);
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          }
      })}
      if(didFetchFromBack3.current) {
        getData();
        didFetchFromBack3.curren = false;
      }
  },[])
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