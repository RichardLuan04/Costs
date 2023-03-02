import './Text.css'

function Text(props) {

    return (
        <div className="cube">
            <span>{props.number}</span>
        </div>
    )
}

export default Text