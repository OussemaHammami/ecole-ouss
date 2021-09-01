import { AbsenceDTO } from "./dto/absence.dto";

export class AbsenceAPI {
    public static async getAll(): Promise<AbsenceDTO[]>{
        const resp = await fetch ("http://localhost:5000/absences", {method: "GET"})
        const data = await resp.json();
        console.log("absence list: ", JSON.stringify(data));
        return data;
    }

    public static async add(absenceRequest:AbsenceDTO) {
        const resp = await fetch ("http://localhost:5000/absences", 
        {method: "POST", 
        body: JSON.stringify(absenceRequest),
        headers: {
            'Content-Type' : 'application/json'
        }
        })
        const data = await resp.json();
        return data;
    }


    public static async deleteOne(absenceId:number) {
        await fetch (`http://localhost:5000/absences/${absenceId}`, 
        {method: "DELETE"}
    )}

    public static async getAbsenceByDateAndHourAndClasse(date:Date, hourBegin:Date, hourEnd:Date, classeId:number): Promise<AbsenceDTO[]>{
        const resp = await fetch (`http://localhost:5000/absences/${date}/${hourBegin}/${hourEnd}/${classeId}`, {method: "GET"})
        const data = await resp.json();
        console.log("absence list: ", JSON.stringify(data));
        return data;
    }

   

}