var callCount = 0 ;


console.log("I think you are a developr, since you are checking console.")

function addSpace()
{
    document.getElementById("con-space").style.display = "block" ;
    document.getElementById("btn-options").style.display ="block" ;

    var count = document.getElementById("count").value ;


    
    var space = document.getElementById("space") ;
    var conSpace = document.getElementById("con-space")

    
    for ( let i = 0; i < count-1; i++)
    {
        
        let newPaper = space.cloneNode(true) ;
        conSpace.appendChild(newPaper) ;
        if ( count > 15)
        {
            document.getElementById("con-space").style.display = "none" ;
            document.getElementById("btn-options").style.display ="none" ;
        
            alert("You exceeded maximum count .");
            break;

        }
       
    }
    
}

function append()
{ 
   
 document.getElementById('foot').style.bottom='auto';
    if(callCount == 0)
    {
       addSpace() ;
    }

    else if (callCount == 1)

    {
        reset() ;
        addSpace() ;
    }
     
    callCount = 1;

    

}


function reset()
{
    document.getElementById("con-space").style.display = "none" ;
    document.getElementById("btn-options").style.display ="none" ;

    document.getElementById("result").style.display = "none" ;


    var paper = document.getElementsByClassName("paper") ;
    var grade = document.getElementsByClassName("grade") ;

    for ( let i = paper.length-1 ; i > 0 ; i-- )
    {
        paper[i].parentNode.removeChild(paper[i]) ;
    }

    
    for ( let j = grade.length-1 ; j > 0 ; j-- )
    {
        grade[j].parentNode.removeChild(grade[j]) ;
    }

}

function compute()
{
    var paper = document.getElementsByClassName("paper");
    var grade = document.getElementsByClassName("grade");

    var creditsProd = 0 ;
    var creditsTot = 0 ;

    var paperArray = [] ;
    var gradeArray = [] ;

 
    var info = "Great ...";

    let countArrear =0 ;

    for ( let i = 0 ; i < grade.length ; i++ )
    {
        if( grade[i].value == 0)
        {
            countArrear += 1 ;

            console.warn("You have arrear(s) !") ;
        }


        paperArray[i] = Number(paper[i].value) ;
        gradeArray[i] = grade[i].value ;
        creditsTot += paperArray[i] ;
        creditsProd += paperArray[i] * gradeArray[i] ;

        
        

    }
    console.count()
    console.log(creditsProd) ;
    console.log(creditsTot) ;
    console.log((creditsProd/creditsTot).toPrecision(4)) ;
    
    document.getElementById("result").style.display = "flex" ;
    
    document.getElementById("gradPoint").innerHTML = (creditsProd/creditsTot).toPrecision(4) ;

    alert((creditsProd/creditsTot).toPrecision(4) + "\n" + "you have " + countArrear + " arrear(s)." ) ;

   

}
