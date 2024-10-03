
export default function CountryName({ params}) {
    let capital = "";
    let population = "";
    let countryExists = true;

    console.log(params);
  
    if (params.countryName === "Pakistan") {
      capital = "Islamabad";
      population = "231.4 million";
    } 
    else if (params.countryName === "india") {
      capital = "New Delhi"; 
      population = "1.4 billion"; 
    }
     else if (params.countryName === "canada") {
      capital = "Ottawa"; 
      population = "40 million"; 
    } 
     else if (params.countryName === "america") {
      capital = "Washington, D.C."; 
      population = "334 million"; 
    } 
    else if (params.countryName === "bangladesh") {
     capital = "Dhaka"; 
     population = "173 million"; 
   } 
   else {
    countryExists = false; 
  }
    
    return(
        
        <>
        <h1 className="text-2xl">{params.countryName}</h1>
        {countryExists ? (
          <>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
          </>
        ) : (
          <p>This country is not available in the list.</p>
        )}
        </>
    );
    
}
