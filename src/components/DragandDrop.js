import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import Draggable from 'react-draggable';
import "./DragandDrop.css";
import Column from "./Column";

const DragandDrop = (props) => {

  useEffect(()=>{
    if(props.dataFromExcel.length > 0){
      let arr = [];
      const objectToArr = Object.entries(props.dataFromExcel[0]);
      objectToArr.map((item) => 
          (arr.push({name : item[0]}))
      )
      setColumns(arr)
    }
  }, [props.dataFromExcel])

  const [columns, setColumns] = useState([
    // { name: "File 1" },
    // { name: "File 2" },
    // { name: "File 3" },
    // { name: "File 4" },
    // { name: "File 5" },
    // { name: "File 6" },
    // { name: "File 7" },
  ]);

  const [files, setFiles] = useState([]);

  const [{ isOver }, addTofilesRef] = useDrop({
    accept: "column",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  console.log(isOver);
  const [{ isOver: isColumnOver }, removeFromfilesRef] = useDrop({
    accept: "files",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const moveColumnTofiles = (item) => {
    console.log(item);
    setColumns((prev) => prev.filter((_, i) => item.index !== i));
    setFiles((prev) => [...prev, item]);
  };

  const removeColumnFromfiles = (item) => {
    setFiles((prev) => prev.filter((_, i) => item.index !== i));
    setColumns((prev) => [...prev, item]);
  };
  
  return (
    <>

      <div className="Boards">

        <div className="Board1"
        ref={removeFromfilesRef}
        > <span className="columnsBg">COLUMN 1</span>

        {columns.map((p, i) => (
         <div className="fileStyle">
          <Column
          item={p}
          key={i}
          playerType="column"
          onDropPlayer={moveColumnTofiles}
          index={i}
          />
          </div>
          ))}

        </div>
        <div className="Board2"
        ref={addTofilesRef}
        ><span className="columnsBg">COLUMN 2</span>
           {files.map((p, i) => (
        <div className="fileStyle">
              <Column
                item={p}
                key={i}
                index={i}
                playerType="files"
                onDropPlayer={removeColumnFromfiles}
              />
            </div>
            ))}
        </div>
        <div className="Board3"
        ref={removeFromfilesRef}
        >
          <span className="columnsBg">DETAILS</span><div className="mini">

        
        {files.map((p, i) => (
           <div className="fileStyle">
              <Column
                item={p}
                key={i}
                index={i}
                playerType="files"
                onDropPlayer={removeColumnFromfiles}
              />
              
               </div>
               
            ))}
          
            </div>
        </div>
      </div>
    </>
  );
};

export default DragandDrop;