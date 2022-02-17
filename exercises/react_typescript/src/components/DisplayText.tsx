import React from "react";

interface Props {
    
}

export const DisplayText: React.FC<Props> = ({text}) => {
    return (
        <div>
            <h1>Hello {text}</h1>
        </div>
    )
}