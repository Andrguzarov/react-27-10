import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello App.js</h1>
}

const Content = () => {
    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dicta repellendus, fugiat, sapiente perspiciatis
                corrupti consequatur saepe ratione omnis culpa officiis sit quos
                ducimus neque debitis voluptates recusandae modi facere.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dicta repellendus, fugiat, sapiente perspiciatis
                corrupti consequatur saepe ratione omnis culpa officiis sit quos
                ducimus neque debitis voluptates recusandae modi facere.
            </p>
        </div>
    )
}

function App() {
    return (
        <div>
            <Title />
            <Content />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
