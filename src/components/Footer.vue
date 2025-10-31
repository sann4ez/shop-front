<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__column footer__column--brand">
          <a href="/" class="footer__logo" aria-label="На головну">
            <img src="../public/favicon.ico" alt="logo" />
          </a>
          <p class="footer__description text-white">
            Ми створюємо якісні рішення для ваших потреб, поєднуючи досвід і
            сучасні технології.
          </p>
        </div>

        <div class="footer__column footer__column--menu">
          <h3 class="footer__title text-white">Меню</h3>
          <ul class="footer__menu text-white">
            <li class="footer__menu-item">
              <a class="footer__menu-link text-white" href="#"
                >Каталог товарів</a
              >
            </li>
            <li class="footer__menu-item">
              <a class="footer__menu-link text-white" href="#">Про нас</a>
            </li>
            <li class="footer__menu-item">
              <a class="footer__menu-link text-white" href="#">Послуги</a>
            </li>
            <li class="footer__menu-item">
              <a class="footer__menu-link text-white" href="#">Новини</a>
            </li>
            <li class="footer__menu-item">
              <a class="footer__menu-link text-white" href="#">Контакти</a>
            </li>
          </ul>
        </div>

        <!-- Contacts -->
        <div class="footer__column footer__column--contacts">
          <h3 class="footer__title text-white">Контакти</h3>

          <address class="footer__contacts text-white" translate="no">
            <ul>
              <li class="footer__contact-item">
                <a class="text-white" href="tel:+380971234567"
                  >+380 97 123 45 67</a
                >
              </li>
              <li class="footer__contact-item">
                <a class="text-white" href="tel:+380501234567"
                  >+380 50 123 45 67</a
                >
              </li>
              <li class="footer__contact-item">
                <a class="text-white" href="mailto:info@company.ua"
                  >info@company.ua</a
                >
              </li>
              <li class="footer__contact-item text-white">
                м. Київ, вул. Незалежності 12
              </li>
            </ul>
          </address>

          <!-- Socials -->
          <ul class="footer__socials" aria-label="Соціальні мережі">
            <li class="footer__social-item">
              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="icon icon-white">
                  <use xlink:href="/images/sprite.svg#instagram" />
                </svg>
              </a>
            </li>
            <li class="footer__social-item">
              <a
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="icon icon-white">
                  <use xlink:href="/images/sprite.svg#facebook" />
                </svg>
              </a>
            </li>
            <li class="footer__social-item">
              <a
                href="#"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="icon icon-white">
                  <use xlink:href="/images/sprite.svg#youtube" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright text-white">
          © 2025 Компанія. Всі права захищені.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
// Footer
.footer {
  background-color: $bg-color-low-black;

  &__inner {
    display: flex;
    justify-content: space-between;
    padding: 50rem 0;
  }

  &__title {
    font-size: 20rem;
    font-weight: 600;
  }

  &__description {
    max-width: 300rem;
  }

  &__column {
    line-height: 1.7;
  }

  &__socials {
    display: flex;
    gap: 20rem;
  }

  &__logo {
    display: inline-block;
    margin-bottom: 20rem;
    img{
      width: 50rem;
      height: 50rem;
    }
  }

  &__contacts {
    margin-bottom: 20rem;
  }

  &__bottom {
    padding-bottom: 30rem;
  }
}
</style>
