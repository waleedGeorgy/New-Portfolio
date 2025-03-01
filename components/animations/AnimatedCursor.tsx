import { FC } from "react"
import AnimatedCursor from "react-animated-cursor"

interface CursorProps {
    color: string
}

const Cursor: FC<CursorProps> = ({color}) => {
    return(
        <AnimatedCursor
            innerSize={7}
            outerSize={28}
            innerScale={1.25}
            outerScale={1.5}
            outerAlpha={0}
            innerStyle={{
                backgroundColor: color
            }}
            outerStyle={{
                border: `1px solid ${color}`
            }}
            clickables={["a", "button", "input", "select", "textarea", ".link"]}
        />
    )
};

export default Cursor;