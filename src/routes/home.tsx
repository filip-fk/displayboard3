import { MantineProvider } from '@mantine/core'
import HomeCtrl from '../components/homectrl'

function HomeCtrlPage() {
    return (
        <MantineProvider>
            <HomeCtrl />
        </MantineProvider>
    )
}

export default HomeCtrlPage