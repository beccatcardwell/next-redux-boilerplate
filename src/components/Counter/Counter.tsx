"use client"
//To read or write to Redux store, component must be client side
import React from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { decrement, increment, selectCount } from '@/features/counter/counterSlice'
import styles from './Counter.module.css'
// import styles from './Counter.module.css'

export function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className={"flex items-center justify-center"}>
        <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
        </button>
        <span aria-live='polite' className={"m-5 text-5xl font-semibold"}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  )
}