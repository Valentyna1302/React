import { useEffect } from 'react';
import Header from './Header/Header';
import { TodoList } from './TodoList/TodoList';
import axios from 'axios';
import toast from 'react-hot-toast';
const App = () => {
  useEffect(() => {
    const abortController = () => new AbortController();

    axios
      .get('https://dummyjson.com/users', { signal: abortController.signal })
      .then(res => console.log(res.data))
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Cancel with abort controller');
          toast.error('Cancel abort controller');
        } else {
          console.log(error);
        }
      });

    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
};
export default App;
