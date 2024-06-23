import { AspectRatio, Divider, Flex, Grid, Group, Image, Stack, Text, rem } from "@mantine/core"
import { useColorScheme } from "@mantine/hooks";
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
        wind_speed: number;
        weather_code: number;
    };
    hourly: {
        time: string[];
        temperature_2m: number[];
        wind_speed: number[];
        weather_code: number[];
        is_day: number[];
    };
    daily: {
        time: string[];
        weather_code: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        wind_speed: number[];
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
            wind_speed: weather.current.wind_speed_10m,
            weather_code: weather.current.weather_code
        },
        hourly: {
            time: weather.hourly.time,
            temperature_2m: weather.hourly.temperature_2m,
            wind_speed: weather.hourly.wind_speed_10m,
            weather_code: weather.hourly.weather_code,
            is_day: weather.hourly.is_day
        },
        daily: {
            time: weather.daily.time,
            weather_code: weather.daily.weather_code,
            temperature_2m_max: weather.daily.temperature_2m_max,
            temperature_2m_min: weather.daily.temperature_2m_min,
            wind_speed: weather.daily.wind_speed_10m_max,
            sunrise: weather.daily.sunrise,
            sunset: weather.daily.sunset,
            precip: weather.daily.precipitation_probability_max
        }
    }
}

function getImgFromCode(code: number, wind: number, theme: string, day: number): { src: string, alt: string } {
    if (wind > 45.0) {
        return { src: "src/assets/weather/wind.svg", alt: "wind" };
    }

    const t = theme === 'dark' ? 0 : 1;

    console.log(code)
    // "-0" ending on images is for dark theme (aka lighter icons to go with dark background)
    switch (code) {
        case 0:
            // based on day show sun or moon for clear skies
            return day === 1 ? { src: `src/assets/weather/clear-day-${t}.svg`, alt: "sun" } : { src: `src/assets/weather/clear-night-${t}.svg`, alt: "moon" };
        case 1:
            return day === 1 ? { src: `src/assets/weather/cloud-day-${t}.svg`, alt: "partly-cloudy-sun" } : { src: `src/assets/weather/cloud-night-${t}.svg`, alt: "partly-cloudy-moon" };
        case 2:
            return day === 1 ? { src: `src/assets/weather/cloud-day-${t}.svg`, alt: "partly-cloudy-sun" } : { src: `src/assets/weather/cloud-night-${t}.svg`, alt: "partly-cloudy-moon" };
        case 3:
            return { src: `src/assets/weather/cloud-${t}.svg`, alt: "cloudy" };
        case 45:
            return { src: `src/assets/weather/fog-${t}.svg`, alt: "fog" };
        case 48:
            return { src: `src/assets/weather/fog-${t}.svg`, alt: "fog" };

        case 51:
            return { src: `src/assets/weather/drizzle-${t}.svg`, alt: "drizzle" };
        case 53:
            return { src: `src/assets/weather/drizzle-${t}.svg`, alt: "drizzle" };
        case 55:
            return { src: `src/assets/weather/drizzle-${t}.svg`, alt: "drizzle" };

        case 56:
            return { src: `src/assets/weather/snow-rain-${t}.svg`, alt: "snow-rain" };
        case 57:
            return { src: `src/assets/weather/snow-rain-${t}.svg`, alt: "snow-rain" };
        case 66:
            return { src: `src/assets/weather/snow-rain-${t}.svg`, alt: "snow-rain" };
        case 67:
            return { src: `src/assets/weather/snow-rain-${t}.svg`, alt: "snow-rain" };

        case 61:
            return { src: `src/assets/weather/rain-${t}.svg`, alt: "rain" };
        case 63:
            return { src: `src/assets/weather/rain-${t}.svg`, alt: "rain" };
        case 80:
            return { src: `src/assets/weather/rain-${t}.svg`, alt: "rain" };

        case 65:
            return { src: `src/assets/weather/heavy-rain-${t}.svg`, alt: "heavy-rain" };
        case 81:
            return { src: `src/assets/weather/heavy-rain-${t}.svg`, alt: "heavy-rain" };
        case 82:
            return { src: `src/assets/weather/heavy-rain-${t}.svg`, alt: "heavy-rain" };

        case 71:
            return { src: `src/assets/weather/snow-${t}.svg`, alt: "snow" };
        case 73:
            return { src: `src/assets/weather/snow-${t}.svg`, alt: "snow" };

        case 75:
            return { src: `src/assets/weather/heavy-snow-${t}.svg`, alt: "heavy-snow" };
        case 77:
            return { src: `src/assets/weather/heavy-snow-${t}.svg`, alt: "heavy-snow" };

        case 95:
            return { src: `src/assets/weather/thunderstorm-${t}.svg`, alt: "thunderstorm" };

        case 96:
            return { src: `src/assets/weather/hail-rain-${t}.svg`, alt: "hail" };
        case 99:
            return { src: `src/assets/weather/hail-rain-${t}.svg`, alt: "hail" };

        default:
            return { src: `src/assets/weather/clear-day-${t}.svg`, alt: "sun" };
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
            weather_code: 0,
            wind_speed: 0
        },
        hourly: {
            time: [],
            temperature_2m: [],
            weather_code: [],
            wind_speed: [],
            is_day: []
        },
        daily: {
            time: [],
            weather_code: [],
            temperature_2m_max: [],
            temperature_2m_min: [],
            sunrise: [],
            sunset: [],
            precip: [],
            wind_speed: []
        }
    });

    //runs only on first render
    useEffect(() => {
        const weathers: Weather[] = [
            weather
        ]

        const url = 'https://api.open-meteo.com/v1/forecast?latitude=47.42&longitude=8.5&current=temperature_2m,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,wind_speed_10m,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,wind_speed_10m_max&timezone=Europe%2FBerlin&forecast_days=5';


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

            const url = 'https://api.open-meteo.com/v1/forecast?latitude=47.42&longitude=8.5&current=temperature_2m,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,wind_speed_10m,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,wind_speed_10m_max&timezone=Europe%2FBerlin&forecast_days=5'


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
                    {/* <IconSun style={{ width: rem(50), height: rem(50) }}
                        stroke={1.5}
                        fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                        color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                    /> */}
                    <AspectRatio ratio={8 / 5} maw={rem(50)} mx="auto" pos="relative">
                        <img src={getImgFromCode(weather.current.weather_code, weather.current.wind_speed, colorScheme, weather.current.is_day).src} alt={getImgFromCode(weather.current.weather_code, weather.current.wind_speed, colorScheme, weather.current.is_day).alt} />

                    </AspectRatio>
                    <Text ta="center" fz={80}>{Math.round(weather.current.temperature_2m) + "°"}</Text>
                    <Stack pl={"lg"}>
                        <Text fz={20} fw={600}>{Math.round(weather.daily.temperature_2m_max[0]) + "°"}</Text>
                        <Text >{Math.round(weather.daily.temperature_2m_min[0]) + "°"}</Text>
                    </Stack>
                </Group>
                <Group gap={"lg"} p={"lg"} justify="center">
                    <Flex gap={0} p={0} m={0} justify="flex-start" align="center">

                        <Image w={rem(20)} mr={'7px'} src={"src/assets/weather/rain-" + (colorScheme === 'dark' ? "0" : "1") + ".svg"} alt={"rain"} />

                        {/* <IconDroplet style={{ width: rem(20), height: rem(20) }}
                            stroke={1.5}
                            fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                            color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                        /> */}
                        <Text ta="center" fz={20}>{Math.round(weather.daily.precip[0]) + "%"}</Text>
                    </Flex>
                    <Divider orientation="vertical" p={0} m={0} />
                    <Group gap={0} align="center">
                        <Group gap={0} p={0} m={0} justify="flex-start" align="center">

                            <Image w={rem(30)} mr={'10px'} src={"src/assets/weather/sunrise-" + (colorScheme === 'dark' ? "0" : "1") + ".svg"} alt={"sunrise"} />
                            {/* <IconSun style={{ width: rem(30), height: rem(30) }}
                            stroke={1.5}
                            fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                            color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                        /> */}
                            <Text ta="center" fz={20}>{(new Date(weather.daily.sunrise[0]).getHours() < 10 ? "0" + new Date(weather.daily.sunrise[0]).getHours() : new Date(weather.daily.sunrise[0]).getHours()) + ":" + (new Date(weather.daily.sunrise[0]).getMinutes() < 10 ? "0" + new Date(weather.daily.sunrise[0]).getMinutes() : new Date(weather.daily.sunrise[0]).getMinutes())}</Text>

                        </Group>
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
                                <Image w={rem(30)} src={getImgFromCode(weather.hourly.weather_code[i + new Date().getHours()], weather.hourly.wind_speed[i + new Date().getHours()], colorScheme, weather.hourly.is_day[i + new Date().getHours()]).src} alt={getImgFromCode(weather.hourly.weather_code[i + new Date().getHours()], weather.hourly.wind_speed[i + new Date().getHours()], colorScheme, weather.hourly.is_day[i + new Date().getHours()]).alt} />
                                {/* <IconSun
                                    style={{ width: rem(30), height: rem(30) }}
                                    stroke={1.5}
                                    fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                    color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                /> */}
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
                                    <Image w={rem(30)} src={getImgFromCode(weather.daily.weather_code[i], weather.daily.wind_speed[i], colorScheme, 1).src} alt={getImgFromCode(weather.daily.weather_code[i], weather.daily.wind_speed[i], colorScheme, 1).alt} />
                                    {weather.daily.precip[i] > 35 &&
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