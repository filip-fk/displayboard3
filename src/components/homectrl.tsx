import { Badge, Button, Card, Center, Grid, Group, Image, Paper, Stack, Text, Title } from "@mantine/core"
import { useState } from "react";

export interface Accessory {
    img: string;
    alt: string;
    name: string;
    status: number;
}

/**
 * Renders a list of accessories with corresponding status and information.
 */
function Home() {
    // describe the state of the accessories

    /**
     * Represents an accessory and its information.
     * @typedef {Object} Accessory
     * @property {string} img - The image source for the accessory.
     * @property {string} alt - The alternative text for the image.
     * @property {string} name - The name of the accessory.
     * @property {number} status - The status of the accessory (0: off (red), 1: on (green)).
     */

    const [accessories, setAccessories] = useState<Accessory[]>([
        {
            img: "src/assets/home/kitchen.jpeg",
            alt: "kitchen",
            name: "Kitchen light",
            status: 0
        },
        {
            img: "src/assets/recycle.jpeg",
            alt: "recycle",
            name: "Joa",
            status: 1
        },
        {
            img: "src/assets/kitchen.jpeg",
            alt: "kitchen",
            name: "Ja",
            status: 0
        },
        {
            img: "src/assets/mop.jpeg",
            alt: "mop",
            name: "L",
            status: 1
        },
        {
            img: "src/assets/bathroom.jpeg",
            alt: "bathroom",
            name: "K",
            status: 1
        },
        {
            img: "src/assets/bathroom.jpeg",
            alt: "bathroom",
            name: "T",
            status: 1
        }
    ]);

    const toggleStatus = (index: number) => {
        const newAccessories = [...accessories];
        newAccessories[index].status = newAccessories[index].status === 0 ? 1 : 0;
        setAccessories(newAccessories);
    }


    return (
        <Grid grow justify="flex-start" align="stretch" p={'lg'}>
            {accessories.map((accessory, index) => (
                <Grid.Col key={index} span={2} onClick={() => toggleStatus(index)}>
                    <Card p={10} radius="md" bg={'transparent'}>
                        <Card.Section>
                            <Image
                                src={accessory.img}
                                alt={accessory.alt}
                            />
                        </Card.Section>
                        <Center pt={10} pb={0}>
                            <Badge variant="dot" color={accessory.status == 0 ? "red.9" : "green.9"} tt={"uppercase"} fw={800} fz={"lg"} p={"sm"}> {accessory.status == 0 ? "off" : "on"} </Badge>
                        </Center>
                    </Card>
                </Grid.Col>
            ))}
        </Grid>
    )
}

export default Home