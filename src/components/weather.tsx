import { Badge, Button, Card, Center, Divider, Grid, Group, Image, Paper, Stack, Text, Title, rem } from "@mantine/core"
import { useColorScheme } from "@mantine/hooks";
import { IconCloud, IconPlayerPlay, IconSun } from "@tabler/icons-react"

function Weather() {


    const colorScheme = useColorScheme();

    return (

        <Grid grow justify="flex-start" align="stretch" p={'lg'} pt={0} c={colorScheme === 'dark' ? 'gray.0' : 'dark.8'}>
            <Grid.Col span={4} >
                {/* big current temperature with smaller min and max under it */}
                <Group gap={0} justify="center">
                    <IconSun style={{ width: rem(50), height: rem(50) }}
                        stroke={1.5}
                        fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                        color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                    />
                    <Text ta="center" fz={80}>24°</Text>
                </Group>
                <Group gap={"xl"} p={"lg"} justify="center">
                    <Text >19°</Text>
                    <Divider orientation="vertical" />
                    <Text >25°</Text>
                </Group>
                <Divider orientation="vertical" />
            </Grid.Col>
            <Grid.Col span={8} pl={"xl"} pr={"xl"}>
                {/* list of weather for next 3 hours */}
                {/* for each hour, hour in HH format aligned to left */}
                {/* icon for weather conditions in middle */}
                {/* temperature to the right */}
                <Group justify="space-between">
                    <Stack w={'38%'}>
                        <Group gap={0} justify="space-between">
                            <Text >7pm</Text>
                            <IconSun
                                style={{ width: rem(30), height: rem(30) }}
                                stroke={1.5}
                                fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                            />
                            <Text >25°</Text>
                        </Group>
                        <Group gap={0} justify="space-between">
                            <Text >8pm</Text>
                            <IconCloud
                                style={{ width: rem(30), height: rem(30) }}
                                stroke={1.5}
                                fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                            />
                            <Text >24°</Text>
                        </Group>
                        <Group gap={0} justify="space-between">
                            <Text >9pm</Text>
                            <IconCloud
                                style={{ width: rem(30), height: rem(30) }}
                                stroke={1.5}
                                fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                            />
                            <Text >20°</Text>
                        </Group>
                        <Group gap={0} justify="space-between">
                            <Text >10pm</Text>
                            <IconCloud
                                style={{ width: rem(30), height: rem(30) }}
                                stroke={1.5}
                                fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                            />
                            <Text >20°</Text>
                        </Group>
                    </Stack>
                    <Divider orientation="vertical" />
                    <Stack w={'54%'}>
                        <Group gap={0} justify="space-between">
                            <Text >06/05</Text>
                            <IconSun
                                style={{ width: rem(30), height: rem(30) }}
                                stroke={1.5}
                                fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                            />
                            <Group justify="flex-end" gap={"xs"} align="flex-end">
                                <Text >20°</Text>
                                <Text fz={20} fw={600}>22°</Text>
                            </Group>
                        </Group>
                        <Group gap={0} justify="space-between">
                            <Text >07/05</Text>
                            <IconCloud
                                style={{ width: rem(30), height: rem(30) }}
                                stroke={1.5}
                                fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                            />
                            <Group justify="flex-end" gap={"xs"} align="flex-end">
                                <Text >19°</Text>
                                <Text fz={20} fw={600}>24°</Text>
                            </Group>
                        </Group>
                        <Group gap={0} justify="space-between">
                            <Text >08/05</Text>
                            <IconSun
                                style={{ width: rem(30), height: rem(30) }}
                                stroke={1.5}
                                fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                            />
                            <Group justify="flex-end" gap={"xs"} align="flex-end">
                                <Text >20°</Text>
                                <Text fz={20} fw={600}>22°</Text>
                            </Group>
                        </Group>
                        <Group gap={0} justify="space-between">
                            <Text >09/05</Text>
                            <IconCloud
                                style={{ width: rem(30), height: rem(30) }}
                                stroke={1.5}
                                fill={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                                color={colorScheme === 'dark' ? 'var(--mantine-color-gray-0)' : 'var(--mantine-color-dark-8)'}
                            />
                            <Group justify="flex-end" gap={"xs"} align="flex-end">
                                <Text >24°</Text>
                                <Text fz={20} fw={600}>26°</Text>
                            </Group>
                        </Group>
                    </Stack>
                </Group>
            </Grid.Col>
        </Grid>
    )
}

export default Weather