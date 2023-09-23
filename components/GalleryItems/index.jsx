import React, { useEffect, useRef, useState } from 'react'
import { points } from "../../data";
const GalleryItems = ({ src, index, columnOffset }) => {
  const values = points[index];
  if (!values) return null;
  const [row, column, spanRow, spanColumn] = values;
  return (
    <div
    className="gallery-item"    
    style={{
      gridArea: `${row} / ${column + 
        columnOffset} / span ${spanRow} / span ${spanColumn}`,
    }}
  >
    <div className="gallery-item-image">
      <div
        className="gallery__item-imginner"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
    </div>
  </div>
  )
}

export default GalleryItems