export default class Requests {
    url ;
    constructor() {
        // this.url = "https://gosat-credit-api-production.up.railway.app/api/"
        this.url = "http://127.0.0.1:8000/api/"
    }

    async getOpportunities(cpf){
        return await fetch(`${this.url}opportunities/${cpf}`)
        .then(response => response.json())
        .then(data => {
            return data
        })
    }
    async getOffers(cpf, instituicao_id, codModalidade ){
        return await fetch(`${this.url}offer/${cpf}/${instituicao_id}/${codModalidade}`)
        .then(response => response.json())
        .then(data => {
            return data
        })
    }

    async hireLoan(data){
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return await fetch(`${this.url}hire`, options)
        .then(response => response.json())
        .then(data => {
          return data
        })
    }
}
