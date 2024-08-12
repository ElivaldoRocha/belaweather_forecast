const bulletinsDomingo = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "A distribuição de precipitação mostra acumulados significativos no extremo norte do Brasil, especialmente em Belém (9,0 mm). As demais regiões apresentam pouca ou nenhuma precipitação, indicando um dia relativamente seco na maior parte do país. No nordeste.<br><br> João Pessoa registra 1,5 mm provavelmente com origem em brisas marítimas.<br><br> Na região sul, Porto Alegre registra acumulados de 0 mm.",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "A análise da pressão atmosférica revela várias áreas de baixa pressão sobre o continente, especialmente no extremo norte do país (801 hPa) no cone sul (784 hPa), baixas pessões estão associadas a instabilidades e condições de mau tempo.<br><br> A Alta Subtropical do Atlântico Sul (ASAS) está atuando mais próxima à costa do continente africano sem influência direta na costa brasileira, altas pessões estão associadas a estabilidades e condições de bom tempo.",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "A Radiação de Onda Longa (ROL) reflete a emissão de energia térmica da superfície terrestre para a atmosfera. As áreas com maior ROL estão associadas a temperaturas mais elevadas, indicando intensa perda de energia térmica durante o período noturno.<br><br>As áreas com maior emissão de ROL estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (423,7 W/m²), Manaus (422,8 W/m²) e Cuiabá (332,5 W/m²)",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta (ROC) representa a energia solar que atinge a superfície terrestre. As áreas com maior ROC estão associadas a intensa insolação, contribuindo para temperaturas elevadas durante o dia.<br><br>As áreas com maior incidência de ROC estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (423,7 W/m²), Manaus (422,8 W/m²) e Cuiabá (332,5 W/m²).",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "Indicam calor intenso nas regiões Norte e Nordeste do Brasil, com temperaturas acima de 32°C em cidades como Manaus (33,6°C), Belém (32,1°C) e Teresina (35,5°C).<br><br> As regiões Sul e Sudeste apresentam temperaturas mais amenas, variando de 17°C a 21°C.",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "Também segue um padrão semelhante, destacando o calor persistente no Norte e Nordeste e temperaturas moderadas no Sul e Sudeste. As temperaturas médias variam entre 20°C e 30°C em grande parte do território brasileiro.",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "Variam significativamente, com regiões do Sul apresentando valores mais baixos, como Porto Alegre (7,9°C), Florianópolis (11,1°C) e Curitiba (7,0°C).<br><br> Enquanto o Norte e Nordeste registram mínimas mais altas, como Manaus (27,6°C) e Natal (23,8°C).",
  },
  {
    title:
      "<i class='bi bi-thermometer-sun'></i><i class='bi bi-thermometer-snow'></i> Amplitude Térmica:",
    text: "A amplitude térmica é elevada em diversas partes do Brasil, indicando dias quentes seguidos de noites relativamente frias. Nas capitais litorâneas, a amplitude térmica é menor por causa da alta umidade relativa.<br><br> Destacam-se Rio Branco (15,7°C), Brasília (14,6°C), São Paulo (13,1°C), Teresina (12,8°C) e Belo Horizonte (14,3°C).",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "Os níveis de umidade relativa são elevados no Norte e Nordeste próximo ao litoral, com valores acima de 75%, favorecendo condições de maior desconforto térmico nessas áreas.<br>Alerta-se para regiões que apresentam baixa umidade relativa:<br>Na região sul do Estado do Pará,com umidade igual ou abaixo dos 50%.<br>Na região conhecida como MATUPIBA (Maranhão, Tocantins, Piauí e Bahia) com umidade igual ou abaixo dos 50%.<br>No Centro-Oeste a umidade está igual ou abaixo dos 50%,<br>No Sudeste os valores de umidade são moderados,<br>Na região Sul apresenta níveis mais altos.",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "Destaca-se maior concentração de vapor d'água na atmosfera na região Norte próximo a costa e países visinhos na faixa equatorial com valores acima de 16 g/kg.<br> Em grande parte do país, apresenta valores que vai de 8 a 15 g/kg.<br>As regiões brasileiras que estão mais próximas ao Trópico de Capricórnio apresentam umidade específica abaixo de 8 g/kg",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "A velocidade do vento é moderada na maior parte do Brasil, com velocidades médias entre 2 (7,2 km/h) e 5 m/s (18 km/h).<br><br>No entanto, áreas ao sul do continente, próximas aos sistemas de baixa pressão, apresentam ventos mais intensos, que podem afetar as condições de navegação e aviação.",
  },
  {
    title:
      "<i class='bi bi-tropical-storm'></i> Gradiente Térmico Sobre Oceânos:",
    text: "<ul><li><strong>Frentes:</strong> Uma frente fria pode ser observada avançando pela costa do cone Sul-Americano no Atlântico com centro de baixa pressão em 988 hPa.</li><li><strong>Zona de Convergência Intertropical:</strong> A ZCIT está bem definida e atuando no hemisfério norte, próxima da linha do Equador. Este sistema é responsável por promover condições de maior instabilidade e precipitação nas regiões próximas, especialmente no norte da Amazônia (no verão do hemisfério sul) e partes do Caribe, como indicado pela baixa pressão (1012 hPa).</li></ul>",
  },
];

const carouselDomingo = document.getElementById("carouselDomingo");
const bulletinTitleDomingo = document.getElementById("bulletin-title-domingo");
const bulletinTextDomingo = document.getElementById("bulletin-text-domingo");

carouselDomingo.addEventListener("slid.bs.carousel", function () {
  const activeItem = carouselDomingo.querySelector(".carousel-item.active");
  const index = activeItem.getAttribute("data-bs-slide-to");
  const bulletin = bulletinsDomingo[index];
  bulletinTitleDomingo.innerHTML = bulletin.title;
  bulletinTextDomingo.innerHTML = bulletin.text;
});

// Inicializa o carrossel sem rotação automática
new bootstrap.Carousel(carouselDomingo, {
  interval: false,
  ride: false,
});

const toggleDomingo = document.getElementById("toggle-domingo");
const contentDomingo = document.getElementById("content-domingo");

// Função para expandir/contrair
toggleDomingo.addEventListener("click", () => {
  contentDomingo.classList.toggle("show");
});
