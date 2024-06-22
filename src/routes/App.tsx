//import { useState } from 'react'

import {
  // AppShell,
  // Badge,
  // Burger,
  // Button,
  // Card,
  // Center,
  createTheme,
  // Flex,
  Grid,
  // Group,
  // Image,
  MantineProvider,
  Paper,
  // Radio,
  // Skeleton,
  Text
} from '@mantine/core';

import SBB from '../components/sbb-times'

import { useColorScheme } from '@mantine/hooks';

import '../styles/App.css'
import '@mantine/core/styles.css';
import Tasks from '../components/wgtasks';
import Photos from '../components/photos';
import Events from '../components/events';
import Home from '../components/homectrl';
import Weather from '../components/weather';
import Clock from '../components/clock';
import Music from '../components/music';

function App() {
  //const [count, setCount] = useState(0)
  //const [opened, { toggle }] = useDisclosure()

  //idk how this works
  const theme = createTheme({
    /** Your theme override here */
  });

  const colorScheme = useColorScheme();

  //theme color
  const themeColor = colorScheme === 'dark' ? '#313039' : '#FEEBEB';


  return (
    <MantineProvider theme={theme}>
      <div style={{ height: '100%' }}>
        <Grid grow gutter="xl" h={"100vh"} bg={colorScheme === 'dark' ? 'dark.8' : 'gray.0'} p={'xl'}>

          {/* left */}
          <Grid.Col span={4} h={"99vh"}>
            {/* upper - tasks */}
            <Paper h={"40%"} bg={'transparent'}>
              <Paper bg={themeColor} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Tasks</Text>
                <Tasks />
              </Paper>
            </Paper>

            {/* lower - wg photos */}
            <Paper h={"58%"} bg={'transparent'}>
              <Paper bg={themeColor} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Photos</Text>
                <Photos />
              </Paper>
            </Paper>
          </Grid.Col>

          {/* center */}
          <Grid.Col span={4} h={"99vh"}>
            <Paper h={"10%"} bg={'transparent'}>
              <Paper bg={'transparent'} radius={'lg'} >

              </Paper>
            </Paper>
            {/* upper - date bubble */}
            <Paper h={"22%"} bg={'transparent'}>
              <Paper bg={'transparent'} radius={'lg'} >
                <Clock />
              </Paper>
            </Paper>

            {/* mid-high - weather */}
            <Paper h={"18%"} bg={'transparent'}>
              <Paper bg={themeColor} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>weather</Text>
                <Weather />
              </Paper>
            </Paper>

            {/* mid-low - calendar events */}
            <Paper h={"33%"} bg={'transparent'}>
              <Paper bg={themeColor} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Next up</Text>
                <Events />
              </Paper>
            </Paper>

            {/* lower - home accessories */}
            <Paper h={"20%"} bg={'transparent'}>
              <Paper bg={themeColor} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Home accessories</Text>
                <Home />
              </Paper>
            </Paper>
          </Grid.Col>

          {/* right */}
          <Grid.Col span={4} h={"99vh"}>
            {/* upper - bus times */}
            <Paper h={"58%"} bg={'transparent'}>
              <Paper bg={themeColor} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Bus times :)</Text>
                <SBB />
              </Paper>
            </Paper>

            {/* lower - music */}
            <Paper h={"40%"} bg={'transparent'} radius={'xl'}>
              <Paper bg={themeColor} radius={'lg'} >
                {/* <iframe src="https://open.spotify.com/embed/playlist/46XC7MwRroxrCaeAx97R8e?utm_source=generator&theme=1" width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                <Music />
              </Paper>
            </Paper>
          </Grid.Col>
        </Grid>
      </div>
    </MantineProvider>
  )
}

export default App
