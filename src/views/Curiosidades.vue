<template>
  <div
    class="bg-[length:20px_20px] bg-no-repeat bg-top bg-[url('https://images.unsplash.com/photo-1523205778133-508fa694ffec?ixid=Mnw3ZjRwaTB8MHwxfHNlYXJjaHwxNXwwfHxzaGlwcy13ZXJvaWQifQ')] p-4 max-w-2xl mx-auto"
  >
    <h1 class="text-4xl font-bold mb-4 text-orange-600">{{ titulo }}</h1>
    <p class="text-lg font-semibold mb-2">Curiosidad de Halloween</p>
    <img
      :src="imagen"
      alt="Curiosidad"
      class="w-full h-auto mb-4 object-cover shadow-lg rounded-xl"
    />
    <div class="bg-black bg-opacity-50 p-4 rounded-lg">
      <p>{{ descripcion }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Curiosidad",
  data() {
    return {
      titulo: "",
      imagen: "",
      descripcion: "",
    };
  },
  mounted() {
    const curiosidades = {
      origen_celta: {
        titulo: "Origen Celta",
        imagen:
          "https://atravesdelasescrituras.com/wp-content/uploads/2016/10/halloween1.jpg?w=355&h=246",
        descripcion:
          "Origen Celta Halloween se origina en la antigua festividad celta de Samhain, que marcaba el final del verano y el inicio del invierno. Los celtas creían que en la noche de Samhain, las fronteras entre el mundo de los vivos y los muertos se desdibujaban, permitiendo a los espíritus regresar a la tierra. Para ahuyentarlos, encendían grandes hogueras y usaban disfraces y máscaras.",
      },
      calabaza: {
        titulo: "Calabazas",
        imagen:
          "https://img.freepik.com/vector-premium/calabazas-halloween-caras-miedo-talladas-estilo-vintage_225004-2899.jpg",
        descripcion:
          "Calabazas Las calabazas talladas, también conocidas como Jack-o'-lanterns, se originaron en Irlanda. La tradición comenzó con el uso de nabos y calabazas para tallar caras aterradoras. Según la leyenda, Jack-o'-lantern es una linterna hecha con un nabo hueco con una vela dentro, utilizada para ahuyentar a los espíritus malignos.",
      },
      disfraces: {
        titulo: "Disfraces",
        imagen:
          "https://img.freepik.com/vector-premium/fiesta-halloween-colorida-ninos-ilustracion-vector-dibujos-animados-disfraces_511166-6.jpg",
        descripcion:
          "Disfraces La tradición de disfrazarse proviene de la creencia en espíritus. Durante Samhain, los celtas usaban disfraces y máscaras para confundir a los espíritus que creían que deambulaban por la tierra. Esta práctica se ha transformado en la moderna tradición de los disfraces de Halloween, donde tanto niños como adultos se visten de todo tipo de personajes.",
      },
      dulce_o_truco: {
        titulo: "Dulce o Truco",
        imagen:
          "https://i.pinimg.com/1200x/d2/27/8a/d2278ac9614e61598b275c127933f477.jpg",
        descripcion:
          "Dulce o Truco La costumbre de dulce o truco se popularizó en los años 50 en Estados Unidos. Los niños se disfrazan y van de casa en casa pidiendo dulces con la frase dulce o truco. Si los residentes no dan dulces, los niños pueden realizar una pequeña travesura. Esta tradición se ha extendido a muchos países y es una de las actividades más esperadas de Halloween.",
      },
      colores: {
        titulo: "Colores de Halloween",
        imagen:
          "https://m.media-amazon.com/images/I/61EPYpBz4VL._AC_UF894,1000_QL80_.jpg",
        descripcion:
          "Colores de Halloween Los colores tradicionales de Halloween son el naranja y el negro. El naranja representa el otoño, las hojas caídas y las calabazas, mientras que el negro simboliza la oscuridad y la muerte. Estos colores se utilizan ampliamente en decoraciones, disfraces y artículos temáticos de Halloween para crear una atmósfera espeluznante",
      },
      mascaras: {
        titulo: "Máscaras y Fantasmas",
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuO_RJ_Cgapg2cEAwg_47A5KRdzrxRLntIkw&s",
        descripcion:
          "Máscaras y Fantasmas Las máscaras se usaban para confundir a los espíritus malignos. En el pasado, se creía que las máscaras y disfraces ayudaban a ahuyentar a los espíritus de los muertos que regresaban durante Samhain. Los fantasmas son una de las figuras más emblemáticas de Halloween, representando almas errantes y el misterio de lo desconocido.",
      },
      gatos: {
        titulo: "Gatos",
        imagen:
          "https://img.freepik.com/fotos-premium/gatos-negros-halloween_661277-348.jpg",
        descripcion: `En algunas culturas, los gatos negros son considerados presagios de mala suerte, especialmente durante Halloween. Sin embargo, no en todos los lugares se les ve con recelo. En el Reino Unido y Japón, por ejemplo, se cree que los gatos negros son portadores de buena suerte y prosperidad.

Para los supersticiosos, ver un gato negro puede significar que un día desafortunado está por venir. Pero para otros, estos elegantes felinos son símbolos de protección y fortuna. Así que, la próxima vez que un gato negro se cruce en tu camino, dependiendo de dónde estés, ¡puede que tengas un golpe de suerte inesperado! 🎃🐾`,
      },
      chicles: {
        titulo: "Dulces de Halloween",
        imagen:
          "https://st.depositphotos.com/1742172/1491/v/450/depositphotos_14919603-stock-illustration-packet-of-chewing-gum-cartoon.jpg",
        descripcion: `En promedio, los estadounidenses gastan alrededor de 2.6 mil millones de dólares en dulces solo para Halloween cada año. ¡Eso es una cantidad colosal de chicles, caramelos y chocolates! Este gasto convierte a Halloween en una de las festividades más dulces y deliciosas del año.

Para ponerlo en perspectiva, con esa cantidad de dinero se podrían comprar más de 600 millones de libras de dulces. Imagina montañas y montañas de caramelos que podrían llenar estadios enteros. ¡Una verdadera locura dulce!

Halloween no solo es una celebración de disfraces y sustos, sino también una excusa perfecta para saciar el antojo de golosinas. Así que, la próxima vez que te comas un caramelo, recuerda que estás siendo parte de una tradición que mueve miles de millones cada octubre. 🎃🍬`,
      },
      caramelos: {
        titulo: "Caramelos",
        imagen:
          "https://static8.depositphotos.com/1387797/933/v/450/depositphotos_9338151-stock-illustration-candies-set.jpg",
        descripcion: `¿Sabías que los Reese's Peanut Butter Cups son el caramelo más popular durante Halloween en Estados Unidos? Cada año, miles de niños y adultos esperan encontrar estas deliciosas golosinas de mantequilla de maní en sus bolsas de dulces.

Pero los dulces de maíz, aunque pueden ser un poco polarizantes, también tienen su legión de fans leales. Mientras que algunos los evitan, otros no pueden imaginar un Halloween sin ellos. Este clásico caramelo amarillo, naranja y blanco ha sido un elemento básico de las festividades desde hace más de un siglo.

Así que, tanto si eres del equipo Reese's como del equipo dulces de maíz, Halloween siempre es una excusa perfecta para disfrutar de tus golosinas favoritas. 🎃🍫🍬`,
      },
      leyenda: {
        titulo: "Leyenda del Hombre sin Cabeza",
        imagen: "https://info.laminasyaceros.com/hubfs/202006014.jpg",
        descripcion: `La historia del Jinete Sin Cabeza tiene sus raíces en la leyenda irlandesa de Dullahan, un guerrero decapitado que monta un caballo negro y lleva su propia cabeza en la mano. Esta figura aterradora es conocida por recorrer los caminos en la oscuridad de la noche, buscando almas perdidas.

El Dullahan es más que un simple cuento de terror; simboliza el temor a lo inevitable y lo desconocido. Se dice que cuando el Dullahan detiene su caballo, alguien va a morir. Su imagen ha inspirado numerosas historias y adaptaciones, incluido el famoso cuento de Washington Irving, "La leyenda de Sleepy Hollow".

La próxima vez que escuches una historia sobre el Jinete Sin Cabeza, recuerda sus raíces en la antigua mitología irlandesa y el miedo atávico que representa. 🎃👻`,
      },
      peliculas: {
        titulo: "Películas de Halloween",
        imagen:
          "https://okdiario.com/img/2020/10/25/halloween-diez-peliculas-para-ver-en-familia-pesadilla-antes-de-navidad-620x349.jpg",
        descripcion: ` La Película Halloween de 1978, dirigida por John Carpenter, se realizó con un presupuesto sorprendentemente bajo, lo que llevó al equipo a reutilizar el mismo disfraz de Michael Myers en todas las escenas. Este icónico disfraz tiene una historia bastante peculiar: la máscara utilizada es en realidad una máscara del Capitán Kirk de Star Trek, pintada de blanco.

Para lograr el aterrador aspecto de Michael Myers, la producción compró una máscara de látex de Capitán Kirk por unos pocos dólares y la transformó en lo que ahora es uno de los disfraces más reconocibles en la historia del cine de terror. Este sencillo pero efectivo truco de maquillaje contribuyó a crear el aura inquietante que rodea al personaje y la película.

Halloween, con su bajo presupuesto y recursos limitados, demostró que la creatividad y la innovación pueden superar la falta de fondos, convirtiendo una máscara barata en un ícono del cine de terror. 🎃🔪`,
      },
      supersticiones: {
        titulo: "Supersticiones de Halloween",
        imagen:
          "https://static8.depositphotos.com/1368418/1052/v/450/depositphotos_10529727-stock-illustration-superstition.jpg",
        descripcion: `En épocas pasadas, existía una curiosa creencia: se decía que si llevabas tu ropa puesta al revés y caminabas hacia atrás durante Halloween, te encontrarías con una bruja a medianoche. Este ritual inusual era una de las muchas supersticiones que rodeaban la noche de Halloween.

Imagina la escena: la oscuridad envolviendo todo, el aire lleno de misterio y tú, con la ropa al revés y caminando hacia atrás, esperando un encuentro con lo desconocido. Esta creencia refleja el temor y la fascinación que las personas tenían hacia lo sobrenatural y las brujas en particular.

Halloween siempre ha sido una noche llena de magia, superstición y misterio. Aunque hoy en día estas tradiciones pueden parecernos extrañas, añaden una capa de intriga y encanto a esta celebración tan especial. 🧙‍♀️`,
      },

      calabazas: {
        titulo: "Calabazas Gigantes",
        imagen:
          "https://img.freepik.com/vector-premium/coleccion-calabazas-talladas-varias-expresiones-espeluznantes-divertidas_703032-3080.jpg",
        descripcion: `¿Sabías que la calabaza más grande jamás registrada pesó 2,624.6 libras (unos 1,190.49 kg)? Fue cultivada por Mathias Willemijns en Bélgica en 2016. ¡Imagina lo monumental que sería tallar una calabaza de ese tamaño!

Este impresionante logro agrícola no solo sorprendió a los aficionados de Halloween, sino que también estableció un récord mundial. Una calabaza de tal magnitud podría llenar un pequeño campo y servir para hacer una cantidad asombrosa de pasteles de calabaza.

Halloween es la época perfecta para admirar estas maravillas naturales y reflexionar sobre el ingenio y la dedicación de los cultivadores que hacen posibles estos récords. 🎃🌟`,
      },
      paises: {
        titulo: "Halloween en Países Diferentes",
        imagen:
          "https://img.freepik.com/fotos-premium/ilustracion-festival-fantasmas-hambrientos-rosa_931878-721327.jpg",
        descripcion: `En Hong Kong, Halloween adquiere un significado especial bajo la celebración del Festival de los Fantasmas Hambrientos. Durante este festival, se cree que los espíritus salen del inframundo en busca de comida y entretenimiento. Es una época en la que las ofrendas de alimentos y otras dádivas son dejadas en las calles y templos para apaciguar y honrar a estos espíritus errantes.

La atmósfera se llena de un misticismo único, con rituales y tradiciones que reflejan la rica herencia cultural de Hong Kong. Más allá de las típicas fiestas de disfraces y truco o trato, el Festival de los Fantasmas Hambrientos ofrece una perspectiva fascinante sobre cómo diferentes culturas interpretan y celebran la noche más espeluznante del año. 👻`,
      },
      nacional: {
        titulo: "Día Nacional del Gato Negro",
        imagen:
          "https://templates.designwizard.com/c3b6fc50-f7c5-11ec-a253-2b1cb41fc2b8.jpg",
        descripcion: `En un esfuerzo por ayudar a los gatos negros a encontrar hogares amorosos, algunos refugios y organizaciones de bienestar animal celebran el Día Nacional del Gato Negro el 27 de octubre, justo antes de Halloween. Este día especial busca romper con los estigmas y supersticiones que rodean a estos elegantes felinos.

Durante esta celebración, se realizan diversas actividades para promover la adopción de gatos negros, como campañas de concienciación, eventos comunitarios y descuentos en las tasas de adopción. El objetivo es cambiar la percepción negativa y destacar las cualidades positivas y amorosas de los gatos negros.

Gracias a estos esfuerzos, muchos gatos negros encuentran familias que los reciben con los brazos abiertos, justo a tiempo para Halloween. 🐾`,
      },
      perros: {
        titulo: "El Disfraz de Perros",
        imagen:
          "https://img.freepik.com/vector-premium/fiesta-halloween-grupo-amigos-perros-viste-disfraz-fantasia-al-estilo-vectorial-plano_77984-1525.jpg?w=360",
        descripcion: `¡No solo los humanos se disfrazan para Halloween! En Estados Unidos, se gasta aproximadamente 490 millones de dólares en disfraces para mascotas cada año. Entre los disfraces más populares para los perritos destacan los de calabazas y calaveras.

Estos adorables atuendos no solo hacen que las mascotas luzcan festivas, sino que también añaden un toque extra de alegría y diversión a las celebraciones. Es impresionante ver cómo los dueños de mascotas se esfuerzan por incluir a sus amigos peludos en la magia de Halloween.

Así que, la próxima vez que veas un perrito disfrazado, recuerda que es parte de una tradición que mueve millones y trae sonrisas a todos. 🐾`,
      },
      fantasma: {
        titulo: "El Fantasma del Teatro",
        imagen:
          "https://www.weeky.es/wp-content/uploads/2018/07/musical-el-fantasma-de-la-opera-1.jpg",
        descripcion: `En el Teatro Drury Lane de Londres, circula una fascinante leyenda sobre un fantasma amigable conocido como el "Hombre de Gris". Este espectro, vestido con una capa y sombrero gris, es conocido por frecuentar el teatro y merodear por los pasillos y balcones.

Curiosamente, los actores y el personal del teatro consideran su aparición como un buen augurio. Según la leyenda, ver al "Hombre de Gris" antes de una actuación es una señal de que la obra será un éxito. Su presencia ha sido reportada desde el siglo XVIII, y su historia ha sido transmitida de generación en generación.

Así que, la próxima vez que visites el Teatro Drury Lane, mantén los ojos bien abiertos; podrías tener la suerte de encontrarte con este amigable fantasma y recibir su bendición para una noche de teatro inolvidable. 🎭👻`,
      },
      momia: {
        titulo: "La Momia de Hollywood",
        imagen:
          "https://img.freepik.com/vector-gratis/lindo-fantasma-momia-mano-paz-icono-vectorial-dibujos-animados-ilustracion-personas-icono-vacaciones-aislado-plano_138676-12662.jpg?semt=ais_hybrid",
        descripcion: `La momia más famosa de Hollywood, interpretada por el icónico actor Boris Karloff, requirió una transformación increíblemente detallada y laboriosa. Para su papel en la película de 1932, Karloff tenía que someterse a un proceso de maquillaje que tardaba hasta ocho horas en completarse.

Durante este tiempo, se aplicaban cuidadosamente capas de vendajes y maquillaje para lograr la apariencia aterradora y realista de la momia. Cada detalle, desde las arrugas hasta las capas de vendas, se realizaba meticulosamente para dar vida a este personaje inmortal.

Este compromiso con el arte del maquillaje no solo contribuyó a la creación de uno de los monstruos más emblemáticos del cine, sino que también demostró la dedicación de Karloff y del equipo de producción. ¡Imagínate tener que sentarte durante tantas horas para luego filmar una actuación inolvidable! 🎃🧟‍♂️`,
      },
      vampiros: {
        titulo: "La Primera Película de Vampiros",
        imagen:
          "https://img.freepik.com/vector-premium/disfraz-vampiro-chico-lindo-obra-arte-vectorial-dibujos-animados_1080480-154252.jpg?semt=ais_hybrid",
        descripcion: `La primera película de vampiros, Nosferatu, se estrenó en 1922 y rápidamente se convirtió en un clásico del cine de terror mudo. Esta obra maestra, dirigida por F.W. Murnau, es una versión no autorizada de la novela Drácula de Bram Stoker.

A pesar de los problemas legales debido a la falta de autorización, Nosferatu ha dejado una huella indeleble en la historia del cine. La interpretación espeluznante de Max Schreck como el Conde Orlok estableció muchos de los tropos y estéticas que aún hoy definimos como elementos esenciales de las historias de vampiros.

La atmósfera inquietante, los efectos visuales innovadores y la narrativa silenciosa contribuyeron a crear una película que, a casi un siglo de su estreno, sigue siendo un pilar del género de terror. 🦇`,
      },
      comercios: {
        titulo: "Comercios que se Transforman",
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6eestX1KUyhE_n1pQhXAyf4fOxfmrcrQVPYUljone3vfKs6Bb89g_mCX8tyQ4jVhfAgg&usqp=CAU",
        descripcion: `Algunos negocios realmente se dedican a Halloween. En Nueva York, el restaurante Jekyll & Hyde transforma por completo su decoración y su menú para ofrecer una experiencia de terror interactiva única. Durante la temporada de Halloween, este peculiar restaurante se convierte en un lugar donde los comensales pueden disfrutar de una cena rodeados de una ambientación escalofriante y personajes siniestros.

Cada rincón del restaurante está diseñado para sumergir a los visitantes en un mundo de misterio y horror, con actores en vivo que interpretan personajes espeluznantes y entretienen a los clientes con historias de terror. Desde platos temáticos hasta efectos especiales, la experiencia en Jekyll & Hyde es inolvidable y perfecta para los amantes del miedo.

Así que, si estás en Nueva York durante Halloween, no te pierdas la oportunidad de vivir esta aterradora y divertida experiencia culinaria. 🎃🍽️👻`,
      },
      monstruos: {
        titulo: "Los Monstruos Nocturnos de Finlandia",
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqma3_IV2tasaoV1bVog9R-l38Nef1_VZSYQ&s",
        descripcion: `En Finlandia, existe una tradición de Halloween llamada "Kekri", que agrega un toque único a las celebraciones de esta época del año. Durante Kekri, las personas construyen figuras de paja que representan monstruos nocturnos. Estas figuras, a menudo creativas y aterradoras, se queman en grandes hogueras con el propósito de ahuyentar el mal y purificar el entorno.

La quema de estas figuras no solo es un ritual para espantar los malos espíritus, sino que también sirve como un símbolo de renovación y protección. La festividad de Kekri combina elementos de la cosecha de otoño con creencias y prácticas ancestrales, creando una celebración que es tanto una despedida del verano como una preparación para el invierno.

Así que, si alguna vez te encuentras en Finlandia durante Halloween, asegúrate de experimentar Kekri y ser parte de esta fascinante tradición que une lo antiguo con lo moderno. 🎃🔥👻`,
      },
      embrujada: {
        titulo: "El Record Guinness de la Casa Embrujada Más Larga",
        imagen:
          "https://img.freepik.com/vector-premium/casa-embrujada-dibujos-animados-fondo-halloween_29190-2482.jpg",
        descripcion: `La casa embrujada más larga del mundo se encuentra en Lewisburg, Ohio, y tiene una peculiaridad única: está ubicada ¡dentro de una mina! Esta aterradora atracción se extiende por más de 1 kilómetro bajo tierra, ofreciendo una experiencia escalofriante que no encontrarás en ningún otro lugar.

Caminar por los oscuros y estrechos pasillos de esta mina embrujada es una aventura llena de sustos y sorpresas. Con efectos especiales, actores disfrazados y un ambiente espeluznante, cada paso te sumerge más en el mundo del terror. Es una prueba de valentía que solo los más audaces se atreven a enfrentar.

Así que, si estás buscando una experiencia verdaderamente inolvidable y aterradora para Halloween, ¡la mina embrujada de Lewisburg es el lugar perfecto para ti! 🎃👻`,
      },
      bruja: {
        titulo: "El Festival del Sombrero de Bruja",
        imagen:
          "https://img.freepik.com/fotos-premium/ilustracion-dibujos-animados-bruja-sombrero-negro-sombrero-bruja-negro_662214-189692.jpg?w=360",
        descripcion: `En Salem, Massachusetts, conocida por sus históricos juicios de brujas, se celebra un festival fascinante llamado "The Festival of the Witch Hat". Durante este evento, las personas diseñan y desfilan con elaborados sombreros de bruja, demostrando su creatividad y espíritu festivo.

El festival no solo es una celebración de Halloween, sino también un homenaje a la rica y sombría historia de Salem. Los sombreros de bruja, adornados con plumas, cintas y detalles espeluznantes, son una vista impresionante mientras los participantes desfilan por las calles de la ciudad.

Este evento reúne a la comunidad y a los visitantes en una celebración vibrante y única, donde la tradición y la modernidad se encuentran. Participar en The Festival of the Witch Hat es una experiencia inolvidable que te transporta a los tiempos antiguos mientras disfrutas de la creatividad contemporánea. 🧙‍♀️`,
      },
      esqueleto: {
        titulo: "El Esqueleto Gigante",
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-GEgTWFYgZOkxOQG7zAnBuxLus4bI0bB6F0O-x4WgG-3tt7X9I0b7rSny0iNvSYyxXI&usqp=CAU",
        descripcion: `Home Depot se hizo famoso al lanzar un esqueleto de Halloween inflable de 12 pies de altura, que rápidamente se convirtió en todo un fenómeno. Este colosal esqueleto capturó la imaginación de la gente, y las largas filas para conseguir uno fueron una prueba de su popularidad.

No es solo su tamaño imponente lo que lo hace especial, sino también su increíble nivel de detalle y su capacidad para atraer miradas. Desde que salió al mercado, este esqueleto se ha convertido en un ícono de Halloween, con familias decorando sus jardines y compartiendo fotos en redes sociales.

El fenómeno del esqueleto gigante de Home Depot es un claro ejemplo de cómo un producto creativo y bien diseñado puede capturar la atención del público y convertirse en una tradición moderna de Halloween. 🎃🦴`,
      },
      zombie: {
        titulo: "El Zombirun",
        imagen:
          "https://img.freepik.com/fotos-premium/ilustracion-zombi_1022967-1295.jpg",
        descripcion: `En muchas ciudades, se organiza una emocionante carrera llamada "Zombirun", donde los participantes corren mientras son "perseguidos" por zombis. Este evento es una mezcla única de deporte y entretenimiento, que combina el ejercicio físico con la adrenalina del terror en una forma increíblemente divertida.

Los corredores deben abrirse camino a través de una serie de obstáculos mientras intentan escapar de los zombis que los persiguen. La atmósfera es electrizante, con disfraces aterradores, luces parpadeantes y sonidos espeluznantes que añaden un toque especial a la carrera.

La Zombirun no solo es una prueba de velocidad y resistencia, sino también una experiencia inmersiva que lleva a los participantes a un escenario de película de terror. Tanto si eres un corredor ávido como un fanático del terror, este evento te garantiza una noche llena de emociones y diversión. 🏃‍♂️🧟‍♀️`,
      },
    };

    const curiosidadId = this.$route.params.id;
    const curiosidad =
      curiosidades[curiosidadId.toLowerCase().replace(/\s+/g, "_")];

    if (curiosidad) {
      this.titulo = curiosidad.titulo;
      this.imagen = curiosidad.imagen;
      this.descripcion = curiosidad.descripcion;
    } else {
      this.titulo = "Curiosidad no encontrada";
      this.descripcion =
        "Lo sentimos, no hemos encontrado la curiosidad que buscas.";
    }
  },
};
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
