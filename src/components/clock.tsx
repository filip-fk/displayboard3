import { Card, Grid, RingProgress, Stack, Text, Title } from "@mantine/core"
import { useColorScheme } from "@mantine/hooks";
import { useState } from "react";

function Clock() {


    const colorScheme = useColorScheme();

    //initialize the time to current time
    const date = new Date();

    const [[currentHour, currentMinute, currentSecond], setTime] = useState([date.getHours(), date.getMinutes(), date.getSeconds()]);

    const [[currentDay, currentDate], setDate] = useState([date.getDay(), date.getDate()]);

    // Update the time every second
    setInterval(() => {
        const date = new Date();
        setTime([date.getHours(), date.getMinutes(), date.getSeconds()]);
    }, 1000);

    //update the date every day at midnight
    setInterval(() => {
        const date = new Date();
        setDate([date.getDay(), date.getDate()]);
    }, 10000);

    //change day from 0-6 to the actual day of the week truncated to 3 letters
    const getDayOfWeek = (day: number): string => {
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

    const formattedDay = getDayOfWeek(currentDay);


    return (
        <Grid justify="center" align="center">
            <Grid.Col span={4}>
                {/* hours */}
                <Card padding="sm" m={'lg'} mt={60} radius="md" bg={"transparent"}>
                    <Card.Section>
                        <Title ta="center" fz={80} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'}>{currentHour < 10 ? "0" + currentHour : currentHour}</Title>
                    </Card.Section>
                </Card>
            </Grid.Col>
            <Grid.Col span={4}>
                <RingProgress
                    sections={[{ value: 100 * currentSecond / 60, color: 'orange.6' }]}
                    rootColor="orange.2"
                    size={280}
                    thickness={8}
                    roundCaps
                    label={
                        // contains day of week in orange and date in month in white underneath
                        <Stack justify="center" gap={0}>
                            <Text ta="center" tt={"uppercase"} c="orange" fw={800} fz={50} p={0} m={0}>{formattedDay}</Text>
                            <Text ta="center" c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'} fw={400} fz={80} p={0} mt={-30}>{currentDate}</Text>
                        </Stack>
                    }
                />
            </Grid.Col>
            <Grid.Col span={4}>
                {/* minutes */}
                <Card padding="sm" m={'lg'} mt={60} radius="md" bg={"transparent"}>
                    <Card.Section>
                        <Title ta="center" fz={80} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'}>{currentMinute < 10 ? "0" + currentMinute : currentMinute}</Title>
                    </Card.Section>
                </Card>
            </Grid.Col>
        </Grid>
    )
}

export default Clock