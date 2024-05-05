import { Badge, Button, Card, Center, Grid, Group, Image, Paper, Stack, Text, Title } from "@mantine/core"
import { useState } from "react";


export interface Person {
    img: string;
    alt: string;
    name: string;
    status: number;
    last: number;
}
/**
 * Renders a list of tasks with corresponding status and information.
 */
function Tasks() {
    // describe the state of the tasks

    /**
     * Represents a person and their task information.
     * @typedef {Object} Person
     * @property {string} img - The image source for the task.
     * @property {string} alt - The alternative text for the image.
     * @property {string} name - The name of the person.
     * @property {number} status - The status of the person's task (0: not complete (red), 1: in progress (yellow), 2: complete (green)).
     * @property {number} last - Indicates if the person's task was  completed last week (0: not completed (red dot added to name), 1: completed (red dot hidden)).
     */

    const [ppl, setPpl] = useState<Person[]>([
        {
            img: "src/assets/vaccum.jpeg",
            alt: "vacuum",
            name: "F",
            status: 0,
            last: 0
        },
        {
            img: "src/assets/recycle.jpeg",
            alt: "recycle",
            name: "Joa",
            status: 1,
            last: 1
        },
        {
            img: "src/assets/kitchen.jpeg",
            alt: "kitchen",
            name: "Ja",
            status: 0,
            last: 0
        },
        {
            img: "src/assets/mop.jpeg",
            alt: "mop",
            name: "L",
            status: 2,
            last: 0
        },
        {
            img: "src/assets/bathroom.jpeg",
            alt: "bathroom",
            name: "K",
            status: 0,
            last: 1
        },
        {
            img: "src/assets/bathroom.jpeg",
            alt: "bathroom",
            name: "T",
            status: 1,
            last: 0
        },
        {
            img: "src/assets/trash.jpeg",
            alt: "trash",
            name: "E",
            status: 2,
            last: 1
        },
        {
            img: "src/assets/bathroom.jpeg",
            alt: "toilet",
            name: "Jon",
            status: 2,
            last: 0
        }
    ]);

    const handleCardClick = (index: number) => {
        setPpl(prevPpl => prevPpl.map((person, i) => {
            if (i === index) {
                const newStatus = (person.status + 1) % 3;
                const newLast = newStatus === 2 ? 1 : person.last;
                return { ...person, status: newStatus, last: newLast };
            }
            return person;
        }));
    };

    return (
        <Grid grow justify="flex-start" align="stretch" p={'lg'}>
            {ppl.map((person, index) => (
                <Grid.Col key={index} span={3} onClick={() => handleCardClick(index)}>
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