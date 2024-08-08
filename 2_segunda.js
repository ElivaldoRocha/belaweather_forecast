const bulletinsSegunda = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "A distribuição de precipitação mostra acumulados significativos no extremo norte do Brasil, especialmente em Boa Vista (5,0 mm). As demais regiões apresentam pouca ou nenhuma precipitação, indicando um dia relativamente seco na maior parte do país, exceto no extremo sul onde há alguma precipitação leve registrada em Porto Alegre (2,2 mm).",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "Observa-se um extenso sistema de baixa pressão centrado sobre o extremo norte da região amazônica (799 hPa), com outros sistemas de baixa pressão localizados sobre o Pacífico, próximo ao Chile (993 hPa) e ao sul da Argentina (781 hPa).<br><br>O sistema de Alta pressão (1028 hPa - Alta Subtropical do Atlântico Sul - ASAS) permanece ainda atuando mais afastado da costa brasileira.",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "Reflete a emissão de energia térmica da superfície terrestre para a atmosfera. As áreas com maior ROL estão associadas a temperaturas mais elevadas, indicando intensa perda de energia térmica durante o período noturno.<br><br>As áreas com maior emissão de radiação de onda longa estão concentradas no norte e nordeste do Brasil.<br><br>Destaques para Boa Vista (431,7 W/m²), Manaus (409,5 W/m²) e Cuiabá (362,5 W/m²).",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta (ROC) representa a energia solar que atinge a superfície terrestre. As áreas com maior ROC estão associadas a intensa insolação, contribuindo para temperaturas elevadas durante o dia.<br><br>As áreas com maior incidência de ROC estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (431,7 W/m²), Manaus (409,5 W/m²) e Cuiabá (362,5 W/m²).",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "As temperaturas máximas são elevadas em grande parte do Brasil, com Cuiabá registrando 35,1°C, Manaus 34,8°C, Belém 33,1°C e Teresina com 32,8°C. No sul, Porto Alegre tem máxima de 24,4°C.",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "As médias de temperatura seguem as altas, com Manaus registrando 30,2°C e São Paulo 20.2°C.",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "As mínimas também são elevadas no norte, com Boa Vista registrando 25,4°C, enquanto no sul, Porto Alegre tem mínima de 17,6°C.",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "A umidade relativa do ar é elevada na região norte e nordeste, com valores superiores a 80% em Macapá (81,2%) e Belém (71,9%).<br><br>Nas regiões central os valoes estão abaixo dos 50%.<br><br>No Sudeste, os valores são moderados, com São Paulo apresentando 56.1% e Belo Horizonte 67,5%.<br><br>No sul, a umidade relativa é alta em Porto Alegre (90.1%) e Florianópolis (91,3%).",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "A umidade específica é alta na região amazônica, com Boa Vista apresentando 19,9 g/kg e Manaus 15,3 g/kg. No sudeste, os valores são mais baixos, com São Paulo registrando 8,8 g/kg e Rio de Janeiro 12,9 g/kg.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "Os ventos são mais intensos no litoral nordeste, com Recife registrando 5,4 m/s (19,4 km/h) e Salvador 3,8 m/s (13,6 km/h).<br><br>No sul, Porto Alegre apresenta ventos moderados de 2.8 m/s (10,8 km/h).",
  },
  {
    title:
      "<i class='bi bi-tropical-storm'></i> Gradiente Térmico Sobre Oceânos:",
    text: "<ul><li><strong>Frentes:</strong> O gradiente térmico revela a presença de frentes frias na América do Sul. Uma frente fria pode ser observada avançando pelo cone sul, associada a um sistema de baixa pressão (781 hPa) na região do Chile e Argentina. Esta frente fria está contribuindo para a diminuição das temperaturas nas áreas ao sul</li><li><strong>Zona de Convergência Intertropical:</strong>A ZCIT está bem definida no hemisfério norte, próxima da linha do Equador. Este sistema é responsável por promover condições de maior instabilidade e precipitação nas regiões próximas, especialmente no norte da Amazônia e partes do Caribe, como indicado pela baixa pressão (1011 hPa).</li></ul>",
  },
];

const carouselSegunda = document.getElementById("carouselSegunda");
const bulletinTitleSegunda = document.getElementById("bulletin-title-segunda");
const bulletinTextSegunda = document.getElementById("bulletin-text-segunda");

carouselSegunda.addEventListener("slid.bs.carousel", function () {
  const activeItem = carouselSegunda.querySelector(".carousel-item.active");
  const index = activeItem.getAttribute("data-bs-slide-to");
  const bulletin = bulletinsSegunda[index];
  bulletinTitleSegunda.innerHTML = bulletin.title;
  bulletinTextSegunda.innerHTML = bulletin.text;
});

// Inicializa o carrossel sem rotação automática
new bootstrap.Carousel(carouselSegunda, {
  interval: false,
  ride: false,
});

const toggleSegunda = document.getElementById("toggle-segunda");
const contentSegunda = document.getElementById("content-segunda");

// Função para expandir/contrair
toggleSegunda.addEventListener("click", () => {
  contentSegunda.classList.toggle("show");
});
