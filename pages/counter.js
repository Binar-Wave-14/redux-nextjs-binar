import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {decrementCounterAction, incrementCounterAction, updateCounterAction} from '../redux/actions/counters'

/* eslint-disable @next/next/no-img-element */
export default function Counter() {
    const dispatch = useDispatch()
    const counters = useSelector(state => state.counters)

    const handleChange = (e) => {
        if (e.target.name === 'increment') {
            dispatch(
                incrementCounterAction()
            )
        } else if (e.target.name === 'decrement') {
            dispatch(
                decrementCounterAction()
            )
        }
    }

    const handleUpdate = (e) => {
        dispatch(
            updateCounterAction(e.target.value)
        )
    }

    return (
        <div>
            <h1>Keranjang</h1>

            <img
                src="https://res.cloudinary.com/ruparupa-com/image/upload/w_360,h_360,f_auto,q_auto/f_auto,q_auto:eco/v1560758309/Products/10190254_1.jpg" 
                alt="meja-kerja" 
                width={200}
            />
            <div>
                <button name='decrement' onClick={handleChange} disabled={counters.value === counters.minQty ? true : false}>-</button>
                <input type='number' value={counters.value} onChange={handleUpdate} />
                <button name='increment' onClick={handleChange} disabled={counters.value === counters.maxQty ? true : false}>+</button>
            </div>
        </div>
    )
}