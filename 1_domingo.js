const bulletinsDomingo = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "Há previsão de pouca precipitação na maior parte do Brasil. As chuvas são esperadas principalmente em áreas isoladas do Nordeste, como Natal (2,8 mm), João Pessoa (2,1 mm) e Recife (1,8 mm). <br> No Sul, a cidade de Porto Alegre apresenta um acumulado significativo de 13,9 mm, sugerindo a influência de sistemas frontais na região.",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "Áreas de baixa pressão (L) estão posicionadas sobre o Pacífico Sul, próximo à costa do Chile (992 hPa), e sobre o Oceano Atlântico ao sul do Brasil (814 hPa), indicando a formação de sistemas frontais que podem influenciar o tempo no sul do continente. <br> Uma alta pressão (H) significativa está situada no Atlântico, ao largo da costa do Sudeste brasileiro (1026 hPa), o que contribui para condições mais estáveis e secas na região.",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "Observa-se uma alta radiação de onda longa sobre grande parte do Brasil, com valores superiores a 400 W/m² nas regiões Norte, Nordeste e parte do Centro-Oeste. Isso indica a presença de cobertura de nuvens e temperaturas elevadas na superfície, que estão reemitindo a radiação de volta para a atmosfera. <br> No sul do continente, os valores de ROL são mais baixos, especialmente sobre a Patagônia e a Cordilheira dos Andes, refletindo temperaturas mais baixas e menor reemissão de radiação terrestre.",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta é intensa no Norte e Nordeste, com valores acima de 350 W/m², especialmente em Manaus (435,4 W/m²) e Teresina (391,4 W/m²), indicando forte incidência solar nessas regiões. <br> Menores valores são observados no sul do continente, compatíveis com a estação do ano (inverno) e a maior cobertura de nuvens.",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "As temperaturas máximas são elevadas no Norte e Nordeste, com valores acima de 30°C. <br> Em Manaus (33,3°C), Boa Vista (31,4°C) e Belém (32,1°C), Teresina (33,1 °C). <br> Com destaque para Cuiabá (35,0 °C) e Campo Grande (35,8 °C) no Centro-Oeste, apresentando as maiores maximas das capitais brasileiras",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "A temperatura média segue um padrão semelhante, com altas temperaturas médias no Norte (Manaus, 30,2°C) e baixas médias no Sul (Porto Alegre, 17,5°C).",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "As mínimas são baixas no Sul, com destaque para a região dos Andes e Patagônia, onde os valores caem para cerca de -12°C. <br> Manaus (28,2°C) é a capital com a maior temperatura mínima e São Paulo (12,4°C) com a menor mínima entre as capitais brasileiras.",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "A umidade relativa está bastante elevada no Norte e Nordeste, com valores acima de 70% em muitas áreas, como Boa Vista (84,6%), Macapá (75,5%) e Manaus (70,8%). <br> No Centro-Oeste e Sudeste, observa-se valores mais baixos, com Campo Grande registrando apenas 26,2%, Cuiabá com 32,4% e São Paulo com 46,0%, indicando condições secas nessas capitais. <br> O sul do Pará, o extremo sul do Amazonas, Rondônia, Mato Grosso, Mato Grosso do Sul, sudoeste de Goiás e noroeste de São Paulo são as regiões que estão com umidade relativa abaixo dos 50%. Essa condição, diga-se de passagem, favorece a ocorrência de eventos de queimadas no Pantanal.",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "As maiores concentrações de umidade específica estão no Norte, com Boa Vista (20,3 g/kg) e Macapá (19,4 g/kg) mostrando valores elevados. No Sul e parte do Sudeste, os valores são consideravelmente menores, refletindo uma massa de ar mais seca.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "Ventos intensos são observados ao largo da costa do Chile e no Atlântico Sul, associados aos sistemas de baixa pressão. No continente, os ventos são mais moderados, com algumas rajadas significativas no Nordeste, especialmente em Recife (5,3 m/s ou 19,08 km/h).",
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
