import React from 'react'
import { useState } from 'react';

function GraphNode({ id, isStartNode, x, y }) {
    const [distance, setDistance] = useState(isStartNode ? 0 : Infinity); 
    const [previousNode, setPreviousNode] = useState(null); 
  return (
    <div
    className={`absolute top-[${y}px] left-[${x}px]  w-6 h-6 border-2 border-black ${isStartNode ? 'bg-green-200' : 'bg-white'} m-5`} 
  >
    {distance === Infinity ? '∞' : distance}
  </div>
  )
}

export default GraphNode