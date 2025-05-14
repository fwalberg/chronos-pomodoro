import style from './style.module.css';

import type React from "react";

export function Container({ children }: { children: React.ReactNode}) {
    return (
        <div className={style.container}>
            <div className={style.content}>
                { children }
            </div>
        </div>
    );
}