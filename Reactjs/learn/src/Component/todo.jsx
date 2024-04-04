import React, { useState } from 'react';

function Todo() {
    const [fullname, setFullname] = useState("");

    function handleChange(e) {
        setFullname(e.target.value)
    }

    return (
        <div>
            <div>
                <form action="">
                    <div>
                        <input 
                        placeholder='Fullname'
                            type="text"
                            value={fullname}
                            onChange={handleChange} 
                        />
                    </div>
                </form>
            </div>
            <h1>Fullname{fullname}</h1>
        </div>
    )
}

export default Todo;
