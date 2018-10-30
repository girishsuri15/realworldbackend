const Helper={
        parseStringIntoArray : (StringData)=>
            {
                return StringData.split('~');
            },
        parseArrayIntoString : (ArrayData)=>
            {
                var str=ArrayData[0];
                for(let i=1;i<ArrayData.length;i++)
                    {
                        str=str+'~'+ArrayData[i];
                    }
                return str;
            },
            isValidateEmail : (email) => {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }        
    }   

 module.exports = Helper 
