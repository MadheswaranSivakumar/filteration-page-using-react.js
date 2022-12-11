//import React from "react";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';


function App2(){

    const [category, setCategory] = useState([]);
    const [filteredData,setFilteredData] = useState(category);

    const headers = [
        { key: 1, label: 'Name'},
        { key: 3, label: 'Team'},
  ];

    useEffect(() => {
        const getcategory = async () => {
        const res = await fetch('http://localhost/server/php/sever.php');
        const reference = await fetch('http://localhost/server/php/DBconnect.php')
        const getdata = await res.json();
        const getdata1 = await reference.json();
        setCategory(getdata);
       
        setFilteredData(getdata);
        };
        getcategory();
    },[]);



    let result = sessionStorage.getItem("abc");
    return (
        <div>
            <Table >
                        <thead >
                            <tr >
                                {
                                    headers.map((h) =>{
                                        return (
                                            <th key={h.key}>{h.label}</th>   
                                        )   
                                    })
                                }
                            </tr>
                        </thead>
                        {/* To get table body value  */}
                        <tbody >   
                            {
                                category.map((getcate,index) => (
                                    <tr key={index}>
                                    <td>{getcate.Name}</td>
                                    {/* <td> {getcate.Ref_Id}</td> */}
                                    <td>{getcate.Team}</td>
                                    </tr>
                                ))
                                }
                                
                        </tbody>
                        {/* <button>DOWNLOAD</button> */}
                    </Table>
        </div>
    );
}


export default App2;