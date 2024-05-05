import { Badge, Button, Card, Center, Grid, Group, Image, Paper, Stack, Text, Title } from "@mantine/core"

function Weather() {
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
            <Grid.Col span={4} >
                <Card p={10} radius="md" bg={'transparent'}>
                    <Card.Section>
                        <Image
                            src={"src/assets/bathroom.jpeg"}
                            height={260}
                        />
                    </Card.Section>
                    <Center pt={10} pb={0}>
                        <Badge variant="dot" tt={"uppercase"} fw={800} fz={"lg"} p={"sm"}> 5 </Badge>
                    </Center>
                </Card>
            </Grid.Col><Grid.Col span={8} >

            </Grid.Col>
        </Grid>
    )
}

export default Weather