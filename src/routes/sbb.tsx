import { MantineProvider } from '@mantine/core'
import Times from '../components/sbb-times'


function SBB() {
    return (
        <MantineProvider>
            <Times />
        </MantineProvider>
    )
}

export default SBB