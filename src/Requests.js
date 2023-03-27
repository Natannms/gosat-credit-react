export default class Requests {
    url ;
    constructor() {
        // this.url = "https://gosat-credit-api-production.up.railway.app/api/"
        this.url = "http://localhost:8000/api"

    }
    async login(data){
        try {
            const options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            return await fetch(`${this.url}/login`, options)
            .then(response => response.json())
            .then(data => {
                return data
            })
        } catch (error) {
            console.log(error)
        }
    }
    async register(data){
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        return await fetch(`${this.url}/register`, options)
        .then(response => response.json())
        .then(data => {
            return data
        })
    }
    async getOpportunities(cpf){
        return await fetch(`${this.url}/opportunities/${cpf}`)
        .then(response => response.json())
        .then(data => {
           return data
        })
    }
    async getOffers(cpf, offers , filter){
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cpf,
                offers,
                filterKey: filter && filter
            })
        };
        return await fetch(`${this.url}/offers`, options)
        .then(response => response.json())
        .then(data => {
            return data
        })
    }

    async createContract(data){
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return await fetch(`${this.url}/contract`, options)
        .then(response => response.json())
        .then(data => {
          return data
        })
    }

    async getContract(token){
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
        };

        return await fetch(`${this.url}/contract/${token}`, options)
        .then(response => response.json())
        .then(data => {
          return data
        })
    }
}
