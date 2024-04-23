import React,{useMemo, useRef, useState} from 'react'
import Client from './Client'

function Click() {
    const [count,setCount]=useState(0)
    const memoUser=useMemo(()=>{
        return<Client/>
    })

  return (
<>
{memoUser}
<div>
    <button type='submit' onClick={()=>setCount(count+1)}>curent cout{count}</button>
</div>
</>
  )
}

export default Click