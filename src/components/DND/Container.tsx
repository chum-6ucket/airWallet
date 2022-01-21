import { CSSProperties, FC } from 'react'
import Dustbin from './Dustbin'
import Dragover from './Dragover'

const rowStyle: CSSProperties = { overflow: 'hidden', clear: 'both' }

export const Container: FC = () => (
    <div>
        <div style={rowStyle}>
            <Dustbin allowedDropEffect="any" />
            <Dustbin allowedDropEffect="copy" />
            <Dustbin allowedDropEffect="move" />
        </div>
        <div style={rowStyle}>
            <Dragover name="Glass" />
            <Dragover name="Banana" />
            <Dragover name="Paper" />
        </div>
    </div>
)
