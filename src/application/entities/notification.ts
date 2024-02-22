import { Replace } from "src/Helpers/Replace";
import { Content } from "./content";
import { randomUUID } from "crypto";

export interface NotificationProps{
    recipientId: string;
    content: Content;
    category:string;
    readAt?: Date | null;
    createdAT: Date;
}

export class NotificationModal {
    private _id: string;
   private props: NotificationProps

    constructor(props: Replace<NotificationProps,{createdAT?: Date}>){
       this._id = randomUUID()
        this.props= {
            ...props,
            createdAT: props.createdAT?? new Date(),
        };
    }

    public set content(content: Content){

        this.props.content = content
    }

    public get content(): Content{
        return this.props.content;
    }

    public set category(category: string){

        this.props.category = category
    }

    public get category(): string{
        return this.props.category;
    }

    public set recipientId(recipientId: string){

        this.props.recipientId = recipientId
    }

    public get recipientId(): string{
        return this.props.recipientId;
    }

    public set readAt(readAt: Date | null | undefined){

        this.props.readAt = readAt
    }

    public get readAt(): Date | null | undefined{
        return this.props.readAt;
    }

    public get createdAT(): Date{
        return this.props.createdAT;
    }
    public get id(): string{
        return this._id
    }

}