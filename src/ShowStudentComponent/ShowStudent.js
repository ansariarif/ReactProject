import {useEffect ,  useState} from "react";
import { StudentImpl } from "../StudentData/StudentImpl";

function TableBody(){
    let studImpl=new StudentImpl();
    let [studAr, setArray] = useState([]);
    useEffect(() => {
        setArray(studImpl.getAllStudent());
    },[studAr]);

    return(
        <>
            {
                studAr.map((student) => {
                    return(
                        <tr key={student.studId}>
                            <td>{student.studId}</td>
                            <td>{student.studName}</td>
                            <td>{student.studDept}</td>
                            <td>{student.studYear}</td>
                        </tr>
                    );
                })
            }
        </>
    );
}

function ShowStudent(){
    return(
        <div>
            <table>
                <tbody>
                    <TableBody></TableBody>
                </tbody>
            </table>
        </div>
    ); 
}

export default ShowStudent;