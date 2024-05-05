import { Badge, Button, Card, Center, Divider, Grid, Group, Image, Paper, Stack, Text, Title, rem } from "@mantine/core"
import { useColorScheme } from "@mantine/hooks";
import { IconCaretUp, IconCloud, IconDroplet, IconPlayerPlay, IconSun } from "@tabler/icons-react"
// import { fetchWeatherApi } from 'openmeteo';
import { useEffect, useState } from "react";

export interface Weather {
    latitude: number;
    longitude: number;
    utc_offset_seconds: number;
    current: {
        time: string;
        interval: number;
        temperature_2m: number;
        is_day: number;
        weather_code: number;
    };
    hourly: {
        time: string[];
        temperature_2m: number[];
        weather_code: number[];
    };
    daily: {
        time: string[];
        weather_code: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        sunrise: string[];
        sunset: string[];
        precip: number[];
    };
}

function api<T>(url: string): Promise<T> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json().then(data => data as T);
        })
}

function fetch_data(weather: any): Weather {
    return {
        latitude: weather.latitude,
        longitude: weather.longitude,
        utc_offset_seconds: weather.utc_offset_seconds,
        current: {
            time: weather.current.time,
            interval: weather.current.interval,
            temperature_2m: weather.current.temperature_2m,
            is_day: weather.current.is_day,
            weather_code: weather.current.weather_code
        },
        hourly: {
            time: weather.hourly.time,
            temperature_2m: weather.hourly.temperature_2m,
            weather_code: weather.hourly.weather_code
        },
        daily: {
            time: weather.daily.time,
            weather_code: weather.daily.weather_code,
            temperature_2m_max: weather.daily.temperature_2m_max,
            temperature_2m_min: weather.daily.temperature_2m_min,
            sunrise: weather.daily.sunrise,
            sunset: weather.daily.sunset,
            precip: weather.daily.precipitation_probability_max
        }
    }
}

function Weather() {
    const colorScheme = useColorScheme();

    const [weather, setWeather] = useState<Weather>({
        latitude: 0,
        longitude: 0,
        utc_offset_seconds: 0,
        current: {
            time: "",
            interval: 0,
            temperature_2m: 0,
            is_day: 0,
            weather_code: 0
        },
        hourly: {
            time: [],
            temperature_2m: [],
            weather_code: []
        },
        daily: {
            time: [],
            weather_code: [],
            temperature_2m_max: [],
            temperature_2m_min: [],
            sunrise: [],
            sunset: [],
            precip: []
        }
    });

    //runs only on first render
    useEffect(() => {
        const weathers: Weather[] = [
            weather
        ]

        const url = 'https://api.open-meteo.com/v1/forecast?latitude=47.42&longitude=8.5&current=temperature_2m,is_day,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&timezone=Europe%2FBerlin&forecast_days=5';


        api<{ responses: any }>(url)
            .then((responses) => {
                const item = fetch_data(responses)
                weathers.push(item);
                //console.log('call inside weather' + item.current.time)
                console.log(weathers)
                setWeather(weathers[1])
            })
    }, []);

    //runs periodically every 50seconds (not on first render)
    useEffect(() => {
        const interval = setInterval(() => {
            const weathers: Weather[] = [
                weather
            ]

            //const url = 'https://api.open-meteo.com/v1/forecast?latitude=47.42&longitude=8.5&current=temperature_2m,is_day,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Europe%2FBerlin&forecast_days=5';

            const url = 'https://api.open-meteo.com/v1/forecast?latitude=47.42&longitude=8.5&current=temperature_2m,is_day,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&timezone=Europe%2FBerlin&forecast_days=5'


            api<{ responses: any }>(url)
                .then((responses) => {
                    const item = fetch_data(responses)
                    weathers.push(item);

                    console.log('call inside weather reccuring call')
                    console.log(weathers)

                    setWeather(weathers[1])
                    // console.log('call inside weather' + item.current.time)

                    // if (weathers[0].hourly.weather_code[0] == 20)
                    //     weathers.splice(0, 1);

                    // if (weathers.length > 1) {
                    //     setWeather(weathers[0])
                    // }

                })
        }, 3600000);
        return () => clearInterval(interval); //unmount to prevent memory leaks.
    }, [])

    //convert day number to day name of week
    function formatDay(day: number): string {
        switch (day) {
            case 0:
                return "Sun";
            case 1:
                return "Mon";
            case 2:
                return "Tue";
            case 3:
                return "Wed";
            case 4:
                return "Thu";
            case 5:
                return "Fri";
            case 6:
                return "Sat";
            default:
                return "";
        }
    };

    return (

        <Grid grow justify="flex-start" align="stretch" p={'lg'} pt={0} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'}>
            <Grid.Col span={4} >
                {/* big current temperature with smaller min and max under it */}
                <Group gap={0} justify="center">
                    <IconSun style={{ width: rem(50), height: rem(50) }}
                        stroke={1.5}
                        fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                        color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                    />
                    <Text ta="center" fz={80}>{Math.round(weather.current.temperature_2m) + "°"}</Text>
                    <Stack pl={"lg"}>
                        <Text fz={20} fw={600}>{Math.round(weather.daily.temperature_2m_max[0]) + "°"}</Text>
                        <Text >{Math.round(weather.daily.temperature_2m_min[0]) + "°"}</Text>
                    </Stack>
                </Group>
                <Group gap={"xl"} p={"lg"} justify="center">
                    <Group gap={0}>
                        <IconDroplet style={{ width: rem(20), height: rem(20) }}
                            stroke={1.5}
                            fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                            color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                        />
                        <Text ta="center" fz={20}>{Math.round(weather.daily.precip[0]) + "%"}</Text>
                    </Group>
                    <Divider orientation="vertical" />
                    <Group gap={0} align="center">
                        <IconSun style={{ width: rem(30), height: rem(30) }}
                            stroke={1.5}
                            fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                            color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                        />
                        <Text ta="center" fz={20}>{(new Date(weather.daily.sunrise[0]).getHours() < 10 ? "0" + new Date(weather.daily.sunrise[0]).getHours() : new Date(weather.daily.sunrise[0]).getHours()) + ":" + (new Date(weather.daily.sunrise[0]).getMinutes() < 10 ? "0" + new Date(weather.daily.sunrise[0]).getMinutes() : new Date(weather.daily.sunrise[0]).getMinutes())}</Text>
                    </Group>
                </Group>
                <Divider orientation="vertical" />
            </Grid.Col>
            <Grid.Col span={8} pl={"xl"} pr={"xl"}>
                {/* list of weather for next 3 hours */}
                {/* for each hour, hour in HH format aligned to left */}
                {/* icon for weather conditions in middle */}
                {/* temperature to the right */}
                <Group justify="space-between">
                    <Stack w={'38%'}>
                        {[1, 2, 3, 4].map((i) => (
                            <Group key={i} grow gap={0} justify="space-between">
                                <Text >{i + new Date().getHours()}</Text>
                                <IconSun
                                    style={{ width: rem(30), height: rem(30) }}
                                    stroke={1.5}
                                    fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                    color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                />
                                <Text >{Math.round(weather.hourly.temperature_2m[i + new Date().getHours()]) + "°"}</Text>
                            </Group>
                        ))}
                    </Stack>
                    <Divider orientation="vertical" />
                    <Stack w={'54%'}>
                        {/* array of 4 items to map */}
                        {[1, 2, 3, 4].map((i) => (
                            <Group key={i} grow gap={0} justify="space-between">
                                <Text c={i == 1 ? (colorScheme === 'dark' ? 'orange.5' : 'orange.8') : (colorScheme === 'dark' ? 'gray.0' : 'dark.8')} tt={"uppercase"} ta={"left"}>{i == 1 ? "tmrw" : formatDay(new Date(weather.daily.time[i]).getDay())}</Text>
                                {/* new Date().getDate() */}
                                <Group justify="center" gap={"xs"} align="flex-end">
                                    <IconSun
                                        style={{ width: rem(30), height: rem(30) }}
                                        stroke={1.5}
                                        fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                        color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                    />
                                    {weather.daily.precip[i] > 15 &&
                                        <Text>{weather.daily.precip[i] + "%"}</Text>}
                                </Group>
                                <Group justify="flex-end" gap={"xs"} align="flex-end">
                                    <Text >{Math.round(weather.daily.temperature_2m_min[i]) + "°"}</Text>
                                    <Text fz={20} fw={600}>{Math.round(weather.daily.temperature_2m_max[i]) + "°"}</Text>
                                </Group>
                            </Group>
                        ))}
                    </Stack>
                </Group>
            </Grid.Col>
        </Grid>
    )
}

export default Weather