const prouduct =
{

    fakeDB : [],

    init()
    {

        this.fakeDB.push({image:'/images/T1.jpeg',title:'Seahell house [Etobicoke]',price:`$393 CAD/Night`});
        this.fakeDB.push({image:'/images/T2.jpeg',title:'Romatic Cabine House [DownTown]',price:`$363 CAD/Night`});
        this.fakeDB.push({image:'/images/T3.jpeg',title:'New York house [DownTown]',price:`$300 CAD/Night`});
        this.fakeDB.push({image:'/images/T4.jpg',title:'Seahell house [Markham]',price:`$385 CAD/Night`});
        this.fakeDB.push({image:'/images/T5.jpg',title:'Tree house [Etobicoke]',price:`$250 CAD/Night`});
        this.fakeDB.push({image:'/images/T6.jpeg',title:'Cottage house [Habourfront Side]',price:`$295 CAD/Night`});
        this.fakeDB.push({image:'/images/T7.jpeg',title:'Mashroom Doom house [vaughan]',price:`$390 CAD/Night`});
        this.fakeDB.push({image:'/images/T8.jpeg',title:'Seahell house [DownTown]',price:`$395 CAD/Night`});
        this.fakeDB.push({image:'/images/T2.jpeg',title:'Down hall house [Etobicoke]',price:`$215 CAD/Night`});
    
    },
    getallProducts()
    {
        return this.fakeDB;
    }

}


prouduct.init();
module.exports=prouduct;