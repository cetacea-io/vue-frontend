<template>
  <div class="footer-wrap">
    <!-- <section>Hey</section> -->
    <section>
      <footer class="container">
        <div class="bigger-footer-wrap">
          <div class="main-1">
            <div>
              <img
                style="width: 134px;"
                src="~static/logo.svg">
            </div>
            <p class="paragraph">Nueve de cada diez doctores recomiendan Cetacea sobre marcas competitivas. Ve por ti mismo y mejora masivamente tus habilidades artisticas.</p>
            <div>
              <a
                href="#"
                target="_blank"
                rel="noreferrer">
                <img
                  src="~assets/img/social-facebook.svg"
                  style="height: 20px;">
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer">
                <img
                  src="~assets/img/social-twitter.svg"
                  style="height: 20px;">
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer">
                <img
                  src="~assets/img/social-youtube.svg"
                  style="height: 20px;">
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer">
                <img
                  src="~assets/img/social-instagram.svg"
                  style="height: 20px;">
              </a>
            </div>
          </div>
          <div class="main-2">
            <h5 class="upper-title">Descubre</h5>
            <ul style="list-style: none; padding: 0;">
              <li class="menu-item"><a href="">Cursos</a></li>
              <li class="menu-item"><a href="">Proyectos</a></li>
              <li class="menu-item"><a href="">Conferencias</a></li>
            </ul>
          </div>
          <div class="main-2">
            <h5 class="upper-title">Crea</h5>
          </div>
          <div class="main-2">
            <h5 class="upper-title">Divulga</h5>
          </div>
        </div>
        <div class="bottom-info-wrap">
          <div class="bottom-info">
            <p style="margin-bottom: .5rem;">© Cetacea {{ currentYear }}. Todos los derechos reservados. Si, todos. Me refiero a ti, Pablo.</p>
            <p>Disenado con amor por Ivan. Orgullosamente desarrollado con Heroku, Cannabis y Cafeina.</p>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-wrap{
  // background-image: radial-gradient(circle at 1% 1%,#26476d,#1644ad);
  // background-image: radial-gradient(circle at 1% 1%, #071119, #173852);
  background: #000;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: 50%;
  position: relative;
  overflow: hidden;

  &::after{
    // content: "";
    position: absolute;
    background-image: url("~assets/img/big-fish.svg");
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: cover;
    opacity: .1;
    mix-blend-mode: luminosity;
    width: 670px;
    height: 720px;
    right: -100px;
    bottom: -17px;
    pointer-events: none;
  }
}

.bigger-footer-wrap {
  display: flex;
  margin-bottom: 2rem;

  .main-1 {
    width: 40%;
    margin-right: auto;
  }
  .main-2 {
    width: 16.66667%;

    .upper-title {
      margin-bottom: 0.6rem;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.84em;
      letter-spacing: 0.4px;
    }
    
    a {
      color: hsla(0, 0%, 100%, .5);
      font-size: 14px;
    }
  }
}

.bottom-info-wrap {
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-width: 0;
  border-top-width: 1px;
  border-style: solid;
  border-color: hsla(0, 0%, 100%, .1);

  .bottom-info {
    font-size: .75rem;
    color: hsla(0, 0%, 100%, .78);
    text-align: center;
  }

}

.menu-item {
  margin-bottom: 0.4rem;
}

.paragraph {
  color: hsla(0, 0%, 100%, 0.7);;
  font-size: 13px;
  margin-top: 0.6rem;
}
</style>

