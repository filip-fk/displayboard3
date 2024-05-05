import { Badge, Button, Card, Grid, Group, Image, Paper, SimpleGrid, Text, Title } from "@mantine/core"

function Photos() {
    let images: [{ img: string; alt: string }] = [{ img: "txt", alt: "plh" }];
    images.pop()
    images.push({ img: "src/assets/bathroom.jpeg", alt: "vacuum" });
    images.push({ img: "src/assets/vaccum.jpeg", alt: "vacuum" });
    images.push({ img: "src/assets/trash.jpeg", alt: "vacuum" });
    images.push({ img: "src/assets/kitchen.jpeg", alt: "vacuum" });
    images.push({ img: "src/assets/kitchen.jpeg", alt: "vacuum" });
    images.push({ img: "src/assets/kitchen.jpeg", alt: "vacuum" });
    images.push({ img: "src/assets/kitchen.jpeg", alt: "vacuum" });



    return (
        <Card padding="sm" m={'lg'} mt={20} radius="md" bg={"transparent"}>
            <Card.Section>
                <Image
                    src={images[0].img}
                    alt={images[0].alt}
                    height={400}
                />
            </Card.Section>
            <Card.Section>
                <Grid pb={22} pt={20} align="center">
                    {images.slice(1, -1).map((image) => (
                        <Grid.Col span={2} >
                            <Image
                                radius={'md'}
                                src={image.img}
                                alt={image.alt}
                            />
                        </Grid.Col>
                    ))}
                    <Grid.Col span={2} >
                        <Badge size="xl" circle>
                            +3
                        </Badge>
                    </Grid.Col>
                </Grid >
            </Card.Section>
        </Card>
    )
}

export default Photos