import React from 'react'

export default function VsCode() {
    return (
        <iframe
            src="https://github1s.com/vansh-15/VanshPortfolio"
            frameBorder="0"
            title="Vansh Portfolio VS Code"
            className="h-full w-full bg-ub-cool-grey"
        ></iframe>
    )
}

export const displayVsCode = () => {
    return <VsCode />
}