import React from "react";

interface Props {
    
}

export const DisplayText: React.FC<Props> = ({text}) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}