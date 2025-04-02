import { redirect } from "next/navigation";

const API_URL = "coloque a api aqui";

export async function getReservations() {
    const response = await fetch(API_URL);
    return await response.json();
}


//Utilizar no formulario
export async function createReservation(initialState: any, formData: FormData) {
    const qntStr = formData.get("qnt") as string || "0";
    const qnt = parseInt(qntStr, 10);
    
    const data = {
        //Coloque as suas variaveis aqui
        name: formData.get("name"),
        date: formData.get("date"),
        time: formData.get("time"),
        qnt: qnt
    };
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    console.log("Sending data:", data);  // Verificando o que está sendo enviado
    const response = await fetch(API_URL, options);
    
    if (!response.ok) {
        const errors = await response.json();
        console.log("Errors received:", errors);  // Logando os erros recebidos da API
        return {
            //Coloque as variaveis de voces aqui
            values: {
                name: formData.get("name"),
                date: formData.get("date"),
                time: formData.get("time"),
                qnt: formData.get("qnt")
            },
            errors: {
                name: errors.find(e => e.field === "name")?.message,
                date: errors.find(e => e.field === "date")?.message,
                time: errors.find(e => e.field === "time")?.message,
                qnt: errors.find(e => e.field === "qnt")?.message
            }
        };
    }
    
    redirect("/Reservation");
}