const TodoList = () => {
  return (
    <div className="round">
      <ul>
        <li>
          <input type="checkbox" class="checkbox-round" /> Buy a new gaming
          laptop
        </li>
        <li>
          <input type="checkbox" class="checkbox-round" /> Complete a previous
          task
        </li>
        <li>
          <input type="checkbox" class="checkbox-round" /> Create video for
          Youtube
        </li>
        <li>
          <input type="checkbox" class="checkbox-round" /> Create a new
          portfolio site
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
