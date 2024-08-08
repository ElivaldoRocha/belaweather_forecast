const bulletinsDomingo = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "A distribuição de precipitação mostra acumulados significativos no extremo norte do Brasil, especialmente em Boa Vista (17,4 mm). As demais regiões apresentam pouca ou nenhuma precipitação, indicando um dia relativamente seco na maior parte do país. No nordeste.<br><br> Maceió registra 12,2 mm provavelmente com gênise em Distúrbios Ondulatórios de Leste.<br><br> Na região sul, Porto Alegre registra acumulados de aproximadamente 3,7 mm oriundo de frentes frias.",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "A análise da pressão atmosférica revela várias áreas de baixa pressão sobre o continente, especialmente no sul do Brasil e Argentina, com valores abaixo de 1000 hPa. Isto pode estar associado a instabilidades e potencial para formação de sistemas de baixa pressão mais intensos, possivelmente resultando em condições de tempo severo.<br><br> A Alta Sub Tropical do Atlântico Sul (ASAS - 1031 hPa) está atuando mais ao leste diminuindo sua influência na costa brasileira.",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "Reflete a emissão de energia térmica da superfície terrestre para a atmosfera. As áreas com maior ROL estão associadas a temperaturas mais elevadas, indicando intensa perda de energia térmica durante o período noturno.<br><br>As áreas com maior emissão de radiação de onda longa estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (431,0 W/m²), Manaus (419,5 W/m²) e Cuiabá (364,4 W/m²)",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta (ROC) representa a energia solar que atinge a superfície terrestre. As áreas com maior ROC estão associadas a intensa insolação, contribuindo para temperaturas elevadas durante o dia.<br><br>As áreas com maior incidência de ROC estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (431,0 W/m²), Manaus (419,5 W/m²) e Cuiabá (364,4 W/m²).",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "Indicam calor intenso nas regiões Norte e Centro-Oeste do Brasil, com temperaturas acima de 34°C em cidades como Manaus (34,9°C), Cuiabá (34,6°C) e Porto Velho (33,9°C).<br><br> As regiões Sul e Sudeste apresentam temperaturas mais amenas, variando de 20°C a 28°C.",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "Também segue um padrão semelhante, destacando o calor persistente no Norte e Centro-Oeste e temperaturas moderadas no Sul e Sudeste. As temperaturas médias variam entre 26°C e 30°C em grande parte do território brasileiro.",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "Variam significativamente, com regiões do Sul apresentando valores mais baixos, como Porto Alegre (15,4°C) e Curitiba (15,6°C).<br><br> Enquanto o Norte e Nordeste registram mínimas mais altas, como Manaus (26,2°C) e Natal (23,2°C).",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "Os níveis de umidade relativa são elevados no Norte e Nordeste próximo ao litoral, com valores acima de 75%, favorecendo condições de maior desconforto térmico nessas áreas.<br>No Interior do Estado do Pará,alerta-se para umidade relativa igual ou abaixo dos 50%.<br><br>No Centro-Oeste a umidade está anaixo dos 50%, e Sudeste, os valores de umidade relativa são moderados, enquanto o Sul apresenta níveis mais altos.",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "Destaca-se maior concentração de vapor d'água na atmosfera nas regiões Norte e partes do Nordeste, com valores acima de 14 g/kg.<br><br>No Centro-Oeste, Campo Grande regista a menor umidade específica com 7,6 g/kg.<br><br> No Sul e partes do Sudeste, os valores são significativamente mais altas em relação ao Centro-Oeste, refletindo a umidade do ar nessas áreas.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "A velocidade do vento é moderada na maior parte do Brasil, com velocidades médias entre 2 (7,2 km/h) e 5 m/s (18 km/h).<br><br>No entanto, áreas ao sul do continente, próximas aos sistemas de baixa pressão, apresentam ventos mais intensos, que podem afetar as condições de navegação e aviação.",
  },
  {
    title:
      "<i class='bi bi-tropical-storm'></i> Gradiente Térmico Sobre Oceânos:",
    text: "<ul><li><strong>Frentes:</strong> Revela a presença de frentes frias na América do Sul. Uma frente fria pode ser observada avançando pelo cone sul, associada a um sistema de baixa pressão (775 hPa) na região do Chile e Argentina. Esta frente fria está contribuindo para a diminuição das temperaturas nas áreas ao sul.</li><li><strong>Zona de Convergência Intertropical:</strong>A ZCIT está bem definida ao norte do continente sul-americano, próxima da linha do Equador. Este sistema é responsável por promover condições de maior instabilidade e precipitação nas regiões próximas, especialmente no norte da Amazônia e partes do Caribe, como indicado pela baixa pressão (1010 hPa) na região.</li></ul>",
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
