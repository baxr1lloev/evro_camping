import React from "react";

interface PopularProps {
    src: string
    title: string
    description: string
}

const Popular: React.FC<PopularProps> = ({src, title, description}) => {
    return (
        <>
        <img src={src} alt="" />
        <h3>
            {title}
        </h3>
        <p>
            {description}
        </p>
        </>
    )
}

export default Popular