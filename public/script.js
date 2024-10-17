function loadPage(page) {
    const content = document.getElementById('content');


    switch (page) {
        case 'etusivu':
            content.innerHTML = `
                <h2>Tervetuloa Yritykseen</h2>
                <p>Yritys Oy tarjoaa monipuolisia palveluita ja ratkaisuja eri toimialoille. Jos sinulla on yritys autamme sinua. Jos haluat yrityksen me autamme sinua.</p>
                <p>Yritys Oy on sinunkin yrityksesi</p>
            `;
            break;
        case 'tietoa':
            content.innerHTML = `
                <h2>Tietoa meistä</h2>
                <p>Tämä kuvitteellinen Yritys Oy on perustettu vuonna 2024 koulutehtävää varten, ja se tarjoaa innovatiivisia ratkaisuja asiakkailleen.</p>
                <p>Yritys Oy on sinunkin yrityksesi</p>
            `;
            break;
        case 'info':
            content.innerHTML = `
                <h2>Yhteystiedot</h2>
                <p>Sähköposti: info@yritysoy.fi</p>
                <p>Puhelin: 050 123 4567</p>
                <p>Osoite: Lahdentie 666, 15100 Lahti</p>
            `;
            break;

        case 'staff2':

        async function fetchData() {
                
            
            var x = `<table><thead><th>Henkilö</th><th>Titteli</th><th>Puhelinnumero</th><th>Sähköposti</th></thead><tbody>`
            
            const response = await fetch("http://localhost:3030/api/henkilokunta")
            const henkilodata = await response.json() // muutetaan json -> javascript muotoon
            await henkilodata.map(h => {
                x += `<tr><td>${h.name}</td><td>${h.role}</td><td>${h.phone}</td><td>${h.email}</td></tr>`
            })
            
            //taulukko päätetään ja renderöidään html elementtiin
            x += `</tbody></table>`
            document.getElementById("content").innerHTML = x
    
        }
            content.innerHTML = fetchData();
            break;
        default:
            content.innerHTML = '<p>Sivua ei löydy.</p>';
    }
}
