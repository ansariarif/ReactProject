

export const showStudents=()=>{
    return{
        type:'SHOWSTUDENTS'
    }
}

export const deleteStudent=(stdId)=>{
    return{
        type:'DELETESTUDENTS',
        payload:stdId
    }
}

export const addStudent = (student)=>{
    return{
        type: 'ADDSTUDENT',
        payload: student
    }
}