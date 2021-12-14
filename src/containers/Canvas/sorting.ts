import { Piece } from "../../types";

/**
 * Sort Pieces Array In Place
 *
 * @param {Piece[]} pieces
 *
 */
export const quadraticSort = (
  pieces: Piece[],
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) => {
  // const bitMapRendered = canvas.getContext("bitmaprenderer");
  // const offscreen = canvas.transferControlToOffscreen();
  // const osCtx = offscreen.getContext("2d");

  console.log(pieces);

  // console.log(pieces);
  // Pieces is shuffled but in console it is sorted. sorts then displays in console?
  for (let i = 0; i < pieces.length; i++) {
    for (let j = i + 1; j < pieces.length; j++) {
      if (pieces[j].pieceNum < pieces[i].pieceNum) {
        const canvasWidth = 800;
        const canvasHeight = 800;
        const rows = 16;
        const cols = 16;
        const pieceWidth = canvasWidth! / cols;
        const pieceHeight = canvasHeight! / rows;

        // create the switched pieces copy of canvas
        //
        // const offscreen = new OffscreenCanvas(canvasWidth, canvasHeight);
        // const osCtx = offscreen.getContext("2d");
        // osCtx?.putImageData(pieces[i].imageData!, 0, 0);
        // const bitMap = offscreen.transferToImageBitmap();

        // bitMapRendered?.transferFromImageBitmap(bitMap);

        const temp = pieces[i];

        console.log(canvas);

        createImageBitmap(canvas).then((bitmap) => {
          ctx.drawImage(
            bitmap,
            pieces[j].col * pieceWidth,
            pieces[j].row * pieceHeight,
            pieceWidth,
            pieceHeight,
            pieces[i].col * pieceWidth,
            pieces[i].row * pieceHeight,
            pieceWidth,
            pieceHeight
          );
          pieces[i] = pieces[j];
        });

        // ctx.drawImage(
        //   canvas,
        //   temp.col * pieceWidth,
        //   temp.row * pieceHeight,
        //   pieceWidth,
        //   pieceHeight,
        //   pieces[j].col * pieceWidth,
        //   pieces[j].row * pieceHeight,
        //   pieceWidth,
        //   pieceHeight
        // );

        pieces[j] = temp;

        console.log(pieces[j]);

        return;

        // bitMapRendered?.transferFromImageBitmap(renderPieces(pieces));

        //Two methods to render onto Canvas
        // .putImageData() and drawImage

        // putImageData method
        // Doesn't render on canvas. Not sure why.

        // ctx.putImageData(
        //   pieces[j].imageData!,
        //   pieces[i].col * pieceWidth,
        //   pieces[i].row * pieceHeight,
        //   0,
        //   0,
        //   pieceWidth,
        //   pieceHeight
        // );

        // pieces[i] = pieces[j];

        // ctx.putImageData(
        //   temp.imageData!,
        //   pieces[j].col * pieceWidth,
        //   pieces[j].row * pieceHeight,
        //   0,
        //   0,
        //   pieceWidth,
        //   pieceHeight
        // );
        // pieces[j] = temp;

        //drawImage bitmap Method
        // PROBLEM: Image not placed correctly + displays all at once no slide transitions
        // createImageBitmap(pieces[j].imageData!).then((bitmap) => {
        //   ctx.drawImage(
        //     bitmap,
        //     pieces[i].col * pieceWidth,
        //     pieces[i].row * pieceHeight
        //   );
        //   pieces[i] = pieces[j];
        // });

        // createImageBitmap(temp.imageData!).then((bitmap) => {
        //   ctx.drawImage(bitmap, temp.col * pieceWidth, temp.row * pieceHeight);
        //   pieces[j] = temp;
        // });

        //Pass pieces array into method and draw the images on the canvas?
      }
    }
  }

  function renderPieces(pieces: Piece[]) {
    const canvasWidth = 800;
    const canvasHeight = 800;
    const rows = 16;
    const cols = 16;
    const pieceWidth = canvasWidth! / cols;
    const pieceHeight = canvasHeight! / rows;
    const offscreen = new OffscreenCanvas(800, 800);
    const osCtx = offscreen.getContext("2d");

    for (let i = 0; i < pieces.length; i++) {
      osCtx?.putImageData(
        pieces[i].imageData!,
        pieces[i].col * pieceWidth,
        pieces[i].row * pieceHeight,
        0,
        0,
        pieceWidth,
        pieceHeight
      );
    }

    return offscreen.transferToImageBitmap();
  }
};
