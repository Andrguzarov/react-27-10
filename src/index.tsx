import React from 'react'
import ReactDOM from 'react-dom/client'
import { Content } from './Content'
import Title from './Title'

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content
                text1={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo molestias, repudiandae'
                }
                text2={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo molestias, repudiandae'
                }
                year={2023}
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
