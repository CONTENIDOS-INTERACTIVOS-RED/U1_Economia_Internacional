<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción a la economía internacional'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 La economía internacional es una disciplina esencial para comprender las dinámicas económicas entre países en un contexto globalizado.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Introducción a la economía internacional
            p.mb-4(data-aos="fade-right") En el PDF <b>Introducción a la economía internacional</b>, se abordan conceptos claves sobre comercio exterior, inversión extranjera y políticas económicas, analizando su impacto en el desarrollo y la competitividad de las naciones. Este material permite al lector identificar oportunidades y desafíos en un mundo interdependiente, facilitando una visión estratégica del entorno económico global.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Introducción a la economía internacional.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/1.png', alt='')


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto y alcance de la economía internacional

    p La economía internacional es una rama de la economía que estudia la interdependencia económica entre los países y cómo sus decisiones afectan los mercados globales. 
    p.mb-4 A continuación, conozcamos más sobre este concepto:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/2.png")
            .col-lg-7
              h5 Campo de estudio
              p Su campo de estudio abarca el comercio de bienes y servicios, los flujos de capital, las políticas económicas y los efectos de la globalización en las economías nacionales. A diferencia de la economía nacional, que analiza el comportamiento de los mercados dentro de un país, la economía internacional investiga cómo los intercambios entre naciones, generan beneficios y desafíos para sus respectivos sistemas económicos (Bilbao Ubillos, Longás García & Aláez Allerr, 2009).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7
              h5 Comercio internacional
              p Uno de los conceptos clave dentro de esta disciplina es el comercio internacional, que analiza cómo los países intercambian bienes y servicios a través de sus fronteras. Este intercambio se basa en la especialización productiva y la ventaja comparativa, permitiendo que las economías produzcan los bienes en los que son más eficientes y obtengan aquellos que les resultaría más costoso fabricar internamente. La teoría del comercio internacional ha evolucionado a lo largo del tiempo, desde los enfoques clásicos de Adam Smith y David Ricardo hasta las modernas teorías de Paul Krugman, que incorporan factores como las economías de escala y la competencia imperfecta.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7
              h5 Flujos de capital
              p Además del comercio de bienes y servicios, la economía internacional estudia los flujos de capital, que incluyen la inversión extranjera directa (IED) y la inversión de cartera. La IED se produce cuando una empresa de un país invierte en activos productivos en otra nación, como fábricas, infraestructura o empresas locales, con el fin de establecer operaciones comerciales en el extranjero. Esta inversión es crucial para el desarrollo económico, porque fomenta la creación de empleos, la transferencia de tecnología y el crecimiento del sector industrial. Por otro lado, la inversión de cartera se refiere a la compra de activos financieros, como acciones y bonos, en mercados extranjeros, lo que influye en la estabilidad de los sistemas financieros y en la disponibilidad de financiamiento para los gobiernos y empresas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7
              h5 Alcance de la economía internacional
              p Otro aspecto fundamental del alcance de la economía internacional es la política económica global, que abarca las decisiones y regulaciones adoptadas por los gobiernos y organismos internacionales para gestionar las relaciones económicas entre los países. Las políticas comerciales, fiscales y monetarias, tienen un impacto directo en la forma en que las economías interactúan entre sí. Los gobiernos pueden aplicar medidas como aranceles, cuotas de importación y subsidios para proteger su industria nacional o fomentar el comercio con determinados socios estratégicos. Asimismo, organismos internacionales como el Fondo Monetario Internacional (FMI), el Banco Mundial y la Organización Mundial del Comercio (OMC), juegan un papel clave en la regulación y supervisión de las relaciones económicas globales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              h5 Impacto de la globalización
              p La economía internacional también examina el impacto de la globalización en los mercados y en la distribución de la riqueza. La globalización ha permitido la expansión de mercados y el acceso a una mayor diversidad de bienes y servicios, pero también ha generado desafíos como la competencia desigual entre países, la deslocalización de industrias y las crisis financieras internacionales. La apertura comercial y la integración económica han transformado la manera en que los países diseñan sus políticas económicas, generando nuevos debates sobre el papel del Estado en la regulación de la actividad económica global.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7
              h5 Campo de estudio
              p Otro elemento clave en la economía internacional es la integración regional, que se refiere a los acuerdos entre países para facilitar el comercio y la inversión. Ejemplos de integración económica incluyen la Unión Europea (UE), el Tratado entre México, Estados Unidos y Canadá (T-MEC) y el Mercado Común del Sur (MERCOSUR). Estos bloques económicos buscan reducir barreras comerciales, armonizar regulaciones y fomentar la cooperación entre sus miembros para mejorar la competitividad en el escenario global.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") El estudio de la economía internacional es crucial para comprender cómo las decisiones de un país afectan a otros y cómo los factores externos influyen en la economía interna de cada nación. A través de este análisis, los gobiernos pueden diseñar políticas económicas más efectivas, las empresas pueden identificar oportunidades de expansión y los inversionistas pueden evaluar riesgos y beneficios en los mercados internacionales.
    
        .bg-color-5.px-4.pt-4(data-aos="fade-left")
          .row.align-items-end
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 190px").mx-auto
            .col-lg.p-4
              p.mb-0 En conclusión, la economía internacional es una disciplina que permite analizar las interacciones entre los países en términos de comercio, inversión y políticas económicas. Su estudio es fundamental para entender los efectos de la globalización, la integración de mercados y los desafíos que enfrentan las economías, en un mundo cada vez más interconectado. Con un enfoque amplio que abarca desde el comercio hasta las regulaciones internacionales, la economía internacional proporciona las herramientas necesarias para interpretar y anticipar los cambios en el entorno económico global.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Factores que Influyen en la economía internacional
    
    p La economía internacional está determinada por una serie de factores que afectan el comercio, la inversión y las relaciones económicas entre los países. Estos elementos influyen en la competitividad de las naciones, la estabilidad de los mercados y la dinámica de la globalización. Comprender estos factores permite analizar cómo evolucionan los flujos comerciales y de inversión, así como identificar oportunidades y riesgos en el entorno económico global (Guillén & Ontiveros, 2014).
    p.mb-4 Conozcamos los factores y/o componentes más relevantes:
  
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="1" titulo="La globalización") Es un proceso que ha facilitado la expansión de mercados y el intercambio de bienes y servicios, a nivel mundial. La globalización ha reducido las barreras comerciales y ha promovido la integración económica entre países, permitiendo un acceso más amplio a productos, tecnologías y capital. Sin embargo, también ha generado desafíos como la desigualdad económica, la concentración de la riqueza y la vulnerabilidad de algunos sectores productivos, ante la competencia externa.
          p(numero="2" titulo="La política comercial") Abarca las regulaciones y estrategias que los gobiernos implementan para gestionar sus relaciones comerciales con otras naciones. Estas políticas incluyen la aplicación de aranceles, subsidios, cuotas de importación y tratados de libre comercio. Los países pueden adoptar políticas proteccionistas para defender su industria nacional de la competencia extranjera o, por el contrario, fomentar el comercio exterior mediante acuerdos multilaterales que faciliten el intercambio de bienes y servicios. La política comercial también está influenciada por organismos internacionales como la Organización Mundial del Comercio (OMC), que busca regular y promover un comercio global equitativo (Guillén & Ontiveros, 2014).
          p(numero="3" titulo="El tipo de cambio") Este factor afecta la competitividad de los productos en los mercados globales. Cuando la moneda de un país se deprecia frente a otras divisas, sus exportaciones se vuelven más atractivas para los compradores extranjeros, mientras que las importaciones se encarecen. Por el contrario, una moneda sobrevaluada puede hacer que los bienes nacionales sean menos competitivos en el exterior, afectando el crecimiento económico y la balanza comercial. Las políticas monetarias de los bancos centrales, como la fijación de tasas de interés y la intervención en el mercado cambiario, juegan un papel crucial en la estabilidad del tipo de cambio.
          p(numero="4" titulo="La inversión extranjera directa - IED") La IED, es otro componente fundamental en la economía internacional. Este tipo de inversión ocurre cuando empresas de un país establecen operaciones en otro, ya sea mediante la compra de activos, la construcción de fábricas o la adquisición de empresas locales. La IED es una fuente clave de crecimiento económico, dado que impulsa la creación de empleos, la transferencia de tecnología y la modernización del sector productivo. Los países en desarrollo suelen atraer inversión extranjera ofreciendo incentivos fiscales, estabilidad macroeconómica y acceso a mercados internacionales. Sin embargo, la dependencia excesiva de la IED puede generar vulnerabilidades, especialmente si las empresas extranjeras deciden retirar su capital en tiempos de crisis.
          p(numero="5" titulo="Los bloques económicos y acuerdos") La existencia de mercados comunes y zonas de libre comercio, permite a los países miembros beneficiarse de reducciones arancelarias, armonización de normativas y mayor acceso a bienes y servicios. Ejemplos de estos acuerdos incluyen la Unión Europea (UE), el Tratado entre México, Estados Unidos y Canadá (T-MEC) y el Mercado Común del Sur (MERCOSUR). Estos bloques económicos buscan mejorar la competitividad de sus miembros en el mercado global y fomentar la cooperación regional (Guillén & Ontiveros, 2014).
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/11.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="6" titulo="La política económica") Factor crucial en la economía internacional es la política económica de los países desarrollados y emergentes, puesto que sus decisiones pueden afectar la estabilidad de los mercados globales. Las políticas fiscales y monetarias adoptadas por economías como Estados Unidos, China o la Unión Europea, tienen un impacto significativo en el comercio internacional y en la inversión extranjera. Por ejemplo, un aumento en las tasas de interés en Estados Unidos, puede atraer capital hacia su mercado financiero, reduciendo los flujos de inversión en países emergentes y generando presión sobre sus monedas.
          p(numero="7" titulo="Las crisis económicas y financieras") Son eventos que pueden alterar drásticamente la economía internacional. Las recesiones en economías grandes pueden tener un efecto dominó en el comercio y la inversión global. Un ejemplo de esto fue la crisis financiera del 2008, que afectó los mercados de todo el mundo, debido a la interconexión del sistema financiero global. En estos casos, las instituciones internacionales como el Fondo Monetario Internacional (FMI) y el Banco Mundial, juegan un papel fundamental en la estabilización de las economías afectadas mediante programas de asistencia financiera y reformas estructurales (Guillén & Ontiveros, 2014).
          p(numero="8" titulo="El desarrollo de la tecnología y la innovación") Ha transformado la economía internacional, facilitando la digitalización de los negocios y el comercio electrónico. La aparición de nuevas tecnologías ha permitido la optimización de la producción, la reducción de costos logísticos y la expansión de mercados globales. Sin embargo, este avance tecnológico también ha generado nuevos desafíos, como la automatización del empleo y la necesidad de adaptar la educación y la formación laboral a las nuevas exigencias del mercado.
          p(numero="9" titulo="El cambio climático y la sostenibilidad") Estos factores están adquiriendo una relevancia creciente en la economía internacional. Los efectos del cambio climático han impulsado la creación de acuerdos internacionales para reducir la huella de carbono y promover el desarrollo sostenible. Las regulaciones ambientales afectan la producción y el comercio, puesto que, cada vez, más países imponen restricciones sobre la emisión de gases contaminantes y fomentan el uso de energías renovables. La transición hacia una economía verde ha generado nuevas oportunidades de inversión en sectores como la energía limpia, la movilidad sostenible y la economía circular.
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white En conclusión, la economía internacional está influenciada por una combinación de factores económicos, políticos, tecnológicos y ambientales, que determinan el comportamiento del comercio, la inversión y la estabilidad global. Comprender estos factores es esencial para analizar las dinámicas del mercado mundial y anticipar los cambios en el entorno económico global.
        
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/50065 " target="_blank" rel="noopener noreferrer") Tugores Ques, J. (2005). Economía internacional. McGraw-Hill España. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dx.doi.org/10.4067/S0717-68212001011300005" target="_blank" rel="noopener noreferrer") Tokman R., Marcelo. (2001). Economía Internacional: Aspectos Reales Segunda Edición Ampliada Año 2000, Ediciones Universidad Católica De Chile Fernando Ossa Scaglia. Cuadernos de economía, 38(113), 111-115.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/170106 " target="_blank" rel="noopener noreferrer") Malfeito Gaviro, J. (Coord.), Álvarez Calzada, O. & Barberá de La Torre, R. A. (2012). Introducción a la economía mundial. Delta Publicaciones. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://students.aiu.edu/submissions/profiles/resources/onlineBook/w4G5J6_Economia_Internacional_Krug_Obs.pdf " target="_blank" rel="noopener noreferrer") Krugman, P. & Obstfeld, M. (2006). Economía internacional: Teoría y política (7ª ed.). Pearson Educación.
         
           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=KMoejzG6InY " target="_blank" rel="noopener noreferrer") Jose Alexander Reguera Isuiza. (2021). LA ECONOMÍA EN EL MUNDO [video]. YouTube. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=5wMcBNGV8OM" target="_blank" rel="noopener noreferrer") Finanzas Simples Para Todos. (2024). Reserva Federal: ¿Cómo Influye en la Economía Global? [video]. YouTube.  





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
