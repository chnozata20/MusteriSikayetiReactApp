import React, { useState } from 'react'
import Layout from '../layout/Layout'
import "../styles/Main.css"
import DragandDrop from '../components/DragandDrop'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Upload from '../components/Upload'

export default function Main() {
  const [dataFromExcel, setDataFromExcel] = useState([])

  return (
    <Layout >
      <DndProvider backend={HTML5Backend}>
      <div className='main-parent'>
      <Upload setDataFromExcel = {setDataFromExcel}/>
      <DragandDrop dataFromExcel={dataFromExcel} />
      </div>
      </DndProvider>
    </Layout>

  )
}
