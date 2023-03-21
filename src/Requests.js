export default class Requests {

    async getOpportunities(cpf){
        return await fetch(`http://127.0.0.1:8000/api/opportunities/${cpf}`)
        .then(response => response.json())
        .then(data => {
            return data
        })
    }
}
