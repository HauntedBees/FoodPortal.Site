import { Loadable } from "src/util/Loadable";
interface BaseBeeMessage { success:boolean }
interface BeeError extends BaseBeeMessage { message:string }
interface BeeMessage<T> extends BaseBeeMessage { result:T }
class Beeliever {
    path:string;
    constructor(path:string) { this.path = path; }
    async get<T>(caller:Loadable|null, path:string, param:unknown = null): Promise<T> {
        if(caller !== null) { caller.loading = true; }
        const paramStr = "/" + (param ? encodeURIComponent(JSON.stringify(param)) : "");
        const res = await fetch(this.path + path + paramStr, { method: "GET" });
        const response:BaseBeeMessage = await res.json();
        if(caller !== null) { caller.loading = false; }
        if(!response.success) { throw new Error((response as BeeError).message); }
        return (response as BeeMessage<T>).result;
    }
}
export const bee = new Beeliever(process.env.VUE_APP_API_PATH);