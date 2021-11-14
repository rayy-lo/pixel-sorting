import { Canvas } from "../components/Canvas";
import kittenImg from "../assets/kitten.png";
import styles from "../styles/modules/CanvasContainer.module.css";

/**
 * Generate an image element for Canvas component to render
 *
 * @param src - String source of image
 *
 * @returns HTMLImageElement
 */

const createImageElementForCanvas = (src: string) => {
  const image = new Image();
  image.src = src;

  return image;
};

export const CanvasContainer = () => {
  const { container } = styles;

  const canvasImage = createImageElementForCanvas(kittenImg);

  return (
    <div className={container}>
      <Canvas image={canvasImage} />
    </div>
  );
};
