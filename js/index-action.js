

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
var x =getRndInteger(0,4)

var qList =['“Be yourself; everyone else is already taken.”',
`“I'm selfish, impatient and a little insecure. I make mistakes` ,
`I am out of control and  at times hard to handle. But if you can't handle me at m
y worst, then you sure as hell don't deserve me at my best.”`,
`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`



]


var haveIt=[]
  function RandomQ(x)
  {
    
  
    var random = qList[x];
    if(haveIt[0]!=x)
    {
        document.getElementById('demo').innerHTML=random;
        console.log(x)
        console.log(haveIt=[0])
    }
    haveIt.push(x)
    
    
  }
//   function repeated(x)
//   {
//     var y=x;
  
//     while(y!=x)
//     {
       
//       console.log('y =',y)
//       console.log('x=',x)
      
//       break;
//     }
    
//   }
  


