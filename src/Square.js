const Square = ({colorValue}) => {

    return (
        <section className="square" style={{backgroundColor: colorValue}}>
            <h2>Your Color is</h2>

            <p>{colorValue ? colorValue : "empty Value"}</p>
        </section>
    )
}

Square.defaultProps = { colorValue: "empty color value" }


export default Square;