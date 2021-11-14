import { Canvas } from "../components/Canvas";
import image from "../assets/kitten.png";
import styles from "../styles/modules/CanvasContainer.module.css";

const { container } = styles;

export const CanvasContainer = () => {
  return (
    <div className={container}>
      <Canvas src={image} />
    </div>
  );
};
