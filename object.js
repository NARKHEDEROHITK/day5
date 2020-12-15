
        var emp={
            name:'raju',
            age:23,
            hobbies:["cricket","music"],
            address:{
                city:'Jalgaon',
                state:"MH"
            },
            greet: function(){
                console.log('welcome',this.name)
            }
        }
        

        for (key in emp) {
           var prop=emp[key];

           if(typeof(prop)=='Array'){
               prop.forEach(ele  => console.log('hobby :',+ele))
        }else if(typeof(prop)=="object"){
            for (k in prop) {
               console.log(k+" "+prop[k])
            }
        }else if(typeof(prop)=='function'){
            console.log(key+" "+typeof(prop))
        }
        else
        {
            console.log(key+" "+prop)
        }
    }
        
