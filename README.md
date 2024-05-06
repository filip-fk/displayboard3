# DisplayBoard v.3

## important
DO NOT USE npm!!!!!
use yarn instead :)

## getting started

```bash
git clone <repository_url>
cd displayboard3
yarn install
yarn dev
```
by default runs on localhost:5173

## how it works
1. there's a router in [main.tsx](src/main.tsx) that redirects localhost:port/[...] as needed
2. by default, localhost:port/ loads [app.tsx](src/routes/App.tsx)
3. [app.tsx](src/routes/App.tsx) contains the grid/dashboard view, with each component imported into its 'slot'

> **NB:** MantineProvider is needed at the root of each rendering, so for pages loaded outside of [app.tsx](src/routes/App.tsx), they need MantineProvider around them. example to load times in [sbb.tsx](src/routes/sbb.tsx):
```TypeScript
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
```

## external API calls
1. sbb
2. weather (free): [Open-Meteo](https://open-meteo.com/en/docs#current=temperature_2m,is_day,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&timezone=Europe%2FBerlin&forecast_days=3)

> **NB:** using ```await``` is a problem => walkaround is 1. declare clobal object with dummy init 2. call ```.then()``` and 3. handle promise and response

## icons & colors
icons: https://tabler.io/icons

colors: [Mantine](https://mantine.dev/theming/colors/)

## TODO
1. tasks sync
2. hook photos to some service
3. hook calendar to some service
4. hook music to spotify
5. hook home accessories to http local
6. add visulas for accessories/avatars
