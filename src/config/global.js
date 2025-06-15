export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la economía internacional',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a la economía internacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto y alcance de la economía internacional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Factores que Influyen en la economía internacional',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Teorías del comercio internacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Teoría de la ventaja absoluta',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Teoría de la ventaja comparativa',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Teoría de Heckscher-Ohlin (modelo de dotación de factores)',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Nuevas teorías del comercio internacional',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Política comercial internacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Instrumentos de política comercial',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bilbao Ubillos, J. (Coord.), Longás García, J. C. (Coord.) & Aláez Allerr, R. (2009). Temas de economía mundial. Delta Publicaciones.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/170096',
    },
    {
      referencia:
        'Guillén, M. & Ontiveros, E. (2014). Retos para la economía internacional en un mundo cambiante. Estudios de Economía Aplicada, 32(3), 871-884.  ',
      link: 'http://www.redalyc.org/articulo.oa?id=30131893001',
    },
    {
      referencia:
        'Villarreal Ramírez, F. J., Guerrero Jiménez, J. I., de la Cruz Capetill, J. J. & Ayala Guzmán, M. L. (2020). El teorema de Heckscher y Ohlin y la industria mexicana de las nueces de nogal (Carya illinoinensis). Revista Mexicana de Agronegocios, 46, 406-421. ',
      link: ' https://www.redalyc.org/articulo.oa?id=14163631005',
    },
    {
      referencia:
        'Steinberg, F. (2012). La nueva teoría del comercio internacional y la política comercial estratégica. B - EUMED.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/51475',
    },
    {
      referencia:
        'Navarro Chávez, J. C. & Zamora Torres, A. I. (2012). La competitividad de la política comercial en la economía internacional a través del análisis de componentes principales. Investigación y Ciencia, 20(54), 40-48.  ',
      link: 'http://www.redalyc.org/articulo.oa?id=67424408006',
    },
    {
      referencia:
        'Pueyo Abardía, S. (2006). Política comercial y política de competencia en el sistema comercial mundial. Red Agrociencia. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/7542 ',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdos comerciales',
      significado:
        'Pactos entre países, para facilitar el comercio, reduciendo barreras arancelarias y promoviendo la cooperación económica.',
    },
    {
      termino: 'Arancel',
      significado:
        'Impuesto aplicado a bienes importados o exportados, utilizado para proteger industrias nacionales o generar ingresos fiscales.',
    },
    {
      termino: 'Balanza comercial',
      significado:
        'Diferencia entre el valor de las exportaciones e importaciones de un país en un período determinado.',
    },
    {
      termino: 'Bloques económicos',
      significado:
        'Agrupaciones de países que buscan integración comercial y económica, como la UE, T-MEC o MERCOSUR.',
    },
    {
      termino: 'Competitividad internacional',
      significado:
        'Capacidad de un país para producir bienes y servicios de manera eficiente y competir en mercados globales.',
    },
    {
      termino: 'Déficit comercial',
      significado:
        'Situación en la que un país importa más bienes y servicios de los que exporta.',
    },
    {
      termino: 'Exportación',
      significado:
        'Venta de bienes y servicios producidos en un país, hacia mercados internacionales.',
    },
    {
      termino: 'Globalización económica',
      significado:
        'Proceso de integración de mercados y economías a nivel mundial, facilitado por avances en tecnología, comunicación y comercio.',
    },
    {
      termino: 'Inversión Extranjera Directa (IED)',
      significado:
        'Flujo de capital de empresas extranjeras hacia un país, para establecer operaciones productivas o comerciales.',
    },
    {
      termino: 'Libre comercio',
      significado:
        'Política comercial que elimina barreras como aranceles o cuotas, permitiendo el intercambio de bienes sin restricciones.',
    },
    {
      termino: 'Proteccionismo',
      significado:
        'Estrategia económica que impone restricciones al comercio exterior, para proteger industrias nacionales de la competencia extranjera.',
    },
    {
      termino: 'Subsidios',
      significado:
        'Apoyos financieros otorgados por gobiernos para fomentar la producción nacional y mejorar la competitividad de ciertos sectores.',
    },
    {
      termino: 'Superávit comercial',
      significado:
        'Ocurre cuando un país exporta más bienes y servicios de los que importa.',
    },
    {
      termino: 'Tipo de cambio',
      significado:
        'Valor de una moneda en relación con otra, influenciado por factores económicos y políticos.',
    },
    {
      termino: 'Tratados de Libre Comercio (TLC)',
      significado:
        'Acuerdos entre países para reducir o eliminar barreras comerciales y facilitar el intercambio de bienes y servicios.',
    },
    {
      termino: 'Ventaja absoluta',
      significado:
        'Teoría que indica que un país debe especializarse en la producción de bienes donde es más eficiente.',
    },
    {
      termino: 'Ventaja comparativa',
      significado:
        'Concepto que explica cómo un país puede beneficiarse del comercio, especializándose en bienes con menor costo de oportunidad.',
    },
  ],
}
