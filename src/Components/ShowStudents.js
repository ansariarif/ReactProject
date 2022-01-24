import { useEffect, useState } from "react";
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {  useParams } from 'react-router-dom';

import "./ShowStudent.css";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Delete from "@material-ui/icons/Delete";
import  SearchStudent  from "./SearchStudent";

import { Button } from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from "@mui/material";


function TableBody(){
    let studAr=useSelector((store)=>store.StudReducer);

   

    return(
        <>
            {
                studAr.map((student)=>{
                    return(
                        <>
                       
                        <tr key={student.studId}>
                            <td>{student.studId}</td>
                            <td>{student.studName}</td>
                            <td>{student.studDepartment}</td>
                            <td>{student.studYear}</td>
                            <td><NavLink to={`/students/delete/${student.studId}`}><DeleteForeverIcon></DeleteForeverIcon></NavLink></td>
                            <td><NavLink to={`/students/update/${student.studId}`}><EditIcon></EditIcon></NavLink></td>

                        </tr>

                       

                        </>
                    );
                })
            }
        </>
    );

}


function ShowStudents(){


    const [searchText, setSearchText] = useState("");
    const [searching, setSearchingState] = useState(false);
    let searchSubmit = (e) =>{
        e.preventDefault();
        console.log(searchText);
        setSearchingState(true);
    }

    function OnBlurSearch(){
        setSearchingState(false);
    }

    return(
        <>

{/* 
        <form onSubmit={searchSubmit} method="post" >
   
           <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} onBlur={OnBlurSearch} className="SearchBar"/> 
           <button  type='submit'> Search </button>
       </form> */}

{/* <h1>Students detail</h1> */}
<Typography variant="h2" align="center"> Students detail</Typography>
        <div className="ShowStudent">


            <table className="TableName">
                <tbody>
                   <tr>
                       <th>ID</th><th>Name</th><th>Department</th><th>Year</th><th>Delete</th><th>Update</th>
                   </tr>
                     <TableBody></TableBody>
                     {/* {
                         searching?<SearchStudent searchText={searchText} />: 
                     } */}
                </tbody>
            </table>
                 {/* <br></br>
                {
                     searching && 
                    <table className="TableName">
                       <tbody>
                            <tr>
                                <th>ID</th><th>Name</th><th>Department</th><th>Year</th><th>Delete</th><th>Update</th>
                            </tr>
                                    
                                <SearchStudent searchText={searchText} />
                        
                        </tbody>
                    </table>

                } */}
                 <br></br>
                <form onSubmit={searchSubmit} method="post" >
                       <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} onBlur={OnBlurSearch}  className="SearchBar"/> 
                       {/* <button  type='submit' className="Button"> Search </button> */}
                       <Button type='submit' size="small" variant="contained" color="success"> Search</Button>
               </form>


               <br></br>


               <br></br>
                {
                     searching && 
                    <table className="TableName">
                       <tbody>
                            <tr>
                                <th>ID</th><th>Name</th><th>Department</th><th>Year</th><th>Delete</th><th>Update</th>
                            </tr>
                                    
                                <SearchStudent searchText={searchText} />
                        
                        </tbody>
                    </table>

                }

              
        </div>

        </>
    ); 
}


export default ShowStudents;