const bulletinsQuinta = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "A distribuição de precipitação mostra acumulados significativos no norte do Brasil, especialmente em Manaus (4,7 mm). As demais regiões apresentam pouca ou nenhuma precipitação, indicando um dia relativamente seco na maior parte do país.<br><br>No nordeste, João Pessoa registra 2,2 mm.<br><br> Na região sul, Porto Alegre registra acumulados de 0 mm.",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "A análise da pressão atmosférica revela várias áreas de baixa pressão sobre o continente, especialmente no extremo norte do país (802 hPa) no cone sul (774 hPa), baixas pessões estão associadas a instabilidades e condições de mau tempo.<br><br> A Alta Subtropical do Atlântico Sul (ASAS) está atuando mais próxima à costa do continente africano sem influência direta na costa brasileira, altas pessões estão associadas a estabilidades e condições de bom tempo.<br><br>Uma grande área costeira no sudeste está sob o domínio de altas pressões (1024 hPa) tornando o tempo estavél e sem chuva.",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "A Radiação de Onda Longa (ROL) reflete a emissão de energia térmica da superfície terrestre para a atmosfera. As áreas com maior ROL estão associadas a temperaturas mais elevadas, indicando intensa perda de energia térmica durante o período noturno.<br><br>As áreas com maior emissão de ROL estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (411,0 W/m²), Manaus (422,6 W/m²) e Cuiabá (365,4 W/m²)",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta (ROC) representa a energia solar que atinge a superfície terrestre. As áreas com maior ROC estão associadas a intensa insolação, contribuindo para temperaturas elevadas durante o dia.<br><br>As áreas com maior incidência de ROC estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (411,0 W/m²), Manaus (422,6 W/m²) e Cuiabá (365,4 W/m²).",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "Indicam calor intenso nas regiões Norte e Nordeste do Brasil, com temperaturas acima de 32°C em cidades como Manaus (31,9°C), Belém (32,6°C) e Teresina (34,1°C).<br><br>As regiões Sul e Sudeste apresentam temperaturas variando de 19°C a 27°C, um aumento notavél para a região.",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "Também segue um padrão semelhante, destacando o calor persistente no Norte e Nordeste e temperaturas moderadas no Sul e Sudeste. As temperaturas médias variam entre 25°C e 30°C em grande parte do território brasileiro.",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "Variam significativamente, com regiões do Sul apresentando valores mais baixos, como Porto Alegre (9,8°C), Florianópolis (12,1°C) e Curitiba (10,4°C).<br><br> Enquanto o Norte e Nordeste registram mínimas mais altas, como Manaus (25,5°C) e Natal (23,6°C).",
  },
  {
    title:
      "<i class='bi bi-thermometer-sun'></i><i class='bi bi-thermometer-snow'></i> Amplitude Térmica:",
    text: "A amplitude térmica é elevada em diversas partes do Brasil, indicando dias quentes seguidos de noites relativamente frias. Nas capitais litorâneas, a amplitude térmica é menor por causa da alta umidade relativa.<br><br> Destacam-se Rio Branco (14,1°C), Brasília (10,1°C), São Paulo (15,6°C), Teresina (13,1°C) e Belo Horizonte (15,8°C).",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "Os níveis de umidade relativa são elevados no Norte e Nordeste próximo ao litoral, com valores acima de 75%, favorecendo condições de maior desconforto térmico nessas áreas.<br>Alerta-se para regiões que apresentam baixa umidade relativa:<br>No Centro-Oeste a umidade está igual ou abaixo dos 50%,<br>No Sudeste os valores de umidade são moderados,<br>Na região Sul apresenta níveis mais altos.",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "Destaca-se maior concentração de vapor d'água na atmosfera na região Norte próximo a costa e países visinhos na faixa equatorial com valores acima de 16 g/kg.<br> Em grande parte do país, apresenta valores que vai de 8 a 15 g/kg.<br>As regiões brasileiras que estão mais próximas ao Trópico de Capricórnio apresentão umidade específica abaixo de 8 g/kg",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "A velocidade do vento é moderada na maior parte do Brasil, com velocidades médias entre 2 (7,2 km/h) e 5 m/s (18 km/h).<br><br>No entanto, áreas ao sul do continente, próximas aos sistemas de baixa pressão, apresentam ventos mais intensos, que podem afetar as condições de navegação e aviação.",
  },
  {
    title:
      "<i class='bi bi-tropical-storm'></i> Gradiente Térmico Sobre Oceânos:",
    text: "<ul><li><strong>Frentes:</strong> Uma frente fria pode ser observada pela costa do cone Sul-Americano no Pacífico associada com centro de baixa pressão em 778 hPa.</li><li><strong>Zona de Convergência Intertropical:</strong> A ZCIT está bem definida e atuando no hemisfério norte, próxima da linha do Equador. Este sistema é responsável por promover condições de maior instabilidade e precipitação nas regiões próximas, especialmente no norte da Amazônia (no verão do hemisfério sul) e partes do Caribe, como indicado pela baixa pressão (1012 hPa).</li></ul>",
  },
];

const carouselQuinta = document.getElementById("carouselQuinta");
const bulletinTitleQuinta = document.getElementById("bulletin-title-quinta");
const bulletinTextQuinta = document.getElementById("bulletin-text-quinta");

carouselQuinta.addEventListener("slid.bs.carousel", function () {
  const activeItem = carouselQuinta.querySelector(".carousel-item.active");
  const index = activeItem.getAttribute("data-bs-slide-to");
  const bulletin = bulletinsQuinta[index];
  bulletinTitleQuinta.innerHTML = bulletin.title;
  bulletinTextQuinta.innerHTML = bulletin.text;
});

// Inicializa o carrossel sem rotação automática
new bootstrap.Carousel(carouselQuinta, {
  interval: false,
  ride: false,
});

const toggleQuinta = document.getElementById("toggle-quinta");
const contentQuinta = document.getElementById("content-quinta");

// Função para expandir/contrair
toggleQuinta.addEventListener("click", () => {
  contentQuinta.classList.toggle("show");
});
