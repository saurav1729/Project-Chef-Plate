#lecture 5 namaste react 
   React Hooks
   -useSTate
   -useEffect
   

const arr = useState(resList)















    // useEffect(()=>{
  //     fetchData();
  // },[])

  // const fetchData = async() =>{
  //     const data = await fetch(RES_API)
  //     const json = await data.json();
  //     (json);
  // }


useEffect(()=>{

},[])  -->every time my component renders my use effect will be called;when we use useffect with no dependeny array it calls useffect every time component renders;

if dependecy array is empty then use effect is called on initial render and when the component is called for first time ;

if we put something inside dependency array [btnnamereact]-->every time my btnname react change my useeffect will be called ;




useState();

try to call usestate on the top 
never use usestate inside if else statement;
dont create statevariable insider the function ;
dont create it inside a for loop ;


 
 Routing in react 

 firstly we use to react router dom


# 2 types of routing in web apps 
-client side routing
-server side routing (make a network call  and the componets  are coming from server side )





