import style from './Text.module.css'

function Text(props) {

    return (
        <div className={style.cube}>
            <span>{props.number}</span>
        </div>
    )
}

export default Text