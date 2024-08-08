const bulletinsSabado = [
  {
    title: "<i class='bi bi-cloud-lightning-rain-fill'></i> Precipitação:",
    text: "A distribuição de precipitação mostra acumulados significativos em várias regiões:<br><br>Florianópolis apresenta um acumulado de 55,7 mm causado por atuação do sistema frontal.<br><br>  Curitiba com 23,1 mm.<br><br> Belém também com valores expressivos, registrando 12,4 mm.<br><br>A precipitação se concentra principalmente na região sul e partes do norte e nordeste do Brasil, sugerindo a atuação de sistemas frontais e a presença de umidade significativa nessas áreas.",
  },
  {
    title: "<i class='bi bi-speedometer'></i> Pressão:",
    text: "A pressão atmosférica apresenta um padrão de baixa pressão em várias áreas do Brasil, destacando-se a baixa pressão de 799 hPa sobre Roraima e 782 hPa no cone sul. A Alta Subtropical do Atlântico Sul (ASAS) com 1027 hPa se mostra bem definida e atuando bem próximo à costa brasileira, motivo pelo qual, o sistema frontal permanece atuando sobre as áreas do extremo norte do Rio Grande do Sul, Santa Catarina, Paraná e chegando em Mato Grosso do Sul e São Paulo",
  },
  {
    title: "<i class='bi bi-cloud-sun'></i> Radiação de Onda Longa:",
    text: "Reflete a emissão de energia térmica da superfície terrestre para a atmosfera. As áreas com maior ROL estão associadas a temperaturas mais elevadas, indicando intensa perda de energia térmica durante o período noturno.<br><br>As áreas com maior emissão de radiação de onda longa estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (424,6 W/m²), Manaus (424,9 W/m²) e Cuiabá (379,4 W/m²).",
  },
  {
    title: "<i class='bi bi-sun'></i> Radiação de Onda Curta:",
    text: "A radiação de onda curta (ROC) representa a energia solar que atinge a superfície terrestre. As áreas com maior ROC estão associadas a intensa insolação, contribuindo para temperaturas elevadas durante o dia.<br><br>As áreas com maior incidência de ROC estão concentradas no norte e nordeste do Brasil.<br><br> Destaques para Boa Vista (424,6 W/m²), Manaus (424,9 W/m²) e Cuiabá (379,4 W/m²).",
  },
  {
    title: "<i class='bi bi-thermometer-high'></i> Temperatura Máxima:",
    text: "As máximas são elevadas no norte do continente, com Porto Velho registrando 36,8°C e Manaus 33,2°C.<br><br> Pode-se observar o efeito da frente fria em Campo Grande com máxima de 22,6°C.<br><br> No sul, as temperaturas são mais amenas, com Porto Alegre registrando uma máxima de 18,6°C.",
  },
  {
    title: "<i class='bi bi-thermometer-half'></i> Temperatura Média:",
    text: "A média das temperaturas também segue essa tendência, com valores altos no norte e mais baixos no sul.",
  },
  {
    title: "<i class='bi bi-thermometer-low'></i> Temperatura Mínima:",
    text: "As temperaturas mínimas são mais baixas no sul, com Porto Alegre registrando 13,8°C, indicando noites mais frias nesta região.",
  },
  {
    title: "<i class='bi bi-droplet-half'></i> Umidade Relativa:",
    text: "A umidade relativa está elevada em grande parte do continente, com valores acima de 70%:<br><br> Florianópolis e Porto Alegre com valores de 97,9% e 78,2%, respectivamente.<br><br> Região norte e nordeste com umidade relativa variando entre 70% e 90%, favorecendo a formação de nuvens e precipitação nessas áreas. A área conhecida como MATUPIBA ( Maranhão, Tocantins, Piauí e Bahia) apresenta umidade igual ou abaixo dos 50%.<br><br>Menores valores são observados no centro-oeste do Brasil, com Goiânia registrando 34,6%. <br><br> Pode-se observar, a primeira vez neste mês, a região do Pantanal brasileiro com umidade próximo ou acima dos 50% causada pela atuação da frente fria, ajudando a diminuir o índice de incêndios",
  },
  {
    title: "<i class='bi bi-moisture'></i> Umidade Específica:",
    text: "A umidade específica também reflete uma maior concentração de umidade na região norte, com valores de 20,3 g/kg em Manaus e em Boa Vista. No sul, os valores são significativamente mais baixos, como em Porto Alegre (8,5 g/kg que está na retaguarda do sistema frontal com tempo estável) e Florianópolis (11 g/kg que está na dianteira do sistema frontal com tempo instável), destacando um ambiente mais seco em relação ao norte.",
  },
  {
    title: "<i class='bi bi-wind'></i> Velocidade do Vento:",
    text: "Velocidades de vento moderadas a fortes são observadas em várias regiões, especialmente no sul do continente e ao longo das áreas de baixa pressão.<br><br>Florianópolis registra ventos de até 5 m/s, enquanto outras áreas no norte, como Manaus, apresentam ventos mais fracos de 1,8 m/s.",
  },
  {
    title:
      "<i class='bi bi-tropical-storm'></i> Gradiente Térmico Sobre Oceânos:",
    text: "<ul><li><strong>Frentes:</strong>O gradiente térmico revela a presença de frentes frias na América do Sul. Uma frente fria pode ser observada avançando pelo cone sul, associada a um sistema de baixa pressão (782 hPa) na região do Chile e Argentina. Esta frente fria contribue para a diminuição das temperaturas. E outro sistema frontal atuando sobre Santa Catarina e Paraná</li><li><strong>Zona de Convergência Intertropical:</strong>A ZCIT está bem definida no hemifério norte, próxima da linha do Equador, como indicado pela linha tracejada em laranja. Este sistema é responsável por promover condições de maior instabilidade e precipitação nas regiões próximas, especialmente no norte da Amazônia e partes do Caribe.</li></ul>",
  },
];

const carouselSabado = document.getElementById("carouselSabado");
const bulletinTitleSabado = document.getElementById("bulletin-title-sabado");
const bulletinTextSabado = document.getElementById("bulletin-text-sabado");

carouselSabado.addEventListener("slid.bs.carousel", function () {
  const activeItem = carouselSabado.querySelector(".carousel-item.active");
  const index = activeItem.getAttribute("data-bs-slide-to");
  const bulletin = bulletinsSabado[index];
  bulletinTitleSabado.innerHTML = bulletin.title;
  bulletinTextSabado.innerHTML = bulletin.text;
});

// Inicializa o carrossel sem rotação automática
new bootstrap.Carousel(carouselSabado, {
  interval: false,
  ride: false,
});

const toggleSabado = document.getElementById("toggle-sabado");
const contentSabado = document.getElementById("content-sabado");

// Função para expandir/contrair
toggleSabado.addEventListener("click", () => {
  contentSabado.classList.toggle("show");
});
