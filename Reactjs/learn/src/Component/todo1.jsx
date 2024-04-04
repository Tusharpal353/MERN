import React, { useState } from 'react';

function Todo1() {
    const [todo, setTodo] = useState("");

    function handleChange(e) {
        // setTodo(e.target.value)
        if (e.target.checked) {
            setTodo(e.target.value); // Set todo to the value of the checkbox when it's checked
        } else {
            setTodo(""); // Clear todo when the checkbox is unchecked
        }
       
    }

    return (
        <div>
            <div>
                <form action="">
                    <div>
                        <input 
                        
                            type="checkbox"
                            value="one"
                            onChange={handleChange} 
                            
                        />
                        
                        <div>
                        <input 
                        
                            type="checkbox"
                            value="two"
                            onChange={handleChange} 
                        />
                        
                        </div>
                        <input 
                        
                            type="checkbox"
                            value="three"
                            onChange={handleChange} 
                        />
                        
                    </div>
                </form>
            </div>
            <h1>{todo}</h1>
        </div>
    )
}

export default Todo1;
