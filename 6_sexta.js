const bulletinsSexta = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "A precipitação é mais intensa no Sul do Brasil, especialmente sobre o Rio Grande do Sul e Santa Catarina, onde são registrados acumulados significativos (Porto Alegre com 9,6 mm e Curitiba com 15,8 mm).<br><br>Áreas de instabilidade também são observadas na faixa litorânea do Nordeste, com acumulados menores em cidades como Recife (1,3 mm) e João Pessoa (3,9 mm).<br><br> Na região Norte, Boa vista regista 3,8 mm e Belém com 2,6 mm, observa-se precipitação significativa nos muinicios próximos ao sul da Ilha de Marajó",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "A presença de um sistema de alta pressão (1033 hPa) no sul do continente, próximo ao litoral da Argentina, influencia fortemente as condições climáticas na região. Esse sistema é responsável pela estabilidade atmosférica e pelo tempo seco em grande parte do sul do Rio Grande do Sul e Argentina.",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "Reflete a emissão de energia térmica da superfície terrestre para a atmosfera. As áreas com maior ROL estão associadas a temperaturas mais elevadas, indicando intensa perda de energia térmica durante o período noturno.<br><br>As áreas com maior emissão de radiação de onda longa estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (427,1 W/m²), Manaus (430,7 W/m²) e Cuiabá (385,5 W/m²).",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta (ROC) representa a energia solar que atinge a superfície terrestre. As áreas com maior ROC estão associadas a intensa insolação, contribuindo para temperaturas elevadas durante o dia.<br><br>As áreas com maior incidência de ROC estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (427,1 W/m²), Manaus (430,7 W/m²) e Cuiabá (385,5 W/m²).",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "As máximas mais elevadas são registradas no norte do continente, com valores superiores a 33°C em Palmas (33.4°C) e Teresina (35,5°C).",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "As médias refletem essa distribuição, com valores mais altos no norte e mais baixos no sul, demonstrando o efeito da latitude e das condições sinóticas.",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "As temperaturas mínimas são mais amenas no sul, Porto Alegre registra 15,2°C.",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "A umidade relativa apresenta altos valores na Amazônia, refletindo a intensa evapotranspiração da região. Manaus registra 71,6%, enquanto Boa Vista apresenta 83,1%.<br><br> Porto Alegre registra umidade relativa de 92,4%",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "A umidade específica é também elevada na região Norte, com valores superiores a 20 g/kg em Boa Vista e Macapá, indicando uma atmosfera bastante úmida.<br><br>Contrariamente, áreas no centro-oeste e sudeste do Brasil, como Brasília (DF) e Goiânia (GO), apresentam umidade relativa e específica menores, com valores de 45% e 10.6 g/kg, respectivamente, indicando condições mais secas.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "Ventos fortes são observados na costa leste da América do Sul, associados aos sistemas de baixa pressão. Velocidades significativas de até 9 m/s são registradas no Oceano Atlântico adjacente ao Sul do Brasil.<br><br>O interior do continente apresenta ventos mais calmos, com velocidades inferiores a 2 m/s em grande parte das regiões.",
  },
  {
    title:
      "<i class='bi bi-tropical-storm'></i> Gradiente Térmico Sobre Oceânos:",
    text: "<ul><li><strong>Frentes:</strong>O gradiente térmico revela a presença de frentes frias na América do Sul. Uma frente fria pode ser observada avançando pelo cone sul, associada a um sistema de baixa pressão (790 hPa) na região do Chile e Argentina. Pode-se obervar outra frente fria atuando sobre o extremo norte do Rio Grande do Sul e Santa Catarina. Esta frente fria contribue para a diminuição das temperaturas nas áreas ao sul.</li><li><strong>Zona de Convergência Intertropical:</strong>A ZCIT não está bem definida, porém, percebe-se atuação no hemisfério norte com maior intensidade ao leste, próxima da linha do Equador. Este sistema é responsável por promover condições de maior instabilidade e precipitação nas regiões próximas, especialmente no norte da Amazônia e partes do Caribe.</li></ul>",
  },
];

const carouselSexta = document.getElementById("carouselSexta");
const bulletinTitleSexta = document.getElementById("bulletin-title-sexta");
const bulletinTextSexta = document.getElementById("bulletin-text-sexta");

carouselSexta.addEventListener("slid.bs.carousel", function () {
  const activeItem = carouselSexta.querySelector(".carousel-item.active");
  const index = activeItem.getAttribute("data-bs-slide-to");
  const bulletin = bulletinsSexta[index];
  bulletinTitleSexta.innerHTML = bulletin.title;
  bulletinTextSexta.innerHTML = bulletin.text;
});

// Inicializa o carrossel sem rotação automática
new bootstrap.Carousel(carouselSexta, {
  interval: false,
  ride: false,
});

const toggleSexta = document.getElementById("toggle-sexta");
const contentSexta = document.getElementById("content-sexta");

// Função para expandir/contrair
toggleSexta.addEventListener("click", () => {
  contentSexta.classList.toggle("show");
});
