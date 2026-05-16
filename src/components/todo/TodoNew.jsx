const TodoNew = (props) => {
      console.log("check props: ", props)
      const {addNewTodo} = props;
      addNewTodo("eric")
    return (
        <div className='btn'>
      <input type="text"></input>
      <button className='button'>Add</button>
    </div>
    );
}

export default TodoNew;