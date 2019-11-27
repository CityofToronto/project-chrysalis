import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";

class DataTable extends React.Component {
    render() {
      return (
        <MaterialTable
          title=""
          columns={[
            { title: 'Client Id', field: 'clientId' },
            { title: 'First Name', field: 'firstName' },
            { title: 'Last Name', field: 'lastName' },
            {
                title: 'Gender',
                field: 'gender',
                lookup: { 34: 'Male', 63: 'Female', 78: 'Other' },
            },
            {
                title: 'Shelter',
                field: 'shelter',
                lookup: { 10: 'Salvation Army', 20: 'YMCA House', 30: 'Eva\'s Place' },
            }
          ]}
          data={[
            { clientId: '450704', firstName: 'Atul', lastName: 'Baran', shelter: 20, gender: 63 },
            { clientId: '541665', firstName: 'Tom', lastName: 'Thomas', shelter: 20, gender: 34 },
            { clientId: '782572', firstName: 'John', lastName: 'King', shelter: 30, gender: 78 },
            { clientId: '425833', firstName: 'Kylie', lastName: 'Lemon', shelter: 10, gender: 34 },
            { clientId: '836363', firstName: 'Queen', lastName: 'Pretti', shelter: 20, gender: 63 },
            { clientId: '736388', firstName: 'Gloria', lastName: 'Adams', shelter: 30, gender: 34 },
            { clientId: '536365', firstName: 'Lucy', lastName: 'Veon', shelter: 30, gender: 78 },
            { clientId: '548365', firstName: 'Marina', lastName: 'Castle', shelter: 10, gender: 34 },
            { clientId: '362488', firstName: 'Louisa', lastName: 'Shay', shelter: 10, gender: 63 },
            { clientId: '833379', firstName: 'Fred', lastName: 'Sujitt', shelter: 20, gender: 34 },
            { clientId: '969622', firstName: 'Adam', lastName: 'Smith', shelter: 20, gender: 63 },
            { clientId: '238222', firstName: 'Mike', lastName: 'Chen', shelter: 20, gender: 34 },
            { clientId: '721521', firstName: 'Debbie', lastName: 'Chen', shelter: 30, gender: 78 },
            { clientId: '228345', firstName: 'Rose', lastName: 'Ali', shelter: 20, gender: 34 },
            { clientId: '541692', firstName: 'Ken', lastName: 'Jones', shelter: 10, gender: 63 },
            { clientId: '369972', firstName: 'Claudio', lastName: 'Lu', shelter: 20, gender: 78 },
          ]}        
          actions={[
            {
              icon: 'add',
              tooltip: 'Add Client',
              isFreeAction: true,
              onClick: (event) => alert("You want to add a new client")
            },
            {
                icon: 'assessment',
                tooltip: 'Open Assessment',
                onClick: (event, rowData) => alert("You want to open the Assessment for " + rowData.firstName + " " + rowData.lastName)
            }
          ]}
          onRowClick={((evt, selectedRow) => this.setState({ selectedRow }))}
          options={{
            rowStyle: rowData => ({
              backgroundColor: (this.state.selectedRow && this.state.selectedRow.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF'
            })
          }}
    
          options={{
            actionsColumnIndex: -1,
            pageSize: 10,
            pageSizeOptions: [10, 20, 25],
            paginationType: "stepped",
            headerStyle: {
                backgroundColor: '#f1f8ff'
            }
          }}
  
        />
      )
    }
  }
  
  export default DataTable;