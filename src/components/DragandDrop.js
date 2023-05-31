import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import "./DragandDrop.css";
import Column from "./Column";

const DragandDrop = (props) => {
  useEffect(() => {
    if (props.dataFromExcel.length > 0) {
      let arr = [];
      const objectToArr = Object.entries(props.dataFromExcel[0]);
      objectToArr.map((item) => arr.push({ name: item[0]}));
      setColumns(arr);
      console.log(Object.entries(props.dataFromExcel))
    }
  }, [props.dataFromExcel]);

  console.log("props.dataFromExcel" , props.dataFromExcel[1])

  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };



   

  const [columns, setColumns] = useState([]);

  const [files, setFiles] = useState([]);

  const [{ isOver }, addTofilesRef] = useDrop({
    accept: "column",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  // console.log(isOver);
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
      <div className="headersss">
        <span className="columnsBg1">COLUMN 1</span>
        <span className="columnsBg2">COLUMN 2</span>
        <span className="columnsBg3">DETAILS</span>
      </div>
      <div className="Boards">
        <div className="Board1" ref={removeFromfilesRef}>
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
        <div className="Board2" ref={addTofilesRef}>
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
        ref={removeFromfilesRef}>
          <div className="mini"  > 
          {files.map((p, i) => (
          <button className="detailContainer"
           onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} >
            {/* <span className="detailText">{showDetails &&  'View Details' }</span> */}
              <div className="fileStyle">
                <Column
                  item={p}
                  key={i}
                  index={i}
                  playerType="files"
                   onDropPlayer={removeColumnFromfiles}
                />
                {/* {showDetails && <p>Bu buton üzerine gelince görüntülenen detaydır.</p>} */}
                <span className="detailText">{showDetails &&   "View Details"}</span>
              </div>
          </button>
            ))}

            
          </div>
        </div>
      </div>
    </>
  );
};

export default DragandDrop;
