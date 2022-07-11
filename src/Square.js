const Square = ({colorValue, hexValue, isDarkText}) => {

    return (
        <section className="square" 
                 style={{backgroundColor: colorValue,
                 color: isDarkText ? "#000" : "#FFF"
        }}>
            <h2>Your Color is</h2>
            <p>{colorValue ? colorValue : "empty Value"}</p>
            <p>{hexValue ? hexValue : null } </p>
        </section>
    )
}

Square.defaultProps = { colorValue: "empty color value" }


export default Square;