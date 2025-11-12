let formnya=document.getElementById("input");
document.getElementById("kirim_data").addEventListener("submit",(e)=>{
    e.preventDefault()
    cari()
    formnya.value=""
    formnya.focus();
})

async function cari(){
    try{
    let kota=formnya.value;
    let conect=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=24d468c53d139a5c30f43e4076a16d77`);
    let data=await conect.json();
    document.getElementById("kota").innerText=data.name
    document.getElementById("suhu").innerText=data.main.temp
    document.getElementById("cuaca").innerText=data.weather[0].main
    document.getElementById("kelembapan").innerText=data.main.humidity
    document.getElementById("angin").innerText=data.wind.speed
    document.getElementById("negara").innerText=data.sys.country
    }catch{
        console.log("Ada yang salah")
    }
}

