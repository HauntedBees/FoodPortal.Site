type Message<T> = { success: true, result: T };
type Error = { success: false, message: string };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

class Beeliever {
    path: string;
    sharedRequests: Record<string, Promise<any>> = {};
    constructor(path: string) {
        this.path = path;
    }
    async get<T>(path: string, param: unknown = null): Promise<T> {
        const paramStr = "/" + (param ? encodeURIComponent(JSON.stringify(param)) : "");
        const res = await fetch(this.path + path + paramStr, { method: "GET" });
        const response: Message<T> | Error = await res.json();
        if (!response.success) {
            throw new Error(response.message);
        }
        //await sleep(2000);
        return response.result;
    }
    async getShared<T>(path: string, param: unknown = null): Promise<T> {
        const paramStr = "/" + (param ? encodeURIComponent(JSON.stringify(param)) : "");
        const cachePath = path + paramStr;
        if (this.sharedRequests[cachePath] !== undefined) {
            return this.sharedRequests[cachePath];
        }
        const shared = this.get(path, param);
        this.sharedRequests[cachePath] = shared;
        return shared as Promise<T>;
    }
}
export const bee = new Beeliever("https://www.hauntedbees.com/API8/World/World/");