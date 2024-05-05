import { Badge, Button, Card, Grid, Group, Image, Paper, SimpleGrid, Text, Title } from "@mantine/core"
import { useEffect, useState } from "react";


export interface Photo {
    img: string;
    alt: string;
}

/**
 * Renders a list of photos with corresponding information.
 */
function Photos() {

    /**
     * Represents a photo and its information.
     * @typedef {Object} Photo
     * @property {string} img - The image source for the photo.
     * @property {string} alt - The alternative text for the image.
     */

    const [images, setImages] = useState<Photo[]>([
        {
            img: "src/assets/photos/edelweiss.jpeg",
            alt: "edelweiss"
        },
        {
            img: "src/assets/photos/hut.jpeg",
            alt: "hut"
        },
        {
            img: "src/assets/photos/lake.jpeg",
            alt: "lake"
        },
        {
            img: "src/assets/photos/mountain.jpeg",
            alt: "mountain"
        }
    ]);

    //every 2 seconds switches the pictures so the second becomes first and first becomes last and each other shifts accordingly to the front

    useEffect(() => {
        const interval = setInterval(() => {
            setImages((images) => {
                const first = images[0];
                const rest = images.slice(1);
                return [...rest, first];
            });
        }, 60000);
        return () => clearInterval(interval);
    }, []);


    return (
        <Card padding="sm" m={'lg'} mt={20} radius="md" bg={"transparent"}>
            <Card.Section>
                <Image
                    src={images[0].img}
                    alt={images[0].alt}
                    height={700}
                />
            </Card.Section>
            <Card.Section>
                <Grid pb={22} pt={20} align="center">
                    {images.slice(1, (images.length == 7 ? 7 : 6)).map((image, index) => (
                        <Grid.Col key={index} span={2} >
                            <Image
                                radius={'md'}
                                src={image.img}
                                alt={image.alt}
                            />
                        </Grid.Col>
                    ))}
                    <Grid.Col span={2} >
                        {images.length - 6 > 1 &&
                            <Badge size="xl" circle>
                                +{images.length - 6}
                            </Badge>
                        }
                    </Grid.Col>
                </Grid >
            </Card.Section>
        </Card>
    )
}

export default Photos