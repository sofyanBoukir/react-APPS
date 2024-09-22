import Document from "./Document";


export default class Livre extends Document{
    constructor(props){
        super(props)
        // super(id,dateEdition);
        this.titre = props.titre;
        this.auteur = props.auteur;
    }

    infoLivre(){
        return `${this.id} ${this.dateEdition} ${this.titre} ${this.auteur}`;
    }

    render(){
        return <div>
            {this.infoLivre()}
        </div>
    }
}