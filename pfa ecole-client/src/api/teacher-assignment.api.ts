import { TeacherAssignmentDTO } from "../api/dto/teacherAssignment.dto";
import { UpdateTeacherAssignmentDTO } from "../api/dto/updateTeacherAssignment.dto";

export class TeacherAssignmentAPI {
    public static async getAll(): Promise<TeacherAssignmentDTO[]>{
        const resp = await fetch ("http://localhost:5000/teacherAssignment", {method: "GET"})
        const data = await resp.json();
        console.log("teacherAssignment list: ", JSON.stringify(data));
        return data;
    }

    public static async add(teacherAssignmentRequest:TeacherAssignmentDTO) {
        const resp = await fetch ("http://localhost:5000/teacherAssignment", 
        {method: "POST", 
        body: JSON.stringify(teacherAssignmentRequest),
        headers: {
            'Content-Type' : 'application/json'
        }
        })
        const data = await resp.json();
        console.log("teacherAssignment list: ", JSON.stringify(data));
        return data;
    }


    public static async deleteOne(teacherAssignmentId:number) {
        await fetch (`http://localhost:5000/teacherAssignments/${teacherAssignmentId}`, 
        {method: "DELETE"}
    )}

    public static async updateOne(teacherAssignmentId:number,updateRequest : UpdateTeacherAssignmentDTO) {
        const resp = await fetch (`http://localhost:5000/teacherAssignment/${teacherAssignmentId}`, 
        {method: "PATCH", 
        body: JSON.stringify(updateRequest),
        headers: {
            'Content-Type' : 'application/json'
        }
        })
        const data = await resp.json();
        // console.log("teacherAssignment list: ", JSON.stringify(data));
        return data;
    }

}