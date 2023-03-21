export default class Requests {
    url ;

    constructor() {
        this.url = "https://gosat-credit-api-production.up.railway.app/api/"
    }

    async getOpportunities(cpf){
        return await fetch(`${this.url}opportunities/${cpf}`)
        .then(response => response.json())
        .then(data => {
            return data
        })
    }
}
