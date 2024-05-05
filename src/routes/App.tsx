import { useState } from 'react'

import {
  AppShell,
  Badge,
  Burger,
  Button,
  Card,
  Center,
  createTheme,
  Flex,
  Grid,
  Group,
  Image,
  MantineProvider,
  Paper,
  Radio,
  Skeleton,
  Text
} from '@mantine/core';

import SBB from '../components/sbb-times'

import { useColorScheme, useDisclosure } from '@mantine/hooks';

import '../styles/App.css'
import '@mantine/core/styles.css';
import Tasks from '../components/wgtasks';
import Photos from '../components/photos';
import Events from '../components/events';
import Home from '../components/homectrl';

function App() {
  //const [count, setCount] = useState(0)
  const [opened, { toggle }] = useDisclosure()

  //idk how this works
  const theme = createTheme({
    /** Your theme override here */
  });

  const colorScheme = useColorScheme();


  return (
    <MantineProvider theme={theme}>
      <div style={{ height: '100%' }}>
        <Grid grow gutter="xl" h={"100vh"} bg={colorScheme === 'dark' ? 'dark.8' : 'gray.0'} p={'xl'}>

          {/* left */}
          <Grid.Col span={4} h={"99vh"}>
            {/* upper - tasks */}
            <Paper h={"49%"} bg={'transparent'}>
              <Paper bg={'#556677'} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Tasks</Text>
                <Tasks />
              </Paper>
            </Paper>

            {/* lower - wg photos */}
            <Paper h={"49%"} bg={'transparent'}>
              <Paper bg={'#556677'} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Photos</Text>
                <Photos />
              </Paper>
            </Paper>
          </Grid.Col>

          {/* center */}
          <Grid.Col span={4} h={"99vh"}>
            <Paper h={"35%"} bg={'transparent'}>
              <Paper bg={'#556677'} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Next up</Text>
                <Events />
              </Paper>
            </Paper>
            <Paper h={"35%"} bg={'transparent'}>
              <Paper bg={'#556677'} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Next up</Text>
                <Events />
              </Paper>
            </Paper>
            <Paper h={"20%"} bg={'transparent'}>
              <Paper bg={'#556677'} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Home accessories</Text>
                <Home />
              </Paper>
            </Paper>
          </Grid.Col>

          {/* right */}
          <Grid.Col span={4} h={"99vh"}>
            {/* upper - bus times */}
            <Paper h={"85%"} bg={'transparent'}>
              <Paper bg={'#556677'} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Bus times :)</Text>
                <SBB />
              </Paper>
            </Paper>

            {/* lower - music */}
            <Paper h={"13%"} bg={'transparent'}>
              <iframe src="https://open.spotify.com/embed/track/4kLLWz7srcuLKA7Et40PQR?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </Paper>
          </Grid.Col>
        </Grid>
      </div>
    </MantineProvider>
  )
}

export default App
