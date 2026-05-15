import './style.css';

const MyComponent = () => {
    // const hoidanit = "eric 1"; //string
    // const hoidanit = 25; //string
    const hoidanit = {
        name: "hoidanit",
        age: 25
    }
  return (
    <>
    <div className="">{JSON.stringify(hoidanit)} & hoidanit update</div>
    <div>{console.log("ERIC")}</div>
    <div className="child" style={{borderRadius: "10px"}}>child</div>
    </>
    
  );
}


// const Fakeomponent = () => {
//     return (
//         <div>
//             second component
//         </div>
//     );
// }
export default MyComponent;