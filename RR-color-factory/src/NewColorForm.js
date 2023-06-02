import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
    const [form, updateForm] = useState({name: '', hex: '#ffffff'});
    const history = useHistory();
   
    const handleChange = (e) => {
        updateForm((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addColor({[ form.name]: form.hex });
        history.push('/colors');
    }

    const { hex, name } = form;

    return (
        <div className="NewColorForm">
            <h2>Create a New Color:</h2>
            <form className="NewColorForm-form" onSubmit={handleSubmit}>
                <div className="NewColorForm-picker">
                    <label className="NewColorForm-label" htmlFor="hex">Pick a Color:</label>
                    <input 
                        type='color' 
                        name="hex" 
                        id="hex"
                        onChange={handleChange} 
                        value={hex} 
                    />
                </div>
                <div className="NewColorForm-nameInput">
                    <label className="NewColorForm-label" htmlFor="name">Color Name: </label>
                    <input 
                        name="name" 
                        id="name" 
                        placeholder="Enter a name"
                        onChange={handleChange} 
                        value={name}
                    />
                </div>
                <input type="Submit" value="Add a new color to the color list!" readOnly />
            </form>
        </div>
    );
}

export default NewColorForm;