import { AspectRatio, Avatar, Badge, Card, Center, Flex, Grid, Image, Overlay, Tooltip } from "@mantine/core"
import { useState } from "react";


export interface Person {
    img: string;
    alt: string;
    avatar: string;
    name: string;
    status: number;
    last: number;
    streak: number;
    description: string;
}
/**
 * Renders a list of tasks with corresponding status and information.
 * component part of main page grid
 */
function Tasks() {
    // describe the state of the tasks

    /**
     * Represents a person and their task information.
     * @typedef {Object} Person
     * @property {string} img - The image source for the task.
     * @property {string} alt - The alternative text for the image.
     * @property {string} avatar - The avatar of the person.
     * @property {string} name - The name of the person.
     * @property {number} status - The status of the person's task (0: not complete (red), 1: in progress (yellow), 2: complete (green)).
     * @property {number} last - Indicates if the person's task was  completed last week (0: not completed (red dot added to name), 1: completed (red dot hidden)).
     * @property {number} streak - The number of weeks the person has completed the task.
     * @property {string} description - The description of the task.
     */

    const [ppl, setPpl] = useState<Person[]>([
        {
            img: "src/assets/tasks/vac",
            alt: "vacuum",
            avatar: "src/assets/ppl/",
            status: 0,
            last: 0,
            streak: 3,
            name: "filip",
            description: "Vacuum the flat"
        },
        {
            img: "src/assets/tasks/recycle",
            alt: "recycle",
            avatar: "src/assets/ppl/",
            status: 1,
            last: 1,
            streak: 1,
            name: "joanna",
            description: "Take out recycable waste"
        },
        {
            img: "src/assets/tasks/kitchen",
            alt: "kitchen",
            avatar: "src/assets/ppl/",
            status: 0,
            last: 0,
            streak: 4,
            name: "jakob",
            description: "Clean the kitchen"
        },
        {
            img: "src/assets/tasks/mop",
            alt: "mop",
            avatar: "src/assets/ppl/",
            status: 2,
            last: 0,
            streak: 2,
            name: "lucia",
            description: "Mop the floors"
        },
        {
            img: "src/assets/tasks/bathroom",
            alt: "bathroom",
            avatar: "src/assets/ppl/",
            status: 0,
            last: 1,
            streak: 0,
            name: "filip", //karl
            description: "Clean bathroom 1"
        },
        {
            img: "src/assets/tasks/bathroom",
            alt: "bathroom",
            avatar: "src/assets/ppl/",
            status: 1,
            last: 0,
            streak: 5,
            name: "joanna", //theo
            description: "Clean bathroom 2"
        },
        {
            img: "src/assets/tasks/trash",
            alt: "trash",
            avatar: "src/assets/ppl/",
            status: 2,
            last: 1,
            streak: 1,
            name: "joanna", //erwin
            description: "Take out the trash"
        },
        {
            img: "src/assets/tasks/bathroom",
            alt: "toilet",
            avatar: "src/assets/ppl/",
            status: 2,
            last: 0,
            streak: 3,
            name: "joanna", //jonas
            description: "Clean the toilet"
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
                    <Card shadow="sm" p={10} radius="md" bg={'#FFFAE9'}>
                        {/* bg={person.status == 0 ? "red.1" : person.status == 1 ? "yellow.1" : "green.1"} */}
                        <Card.Section>
                            <AspectRatio ratio={1 / 1} maw={400} mx="auto" pos="relative">
                                <img
                                    src={person.avatar + person.name + "-" + person.last + ".png"}
                                    alt={person.alt}
                                />
                                <Overlay gradient="linear-gradient(315deg, rgba(0, 0, 0, 0.90) 0%, rgba(255, 255, 255, 0) 50%)"
                                    opacity={1}>

                                    <Flex justify="flex-end" align="flex-end" mt={'100px'} mr={'20px'}>
                                        <Tooltip label={person.description} withArrow>
                                            <Avatar size={"lg"} mt={'30px'} ml={'20px'} src={person.img + "-" + person.status + ".png"} alt={person.name} color={person.status == 0 ? "red.1" : person.status == 1 ? "yellow.1" : "green.1"} />
                                        </Tooltip>
                                    </Flex>
                                </Overlay>
                            </AspectRatio>
                            {/*  */}
                        </Card.Section>
                        <Center pt={5} pb={5}>
                            <Badge mr={'xs'} size="xl" m={0}

                                leftSection={<Image radius={"50%"} h={50} src={person.streak === 0 ? "src/assets/tasks/fire-ice.svg" : "src/assets/tasks/fire.svg"} />}

                                color={"transparent"} fz={22} c={"dark.9"}>
                                {person.streak}
                            </Badge>
                        </Center>
                    </Card>
                </Grid.Col>
            ))}
        </Grid>
    )
}

export default Tasks