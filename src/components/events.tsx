import { Badge, Button, Card, Grid, Group, Image, Paper, Stack, Text, Title } from "@mantine/core"
import { useColorScheme } from "@mantine/hooks";

function Events() {
    let events: [{ img: string; alt: string, title: string; author: string; date: string; desc: string; accent: string; }] = [{
        img: "txt", alt: "plh", title: "Y", date: "1", desc: "xyz", accent: "pink",
        author: "recycle"
    }];
    events.pop()
    events.push({
        img: "src/assets/mop.jpeg", alt: "vacuum", title: "Semesterparty", date: "Apr 29", desc: "Some party yay",
        accent: "blue",
        author: "recycle"
    });
    events.push({
        img: "src/assets/kitchen.jpeg", alt: "kitchen", title: "Celine Birthday", date: "May 7", desc: "Celebrate Celine's birthday in style with a lively soirée filled with laughter, music, and delicious treats. Join us as we raise a toast to another fabulous year of memories with our beloved Celine!",
        accent: "pink",
        author: "recycle"
    });
    events.push({
        img: "src/assets/recycle.jpeg", alt: "recycle", title: "Pizza night", date: "May 8", desc: "Some party yay",
        accent: "green",
        author: "recycle"
    });
    events.push({
        img: "src/assets/recycle.jpeg", alt: "recycle", title: "Poker night with long title", date: "May 8", desc: "Some party yay",
        accent: "blue",
        author: "recycle"
    });


    const colorScheme = useColorScheme();


    return (
        <Group grow p={"lg"} align="stretch" justify="space-between">
            {events.map((event) => (
                <Card shadow="sm" c={colorScheme === 'light' ? 'dark.8' : 'gray.0'} bg={colorScheme === 'dark' ? 'dark.8' : 'gray.0'} padding="lg" radius="md" h={400} maw={'22%'}>
                    <Card.Section>
                        <Image
                            src={event.img}
                            height={160}
                            alt={event.alt}
                        />
                    </Card.Section>

                    <Stack align="flex-start"
                        justify="flex-start" mt="md" mb="xs" gap={'sm'}>
                        <Text fw={700} p={0} pr={5} m={0} fz={18} truncate>{event.title}</Text>
                        <Badge h={45} pl={0} pr={15} leftSection={<Image radius={"50%"} h={25} ml={10} mr={5} src={"src/assets/" + event.author + ".jpeg"} />} color={event.accent + ".2"} fz={15} c={"dark.9"}>{event.date}</Badge>


                        <Text mt={20} fz="sm" c="dimmed" lineClamp={4} ta={"left"}>
                            {event.desc}
                        </Text>
                    </Stack>
                </Card>
            ))}
        </Group>
    )
}

export default Events