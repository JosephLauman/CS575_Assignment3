var myArray =[
{
"username": "username",
"password": "password",
"login": "false"
},
];

function compare(u, p){
    var i;
    var l = false
    for(i = 0; i<myArray.length; i++) {
    	if(u==myArray[i].username){
    		if(p==myArray[i].password){
    			myArray[i].login="true";
    			l = true;
    		}
    	}
    }
    return l;
}
