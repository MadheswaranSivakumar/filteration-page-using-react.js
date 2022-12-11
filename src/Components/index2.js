import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import {Form,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './Assets/Capture.jpg';
// import result_table from "./result";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import "./style/index.css";

function App1() {
    // For getting and setting value
    const [category, setCategory] = useState([]);
    // For filtering value
    const [filteredData,setFilteredData] = useState(category);
    const [reference,setReference] = useState([]);
    const [elements,setElements] = useState([]);
    // const [table,setTable] = useState([]);
    //const [checked,setChecked] = useState([]);

    let table = [];
    let final_result = [];
    let final_array = [];
    let result = [];
    // setShowcat(category);
    
const headers = [
    { key: 1, label: 'ID'},
    { key: 2, label: 'Name' },
    { key: 3, label: 'Position' },
    { key: 4, label: 'Department' },
    { key: 5, label: 'Mobile Number' }
        // { key: 4, label: 'CIS Controls v8 ID(s)'},
        // { key: 5, label: 'NIST SP800-53 r4 ID(s)'},
        // { key: 6, label: 'PCI-DSS v3.2.1 ID(s)'},
        // { key: 7, label: 'Recommendation'},
        // { key: 8, label: 'Security Principle'},
        // { key: 9, label: 'Azure Guidance'},
        // { key: 10, label: 'Implementation and additional context'},
        // { key: 11, label: 'Customer Security Stakeholders:'},
        // { key: 12, label: 'Azure Policy Mapping'},
        // { key: 13, label: 'Azure Policy GUID'}
        
  ];

  
    
    // Database connectivity
    useEffect(() => {
        const getcategory = async () => {
        const res = await fetch('http://localhost/projects/php/DBconnect.php');
        const reference = await fetch('http://localhost/projects/php/server.php');
        const getdata = await res.json();
        const getdata1 = await reference.json();
        setCategory(getdata);
        setReference(getdata1);
        setFilteredData(getdata);
        };
        getcategory();
    },[]);

    
   
    //Using function to filter the attributes
    const handleSearch = (e) => {  
        const value = e.target.value;
        const checked = e.target.checked;
        

        result = filteredData.filter((data) => {
            return (data.Ref_Id.search(value)!==-1);
        }); 
        
        //  console.log(result);
        // console.log(final_array);

        //var co=0;
        
            for(var i=0;i<result.length;i++){
                    
                final_array.push(result[i]);

           }
        
        
            // console.log(co);
            
        //var b= final_array;
        console.log(final_array);
        if(checked){
            setElements([...elements,final_array]);  
            //console.log(final_array);           
        }else{
            
            //setElements([]);
            var b =[];
            b=elements;
            
            var a=[];
            a = (b.filter((values) => (values != b)));
            console.log(a);
           //var len = a.length;
            var u = [];
            var w = [];
            for (var m=1;m<b.length;m++){
                //for(var h=0;h<elements.length;h++){
                    for(var j=0;j<a[m].length;j++){
                        if(b[m]!==a[j]){
                            u =b.filter((val)=>(val!== b[m]));

                            
                            console.log("hello");
                        }  
                        console.log(u);   
                    //}
                }
            }
            console.log(u.length);

            
           
            setElements(u); 
            console.log(u);   
        } 
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        
        //console.log(elements.length);
       
        for(var i=0;i<elements.length;i++){         
            for(var j=0;j<elements[i].length;j++){               
                final_result.push(elements[i][j]);               
            }       
        }
    
        console.log(final_result);
    
        if(final_result.length!= false){
            setCategory(final_result);
            table = final_result;
        }
        console.log(table);
        

    }
    
    
    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "horizontal"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);

        const headers = [["STAFF ID","STAFF NAME","POSITION","DEPARTMENT","MOBILE NUMBER"]];
    
        const data = category.map(elt=> [elt.ID,elt.A, elt.B, elt.C,elt.D]);
    
        let content = {
          startY: 50,
          title :"SMW COLLEGE OF ENGINEERING",
          head: headers,
          body: data
        };
    
        // doc.title(title);
        
        doc.autoTable(content);
        doc.save("report.pdf")
      }


     
          return (
            <div className="body1">
                {/* checkbox */}
                <nav>
                    <h2 style={{fontFamily: 'Copperplate, Papyrus, fantasy'}}>SMW Institute of Technology</h2>
                    <div className="list">
                    <ul style={{marginRight:50}}>
                        <Link to="/signin "> <li>LOG OUT</li> </ Link>
                        <li className="active">FILTER</li>
                    </ul>
                    </div>
                </nav>
                {/* <Form.Control className="search1" type="text" onChange={ (e) => handleSearch(e)  } placeholder={"Search..."}/> */}
                <Form onSubmit={ (e)=>handleSubmit(e)} className="form1">
                    {
                        reference.map((getref,index)=>(
                            <tr key={index}>
                                <td className="checkbox">
                                    <Form.Label><strong>{getref.Name}</strong></Form.Label> &nbsp;&nbsp;&nbsp;
                                    <Form.Control type="checkbox" id={getref.Id} value={getref.Id} name="C[]" onChange={ (e) => handleSearch(e) }/>
                                </td>
                                
                            </tr>
                            
                        ))
                    }
                    <Form.Control className="submit" type="submit" value="SUBMIT"/>
                    <br/>
                
                </Form>
                <Form> 
                <div className="Result_table" id="table">
                    <Table id="csv">
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
                        <tbody >   
                            {
                                category.map((getcate,index) => (
                                    <tr key={index}>
                                    <td>{getcate.ID}</td>
                                    <td>{getcate.A}</td>
                                    <td>{getcate.B}</td>
                                    <td>{getcate.C}</td>
                                    <td>{getcate.D}</td>
                                    {/* <td>{getcate.D}</td>
                                    <td>{getcate.E}</td>
                                    <td>{getcate.F}</td>
                                    <td>{getcate.G}</td>
                                    <td>{getcate.H}</td>
                                    <td>{getcate.I}</td>
                                    <td>{getcate.J}</td>
                                    <td>{getcate.K}</td>
                                    <td>{getcate.L}</td>
                                    <td>{getcate.M}</td> */}
                                    </tr>
                                ))
                                }
                                
                        </tbody>
                    </Table>
                </div >
                <button style={{marginLeft:570,marginTop:8}} value="Download" onClick={()=>exportPDF()}>DOWNLOAD</button>
                </Form>
            </div>
    )
    
    
}; 

export default App1;
