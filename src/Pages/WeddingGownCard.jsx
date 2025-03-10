import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import shopping from "../assets/images/shopping.webp";
import shopping1 from "../assets/images/shopping (1).webp";
import shopping2 from "../assets/images/shopping (2).webp";
import shopping3 from "../assets/images/shopping (3).webp";
import jordi from "../assets/images/jordi.jpeg";
import jordi2 from "../assets/images/jordi2.jpeg";
import jordi3 from "../assets/images/jordi3.jpg";
import jordi4 from "../assets/images/jordi4.jpeg";
import jordi5 from "../assets/images/jordi5.jpeg";
import jordi6 from "../assets/images/jordi6.jpeg";

const weddingGowns = [
  {
    id: 1,
    name: "Celestial Charm",
    price: "$1200",
    description:
      "An ethereal gown with delicate lace detailing and a flowing train.",
    image: shopping,
  },
  {
    id: 2,
    name: "Golden Grace",
    price: "$1500",
    description:
      "A luxurious satin gown with golden accents, perfect for a regal bride.",
    image: shopping1,
  },
  {
    id: 3,
    name: "Pearl Elegance",
    price: "$1100",
    description:
      "Simple yet stunning, with pearl embellishments and a classic silhouette.",
    image: shopping2,
  },
  {
    id: 4,
    name: "Timeless Beauty",
    price: "$1300",
    description: "A vintage-inspired gown with intricate embroidery.",
    image: shopping3,
  },
  {
    id: 5,
    name: "Blossom Bliss",
    price: "$1400",
    description: "A romantic floral gown with soft tulle layers.",
    image: jordi,
  },
  {
    id: 6,
    name: "Radiant Rose",
    price: "$1250",
    description:
      "A rose-themed gown for the bride who loves a touch of nature.",
    image: jordi2,
  },
  {
    id: 7,
    name: "Ivory Dream",
    price: "$1600",
    description: "A dreamy ivory gown with sparkling accents.",
    image: jordi3,
  },
  {
    id: 8,
    name: "Crystal Glow",
    price: "$1700",
    description: "A crystal-embellished gown for the bride who wants to shine.",
    image: jordi4,
  },
  {
    id: 9,
    name: "Silken Serenity",
    price: "$1350",
    description: "A silk gown with smooth lines and a serene feel.",
    image: jordi5,
  },
  {
    id: 10,
    name: "Moonlit Majesty",
    price: "$1800",
    description: "A majestic gown designed for evening weddings.",
    image: jordi6,
  },
];

export default function WeddingGownCards() {
  const [displayedGowns, setDisplayedGowns] = useState([]);

  useEffect(() => {
    const shuffled = weddingGowns.sort(() => 0.5 - Math.random());
    setDisplayedGowns(shuffled.slice(0, 3));
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom color="red">
        Few Gowns In The Store
      </Typography>

      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {displayedGowns.map((gown) => (
          <Grid item key={gown.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={gown.image}
                alt={gown.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {gown.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {gown.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  {gown.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
