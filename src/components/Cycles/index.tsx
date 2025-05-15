import style from './style.module.css';

export function Cycles() {
    return (
        <div className={style.cycles}>
            <span className={style.cycles__title}>Ciclos</span>

            <div className={style.cycles__dots}>
                <span className={`${style.cycles__dot} ${style.work_time}`}></span>
                <span className={`${style.cycles__dot} ${style.short_break_time}`}></span>
                <span className={`${style.cycles__dot} ${style.work_time}`}></span>
                <span className={`${style.cycles__dot} ${style.short_break_time}`}></span>
                <span className={`${style.cycles__dot} ${style.work_time}`}></span>
                <span className={`${style.cycles__dot} ${style.short_break_time}`}></span>
                <span className={`${style.cycles__dot} ${style.work_time}`}></span>
                <span className={`${style.cycles__dot} ${style.long_break_time}`}></span>
            </div>
        </div>
    )
}