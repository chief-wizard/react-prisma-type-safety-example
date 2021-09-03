/** App.js */
import PrismaQuery from './components/PrismaQuery'
import './App.css'
 
function App() {
  return (
   <div className="App">
     <h2 className="Title">Bakeshop Menu</h2>
     <h3 className="Tag">Order ahead and we'll have it ready to pick up</h3>
     <PrismaQuery />
   </div>
 )
}
 
export default App;
