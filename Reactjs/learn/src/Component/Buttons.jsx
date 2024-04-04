/* import React from 'react'
import { useState } from 'react'
function Buttons() {

  const[index,setIndex]=useState(0);
  function addCart(){
    setIndex(index+1);
  }
  function removeCart(){
    if(index>0){
      setIndex(0);
    }
  }
  function resetCart(){
    
      setIndex(0); 
    
   
  }


    // function greet(){
    //     alert("Hello there")
    // }


  return (
    <div>
      <h2>`Cart Items:{index}`</h2>
      <div>
        <button onClick={addCart}>add</button>
        <button onClick={removeCart}>remove</button>
        <button onClick={resetCart}>reset</button>
      </div>
    </div>
    //or we can write a inline function <button onClick={()=>{alert("Hello there")}}>Click here</button>
  )
}

export default Buttons */




/* import React from 'react'
import { useState } from 'react'

function Buttons() {
  const user={
    uid:1,
    fullname:"admin",
    email:"admin@gmail.com",
    location:"mohali"
  }

  const[data,updateData]=useState(user);
  function updateUser(){

  }

  return(
    <div>
      <div>
        <li>{data.fullname}</li>
      </div>
    </div>
  )

}; */

import React, { useState } from 'react'
import { useEffect } from 'react'
function Buttons() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count > 0) {
      document.title = `message:${count}`;
    }
    else {
      document.title = `message`
    }

  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Message: {count}</button>
    </div>
  )
}


export default Buttons

