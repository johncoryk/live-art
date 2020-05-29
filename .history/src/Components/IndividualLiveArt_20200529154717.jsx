import React, { useRef, useState, useEffect } from 'react';

const IndividualLiveArt = () => {
  /*need to use ref as canvas behaves differently in the dom. most dom elements have a value property that you can update directly whereas canvas has a context, which allows us to draw things.  */
  const canvasRef = useRef(null);

  // const [locations, setLocations] = useState(
  //   JSON.parse(localStorage.getItem('draw-app')) || []
  // );

  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState('pink');
  const [cleared, setCleared] = useState(false);
  const [currentAxis, setCurrentAxis] = useState({ currentX: 0, currentY: 0 });
  const [canvas, setCanvas] = useState(canvasRef.current);
  const [ctx, setCtx] = useState();

  useEffect(() => {
    setCtx(canvas.getContext('2d'));
    ctx.clearRect(0, 0, window.innerHeight, window.innerWidth);
    // canvas.addEventListener("onMouseDown", onMouseDown);
    // canvas.addEventListener("onMouseMove", onMouseMove);
    // canvas.addEventListener("onMouseUp")
  }, [canvas, ctx]);

  const onMouseDown = (e) => {
    setCurrentAxis({ currentX: e.clientX, currentY: e.clientY });
    setDrawing(true);
  };

  const onMouseUp = (e) => {
    setDrawing(false);
    setCurrentAxis({ currentX: e.clientX, currentY: e.clientY });
  };

  const onMouseMove = (e) => {
    if (!drawing) {
      return;
    }

    setCurrentAxis({ currentX: e.clientX, currentY: e.clientY });
    draw(
      currentAxis.currentX,
      currentAxis.currentY,
      e.clientX,
      e.clientY,
      color
    );
  };
  // useEffect(() => {
  //   localStorage.setItem('draw-app', JSON.stringify(locations));
  // });

  /*below creates the hook image ... we will want to do something to make it not a hook and just a line/brush stroke. Would be cool if we could change the actual drawing tool and the colour */
  // const HOOK_SVG =
  //   'm129.03125 63.3125c0-34.914062-28.941406-63.3125-64.519531-63.3125-35.574219 0-64.511719 28.398438-64.511719 63.3125 0 29.488281 20.671875 54.246094 48.511719 61.261719v162.898437c0 53.222656 44.222656 96.527344 98.585937 96.527344h10.316406c54.363282 0 98.585938-43.304688 98.585938-96.527344v-95.640625c0-7.070312-4.640625-13.304687-11.414062-15.328125-6.769532-2.015625-14.082032.625-17.960938 6.535156l-42.328125 64.425782c-4.847656 7.390625-2.800781 17.3125 4.582031 22.167968 7.386719 4.832032 17.304688 2.792969 22.160156-4.585937l12.960938-19.71875v42.144531c0 35.582032-29.863281 64.527344-66.585938 64.527344h-10.316406c-36.714844 0-66.585937-28.945312-66.585937-64.527344v-162.898437c27.847656-7.015625 48.519531-31.773438 48.519531-61.261719zm-97.03125 0c0-17.265625 14.585938-31.3125 32.511719-31.3125 17.929687 0 32.511719 14.046875 32.511719 31.3125 0 17.261719-14.582032 31.3125-32.511719 31.3125-17.925781 0-32.511719-14.050781-32.511719-31.3125zm0 0';
  // const HOOK_PATH = new Path2D(HOOK_SVG);
  // const SCALE = 0.3;
  // const OFFSET = 80;
  // function draw(ctx, location) {
  //   ctx.fillStyle = 'deepskyblue';
  //   ctx.shadowColor = 'dodgerblue';
  //   ctx.shadowBlur = 20;
  //   ctx.save();
  //   ctx.scale(SCALE, SCALE);
  //   ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  //   ctx.fill(HOOK_PATH);
  //   ctx.restore();
  // }

  function draw(x0, y0, x1, y1, color) {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
  }

  // function handleCanvasClick(e) {
  //   const newLocation = { x: e.clientX, y: e.clientY };
  //   setLocations([...locations, newLocation]);
  // }

  // function handleClear() {
  //   setLocations([]);
  // }

  // function handleUndo() {
  //   setLocations(locations.slice(0, -1));
  // }

  return (
    <div>
      {/* <button onClick={handleClear}>Clear</button>
      <button onClick={handleUndo}>Undo</button> */}
      <canvas
        className="canvas"
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        //onClick={handleCanvasClick}
      />
    </div>
  );
};

export default IndividualLiveArt;
