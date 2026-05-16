const TodoData = (props) => {
    const {name, age, data} = props;
    console.log("check props: ", props)
    return (
         <div className='todo-data'>
            <div>My name is {name}</div>
       <div className='learn'>Learning react</div>
    <div className='learn'>Watching youtube</div>
    </div>
    );
}

export default TodoData;