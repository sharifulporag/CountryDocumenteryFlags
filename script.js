const countryName = document.querySelector(".text");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
    let newCountry = countryName.value;
    if (newCountry) {
        newCountry = countryName.value;

        let oldCountryName = JSON.parse(localStorage.getItem("country"));
        if (oldCountryName == null) {
            getCountryName = []
        } else {
            getCountryName = oldCountryName;
        }
        localStorage.setItem("country", JSON.stringify([{ newCountry }, ...getCountryName]))
    }
    countryName.value = "";
    countryName.focus();
    allCountryName(newCountry)

})




const showCard = document.querySelector(".container")


function allCountryName(newCountry) {

    let request = new XMLHttpRequest();

    request.open('GET', `https://restcountries.com/v3.1/name/${newCountry}`);

    request.send();




    request.addEventListener("load", function () {


        const [data] = JSON.parse(this.responseText)

        let oldCountryName = JSON.parse(localStorage.getItem("country"));
        let oldHtml = ""

        oldCountryName.forEach(() => {
            const html = `
                    <div class="card-section">
                        <div class="card-img">
                            <img src="${data.flags.png}"
                                alt="">
                        </div>
                        <div class="card-content">
                            <h3>${data.name.common}</h3>
                            <p>Population: ${(+data.population / 1000000).toFixed(2)
                } million people </p>      
                        </div >
                    </div>
                `
            oldHtml = html;

        });
        showCard.insertAdjacentHTML("afterEnd", oldHtml);

    });



}




allCountryName("india")
allCountryName("usa")
allCountryName("bangladesh")
allCountryName("peru")
allCountryName("nepal")
allCountryName("japan")
allCountryName("pakistan")
allCountryName("sri lanka")
allCountryName("ukraine")
allCountryName("russia")
allCountryName("afghanistan")
allCountryName("finland")
allCountryName("germany")
allCountryName("albania")
allCountryName("Algeria")
allCountryName("Andorra")
allCountryName("Azerbaijan")
allCountryName("Bahamas")
allCountryName("Bahrain")
allCountryName("Barbados")
allCountryName("Bolivia")
allCountryName("Brazil")
allCountryName("Bulgaria")
allCountryName("Canada")
allCountryName("France")
allCountryName("Fiji")
allCountryName("Ghana")
allCountryName("Guatemala")

