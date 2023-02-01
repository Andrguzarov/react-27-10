import React from 'react'
import ReactDOM from 'react-dom/client'

interface ITitleProps {
    text: string
}

const Title = (props: ITitleProps) => {
    console.log(props)
    return <h1>Hello {props.text}</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                laboriosam voluptatem reprehenderit dolorum ad totam architecto.
                Voluptatibus, nihil totam quibusdam illo vero, quae debitis sed
                laboriosam, fugiat dolorum error quisquam!
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                voluptates eum a culpa? Molestias amet voluptas quaerat sed vel
                minus, dolor delectus aperiam ea quo voluptate, repellat error
                similique qui!
            </p>
        </React.Fragment>
    )
}

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
