import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { showStudents } from "../actions/StudAction";


import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function SearchStudent(props){
   



  //  let dispatch = useDispatch();
    let navigate = useNavigate();

    let [stuArr,setStudentArr] = useState([])
    let studentArr = useSelector((reducer) => reducer.StudReducer)
    let searchText = props.searchText.toLowerCase();
   
    useEffect(() => {
     //   dispatch(showStudents());
        setStudentArr(studentArr);
    },[])

    return (
        <>
            {
                stuArr.map((student,index)=>(student.studId.toString().includes(searchText)) &&
                        <tr key={index}>
                            <td>{student.studId}</td>
                            <td>{student.studName}</td>
                            <td>{student.studDepartment}</td>
                            <td>{student.studYear}</td>
                            <td><NavLink to={`/students/delete/${student.studId}`}><DeleteForeverIcon></DeleteForeverIcon></NavLink></td>
                            <td><NavLink to={`/students/update/${student.studId}`}>update</NavLink></td>

                        </tr>

                       

                )      
                
           }
        </>
    )
}