import React from 'react';
import SchemaView from '../../components/view/schemaView';
import CodeView from '../../components/view/codeView';
import { Container } from '@material-ui/core';
import TableForm from '../view/tableForm';

function MainView({ view, tables, setTables, setPopUp }) {
  return (
    <div style={{ gridArea: "main" }}>
      {view === 'code' && <CodeView tables={tables} />}
      {view === 'schema' && <SchemaView 
        tables={tables} 
        setTables={setTables} 
        setPopUp={setPopUp} 
        view={view} 
      />}
      {view === 'table' && <TableForm />}
    </div>
  )
}

export default MainView;