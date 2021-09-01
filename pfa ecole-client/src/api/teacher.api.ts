import { TeacherDTO } from "./dto/teacher.dto";
import { UpdateTeacherDTO } from "./dto/updateTeacher.dto";

export class TeacherAPI {
    public static async getAll(): Promise<TeacherDTO[]>{
        const resp = await fetch ("http://localhost:5000/teachers", {method: "GET"})
        const data = await resp.json();
        console.log("teacher list: ", JSON.stringify(data));
        return data;
    }

    public static async add(teacherRequest:TeacherDTO) {
        const resp = await fetch ("http://localhost:5000/teachers", 
        {method: "POST", 
        body: JSON.stringify(teacherRequest),
        headers: {
            'Content-Type' : 'application/json'
        }
        })
        const data = await resp.json();
        console.log("teacher list: ", JSON.stringify(data));
        return data;
    }


    public static async deleteOne(teacherId:number) {
        await fetch (`http://localhost:5000/teachers/${teacherId}`, 
        {method: "DELETE"}
    )}

    public static async updateOne(teacherId:number,updateRequest : UpdateTeacherDTO) {
        const resp = await fetch (`http://localhost:5000/teachers/${teacherId}`, 
        {method: "PATCH", 
        body: JSON.stringify(updateRequest),
        headers: {
            'Content-Type' : 'application/json'
        }
        })
        const data = await resp.json();
        // console.log("teacher list: ", JSON.stringify(data));
        return data;
    }

}