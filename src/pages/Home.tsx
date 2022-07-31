import { useState } from 'react'

export default function Home() {
    const [count, setCount] = useState<number>(0);

    return (
        <div className='app'>
            <img src='assets/images/random.png' alt="" />
            <p>React Welcomes to <b>{process.env.name}</b>  environment</p>
            <button onClick={() => setCount((prev: number) => prev + 1)}>Count {count}</button>
        </div>
    )
}
