import React from "react";
import { useCars } from "../hooks/useCars";
import { CardCar } from "./CardCar";
import { Text } from "vcc-ui";

export const HelloWorld: React.FC = () => {
  const { cars } = useCars();

  return (
    <div>
      <Text variant="cook" align>
        Todos modelos recharge
      </Text>
      <div style={{ padding: 20, display: "flex", gap: 25 }}>
        {cars.map((car) => (
          <CardCar key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};
