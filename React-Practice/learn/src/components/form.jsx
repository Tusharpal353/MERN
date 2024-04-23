import React, { useState } from 'react'

function Form() {
    const[userData,setData]=useState({
        email:"",
        password:"",
        errors:"",
         //inputEmpty: false, // Initialize inputEmpty state
    })
    
    const validateForm=()=>{
        const errors={};
        if(!userData.email){
            errors.email="Email is required";
        }
        if(!userData.password){
            errors.password="password is required";
        }
        
        setData((prevState)=>({...prevState.errors}))
        return Object.keys(errors).length===0;
        
    }
    
        function handleChange(event) {
            const{name,value} = event.target;
            setData((prevState)=>({...prevState,[name]:value}))
        }
        
        function handleSubmit(event) {
                event.preventDefault();
                if(validateForm()){
                    console.log(userData);
                    setData({email:"",password:""})
                }
        }
    // function handleChange(event){
    //     const{name,value}=event.target;
    //     setData((prevState)=>({...prevState}))
    // }

// const data=userData.email;

    // function handleSubmit(event,data) {
    //     if(data===""){
    //         <h1>Input must not be empty</h1>
    //         console.log("empty");
    //     }
    //     else{
    //          event.preventDefault();
    //          console.log(userData);
             
    //     }
    //     }


    // function handleSubmit(event) {
    //     event.preventDefault();
    //     if (userData.email === "") {
    //         // Set state to indicate that input is empty
    //         // This will trigger a re-render to show the error message
    //         setData((prevState) => ({ ...prevState, inputEmpty: true }));
    //         alert("must not be empty");
            
            

    //     } else {
    //         console.log(userData);
    //         setData({ email: "", password: "" });
    //     }
    // }
    
  return (
    <>
    <div className="container mt-5">
        <div>
            <form>
                <div className="mt-5">
                    <label className="mt-5">Email:</label>
                    <input type="text" placeholder="Email" className="form-control" name="email" value={userData.email} onChange={handleChange}/>

                    {
                        userData.errors.email&&(<p>{userData.errors.email}</p>)
                    }
                </div>
                <div className="mt-5">
                    <label className="form-label" >Password:</label>
                    <input type="password" placeholder="Password" className="form-control" name="password" value={userData.password} onChange={handleChange}/>
                    
                    {
                        userData.errors.password&&(<p>{userData.errors.password}</p>)
                    }
                </div>
                <div className="mt-5">
                    <button type="submit" className="btn btn-submit"  onClick={handleSubmit} >Submit</button>
                    {userData.inputEmpty && <h1>Input must not be empty</h1>}
                </div>

            </form>
        </div>
    </div>
    
    </>
  )
}

export default Form