import React from 'react'
import { useDrag } from "react-dnd";

const Column = ({ item, playerType, onDropPlayer, index }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: playerType,
    item: () => ({ ...item, index }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div className='columnContainer'
    ref={dragRef}
    >
       {item.name}
    </div>
  )
}

export default Column