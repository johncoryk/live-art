import React from 'react';

const BrushStrokeSlider = ({ changeBrushSize }) => {
  return (
    <div class="slidecontainer">
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        class="slider"
        id="myRange"
      />
    </div>
  );
};

export default BrushStrokeSlider;
