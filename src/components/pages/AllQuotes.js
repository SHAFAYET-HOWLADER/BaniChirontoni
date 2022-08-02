import React, { useState } from 'react'
const axios = require('axios');
const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  axios.get('http://localhost:5000/getQuotes')
  .then(res=> setQuotes(res))
  return (
    <div>AllQuotes</div>
  )
}

export default AllQuotes