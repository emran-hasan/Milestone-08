import logo from './logo.svg';
import './App.css';
import Countries from './component/Countries/Countries';
import Country from './component/Country/Country';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(() =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])

//   return (
//     <div>
//       <h1>Visiting all countries all the world!!</h1>
//       <h3>Available Countries: {countries.length}</h3>
      
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population} capital={country.capital} ></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return (
//     <div style={{backgroundColor:'grey', margin:'25px', padding:'20px', borderRadius:'20px'}}>
//       <h4>Name: {props.name}</h4>
//       <h4>Population: {props.population}</h4>
//       <h4>Capital {props.capital}</h4>
//     </div>
//   )
// }

export default App;
