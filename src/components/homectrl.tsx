import { Badge, Button, Card, Center, Grid, Group, Image, Paper, Stack, Text, Title } from "@mantine/core"

function Home() {
    let accessories: [{ img: string; alt: string, name: string; status: number; }] = [{ img: "txt", alt: "plh", name: "Y", status: 1 }];
    accessories.pop()
    accessories.push({ img: "src/assets/vaccum.jpeg", alt: "vacuum", name: "F", status: 0 });
    accessories.push({
        img: "src/assets/recycle.jpeg", alt: "recycle", name: "Joa", status: 1
    });
    accessories.push({
        img: "src/assets/kitchen.jpeg", alt: "kitchen", name: "Ja", status: 0
    });
    accessories.push({
        img: "src/assets/mop.jpeg", alt: "mop", name: "L", status: 1
    });
    accessories.push({
        img: "src/assets/bathroom.jpeg", alt: "bathroom", name: "K", status: 1
    });
    accessories.push({
        img: "src/assets/bathroom.jpeg", alt: "bathroom", name: "T", status: 1
    });



    return (
        <Grid grow justify="flex-start" align="stretch" p={'lg'}>
            {accessories.map((accessory, index) => (
                <Grid.Col key={index} span={2} >
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