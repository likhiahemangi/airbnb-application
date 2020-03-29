const prouduct =
{

    fakeDB : [],

    init()
    {

        this.fakeDB.push({image:'/images/T1.jpeg',title:'Seahell house [Etobicoke]',price:`$393 CAD/Night`});
        this.fakeDB.push({image:'/images/T2.jpeg',title:'Romatic Cabine House [DownTown]',price:`$363 CAD/Night`});
        this.fakeDB.push({image:'/images/T3.jpeg',title:'New York house [DownTown]',price:`$300 CAD/Night`});
            
    },
    getallProductsroom()
    {
        return this.fakeDB;
    }

}
prouduct.init();
module.exports=prouduct;

