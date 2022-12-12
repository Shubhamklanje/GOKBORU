import React from 'react';
import Table from 'react-bootstrap/Table';

function Schedule() {
  const data = [
    { id: 1, week: "week 1",time:"6 pm",link:"https://www.youtube.com" },
    { id: 2, week: "week 2",time:"6 pm",link:"https://www.youtube.com" },
    { id: 3, week: "week 3",time:"6 pm",link:"https://www.youtube.com" },
    { id: 4, week: "week 4",time:"6 pm",link:"https://www.youtube.com" },
    { id: 5, week: "week 5",time:"6 pm",link:"https://www.youtube.com" },
    { id: 6, week: "week 6",time:"6 pm",link:"https://www.youtube.com" },
    { id: 7, week: "week 7",time:"6 pm",link:"https://www.youtube.com" },
    { id: 8, week: "week 8",time:"6 pm",link:"https://www.youtube.com" },
    { id: 8, week: "week 9",time:"6 pm",link:"https://www.youtube.com" },
    { id: 10, week: "week 10",time:"6 pm",link:"https://www.youtube.com" },
    { id: 11, week: "week 11",time:"6 pm",link:"https://www.youtube.com" },
    { id: 12, week: "week 12",time:"6 pm",link:"https://www.youtube.com" },
  ];
  return (
    <div>
    <div className="sab">
      <br/><br/>
    <h1 style={{textAlign: 'center',color:'white'}}> Schedule of Courses </h1>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th> </th>
          <th>Week</th>
          <th>Class Timing</th>
          <th>Meeting Link</th>
        </tr>
      </thead>
      <tbody>
      {data.map((tt) => (
        <tr>
          <td>{tt.id}</td>
          <td>{tt.week}</td>
          <td>{tt.time}</td>
          <td><a href={tt.link} style={{textDecoration:'none', color : 'inherit'}}> Click here for link</a></td>
        </tr>
      ))}
      </tbody>
    </Table>
    </div>
    </div>
  );
}

export default Schedule;