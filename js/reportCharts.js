var g1report1 = new Chart(document.getElementById("r1sr1g1"), {
    type: 'horizontalBar',
    data: {
        labels: ["SALUD", "M. DEL INTERIOR Y SEGURIDAD PÚBLICA", "DEFENSA NACIONAL", "VIVIENDA Y URBANISMO", "ECONOMÍA, FOMENTO Y TURISMO", "HACIENDA", "M. DEL TRABAJO Y PREVISIÓN SOCIAL", "EDUCACIÓN", "JUSTICIA Y DERECHOS HUMANOS", "DESARROLLO SOCIAL", "AGRICULTURA", "MINERÍA", "OBRAS PÚBLICAS", "RELACIONES EXTERIORES", "CONGRESO NACIONAL", "ENERGêA", "M. SECRETARÍA GENERAL DE LA PRESIDENCIA DE LA REPÚBLICA", "M. DEL MEDIO AMBIENTE", "PODER JUDICIAL", "TRANSPORTES Y TELECOMUNICACIONES", "M. SECRETARÍA GENERAL DE GOBIERNO", "M. DEL DEPORTE", "LA MUJER Y LA EQUIDAD DE GÉNERO", "M. PÚBLICO", "PRESIDENCIA DE LA REPÚBLICA", "TESORO PÚBLICO", "CONTRALORÍA GENERAL DE LA REPÚBLICA", "BIENES NACIONALES", "SERVICIO ELECTORAL"],
        datasets: [{
            label: 'Cantidad de proyectos',
            data: [39 ,27 ,25 ,17 ,15 ,13 ,12 ,11 ,8 ,8 ,6 ,5 ,5 ,5 ,4 ,4 ,3 ,3 ,3 ,3 ,3 ,2 ,2 ,1 ,1 ,1 ,1 ,1 ,1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(215, 152, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(215, 152, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(215, 152, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(215, 152, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(215, 129, 74, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(215, 129, 74, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(215, 129, 74, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(215, 129, 74, 1)',
                'rgba(215, 129, 74, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var g1report2 = new Chart(document.getElementById("r2sr1g2"), {
    type: 'line',
    data: {
        labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
        datasets: [{
          label: "Car Speed",
          data: [0, 59, 75, 20, 20, 55, 40],
        }]
      },
    options: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            fontColor: 'black'
          }
        },
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        }
      }
});

var r1sr1g1 = JSON.parse("../data/r1sr2g1.json");
console.log(r1sr1g1);