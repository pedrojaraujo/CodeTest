import React from "react";
import { Block, Text } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CardCar } from "./CardCar";

export const HelloWorld: React.FC = () => {
  const { cars } = useCars();

  return (
    <Block extend={{ padding: 20, display: "flex", gap: 25 }}>
      {cars.map((car) => (
        <CardCar key={car.id} car={car} />
      ))}
    </Block>
  );
};
