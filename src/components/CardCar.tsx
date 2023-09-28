import { Text, Spacer, Flex, Link } from "vcc-ui";
import { Car } from "../types/car.interface";
import Image from "next/image";
import styles from "../../public/css/CardCar.module.css";

interface CardProps {
  car: Car;
}

export const CardCar = ({ car }: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.CardCarStyle}>
        <Text variant="bates" subStyle="emphasis">
          {car?.bodyType}
        </Text>
        <Flex extend={{ flexDirection: "row" }}>
          <Text variant="amundsen"> {car?.modelName} </Text>
          <Spacer />
          <Text variant="columbus" subStyle="inline-link">
            plug-in-hybrid
          </Text>
        </Flex>
        <Spacer />
        <Image
          src={car?.imageUrl}
          alt="imagem de um carro da marca volvo"
          width={340}
          height={255}
        />

        <Spacer />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="https://www.volvocars.com/" arrow="right">
            LEARN
          </Link>
          <Spacer size={{ default: 4, "@media (max-width: 768px)": 3 }} />
          <Link href="https://www.volvocars.com/" arrow="right">
            SHOP
          </Link>
        </div>
      </div>
    </div>
  );
};
