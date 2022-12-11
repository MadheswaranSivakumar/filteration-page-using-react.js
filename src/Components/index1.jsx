import React from "react";

function App3 (){
    let a = JSON.parse(window.localStorage.getItem('abc'));
    console.log(a);
    return(
        <h1>hi</h1>
    //     <tbody >   
    //     {
    //         a.map((getcate,index) => (
    //             <tr key={index}>
    //             <td>{getcate.Name}</td>
    //             {/* <td> {getcate.Ref_Id}</td> */}
    //             <td>{getcate.Team}</td>
    //             </tr>
    //         ))
    //         }
    // </tbody>
    );
}

export default App3;