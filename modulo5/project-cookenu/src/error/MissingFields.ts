import { BaseError } from "./BaseError";


export class MissingFields extends BaseError{
    constructor(){
        super("Missing Parameters",404)
    }
}