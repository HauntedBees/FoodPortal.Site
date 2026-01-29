interface BaseBeeMessage { success: boolean }
interface BeeError extends BaseBeeMessage { message: string }
interface BeeMessage<T> extends BaseBeeMessage { result: T }

type Message<T> = { success: true, result: T };
type Error = { success: false, message: string };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

class Beeliever {
    path: string;
    sharedRequests: Record<string, Promise<any>> = {};
    constructor(path:string) {
		this.path = path;
	}
    async get<T>(path:string, param:unknown = null): Promise<T> {
        const paramStr = "/" + (param ? encodeURIComponent(JSON.stringify(param)) : "");
        const res = await fetch(this.path + path + paramStr, { method: "GET" });
        const response: Message<T> | Error = await res.json();
        if(!response.success) {
			throw new Error(response.message);
		}
        //await sleep(2000);
        return response.result;
    }
    async getShared<T>(path:string): Promise<T> {
        if(this.sharedRequests[path] !== undefined) {
            return this.sharedRequests[path];
        }
        const shared = this.get(path);
        this.sharedRequests[path] = shared;
        return shared as Promise<T>;
    }
}
export const bee = new Beeliever("https://www.hauntedbees.com/API/Foodportal/");