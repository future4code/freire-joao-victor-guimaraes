class Recipe {
    constructor(
        private id:string,
        private title:string,
        private description:string,
        
        private author_id:string
    ){ }
        getId(){
            return this.id
        }
        getTitle(){
            return this.title
        }
        getDescription(){
            return this.description
        }
        // getDate(){
        //     return this.create_at
        // }
        getAuthor(){
            return this.author_id
        }

}

export default Recipe