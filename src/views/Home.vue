<template>
  <div
    class="bg-[length:20px_20px] bg-no-repeat bg-top bg-[url('https://images.unsplash.com/photo-1523205778133-508fa694ffec?ixid=Mnw3ZjRwaTB8MHwxfHNlYXJjaHwxNXwwfHxzaGlwcy13ZXJvaWQifQ')] p-4 max-w-2xl mx-auto"
  >
    <SpiderComponent />
    <h1 class="text-4xl font-bold text-red-400 mb-4 text-orange-600">
      Bienvenido a Halloween
    </h1>
    <p class="mb-6 text-center text-lg text-gray-300">
      ¡Celebra Halloween con nosotros! Descubre curiosidades fascinantes.
    </p>
    <img
      src="https://png.pngtree.com/png-clipart/20230928/original/pngtree-illustration-halloween-background-png-image_13006626.png"
      alt="Halloween"
      class="w-full h-auto rounded-xl shadow-lg mb-4 object-cover"
    />

    <h2 class="text-2xl font-semibold mb-4 text-black">
      Curiosidades de Halloween
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400 text-red-400">1. Origen Celta</h3>
        <img
          src="https://atravesdelasescrituras.com/wp-content/uploads/2016/10/halloween1.jpg?w=355&h=246"
          alt="origen celta"
          class="w-full h-auto rounded-lg mb-4 object-cover"
        />
        <p class="text-gray-200">
          Halloween se origina en la antigua festividad celta de Samhain.
        </p>

        <router-link
          to="/curiosidad/Origen Celta"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400 text-red-400">2. Calabazas</h3>
        <img
          src="https://img.freepik.com/vector-premium/calabazas-halloween-caras-miedo-talladas-estilo-vintage_225004-2899.jpg"
          alt="calabazas"
          class="w-full h-auto rounded-lg mb-4 object-cover"
        />

        <p>Las calabazas talladas se originaron en Irlanda.</p>

        <router-link
          to="/curiosidad/calabaza"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400 text-red-400">3. Disfraces</h3>
        <img
          src="https://img.freepik.com/vector-premium/fiesta-halloween-colorida-ninos-ilustracion-vector-dibujos-animados-disfraces_511166-6.jpg"
          alt="disfraces"
          class="w-full h-auto rounded-lg mb-4 object-cover"
        />
        <p>La tradición de disfrazarse proviene de la creencia en espíritus.</p>
        <router-link
          to="/curiosidad/disfraces"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">4. Dulce o Truco</h3>
        <img
          src="https://i.pinimg.com/1200x/d2/27/8a/d2278ac9614e61598b275c127933f477.jpg"
          alt="dulce o truco"
          class="w-full h-auto rounded-lg mb-4 object-cover"
        />
        <p>La costumbre de "dulce o truco" se popularizó en los años 50.</p>
        <router-link
          to="/curiosidad/Dulce o Truco"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">5. Colores de Halloween</h3>
        <img
          src="https://m.media-amazon.com/images/I/61EPYpBz4VL._AC_UF894,1000_QL80_.jpg"
          alt="colores"
          class="w-full h-auto rounded-lg mb-4 object-cover"
        />
        <p>Los colores tradicionales son el naranja y el negro.</p>
        <router-link
          to="/curiosidad/colores"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">6. Máscaras y Fantasmas</h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuO_RJ_Cgapg2cEAwg_47A5KRdzrxRLntIkw&s"
          alt="mascaras"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>Las máscaras se usaban para confundir a los espíritus malignos.</p>
        <router-link
          to="/curiosidad/mascaras"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">7. Gatos</h3>
        <img
          src="https://img.freepik.com/fotos-premium/gatos-negros-halloween_661277-348.jpg"
          alt="gatos"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          En algunas culturas, los gatos negros son considerados de mala suerte,
          especialmente en Halloween. Sin embargo, en el Reino Unido y Japón, se
          cree que traen buena suerte.
        </p>
        <router-link
          to="/curiosidad/gatos"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">8. Dulces en Halloween</h3>
        <img
          src="https://st.depositphotos.com/1742172/1491/v/450/depositphotos_14919603-stock-illustration-packet-of-chewing-gum-cartoon.jpg"
          alt="chicles"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          En promedio, los estadounidenses gastan alrededor de $2.6 mil millones
          en dulces solo para Halloween cada año. ¡Es una tonelada de chicle y
          caramelos!
        </p>
        <router-link
          to="/curiosidad/chicles"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">9. Caramelos</h3>
        <img
          src="https://static8.depositphotos.com/1387797/933/v/450/depositphotos_9338151-stock-illustration-candies-set.jpg"
          alt="caramelos"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          ¿Sabías que los Reese's Peanut Butter Cups suelen ser el caramelo más
          popular durante Halloween en Estados Unidos? Y los dulces de maíz,
          aunque son polarizantes, también tienen su legión de fans..
        </p>
        <router-link
          to="/curiosidad/caramelos"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">
          10. Leyenda del Hombre sin Cabeza
        </h3>
        <img
          src="https://info.laminasyaceros.com/hubfs/202006014.jpg"
          alt="leyenda"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          La historia del Jinete Sin Cabeza se originó en la leyenda irlandesa
          de un guerrero decapitado llamado Dullahan, que monta un caballo negro
          y lleva su cabeza en la mano.
        </p>
        <router-link
          to="/curiosidad/leyenda"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">11. Películas de Halloween</h3>
        <img
          src="https://okdiario.com/img/2020/10/25/halloween-diez-peliculas-para-ver-en-familia-pesadilla-antes-de-navidad-620x349.jpg"
          alt="peliculas"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          La película "Halloween" de 1978, dirigida por John Carpenter, tuvo un
          presupuesto muy bajo y el equipo reutilizó el mismo disfraz de Michael
          Myers en todas las escenas. El icónico disfraz es en realidad una
          máscara del Capitán Kirk pintada de blanco.
        </p>
        <router-link
          to="/curiosidad/peliculas"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">12. Supersticiones de Halloween</h3>
        <img
          src="https://static8.depositphotos.com/1368418/1052/v/450/depositphotos_10529727-stock-illustration-superstition.jpg"
          alt="supersticiones"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          En épocas pasadas, se decía que si llevabas tu ropa puesta al revés y
          caminabas hacia atrás durante Halloween, te encontrarías con una bruja
          a medianoche.
        </p>
        <router-link
          to="/curiosidad/supersticiones"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">13. Calabazas Gigantes</h3>
        <img
          src="https://img.freepik.com/vector-premium/coleccion-calabazas-talladas-varias-expresiones-espeluznantes-divertidas_703032-3080.jpg"
          alt="calabazas"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          La calabaza más grande jamás registrada pesó 2,624.6 libras (unos
          1,190.49 kg), cultivada por Mathias Willemijns en Bélgica en 2016.
          ¡Imagina tallar esa calabaza!
        </p>
        <router-link
          to="/curiosidad/calabazas"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">
          14. Halloween en Países Diferentes
        </h3>
        <img
          src="https://img.freepik.com/fotos-premium/ilustracion-festival-fantasmas-hambrientos-rosa_931878-721327.jpg"
          alt="paises"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          En Hong Kong, Halloween se celebra como el "Festival de los Fantasmas
          Hambrientos", donde se cree que los espíritus salen a buscar comida y
          entretenimiento.
        </p>
        <router-link
          to="/curiosidad/paises"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">15. Día Nacional del Gato Negro</h3>
        <img
          src="https://templates.designwizard.com/c3b6fc50-f7c5-11ec-a253-2b1cb41fc2b8.jpg"
          alt="nacional"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          En un esfuerzo por ayudar a los gatos negros a ser adoptados, algunos
          refugios y organizaciones de bienestar animal celebran el Día Nacional
          del Gato Negro el 27 de octubre, justo antes de Halloween.
        </p>
        <router-link
          to="/curiosidad/nacional"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">17. El Disfraz de Perros</h3>
        <img
          src="https://img.freepik.com/vector-premium/fiesta-halloween-grupo-amigos-perros-viste-disfraz-fantasia-al-estilo-vectorial-plano_77984-1525.jpg?w=360"
          alt="perro"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          ¡No solo los humanos se disfrazan para Halloween! En Estados Unidos,
          se gasta aproximadamente 490 millones de dólares en disfraces para
          mascotas cada año. Los disfraces de calabazas y calaveras son los más
          populares para los perritos.
        </p>
        <router-link
          to="/curiosidad/perros"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">18. El Fantasma del Teatro</h3>
        <img
          src="https://www.weeky.es/wp-content/uploads/2018/07/musical-el-fantasma-de-la-opera-1.jpg"
          alt="fantasma"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          En el Teatro Drury Lane de Londres, se dice que un fantasma amigable
          conocido como el "Hombre de Gris" frecuenta el teatro y que los
          actores consideran su aparición como un buen augurio.
        </p>
        <router-link
          to="/curiosidad/fantasma"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">19. La Momia de Hollywood</h3>
        <img
          src="https://img.freepik.com/vector-gratis/lindo-fantasma-momia-mano-paz-icono-vectorial-dibujos-animados-ilustracion-personas-icono-vacaciones-aislado-plano_138676-12662.jpg?semt=ais_hybrid"
          alt="momia"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          La momia más famosa de Hollywood, el actor Boris Karloff, tardaba
          hasta ocho horas en aplicar el maquillaje y las vendas para
          interpretar a la momia en la película de 1932.
        </p>
        <router-link
          to="/curiosidad/momia"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">
          20. La Primera Película de Vampiros
        </h3>
        <img
          src="https://img.freepik.com/vector-premium/disfraz-vampiro-chico-lindo-obra-arte-vectorial-dibujos-animados_1080480-154252.jpg?semt=ais_hybrid"
          alt="vampiros"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          La primera película de vampiros, "Nosferatu", se estrenó en 1922. La
          película es una versión no autorizada de "Drácula" y es un clásico del
          cine de terror mudo.
        </p>
        <router-link
          to="/curiosidad/vampiros"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">21. Comercios que se Transforman</h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6eestX1KUyhE_n1pQhXAyf4fOxfmrcrQVPYUljone3vfKs6Bb89g_mCX8tyQ4jVhfAgg&usqp=CAU"
          alt="mascaras"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          Algunos negocios realmente se dedican a Halloween. En Nueva York, el
          restaurante Jekyll & Hyde cambia completamente su decoración y su menú
          para convertirse en una experiencia de terror interactiva.
        </p>
        <router-link
          to="/curiosidad/comercios"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">
          21. Los Monstruos Nocturnos de Finlandia
        </h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqma3_IV2tasaoV1bVog9R-l38Nef1_VZSYQ&s"
          alt="monstruos"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          En Finlandia, hay una tradición de Halloween llamada "Kekri", donde
          las personas construyen figuras de paja que representan monstruos
          nocturnos y las queman para ahuyentar el mal.
        </p>
        <router-link
          to="/curiosidad/monstruos"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">
          22. El Record Guinness de la Casa Embrujada Más Larga
        </h3>
        <img
          src="https://img.freepik.com/vector-premium/casa-embrujada-dibujos-animados-fondo-halloween_29190-2482.jpg"
          alt="embrujada"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          La casa embrujada más larga del mundo está en Lewisburg, Ohio, y se
          encuentra ¡dentro de una mina! Se extiende por más de 1 kilómetro bajo
          tierra.
        </p>
        <router-link
          to="/curiosidad/embrujada"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">
          23. El Festival del Sombrero de Bruja
        </h3>
        <img
          src="https://img.freepik.com/fotos-premium/ilustracion-dibujos-animados-bruja-sombrero-negro-sombrero-bruja-negro_662214-189692.jpg?w=360"
          alt="bruja"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          En Salem, Massachusetts, famosa por sus juicios de brujas, se celebra
          un festival llamado "The Festival of the Witch Hat" donde las personas
          diseñan y desfilan con elaborados sombreros de bruja.
        </p>
        <router-link
          to="/curiosidad/bruja"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">24. El Esqueleto Gigante</h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-GEgTWFYgZOkxOQG7zAnBuxLus4bI0bB6F0O-x4WgG-3tt7X9I0b7rSny0iNvSYyxXI&usqp=CAU"
          alt="esqueleto"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          Home Depot se hizo famoso por vender un esqueleto de Halloween
          inflable de 12 pies de altura que se convirtió en todo un fenómeno,
          con gente esperando en fila para conseguir uno.
        </p>
        <router-link
          to="/curiosidad/esqueleto"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
      <div
        class="bg-black bg-pattern bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg ring-1 ring-red-500/50 dark:bg-white dark:text-black"
      >
        <h3 class="font-bold text-red-400">25. El Zombirun</h3>
        <img
          src="https://img.freepik.com/fotos-premium/ilustracion-zombi_1022967-1295.jpg"
          alt="zombie"
          class="text-green-500 hover:text-red-500 hover:underline"
        />
        <p>
          En muchas ciudades, se organiza una carrera llamada "Zombirun" donde
          los participantes corren mientras son "perseguidos" por zombis. Es una
          mezcla de carrera y evento de entretenimiento que combina deporte y
          terror de una forma divertida.
        </p>
        <router-link
          to="/curiosidad/zombie"
          class="text-green-500 hover:text-red-500 hover:underline"
        >
          Conocer más
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* Estilos personalizados si es necesario */
.img-full {
  width: 100%;
  height: auto;
}
</style>
