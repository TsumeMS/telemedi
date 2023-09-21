import axios, {AxiosRequestConfig} from "axios";

export default class Api {
    private config: AxiosRequestConfig = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        }
    };
    private protocol: string = 'http://';
    private host: string = '127.0.0.1';
    private port: string = '3001'
    private taskEndpoint:string = 'tasks/';

    public async getList() {
        return await axios.get(this.getUrl(), this.config)
            .then(result => result.request.response)
            .catch(error => {
                console.error(error);
            });
    }

    public addItem() {
        axios.post(this.getUrl()).then();
    }

    public updateItem(id: number | string) {
        axios.patch(this.getUrl(id))
            .then()
            .catch()
    }

    public deleteItem(id: number | string) {
        axios.delete(this.getUrl(id))
            .then()
            .catch()
    }

    private getUrl(id: number | string = ''): string {
        return this.protocol + this.host + ':' + this.port + '/' + this.taskEndpoint + id;
    }
}
