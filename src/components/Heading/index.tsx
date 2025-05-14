import type React from 'react'
import style from './style.module.css'

interface HeadingProps {
    children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
    return <h1 className={style.heading}>{ children }</h1>
}