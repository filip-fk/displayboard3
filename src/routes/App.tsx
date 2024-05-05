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
import Weather from '../components/weather';

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
            <Paper h={"40%"} bg={'transparent'}>
              <Paper bg={'#556677'} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Tasks</Text>
                <Tasks />
              </Paper>
            </Paper>

            {/* lower - wg photos */}
            <Paper h={"58%"} bg={'transparent'}>
              <Paper bg={'#556677'} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Photos</Text>
                <Photos />
              </Paper>
            </Paper>
          </Grid.Col>

          {/* center */}
          <Grid.Col span={4} h={"99vh"}>

            {/* upper - date bubble */}
            <Paper h={"20%"} bg={'transparent'}>
              <Paper bg={'#556677'} radius={'lg'} >
                <Center h={260}>
                  <Flex direction="column" align="center" justify="center">
                    <Text size="xl" fw={700} style={{ marginBottom: '0.5rem' }}>
                      Monday
                    </Text>
                    <Badge size="xl" style={{ marginBottom: '1rem' }}>
                      25
                    </Badge>
                  </Flex>
                </Center>
              </Paper>
            </Paper>

            {/* mid-high - weather */}
            <Paper h={"28%"} bg={'transparent'}>
              <Paper bg={'#556677'} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>weather</Text>
                <Weather />
              </Paper>
            </Paper>

            {/* mid-low - calendar events */}
            <Paper h={"34%"} bg={'transparent'}>
              <Paper bg={'#556677'} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Next up</Text>
                <Events />
              </Paper>
            </Paper>

            {/* lower - home accessories */}
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
            <Paper h={"58%"} bg={'transparent'}>
              <Paper bg={'#556677'} radius={'lg'} >
                <Text size='lg' tt={'uppercase'} fw={700} pt={'lg'} pl={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} style={{ textAlign: 'left' }}>Bus times :)</Text>
                <SBB />
              </Paper>
            </Paper>

            {/* lower - music */}
            <Paper h={"40%"} bg={'transparent'}>
              <iframe src="https://open.spotify.com/embed/playlist/46XC7MwRroxrCaeAx97R8e?utm_source=generator&theme=1" width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </Paper>
          </Grid.Col>
        </Grid>
      </div>
    </MantineProvider>
  )
}

export default App
