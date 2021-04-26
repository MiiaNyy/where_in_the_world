function getBorderCountriesNames(countryCodes, setLoading, setBorderCountries) {
    for (let i = 0; i < countryCodes.length; i++) {
        fetchBorderCountry(countryCodes[i])
            .then((response)=>{
                console.log('border countris name is ' + response[0].name);
                setBorderCountries((prev)=>{
                    return [...prev, response[0].name]
                })
                setLoading(true);
            })
    }
}

async function fetchBorderCountry(countryCode) {
    const response = await fetch(`https://restcountries.eu/rest/v2/alpha?codes=${ countryCode }`);
    if ( response.status !== 200 ) {
        throw new Error('cannot fetch border country data');
    }
    return await response.json();
}

export default getBorderCountriesNames;