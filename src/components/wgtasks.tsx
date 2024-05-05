import { Badge, Button, Card, Center, Grid, Group, Image, Paper, Stack, Text, Title } from "@mantine/core"

function Tasks() {
    let ppl: [{ img: string; alt: string, name: string; status: number; last: number }] = [{ img: "txt", alt: "plh", name: "Y", status: 1, last: 0 }];
    ppl.pop()
    ppl.push({ img: "src/assets/vaccum.jpeg", alt: "vacuum", name: "F", status: 0, last: 0 });
    ppl.push({
        img: "src/assets/recycle.jpeg", alt: "recycle", name: "Joa", status: 1,
        last: 1
    });
    ppl.push({
        img: "src/assets/kitchen.jpeg", alt: "kitchen", name: "Ja", status: 0,
        last: 0
    });
    ppl.push({
        img: "src/assets/mop.jpeg", alt: "mop", name: "L", status: 2,
        last: 0
    });
    ppl.push({
        img: "src/assets/bathroom.jpeg", alt: "bathroom", name: "K", status: 0,
        last: 1
    });
    ppl.push({
        img: "src/assets/bathroom.jpeg", alt: "bathroom", name: "T", status: 1,
        last: 0
    });
    ppl.push({
        img: "src/assets/trash.jpeg", alt: "trash", name: "E", status: 2,
        last: 1
    });
    ppl.push({
        img: "src/assets/bathroom.jpeg", alt: "toilet", name: "Jon", status: 2,
        last: 0
    });



    return (
        <Grid grow justify="flex-start" align="stretch" p={'lg'}>
            {ppl.map((person, index) => (
                <Grid.Col key={index} span={3} >
                    <Card shadow="sm" p={10} radius="md" withBorder bg={person.status == 0 ? "red.1" : person.status == 1 ? "yellow.1" : "green.1"}>
                        <Card.Section>
                            <Image
                                src={person.img}
                                alt={person.alt}
                            />
                        </Card.Section>
                        <Center pt={10} pb={0}>
                            {person.last == 0 &&
                                <Badge hidden={person.last === 0} mr={'xs'} size="xs" m={0} circle bg={person.last == 0 ? "red" : "transparent"}> </Badge>}
                            <Text tt={"uppercase"} fw={800} fz={"lg"} c={person.status == 0 ? "red.9" : person.status == 1 ? "yellow.9" : "green.9"} >{person.name}</Text>
                        </Center>
                    </Card>
                </Grid.Col>
            ))}
        </Grid>
    )
}

export default Tasks