var studentlist = [{ name: 'Rohit' }, { rollno: 10 }, { phone: 90654321 }, { department: 'CS' }, { hobby: ['Cricket', 'chess', 'football'] }];

for (key in studentlist) {
    prop = studentlist[key];
    if (typeof (prop) == 'object') {
        for (k in prop) {
            
                console.log(k + " " + prop[k])
          
        }
    }
}