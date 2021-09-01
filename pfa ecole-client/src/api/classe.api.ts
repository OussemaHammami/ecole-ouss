import { ClasseDTO } from "./dto/classe.dto";
//import { UpdateClasseDTO } from "./dto/updateClasse.dto";

export class ClasseAPI {
    public static async getAll(): Promise<ClasseDTO[]>{
        const resp = await fetch ("http://localhost:5000/classes", {method: "GET"})
        const data = await resp.json();
        console.log("classe list: ", JSON.stringify(data));
        return data;
    }

    public static async add(classeRequest:ClasseDTO) {
        const resp = await fetch ("http://localhost:5000/classes", 
        {method: "POST", 
        body: JSON.stringify(classeRequest),
        headers: {
            'Content-Type' : 'application/json'
        }
        })
        const data = await resp.json();
        console.log("classe list: ", JSON.stringify(data));
        return data;
    }


    public static async deleteOne(classeId:number) {
        await fetch (`http://localhost:5000/classes/${classeId}`, 
        {method: "DELETE"}
    )}

    // public static async updateOne(classeId:number,updateRequest : UpdateClasseDTO) {
    //     const resp = await fetch (`http://localhost:5000/classes/${classeId}`, 
    //     {method: "PATCH", 
    //     body: JSON.stringify(updateRequest),
    //     headers: {
    //         'Content-Type' : 'application/json'
    //     }
    //     })
    //     const data = await resp.json();
    //     // console.log("classe list: ", JSON.stringify(data));
    //     return data;
    // }

}