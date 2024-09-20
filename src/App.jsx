import React from 'react'

const App = () => {
    //Ex 1
    // const list = [2,5,8,7,3];    
    // let res = list.map(item => item *3)
    // console.log(res);


    // const list = [1,-2,6,4,-3];
    // let res = list.filter(res => res>0);
    // let sum = res.reduce((total, n) => total += n);
    // console.log(sum);


    //Ex 2
    // const personnes = [
    //     { nom: "Rami", age: 33, estMember: true },
    //     { nom: "Fatihi", age: 24, estMember: false },
    //     { nom: "Chakib", age: 45, estMember: true },
    //     { nom: "Mounir", age: 37, estMember: false },
    // ];

    // const arrayNomMembre = personnes.filter(personne => personne.estMember == true)
    // console.log(arrayNomMembre);
    

    // const arrayAges = personnes.filter(personne => personne.age > 24);
    // console.log(arrayAges);
    
    // const arrayTrue = personnes.filter(personne => personne.age > 24 && personne.estMember == true);
    // console.log(arrayTrue);


    //Ex 3
    // const inscriptions=[
    //     { id:10, nom: 'Rami', filiere:'DEV'},
    //     { id:11, nom:'Kamali', filiere:'DEV'},
    //     { id:12, nom:'Fahmi', filiere:'DEV'},
    //     { id:13, nom:'Chaouki', filiere:'DEV'}
    // ];

    // const pureAppendInscription = (id,nom,filiere) =>{
    //     let new_array = [...inscriptions,{id:id,nom:nom,filiere:filiere}];
    //     return new_array;
    // }

    // console.log(pureAppendInscription(14,"Soufian","ID"));


    // class Document{
    //     constructor(id,dateEdition){
    //         this.id = id;
    //         this.dateEdition = dateEdition;
    //     }
    // }

    // class Livre extends Document{
    //     constructor(id,dateEdition,titre,auteur){
    //         super(id,dateEdition);
    //         this.titre = titre;
    //         this.auteur = auteur;
    //     }
    //     infoLivre(){
    //         return `${this.id} ${this.dateEdition} ${this.titre} ${this.auteur}`;
    //     }
    // }

    // let inst_1 = new Document(1,"13-11-2004");
    // let inst_2 = new Document(2,"15-12-2005");

    // let inst_3 = new Livre(3,"22-10-2022","coco","Soufian");
    // let inst_4 = new Livre(4,"22-10-2022","bobo","Soufian");
    // let inst_5 = new Livre(5,"22-10-2022","zozo","Soufian");

    // console.log(inst_3.infoLivre());
    


    let livres=[
        { id :10, titre : 'POO', auteur :'RAMI', prix :300},
        { id :11, titre : 'JS ES6', auteur :'FAMI', prix :230},
        { id :12, titre : 'Algorithme', auteur :'KARIMI', prix :330},
        { id :13, titre : 'HTMH& CSS', auteur :'RAMI', prix :340}   
    ]

    // const titres = livres.map(livre => livre.titre);
    // console.log(titres);

    // const titres_2 = livres.filter(livre => livre.auteur === 'RAMI');
    // const titres__2 = titres_2.map(livre => livre.titre);
    // console.log(titres__2);
    
    // const livre_12 = livres.filter(livre => livre.id == 12);
    // console.log(livre_12);

    // const total_prix = livres.reduce((total,pr)=>(total = total + pr.prix),0);
    // console.log(total_prix);
    

    const Array_mesLivres = [...livres];
    console.log(Array_mesLivres);

    
  return (
    <div>
      
    </div>
  )
}

export default App;