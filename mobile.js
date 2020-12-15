var mobile={
    Model:'Galexy20',
    Brand:'Samsung',
    Color:'Silver',
    Price:'21536 Rs',
    Accesories:["charger","earphone","temperglass"],
    Featers:{
        Ram:'6GB',
        Processor:"Qualcomm "
    },
    show: function(){
        for (key in mobile) {
            prop = mobile[key];
            if(typeof(prop) == 'Array'){
                for(i in prop){
                    console.log(prop[i])
                }
            }else if(typeof(prop) == 'object'){
                console.log(key)
                for (k in prop) {
                    console.log(k+" "+prop[k])
                }
            }else{
                console.log(key+" "+ typeof(prop))
            }
            
        }
    }
}

mobile.show();

