import React, { useEffect, useState } from 'react';
import axios from "axios";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from 'react-toastify'; // Ensure you have this installed

const Update = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ _id: null, message: '' });

  const getAllTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/todolist/getall');
      setTodos(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const handleDelete = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:8080/todolist/delete/${id}`);
      if (result.data.success === 'deleted') {
       toast.success('Todo deleted successfully');
        getAllTodos();
      }
    } catch (error) {
      console.log(error);
     toast.error('Failed to delete todo');
    }
  };

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, message: e.target.value });
  };

  const handleEdit = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ _id: todo._id, message: todo.message });
  };

  const handleUpdate = async () => {
    try {
      const result = await axios.put(`http://localhost:8080/todolist/update/${currentTodo._id}`, {
        message: currentTodo.message,
      });
      if (result.data.success === 'updated') {
        toast.success('Todo updated successfully');
        getAllTodos();
        setIsEditing(false);
        setCurrentTodo({ _id: null, message: '' });
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to update todo');
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentTodo({ _id: null, message: '' });
  };

  return (
    <div>
      {isEditing ? (
        <div className="container2">
          <input className="get" type="text" value={currentTodo.message} onChange={handleEditInputChange} />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        
        <ul>
          <div className='container3'>
          {todos.map((todo) => (
            <li className='li' key={todo._id}>
              {todo.message}
              <div className='icon2'>
              <AiFillEdit className="icon" onClick={() => handleEdit(todo)} />
              <AiFillDelete className="icon" onClick={() => handleDelete(todo._id)} />
              </div>
            </li>
          ))}
          </div>
        </ul>
      )}
    </div>
  );
}

export default Update
