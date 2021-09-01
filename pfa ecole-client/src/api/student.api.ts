import { StudentDTO } from "./dto/student.dto";
// import { UpdateStudentDTO } from "./dto/updateStudent.dto";

export class StudentAPI {
    public static async getAll(): Promise<StudentDTO[]>{
        const resp = await fetch ("http://localhost:5000/student", {method: "GET"})
        const data = await resp.json();
    
        return data;
    }

    public static async getAllByClasse(classeId:number): Promise<StudentDTO[]>{
        const resp = await fetch (`http://localhost:5000/student/classe/${classeId}`, {method: "GET"})
        const data = await resp.json();
    
        return data;
    }


}