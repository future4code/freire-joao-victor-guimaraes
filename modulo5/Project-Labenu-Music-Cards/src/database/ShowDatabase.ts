import { on } from "events"
import { IShowDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    insertShow = async(show:Show)=>{
        await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS)
        .insert({
            id:show.getId(),
            band:show.getBand(),
            starts_at:show.getStartsAt()
        })
    }

    selectAllShows = async()=>{
        const answer = await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .select(("band as Show"),("starts_at as Data_do_Evento"))
        // .from(ShowDatabase.TABLE_SHOWS as "S")
        // .innerJoin(ShowDatabase.TABLE_TICKETS,`${ShowDatabase.TABLE_SHOWS}.id`,"=",`${ShowDatabase.TABLE_TICKETS}.show_id`)

        

        return answer
    }
     
}