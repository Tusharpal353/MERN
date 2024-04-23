import React,{useRef} from 'react'
//UseRef
function User() {
    const inputRef = useRef(null);
    const cityRef = useRef(null);
    function handleSubmit(event){
        event.preventDefault();
        console.log(`fullname: ${inputRef.current.value
        }`);
        console.log(`processor:${cityRef.current.value}`);

    }
  return (
    <>
    <form onSubmit={handleSubmit} >
        <div>
            <input type="text" placeholder='Name' ref={inputRef}/>
        </div>
        <div>
            <select ref={cityRef}>

                <option value="Mohali"> Mohali</option>
                <option value="Landran"> Landran</option>
            </select>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
   
    </>
  )
}

export default User