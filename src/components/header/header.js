

import { Fragment } from 'react'
import style from './header.module.css'

export default function Header () {


    return(
        <Fragment>

        <div className={style.wrapper}>
            <p className={style.text}>this is header</p>
            <p>this is header</p>
            <p>this is header</p>
            <p>this is header</p>
        </div>


        <div className={style.secondaryWrapper}>
            <p className={style.text}>this is header</p>
            <p>this is header</p>
            <p>this is header</p>
            <p>this is header</p>
        </div>

        </Fragment>
        


    )
}