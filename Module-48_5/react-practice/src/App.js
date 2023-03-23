import './App.css';
import Article from './components/Article/Article';
import Blog from './components/Blog/Blog';
import Mobile from './components/Mobile/Mobile';
import Todo from './components/Todo/Todo';
function App() {
  return (
    <div className="App">
      <Article></Article>
      <Blog></Blog>
      <Blog></Blog>
      <Blog></Blog>
      <Blog></Blog>
      <Blog name='Emran' author='boss'></Blog>
      <Blog name='Emran' author='boss'></Blog>
      
      <Mobile></Mobile>
      <Todo></Todo>
    </div>
  );
}

export default App;
