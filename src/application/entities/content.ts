import { error } from "console";

export class Content{
    private readonly content: string;

    get value(){
        return this.content;
    }

    private validateContentLength(content:string): boolean{
        return content.length >= 5 && content.length <= 240;
    }

    constructor(content: string){
        const isContentLenghValid = this.validateContentLength(content);

        if(!isContentLenghValid){
           throw new error('Content lenght eror.') 
        }

        this.content = content;
    }
}