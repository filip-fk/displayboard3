import { Badge, Button, Card, Center, Divider, Grid, Group, Image, Paper, Progress, Stack, Text, Title, rem } from "@mantine/core"
import { IconBrandMantine, IconPlayerPause, IconPlayerPlay, IconPlayerTrackNext, IconPlayerTrackPrev } from '@tabler/icons-react';

import { useColorScheme } from "@mantine/hooks";
import { useState } from "react";


export interface Song {
    img: string;
    alt: string;
    title: string;
    artist: string;
    duration: number;
}

function Music() {

    const colorScheme = useColorScheme();

    //songs in queue
    /**
     * Represents a song and its information.
     * @typedef {Object} Song
     * @property {string} img - The image source for the song.
     * @property {string} alt - The alternative text for the image.
     * @property {string} title - The title of the song.
     * @property {string} artist - The artist of the song.
     * @property {number} duration - The duration of the song.
     */

    const [songs, setSongs] = useState<Song[]>([
        {
            img: "src/assets/recycle.jpeg",
            alt: "recycle",
            title: "Song T1",
            artist: "Artist1",
            duration: 295
        },
        {
            img: "src/assets/kitchen.jpeg",
            alt: "kitchen",
            title: "Song Title that 2",
            artist: "Artist",
            duration: 165
        },
        {
            img: "src/assets/bathroom.jpeg",
            alt: "bathroom",
            title: "Song Title 3",
            artist: "Artist5",
            duration: 210
        },
        {
            img: "src/assets/vaccum.jpeg",
            alt: "vaccum",
            title: "Song Title 4",
            artist: "Artist5",
            duration: 210
        },
        {
            img: "src/assets/kitchen.jpeg",
            alt: "kitchen",
            title: "Song Title that 2",
            artist: "Artist",
            duration: 165
        },
        {
            img: "src/assets/bathroom.jpeg",
            alt: "bathroom",
            title: "Song Title 3",
            artist: "Artist5",
            duration: 210
        },
        {
            img: "src/assets/vaccum.jpeg",
            alt: "vaccum",
            title: "Song Title 4",
            artist: "Artist5",
            duration: 210
        },
        {
            img: "src/assets/kitchen.jpeg",
            alt: "kitchen",
            title: "Song Title that 2",
            artist: "Artist",
            duration: 165
        },
        {
            img: "src/assets/bathroom.jpeg",
            alt: "bathroom",
            title: "Song Title 3",
            artist: "Artist5",
            duration: 210
        },
        {
            img: "src/assets/vaccum.jpeg",
            alt: "vaccum",
            title: "Song Title 4",
            artist: "Artist5",
            duration: 210
        }
    ]);

    const handleCardClick = (index: number) => {
        //make selected song go to first place and drop all songs fron start to selected song
        setSongs((songs) => {
            const selected = songs[index];
            const rest = songs.slice(index + 1);
            return [selected, ...rest];
        });
    };

    //handle media controls
    const [playing, setPlaying] = useState(false);

    const togglePlaying = () => {
        setPlaying(!playing);
    }

    //plays next song AND puts first song at the back of queue
    const handleNext = () => {
        setSongs((songs) => {
            const first = songs[0];
            const rest = songs.slice(1);
            return [...rest, first];
        });
    }

    return (

        // music player with square album cover to the left and song information to the right, progress bar at the bottom, media controls at center, top
        <Stack>
            {/* currently playing song - aka index 0 */}
            <Grid grow justify="center" align="center" p={'lg'} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'}>
                <Grid.Col span={4} >
                    <Image
                        src={songs[0].img}
                        alt={songs[0].alt}
                        radius={"md"}
                        height={260}
                        width={260}
                    />
                </Grid.Col>
                <Grid.Col span={8} maw={'66%'} pl={"lg"}>
                    <Text pl={"xl"} pr={"xl"} fw={700} fz={34} truncate>{songs[0].title}</Text>
                    <Text fw={400}> {songs[0].artist} </Text>
                    <Center pt={"xl"} pb={0}>
                        <Stack justify="center" align="center">
                            <Group>
                                {/* icon media controls */}
                                <Button variant="transparent" size="xl" w={rem(80)} p={0}>
                                    <IconPlayerTrackPrev
                                        style={{ width: rem(80), height: rem(80) }}
                                        stroke={1.5}
                                        fill={colorScheme === 'dark' ? 'var(--mantine-color-dark-3)' : 'var(--mantine-color-dark-3)'}
                                        color={colorScheme === 'dark' ? 'var(--mantine-color-drak-3)' : 'var(--mantine-color-dark-3)'} />
                                </Button>
                                <Button variant="transparent" size="xl" w={rem(80)} p={0} onClick={() => togglePlaying()}>
                                    {/* if 'playing' is true, show pause icon, else show play icon */}
                                    {/* when clicked, toggle value of 'playing' */}
                                    {playing &&
                                        <IconPlayerPause
                                            style={{ width: rem(80), height: rem(80) }}
                                            stroke={1.5}
                                            fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                            color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'} />}
                                    {!playing &&
                                        <IconPlayerPlay
                                            style={{ width: rem(80), height: rem(80) }}
                                            stroke={1.5}
                                            fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                            color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'} />}

                                </Button>
                                <Button variant="transparent" size="xl" w={rem(80)} p={0} onClick={() => handleNext()}>
                                    <IconPlayerTrackNext
                                        style={{ width: rem(80), height: rem(80) }}
                                        stroke={1.5}
                                        fill={songs.length > 1 ? (colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)') : 'var(--mantine-color-dark-3)'}
                                        color={songs.length > 1 ? (colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)') : 'var(--mantine-color-dark-3)'} />
                                </Button>
                            </Group>
                        </Stack>
                    </Center>
                    <Progress mt={45} radius="xl" size={"xl"} value={33} color="orange" />
                    {/* time of song - current time on the left, total song duration on the right */}
                    <Group justify="space-between" pt={5}>
                        <Text> 1:02 </Text>
                        <Text> {Math.floor(songs[0].duration / 60) + ":" + (songs[0].duration % 60 < 10 ? "0" + (songs[0].duration % 60) : (songs[0].duration % 60))} </Text>
                    </Group>
                </Grid.Col>
            </Grid>

            {/* queue with upcoming songs. cover on left with image hight 50, title and artist next to it. list contains 3 songs - starts at position 1 (0 is currently playing) */}
            <Divider m={"sm"} label={songs.length > 1 ? "Playing next" : "Queue empty"} labelPosition="center" color="orange.2" />
            {songs.slice(1, 4).map((song, index) => (
                <Group key={index} p={'lg'} pt={0} pb={0} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} onClick={() => handleCardClick(index + 1)}>
                    <Image
                        src={song.img}
                        alt={song.alt}
                        radius={"md"}
                        h={50}
                        w={50}
                    />
                    <Stack p={"sm"} gap={0}>
                        <Text ta={"left"} fw={700} fz={18} truncate> {song.title} </Text>
                        <Text ta={'left'} fw={400}> {song.artist} </Text>
                    </Stack>
                </Group>
            ))}
        </Stack>
    )
}

export default Music