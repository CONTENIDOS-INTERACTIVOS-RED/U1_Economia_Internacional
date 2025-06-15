<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Teorías del comercio internacional'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El comercio internacional ha sido objeto de estudio desde los inicios del pensamiento económico, porque la interacción comercial entre países ha sido un motor clave del crecimiento y desarrollo de las economías. A lo largo de la historia, diversas teorías han intentado explicar por qué los países comercian entre sí, qué beneficios obtienen de estos intercambios y cómo se determinan las ventajas competitivas de cada nación (Steinberg, 2012).
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Desde la perspectiva económica, el comercio internacional no solo permite que los países accedan a bienes y servicios que no producen internamente, sino que también fomenta la especialización, aumenta la eficiencia productiva y promueve el desarrollo de sectores estratégicos. A medida que las economías se han integrado globalmente, los fundamentos teóricos del comercio han evolucionado, pasando de las explicaciones basadas en la ventaja absoluta y comparativa, a modelos más complejos que incorporan factores como la dotación de recursos, las economías de escala y la innovación tecnológica.
    
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El estudio de las teorías del comercio internacional es fundamental para comprender las dinámicas del mercado global, la formulación de políticas comerciales y la toma de decisiones estratégicas, tanto para gobiernos como para empresas. Estas teorías proporcionan herramientas analíticas que permiten evaluar las relaciones comerciales entre países, identificar oportunidades de exportación e importación, y diseñar estrategias para mejorar la competitividad en el escenario internacional (Steinberg, 2012).
        p Las teorías del comercio internacional pueden agruparse en dos grandes categorías: 
  
    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/4.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="18.5%" y="43.5%" numero="+")
                h5 Las teorías clásicas
                p Se centran en la especialización y la eficiencia productiva.
    
              .bg-color-white.box-shadow.p-3(x="80.5%" y="41.5%" numero="+")
                h5 Las teorías modernas
                p Incorporan elementos como la estructura del mercado, el papel de las empresas multinacionales y los efectos de la globalización. 
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white A continuación, se analizan algunas de las principales teorías que han marcado el estudio del comercio internacional y su evolución a lo largo del tiempo.
    
              

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Teoría de la ventaja absoluta
    
    p.mb-4 La teoría de la ventaja absoluta constituye uno de los pilares del pensamiento económico clásico, al explicar cómo los países pueden beneficiarse del comercio internacional mediante la especialización.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Teoría de la ventaja absoluta
            p.mb-4(data-aos="fade-right") En el PDF <b>Teoría de la ventaja absoluta</b>, se analizan los fundamentos planteados por Adam Smith, sus implicaciones en la eficiencia productiva y los beneficios del intercambio entre naciones. Este material ofrece una visión clara sobre el papel de la especialización en la competitividad global y sus límites frente a escenarios más complejos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Teoría de la ventaja absoluta.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/6.png', alt='')
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Teoría de la ventaja comparativa

    .bg-full-width.bg-color-8
      .p-4.p-md-5
        .row
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") La teoría de la ventaja comparativa fue formulada por David Ricardo en 1817, en su obra Principios de economía política y tributación. Esta teoría amplió el concepto de ventaja absoluta desarrollado por Adam Smith, proporcionando una explicación más completa sobre por qué los países comercian entre sí, incluso cuando uno de ellos es más eficiente en la producción de todos los bienes. 
            p.mb-5 Según Ricardo, un país puede beneficiarse del comercio internacional incluso si no tiene una ventaja absoluta en ningún bien, siempre y cuando se especialice en la producción de aquellos bienes en los que tiene una menor desventaja relativa en comparación con otros países (Steinberg, 2012).
        
            .bg-color-5.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema2/8.svg", style="max-width: 190px").mx-auto
                .col-lg
                  p.mb-0 La ventaja comparativa se basa en la idea de costo de oportunidad, es decir, lo que se deja de producir al optar por fabricar otro bien. En este sentido, un país debe especializarse en producir aquellos bienes para los cuales el costo de oportunidad sea menor en relación con otros países.
    
    p Luego, al intercambiar estos bienes con otras naciones, todos los países involucrados en el comercio pueden obtener un mayor beneficio que si intentaran producir todo por sí mismos.
    p.mb-4 Para comprender mejor esta teoría, supongamos que hay dos países: Brasil y Japón. 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5 Tema 1
              p Ambos pueden producir café y automóviles, pero Brasil es más eficiente en la producción de café, mientras que Japón es altamente eficiente en la producción de automóviles. Sin embargo, Japón aún puede producir café, aunque con un mayor costo en comparación con Brasil, y Brasil también puede fabricar automóviles, aunque de manera menos eficiente que Japón.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5 Tema 2
              p Si Japón decide producir café en lugar de automóviles, el costo de oportunidad sería muy alto, porque perdería la posibilidad de producir una gran cantidad de automóviles, donde realmente tiene una ventaja. Por el contrario, si Brasil decide producir automóviles en lugar de café, también incurriría en un costo de oportunidad significativo, pues podría estar produciendo café con una eficiencia mucho mayor.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7
              h5 Tema 3
              p Siguiendo la lógica de la ventaja comparativa, Brasil debería especializarse en la producción de café, mientras que Japón debería enfocarse en la fabricación de automóviles. Posteriormente, ambos países pueden intercambiar estos bienes y, de esta manera, obtener un mayor beneficio que si intentaran producir ambos productos de manera independiente.
    
    p.mb-4 Este modelo demuestra que, aun cuando un país pueda ser menos eficiente en la producción de todos los bienes, aún puede beneficiarse del comercio especializándose en lo que produce con una menor desventaja relativa.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En otras palabras, la ventaja comparativa es una de las bases fundamentales del libre comercio, debido a que demuestra que el comercio internacional permite a los países mejorar su eficiencia y bienestar económico. Cuando cada nación se enfoca en lo que produce mejor en términos relativos y comercia con otros países, la producción global se vuelve más eficiente y todos pueden beneficiarse de una mayor disponibilidad de bienes y servicios.
        p(data-aos="fade-left") Esta teoría ha servido como justificación para la reducción de barreras comerciales y la promoción de acuerdos de libre comercio, dado que sugiere que la apertura comercial permite a las economías alcanzar un mayor nivel de bienestar.
        p A pesar de su relevancia, la teoría de Ricardo presenta ciertas limitaciones:
    
    .bg-full-width.bg-color-9
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/14.svg" alt="" style="width: 90px")
              h5.text-center Primer tema
              p.mb-0.text-center Una de las críticas más importantes es que no considera los costos de transporte, los cuales pueden ser significativos en el comercio internacional. 
        
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/15.svg" alt="" style="width: 90px")
              h5.text-center Segundo tema
              p.mb-0.text-center Además, asume que los recursos son completamente móviles dentro de un país, pero no entre países, lo que en la práctica no siempre es cierto.

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.text-white.order-2
                p.mb-0 Otra limitación es que no toma en cuenta los efectos del comercio sobre la distribución del ingreso dentro de un país. Si un país se especializa en un sector específico, algunos trabajadores o industrias, pueden verse afectados negativamente, generando desigualdades económicas internas. Es decir, la teoría asume que los beneficios del comercio son automáticos, sin considerar que factores como las políticas comerciales, la inversión en tecnología y la educación, pueden influir en la capacidad de un país para especializarse en determinadas industrias.
              .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/16.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
        
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-10.p-5(data-aos="fade-left")
          p.mb-0 De igual forma, a pesar de sus limitaciones, la ventaja comparativa sigue siendo un concepto clave en la economía moderna. La globalización ha permitido que los países desarrollen cadenas de valor internacionales, en las cuales cada país se especializa en una etapa de la producción en función de su ventaja comparativa.
        .bg-color-11.px-4(data-aos="fade-left")
          .row.align-items-end
            .col-lg-auto
              img(src="@/assets/curso/tema2/18.svg", style="max-width: 190px").mx-auto
            .col-lg.p-4
              p.mb-0 Por ejemplo, en la industria tecnológica, China se especializa en la fabricación de componentes electrónicos, Estados Unidos en el diseño de software y Alemania en la producción de maquinaria de precisión. Gracias a esta división del trabajo basada en la ventaja comparativa, las empresas pueden reducir costos y mejorar la eficiencia en la producción global.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") En conclusión, la teoría de la ventaja comparativa es uno de los pilares del comercio internacional, puesto que demuestra que el intercambio de bienes y servicios permite mejorar la eficiencia económica y el bienestar general, incluso cuando un país no tiene una ventaja absoluta, en ningún sector.
    
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Su aplicación ha sido clave para la formulación de políticas de apertura comercial y acuerdos internacionales, aunque su implementación debe considerar factores adicionales como los costos de transporte, la equidad en la distribución del ingreso y la sostenibilidad de las industrias nacionales.
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Teoría de Heckscher-Ohlin (modelo de dotación de factores)

    p.mb-4 La comprensión de los patrones de comercio entre países requiere un enfoque que considere sus recursos disponibles y ventajas productivas.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Teoría de Heckscher-Ohlin (modelo de dotación de factores)
            p.mb-4(data-aos="fade-right") En el PDF <b>Teoría de Heckscher-Ohlin</b>, se estudia cómo la dotación de factores como el trabajo y el capital, influye en la especialización y el intercambio internacional. Este modelo permite analizar las ventajas competitivas de las naciones, así como los efectos del comercio sobre la distribución del ingreso y la evolución de las economías globalizadas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Teoría de Heckscher-Ohlin (modelo de dotación de factores).
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/21.png', alt='')
      
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Nuevas teorías del comercio internacional
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/22.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") Las nuevas teorías del comercio internacional surgieron como una evolución de los modelos tradicionales, ofreciendo una visión más realista y flexible sobre los factores que determinan los flujos comerciales entre países. Mientras que las teorías clásicas, como la ventaja absoluta de Adam Smith o la ventaja comparativa de David Ricardo, se centran en diferencias en costos de producción y dotación de factores, las nuevas teorías incorporan elementos como las economías de escala, la diferenciación de productos, el papel de las multinacionales y la importancia de la tecnología en la competitividad global (Steinberg, 2012).
    
        .bg-color-11.p-4(data-aos="fade-left")
          p.mb-0 Uno de los principales exponentes de estas nuevas teorías es Paul Krugman quien, en la década de 1980, desarrolló el modelo de comercio basado en economías de escala y competencia imperfecta. Krugman argumentó que en muchos sectores industriales, los países comercian entre sí no solo porque tienen diferentes dotaciones de factores, sino también porque la producción a gran escala reduce los costos unitarios y permite a las empresas obtener ventajas competitivas. En este contexto, el comercio internacional no se da únicamente entre países con diferencias en recursos o productividad, sino también entre economías similares, que buscan aprovechar ventajas en la producción masiva de bienes diferenciados.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        div.p-4.bg-color-12
          p.mb-0.text-bold.text-center Las economías de escala explican porqué países con características económicas similares, pueden especializarse en la producción de bienes similares y comerciar entre sí.
        div.p-4.bg-color-13
          .row.align-items-center
            .col-lg-auto.order-lg-2.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/23.svg", style="max-width: 174px").mx-auto
            .col-lg.order-lg-1
              p.mb-0 Por ejemplo, Alemania y Japón, dos economías altamente desarrolladas, exportan automóviles, pero los modelos producidos en cada país tienen características únicas que los diferencian en el mercado.
        div.p-4.bg-color-6
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/24.svg", style="max-width: 304px").mx-auto
            .col-lg
              p.mb-0 Este fenómeno contradice la idea de que el comercio internacional debe basarse exclusivamente en diferencias en costos de producción y muestra cómo la innovación y la diferenciación de productos juegan un papel clave en la competitividad global.
        div.p-4.bg-color-14
          .row.align-items-center
            .col-lg-auto.order-lg-2.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/25.svg", style="max-width: 299px").mx-auto
            .col-lg.order-lg-1
              p.mb-0 Las grandes empresas que dominan sectores como la industria automotriz, la tecnología y la industria farmacéutica, han logrado expandirse a través del comercio internacional no solo por sus ventajas en costos, sino también por su capacidad de ofrecer productos diferenciados y reconocidos a nivel mundial.
    
    p.mb-4 Conozcamos algunos elementos o conceptos fundamentales en las nuevas teorías del comercio internacional:

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mn-lg-0
        figure
          img(src="@/assets/curso/tema2/26.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="1" titulo="Papel de las empresas multinacionales") En lugar de que el comercio se limite a la exportación de bienes terminados desde un país a otro, muchas empresas han desarrollado cadenas de valor globales, estableciendo fábricas, centros de distribución y oficinas en distintas partes del mundo. Esto ha llevado a un comercio más complejo, donde los bienes y servicios cruzan varias fronteras antes de llegar al consumidor final. Por ejemplo, un teléfono inteligente puede ser diseñado en Estados Unidos, ensamblado en China con componentes fabricados en Corea del Sur y Japón, y distribuido en mercados de Europa y América Latina. Este fenómeno, impulsado por la globalización y los avances en el transporte y la comunicación, ha transformado la estructura del comercio internacional y ha reducido la relevancia de las antiguas explicaciones, basadas solo en la dotación de factores.
          p(numero="2" titulo="Papel de la innovación y la tecnología") Modelos como el de la brecha tecnológica, sostienen que los países más desarrollados tienen una ventaja inicial en la producción de bienes innovadores, dado que cuentan con mayor inversión en investigación y desarrollo, así como con un entorno favorable para la generación de nuevas ideas. Sin embargo, con el tiempo, otros países pueden cerrar esa brecha tecnológica mediante la adopción de conocimientos, la inversión en educación y la transferencia de tecnología. Este enfoque explica el porqué algunos países emergentes, como China e India, han pasado de ser productores de bienes de bajo costo, a desarrollar industrias tecnológicas avanzadas que compiten en el mercado global.
          p(numero="3" titulo="Modelo de comercio intraindustrial") Describe el intercambio de productos similares entre países con estructuras económicas parecidas. A diferencia de las teorías tradicionales, que explicaban el comercio entre economías con grandes diferencias en su estructura productiva, el comercio intraindustrial muestra que países con niveles de desarrollo similares, pueden intercambiar bienes dentro de una misma industria. Esto ocurre, por ejemplo, en la industria automotriz, donde países europeos como Alemania, Francia e Italia, comercian vehículos de distintas marcas entre sí, a pesar de que todos tienen una producción nacional significativa. Este tipo de comercio se basa en la especialización en nichos de mercado, la diferenciación de productos y la preferencia de los consumidores por la variedad.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.text-white
                p.mb-0 Las nuevas teorías también han destacado la importancia de las políticas comerciales en la configuración del comercio internacional. Mientras que las teorías clásicas asumen mercados perfectamente competitivos y la ausencia de intervención estatal, los modelos modernos reconocen que los gobiernos pueden influir en la estructura del comercio a través de incentivos, subsidios, regulación de inversiones extranjeras y acuerdos comerciales. En este sentido, la política industrial de un país puede fomentar el desarrollo de sectores estratégicos, promoviendo la competitividad en áreas como la tecnología, la biotecnología y la manufactura avanzada.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/27.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-4 Otro enfoque relevante dentro de estas teorías es la economía del conocimiento, que enfatiza la importancia del capital humano, la educación y la capacidad de innovación en la determinación de la ventaja competitiva de los países. 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/28.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En un mundo donde la producción de bienes de alto valor agregado depende cada vez más del conocimiento y la tecnología, las naciones que invierten en educación, investigación y desarrollo pueden lograr una mayor participación en el comercio internacional, independientemente de su dotación inicial de recursos naturales.
    
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/29.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En la actualidad, las nuevas teorías del comercio internacional han demostrado ser esenciales para comprender la complejidad de los intercambios globales y la forma en que los países compiten en un entorno altamente interconectado. La evolución del comercio ha demostrado que las ventajas comparativas no son estáticas, sino que pueden cambiar con el tiempo, a medida que las naciones invierten en nuevas capacidades y desarrollan estrategias para fortalecer su posición en el mercado global. Por ello, el estudio de estas teorías sigue siendo fundamental para diseñar políticas económicas que permitan a los países adaptarse a los cambios en el comercio mundial y aprovechar al máximo las oportunidades de crecimiento que ofrece la globalización.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/120836 " target="_blank" rel="noopener noreferrer") Casanova Montero, A. R. & Zuaznábar Morales, I. R. (2018). El comercio internacional: teorías y políticas. Editorial Universo Sur. 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.redalyc.org/articulo.oa?id=87025385007" target="_blank" rel="noopener noreferrer") Rosa Polanco, H. (2012). El Modelo Ricardiano De Ventaja Comparativa Y El Comercio Contemporáneo: El Caso Del Sector De "Equipos De Transporte" En La Industria Manufacturera. Ciencia y Sociedad, XXXVII(4), 529-555.  

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://espanol.libretexts.org/Negocio/Negocios/Negocios_Avanzados/Libro%3A_Negocios_Internacionales/02%3A_Comercio_Internacional_e_Inversi%C3%B3n_Extranjera_Directa/2.02%3A_%C2%BFQu%C3%A9_es_la_teor%C3%ADa_del_comercio_internacional%3F " target="_blank" rel="noopener noreferrer") LibreTexts. (s.f.). ¿Qué es la teoría del comercio internacional? LibreTexts.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=V6Vfbi5Cyjg " target="_blank" rel="noopener noreferrer") Heri Gutierrez Garcia. (2018l). Teoría del comercio internacional [video]. YouTube. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=BNn3TLizXMY " target="_blank" rel="noopener noreferrer") Universidad Continental. (2021). Modelo de Heckscher Ohlin [video]. YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
