# DisplayBoard v.3

## important
DO NOT USE npm!!!!! --> use yarn instead :)

## node, npm, yarn, yatti-yatta

downloading node/npm/yarn can be a mess!
be careful about which should be downloaded first: 1. node 2. npm 3. yarn
> **TL;DR** Steps based on most recent set-up on raspberry aka clean install of all package managers. uses nodejs v20.15 through get-apt

>raspberry is special because we us a sepearte installation of Node for homebridge


### Node (specific version needed because apt-get only provides up to Node v10.x) + npm:
```bash
sudo apt-get update
sudo apt-get upgrade

curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo -E bash nodesource_setup.sh
sudo apt-get install -y nodejs
sudo apt-get install -y npm
```
### yarn:
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
sudo apt remove cmdtest
alias node=nodejs
```

the aliasing is mostly a precaution cause node and nodejs sould point to the same

### check u didn't fuck up:
```bash
node -v
npm -v
yarn -v

whereis node
```

the ```whereis node``` should show the location of node (if node is properly installed), and can be useful for troubleshooting in scenarios, where multiple node's are actually needed

### A bit of backgrund
- node/npm can be managed by ```n``` or ```nvm```. life would be great if these worked relaibly :') in the above set-up guide, only ```apt-get``` is used 

- ```npm``` could be used to install yarn -> pls don't :)

- if anything goes south with package managers -> **DELETE EVERYTHING** related to the affected version/installation of node/npm/yarn! if u installed each one only from ```apt-get```, a simple... 

```bash
sudo apt-get purge <pckg>
sudo autoremove
sudo reboot
```

...should do the trick :P

## getting started (dev)

```bash
git clone <repository_url>
cd displayboard3
sudo yarn install
```
warnings may show up ab new versions/dependancies not met... if u r feeling brave:
```bash
yarn upgrade-interactive --latest
```
then 
```bash
yard dev
```

by default runs on localhost:5173

## how it works
1. there's a router in [main.tsx](src/main.tsx) that redirects ```localhost:[port]/[...]``` as needed
2. by default, ```localhost:[port]/``` loads [app.tsx](src/routes/App.tsx)
3. [app.tsx](src/routes/App.tsx) contains the grid/dashboard view, with each component imported into its 'slot'
4. to make changes to a component, locate its file under [```src/components/..```](src/components)

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

> **NB:** using ```await``` is a problem => walkaround is 1. declare global object with dummy init 2. call ```.then()``` and 3. handle promise and response

## icons & colors
icons: https://tabler.io/icons

colors: [Mantine](https://mantine.dev/theming/colors/)

## TODO
- [ ] tasks sync
- [x] hook weather api
- [ ] hook photos to some service
- [ ] hook calendar to some service
- [ ] hook music to spotify
- [ ] hook home accessories to http local
- [ ] add visuals for accessories/avatars
