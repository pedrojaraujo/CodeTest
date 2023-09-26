import {
  Card,
  CardContent,
  Text,
  Spacer,
  Flex,
  Row,
  Link,
  Block,
} from "vcc-ui";
import { Car } from "../types/car.interface";
import Image from "next/image";
import styles from "../../public/css/CardCar.module.css";

interface CardProps {
  car: Car;
}

export const CardCar = ({ car }: CardProps) => {
  return (
    <Flex>
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
        <Flex extend={{ flexDirection: "row", alignSelf: "center" }}>
          <Link href="https://www.volvocars.com/" arrow="right">
            LEARN
          </Link>
          <Spacer size={{ default: 4, "@media (max-width: 768px)": 3 }} />
          <Link href="https://www.volvocars.com/" arrow="right">
            SHOP
          </Link>
        </Flex>
      </div>
    </Flex>
  );
};
