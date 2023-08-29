const myApp = Vue.createApp({
    data(){

        return{
           title:'JF @ ESDC',
            brand:"CANADA",
            product:"",
            cart:[],
            premium:false,
            myName:'Bassel',
            selected:null,
            availability:"mn",
            details:[100,200,300],
            image:'./images/03.JPG',
            cart:0,
            qtyArry:[],
           
            variants:[
                {sn:19652,url:'./images/01.JPG',galaery:'ESDC-ON',qty:12},
                {sn:2510,url:'./images/02.JPG',galaery:'esdc-Qc',qty:10},
                {sn:9865,url:'./images/03.JPG',galaery:'ESDC-BC',qty:100},
                {sn:9764,url:'./images/04.JPG',galaery:'esdc-BE',qty:4},
                {sn:1982,url:'./images/05.JPG',galaery:'ESDC-AB',qty:0}
            
            ],
            
            pdetails:['Sport car' ,'2 seats', 'v8 Engine','Manual']

           
        }
    },
    methods:{
        showProjectname(){
            this.product ='ESDC is my Product',
            this.brand='NCR'
          

        },
        showImg(index){

            this.image= this.variants[index].url
        },
        placeOrder(index){
          
        
            let newQTY = this.variants[index].qty
            if( newQTY >0){
                this.cart+=1
                this.variants[index].qty -= 1

            }
          
           
           

                
            
            
           
           
        }

    },
   
   



})

