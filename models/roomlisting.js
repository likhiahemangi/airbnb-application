const prouduct =
{

    fakeDB : [],

    init()
    {

        this.fakeDB.push({title:'Seahell house [Etobicoke]',price:`$393 CAD/Night`,rating:'4.6<span class="fa fa-star checked"></span>'});
        this.fakeDB.push({title:'Romatic Cabine House [DownTown]',price:`$363 CAD/Night`,rating:'4.3<span class="fa fa-star checked"></span>'});
        this.fakeDB.push({title:'New York house [DownTown]',price:`$300 CAD/Night`,rating:'4.5<span class="fa fa-star checked"></span>'});
        this.fakeDB.push({title:'Seahell house [Markham]',price:`$385 CAD/Night`,rating:'4.0<span class="fa fa-star checked"></span>'});
        this.fakeDB.push({title:'Tree house [Etobicoke]',price:`$250 CAD/Night`,rating:'4.3<span class="fa fa-star checked"></span>'});
        this.fakeDB.push({title:'Cottage house [Habourfront Side]',price:`$295 CAD/Night`,rating:'4.6<span class="fa fa-star checked"></span>'});
        this.fakeDB.push({title:'Mashroom Doom house [vaughan]',price:`$390 CAD/Night`,rating:'4.2<span class="fa fa-star checked"></span>'});
        this.fakeDB.push({title:'Seahell house [DownTown]',price:`$395 CAD/Night`,rating:'4.5<span class="fa fa-star checked"></span>'});
        this.fakeDB.push({title:'Down hall house [Etobicoke]',price:`$215 CAD/Night`,rating:'4.8<span class="fa fa-star checked"></span>'});
    
    },
    getallProducts()
    {
        return this.fakeDB;
    }

}


prouduct.init();
module.exports=prouduct;