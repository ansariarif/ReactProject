import {Student} from "../StudentData/Student";
import {useState} from 'react';
import { addStudent } from '../actions/StudAction';
import { useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';




import "./AddStudent.css";
import {Button ,TextField, Typography } from "@material-ui/core";

function AddStudent(){
    let [flag,setFlag] = useState(false)
    const [student, setStudent] = useState(new Student());
    const setDetails = (e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    }

    let dispatch = useDispatch();

    const test = (e)=>{
        e.preventDefault();
        dispatch(addStudent(student));
        setFlag(true);
        // return(
        //     <>
        //         <Navigate to="/students/showall"/>
        //     </>
            
        // );
    }

    return(
        <>
         <Typography variant="h2" align="center"> Add new student</Typography>
        {/* <h1 className="headng">Add new student</h1> */}
        <div>
           {!flag ? 
            <form onSubmit={test}>
                <table className="TableNam">
                    <tbody>
                        <tr>
                            <td><label>Enter Id: </label></td>
                            {/* <td><input type="number" name='studId' value={student.studId} onChange={setDetails}/></td> */}
                            <td><TextField id="standard-basic" label="Id" variant="standard" type="number" name='studId' value={student.studId} onChange={setDetails} /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Name: </label></td>
                            {/* <td><input type="text" name='studName' value={student.studName} onChange={setDetails}/></td> */}
                            <td><TextField id="standard-basic" label="Name" variant="standard" type="text" name='studName' value={student.studName} onChange={setDetails} /></td>
                        </tr>
                        <tr>
                            <td><label>Enter Department: </label></td>
                            {/* <td><input type="text" name='studDepartment' value={student.studDepartment} onChange={setDetails}/></td> */}
                            <td><TextField id="standard-basic" label="Department" variant="standard" type="text" name='studDepartment' value={student.studDepartment} onChange={setDetails}/></td>
                        </tr>
                        <tr>
                            <td><label>Enter Year: </label></td>
                            {/* <td><input type="text" name='studYear' value={student.studYear} onChange={setDetails}/></td> */}
                            <td><TextField id="standard-basic" label="Year" variant="standard" type="text" name='studYear' value={student.studYear} onChange={setDetails} /></td>
                        </tr>
                        <tr className="Td">
                            <td><button type='submit' className="button">SUBMIT</button></td>
                           
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </form>:
               <Navigate to={"/students/showall"} />    
            }
         
        </div>

        </>
    );
}

export default AddStudent;