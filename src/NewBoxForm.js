import React, {useState} from "react"
import {v4 as uuid} from "uuid"

const NewBoxForm = ({createBox}) =>{
    const initialState = {
        backgroundColor: "",
        width: "",
        height: ""
    }

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData(data =>({
            ...data,
            [name] :value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {backgroundColor, width, height} = formData;
        alert(`Created box with ${backgroundColor} color with ${width} width and ${height} height`)
        createBox({...formData, id:uuid()});
        setFormData(initialState)
    }
    return (
    <div>
        <form onSubmit ={handleSubmit}>
          <div>
            <label htmlFor="backgroundColor">Color</label>
            <input
            id="backgroundColor"
            type = "text"
            name = "backgroundColor"
            placeholder = "backgroundColor"
            value = {formData.backgroundColor}
            onChange = {handleChange}
            />
          </div>

          <div>
            <label htmlFor="width">Width</label>
            <input
            id="width"
            type = "text"
            name = "width"
            placeholder = "width"
            value = {formData.width}
            onChange = {handleChange}
            />
        </div>

        <div>
            <label htmlFor="height">Height</label>
            <input
            id="height"
            type = "text"
            name = "height"
            placeholder = "height"
            value = {formData.height}
            onChange = {handleChange}
            />
         </div>
         <button id="newBoxButton">Add New Box!</button>
        </form>

    </div>
    )
}

export default NewBoxForm
