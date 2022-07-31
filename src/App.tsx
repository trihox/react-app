import { useDispatch, useSelector } from 'react-redux';
import { setData } from './redux/data';

export default function App() {
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.data.value);

    return (
        <div className='app'>
            <img src='assets/images/random.png' alt="" />
            <p>React Welcomes to <b>{process.env.name}</b>  environment</p>
            <button onClick={() => dispatch(setData({ count: data.count + 1 }))} >
                Count {data.count}
            </button>
        </div >
    )
}
