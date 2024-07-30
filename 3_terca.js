const bulletinsTerca = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "Precipitação esparsa nas regiões do norte, com Macapá (1,9 mm), Manaus (1,5 mm). Na região Nordeste, Aracaju registra o maior acumulado de 13,8 mm acompanhada por Salvador (3,5 mm), Maceió (2,1 mm), Recife (1,9 mm) e João Pessoa (1,4 mm). <br> No centro-oeste e sudeste, também quase não há precipitação com exceção de Vitória (4,7 mm) e Rio de Janeiro (6,1 mm). <br> Para as outras capitais, a precipitação acumulada ficará abaixo de 1 mm ou igual a 0 mm",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "Observa-se a presença de várias áreas de baixa pressão (L) sobre o continente, com destaque para a baixa pressão (637 hPa) sobre o noroeste do Amazonas (região, por vezes, referenciada como 'cabeça do cachorro'). O que possibilitará instabilidades. <br> Áreas de alta pressão (H) são notadas sobre o Atlântico Sul próximo a costa da região sudeste, com pressão atingindo 1029 hPa, favorecendo condições estáveis em partes do sudeste e sul do Brasil. <br> Observa-se um sistema frontal sobre o pacífico sul em direção ao continente",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "A radiação de onda longa (ROL) indica uma alta emissão na região norte, com valores acima de 400 W/m² em áreas como Manaus (429,7 W/m²), Boa Vista (422,0 W/m²) e Porto Velho (392,7 W/m²). Isso sugere altas temperaturas superficiais.",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "Uma larga região que se estende do Maranhão (São Luis com 404,1 W/m²), Piauí (Teresina com 405.9 W/m²) e Bahia apresentam radiação de onda curta (ROC) igual ou maior que 350 W/m². <br> Na região Norte, com valores significativos em Manaus (429,7 W/m²), Boa Vista (422 W/m²) e Belém (415.7 W/m²). A alta incidência solar nestas regiões contribui para o aquecimento diurno.",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "As máximas, no norte com Porto Velho (34,7°C) e Manaus (34,4°C), e, nordeste com Teresina (35.2°C), são os maiores valores no país. O Sul apresenta temperaturas mais amenas, com Porto Alegre (17,2°C) e Florianópolis (15,9°C).",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "A temperatura média acompanha este padrão, com valores elevados no norte e nordeste e mais baixos no sul.",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "As temperaturas mínimas refletem um resfriamento noturno moderado, com valores mais baixos no sul, como Porto Alegre (7,0°C), e mais altos no norte e nordeste.",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "A umidade relativa é alta na faixa norte do Brasil, com valores acima de 70% em áreas como Macapá (78.84%) e Belém (72.1%), indicando atmosfera úmida e propensa à convecção.<br> Tocantins (Palmas com 46,9%) e o sul do Piauí (Teresina com 57.7%) registraram umidade abaixo dos 50% de forma nítida em ralação ao dia anterior. <br> O sul do Pará, extremo sul do Amazonas, Rondônia e Centro Oeste apresentam melhores condições de umidade, porém, ainda abaixo dos 50%. <br> Destaque para curitiba com 93% e 87% de umidade relativa",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "A umidade específica segue o mesmo padrão, com elevados valores no norte, como Boa Vista (18,6 g/kg), Macapá (19,7 g/kg), Manaus (18,5 g/kg) e Belém (18.3 g/kg), contribuindo para a sensação de calor e condições instáveis.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "Ventos moderados a fortes são observados sobre o sul do continente, com velocidades atingindo 8.8 m/s (31,7 km/h) no sul da Argentina, associados à baixa pressão (769 hPa). <br> No Brasil, os ventos são mais fracos, com valores médios, como em Manaus (2,2 m/s ou 7,9 km/h) e Goiânia (2.2 m/s ou 7,9 km/h).",
  },
];

const carouselTerca = document.getElementById("carouselTerca");
const bulletinTitleTerca = document.getElementById("bulletin-title-terca");
const bulletinTextTerca = document.getElementById("bulletin-text-terca");

carouselTerca.addEventListener("slid.bs.carousel", function () {
  const activeItem = carouselTerca.querySelector(".carousel-item.active");
  const index = activeItem.getAttribute("data-bs-slide-to");
  const bulletin = bulletinsTerca[index];
  bulletinTitleTerca.innerHTML = bulletin.title;
  bulletinTextTerca.innerHTML = bulletin.text;
});

// Inicializa o carrossel sem rotação automática
new bootstrap.Carousel(carouselTerca, {
  interval: false,
  ride: false,
});

const toggleTerca = document.getElementById("toggle-terca");
const contentTerca = document.getElementById("content-terca");

// Função para expandir/contrair
toggleTerca.addEventListener("click", () => {
  contentTerca.classList.toggle("show");
});
