import { StudentAssignmentDTO } from "./dto/student-assignment.dto";

export class StudentAssignmentAPI {
    public static async getAll(): Promise<StudentAssignmentDTO[]>{
        const resp = await fetch ("http://localhost:5000/studentAssignment", {method: "GET"})
        const data = await resp.json();
        console.log("studentAssignment list: ", JSON.stringify(data));
        return data;
    }

    public static async add(studentAssignmentRequest:StudentAssignmentDTO) {
        const resp = await fetch ("http://localhost:5000/studentAssignment", 
        {method: "POST", 
        body: JSON.stringify(studentAssignmentRequest),
        headers: {
            'Content-Type' : 'application/json'
        }
        })
        const data = await resp.json();
        console.log("studentAssignment list: ", JSON.stringify(data));
        return data;
    }


    public static async deleteOne(studentAssignmentId:number) {
        await fetch (`http://localhost:5000/studentAssignment/${studentAssignmentId}`, 
        {method: "DELETE"}
    )}



}