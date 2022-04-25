import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const ColorForm = ({createColor}) => {
    const navigate = useNavigate();
    
    const initialState = {
        name: "",
    }
    const [formData, setFormData] = useState(initialState);

    // Update form data as user types into the inputs
    const handleChange = e => {
        const { name, value } = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    // Submit the form values and set input values back to empty
    const handleSubmit = evt => {
        evt.preventDefault();
        createColor(formData);
        setFormData(initialState);
      };
    
    return (
        <div>
            <h1>Enter Color Name!</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Color Name" 
                    name="name" 
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <button onClick={() => {navigate("/colors")}}>Create Color!</button>
            </form>
        </div>
    )
}

export default ColorForm;