import React from "react"

function Box ({
    id,
    handleRemove,
    backgroundColor = "red",
    width = 3,
    height = 3
})
{
    const remove = () => handleRemove(id);
    return (
    <div className = "Box">
        <div style ={{
            backgroundColor,
            height : `${height}em`,
            width : `${width}em`
        }}
        />
        <button onClick={remove}> Remove </button>
    </div>
    );
}

export default Box;
