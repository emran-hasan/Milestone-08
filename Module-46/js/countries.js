const loadCountries =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries =countries=>{
    console.log(countries);
    const countriesHTML =countries.map(country =>getCountriesHTML(country));
    console.log(countriesHTML);
    const container = document.getElementById('countries')
    container.innerHTML = countriesHTML.join(' ');

}
// Original
// const getCountriesHTML = country =>{
//     return `
//     <div class="country">
//         <h1>${country.name.common}</h1>
//         <img src ="${country.flags.png}">
        
//     </div>
//     `
// }



// Option 1
// const getCountriesHTML = country =>{
//     const {name, flags} = country;
//     return `
//     <div class="country">
//         <h1>${name.common}</h1>
//         <img src ="${flags.png}">
        
//     </div>
//     `
// }

// option 2
const getCountriesHTML = ({name, flags,area,capital}) =>{
    return `
    <div class="country">
        <h1>${name.common}</h1>
        <h1>${area}</h1>
        <h1>${capital}</h1>
        <img src ="${flags.png}">
        
    </div>
    `
}



loadCountries()