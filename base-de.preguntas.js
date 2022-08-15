function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿QUE AÑO SE JUGO EL PRIMER SUPER CLASICO FBC AURORA VS FBC MELGAR?",
      ayuda: "El aurora juega  su primer clasico el 1919",
      ayudaImg: "/images/respuesta1.png",
      imagen: "/images/1er.png",
      respuesta: "1919",  
      distractores: ["2010", "1995", "1952"],
    },
    {
      pregunta: "¿QUE AÑO SE JUGÓ EL PARTIDO FBC AURORA VS DINAMO DE MOSCÚ?",
      ayuda: "",
      imagen: "/images/2.jpg",
      respuesta: "1964",
      distractores: ["1960", "1961", "1969"],
    },
    {
      pregunta: "¿RESULTADO DEL PRIMER SUPER CLASICO AREQUIPEÑO EN LA PROFESIONAL FBC AURORA VS FBC MELGAR?",
      respuesta: "Fbc Aurora 2-0 Fbc Melgar",
      imagen: "/images/3.jpg",
      distractores: ["Fbc Aurora 0 - 0 Fbc Melgar", "Fbc Aurora 0 - 3 Fbc Melgar", "Fbc Aurora 3-1 Fbc Melgar"],
    },
    {
      pregunta: "¿PRESIDENTE QUE GESTIONÓ LA GIRA DEL FBC AURORA A CENTRO AMERICA?",
      respuesta: "Pedro P. Días",
      imagen: "/images/4.jpg",
      distractores: ["Mauricio Marquina", "Jose Luis Sanca", "Jose Luis Cornejo"],  
    },
    {
      pregunta: "¿PARTIDO FBC AURORA VS ALFONSO UGARTE CORRESPONDE A?",
      respuesta: "Primer partido Oficial en el estadio de Monumental de la Unsa",
      imagen: "/images/5.jpg",
      distractores: ["Final de la Copa Perú 1994 de la Copa Perú", "Partido de Inauguración del Estadio Monumental de la Unsa", "Partido inaugural de la primera etapa del estadio Monumental de la Unas"],  
    },
    {
      pregunta: "¿ALIANZA LIMA VS AURORA, QUE AÑO FUE, RESULTADO?",
      respuesta: "1989 Ganador: Fbc Aurora 2-1",
      imagen: "/images/6.jpg",
      distractores: ["1982 Ganador: Alianza Lima 2-0", "1987 Ganador: Fbc Alianza Lima 3-0", "1990 Ganador: Fbc Aurora 3-1"],  
    },
    {
      pregunta: "¿RESULTADOS DE LAS LLAVE DE LIGUILLA Y CLASIFICADO 1989 FBC AURORA VS SPORTING CRISTAL?",
      respuesta: "Fbc Aurora vs Cristal 2-0 / 1-2 Ganador de Llave: Fbc Aurora",
      imagen: "/images/7.jpg",
      distractores: ["Fbc Aurora vs Cristal 2-1 / 2-0 Ganador de Llave: Fbc Aurora", "Fbc Aurora vs Cristal 3-1 / 0-1 Ganador de Llave: Fbc Aurora", "Fbc Aurora vs Cristal 1-1 / 0-3 Ganador de Llave: Sporting Cristal"],  
    },
    {
      pregunta: "¿AÑO DE LA FAMOSA GIRA A CENTRO AMERICA?",
      respuesta: "1934",
      imagen: "/images/8.jpg",
      distractores: ["1931", "1939", "1927"],  
    },
    {
      pregunta: "¿PUESTO OCUPADO EN TORNEO REGIONAL 1989?",
      respuesta: "Tercer Lugar",
      imagen: "/images/9.jpg",
      distractores: ["Primer Lugar", "Cuarto Lugar", "Setimo Lugar"],  
    },
    {
      pregunta: "¿ QUE PRESIDENTE QUE LLEVÓ A LA PROFESIONAL AL FBC AURORA?",
      respuesta: "Jose Cornejo",
      imagen: "/images/10.jpg",
      distractores: ["Pedro P. Diaz", "Jose Luis Sanca ", "Fabio Velarde"],  
    },
  ];