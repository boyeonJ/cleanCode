/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ReactElement } from "react"

type Props = {
    children : ReactElement | string
}

const Typography = ({children} : Props) => {
    return <div 
        css={css`
            background-color: hotpink;
        `}
    >{children}</div>
}

export default Typography