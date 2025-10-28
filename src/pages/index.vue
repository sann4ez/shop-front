<script setup lang="ts">
import Header from "~/components/Header.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, EffectFade, Autoplay, Navigation } from "swiper/modules";
import VueEasyLightbox from "vue-easy-lightbox";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Lightbox
const visible = ref<boolean>(false);
const images = ref<string[]>([]);
const index = ref<number>(0);

const openLightbox = (img: string, i = 0): void => {
  images.value = [img];
  index.value = i;
  visible.value = true;
  document.body.classList.add("no-scroll");
};

const closeLightbox = (): void => {
  visible.value = false;
  document.body.classList.remove("no-scroll");
};

onMounted(() => {
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    `${scrollBarWidth}px`,
  );
});

// Swiper
const nextEl = ref(null);
const prevEl = ref(null);

interface Product {
  name: string;
  price: number;
}

const handleAddToCart = (product: Product) => {
  console.log("Додано до кошика:", product);
};

// Дані з API
const slides = [
  "https://picsum.photos/id/1015/1920/800",
  "https://picsum.photos/id/1016/1920/800",
  "https://picsum.photos/id/1018/1920/800",
  "https://picsum.photos/id/1020/1920/800",
];

const products = [
  {
    name: "Сучасний металевий стілець",
    price: 1200,
    priceOld: 1400,
    article: "ART-0001",
    image: "https://picsum.photos/300/300?1",
  },
  {
    name: "Великий обідній стіл з натурального дуба на 6 персон із захисним лакованим покриттям та масивними ніжками",
    price: 1500,
    priceOld: 1600,
    article: "ART-0002",
    image: "https://picsum.photos/300/300?2",
  },
  {
    name: "Настільна керамічна лампа з декоративною основою та текстильним абажуром кольору молочного льону для спальні та вітальні",
    price: 1000,
    priceOld: 1300,
    article: "ART-0003",
    image: "https://picsum.photos/300/300?3",
  },
  {
    name: "Комплект кухонних ножів",
    price: 1800,
    priceOld: 1950,
    article: "ART-0004",
    image: "https://picsum.photos/300/300?4",
  },
  {
    name: "Великий двосторонній плед із мікрофібри з утепленим шаром для спальні та вітальні, розмір 220x240 см, колір світло-бежевий",
    price: 2000,
    priceOld: 0,
    article: "ART-0005",
    image: "https://picsum.photos/300/300?5",
  },
];

const our_services = [
  {
    name: "Доставка по Україні",
    img: "https://picsum.photos/1920/1080?1",
    link: "#",
  },
  {
    name: "Монтаж та встановлення",
    img: "https://picsum.photos/1600/800?2",
    link: "#",
  },
  {
    name: "Гарантія та сервіс",
    img: "https://picsum.photos/300/300?3",
    link: "#",
  },
  {
    name: "Безкоштовна консультація",
    img: "https://picsum.photos/300/300?4",
    link: "#",
  },
  {
    name: "Індивідуальне замовлення",
    img: "https://picsum.photos/300/300?5",
    link: "#",
  },
  {
    name: "Оплата онлайн",
    img: "https://picsum.photos/300/300?6",
    link: "#",
  },
];
</script>

<template>
  <section class="hero">
    <div class="hero__slider">
      <Swiper
        :modules="[Pagination, EffectFade, Autoplay]"
        :effect="'fade'"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :pagination="{ clickable: true }"
      >
        <SwiperSlide
          v-for="(slide, index) in slides"
          :key="index"
          class="hero__slide"
        >
          <img :src="slide" alt="Slide image" class="hero__image" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>

  <ProductSection
    title="Новинки"
    :products="products"
    @add-to-cart="handleAddToCart"
  />

  <ProductSection
    title="Розпродаж"
    :products="products"
    @add-to-cart="handleAddToCart"
  />

  <ProductSection
    title="Популярні"
    :products="products"
    @add-to-cart="handleAddToCart"
  />

  <section class="our-services">
    <div class="container">
      <div class="our-services__header">
        <h2 class="our-services__title section__title">Наші послуги</h2>
      </div>

      <div class="our-services__content">
        <ul class="our-services__list">
          <li
            v-for="(service, index) in our_services"
            :key="index"
            class="our-services__item"
          >
            <a class="our-services__link" :href="service.link">
              <NuxtImg
                class="our-services__img"
                :src="service.img"
                :alt="service.name"
              />
              <span class="our-services__name">{{ service.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="projects">
    <div class="container">
      <div class="projects__header section__header">
        <span class="projects__title section__title">
          Приклади реалізованих проєктів
        </span>

        <div class="projects-section__nav section-controls">
          <button ref="prevEl" class="swiper-button-prev custom-prev"></button>
          <button ref="nextEl" class="swiper-button-next custom-next"></button>
        </div>
      </div>

      <div class="projects__content">
        <Swiper
          :modules="[Navigation, Autoplay]"
          :slides-per-view="3"
          :space-between="20"
          :loop="true"
          :navigation="{ nextEl: nextEl, prevEl: prevEl }"
          :autoplay="{ delay: 50000 }"
          class="projects-section__swiper"
        >
          <SwiperSlide
            v-for="(product, index) in products"
            :key="index"
            class="projects-section__slide"
          >
            <div class="projects-card">
              <img
                :src="product.image"
                :alt="product.name"
                class="projects-card__img"
                @click="openLightbox(product.image, index)"
              />
              <span class="projects-card__name">{{ product.name }}</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <vue-easy-lightbox
      :visible="visible"
      :imgs="images"
      :index="index"
      @hide="closeLightbox"
      @on-open="openLightbox"
    />
  </section>

  <section class="why-us">
    <div class="container">
      <div class="why-us__header section__header">
        <h2 class="why-us__title section__title">Чому ми</h2>
      </div>

      <div class="why-us__content">
        <ul class="why-us__list">
          <li class="why-us__item">
            <div class="why-us__icon">
              <img src="../public/favicon.ico" alt="logo" />
            </div>

            <div class="why-us__info">
              <span class="why-us__title-item">Висока якість</span>
              <p class="why-us__desc">
                Ми гарантуємо якість наших послуг завдяки досвідченій команді.
              </p>
            </div>
          </li>
          <li class="why-us__item">
            <div class="why-us__icon">
              <img src="../public/favicon.ico" alt="logo" />
            </div>

            <div class="why-us__info">
              <span class="why-us__title-item">Висока якість</span>
              <p class="why-us__desc">
                Ми гарантуємо якість наших послуг завдяки досвідченій команді.
              </p>
            </div>
          </li>
          <li class="why-us__item">
            <div class="why-us__icon">
              <img src="../public/favicon.ico" alt="logo" />
            </div>

            <div class="why-us__info">
              <span class="why-us__title-item">Висока якість</span>
              <p class="why-us__desc">
                Ми гарантуємо якість наших послуг завдяки досвідченій команді.
              </p>
            </div>
          </li>
          <li class="why-us__item">
            <div class="why-us__icon">
              <img src="../public/favicon.ico" alt="logo" />
            </div>

            <div class="why-us__info">
              <span class="why-us__title-item">Висока якість</span>
              <p class="why-us__desc">
                Ми гарантуємо якість наших послуг завдяки досвідченій команді.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="about-company">
    <div class="container">
      <div class="about-company__header section__header">
        <h2 class="about-company__title section__title">Про компанію</h2>
      </div>

      <div class="about-company__content">
        <div class="about-company__text">
          <h2>Про нашу компанію</h2>

          <p>
            <strong>“ВорітБуд”</strong> — це українська компанія з понад
            <em>10-річним досвідом</em> у сфері виробництва, монтажу та
            обслуговування автоматичних воріт, ролет і парканних систем. Ми
            поєднуємо <span>якість, надійність</span> та сучасний дизайн, щоб
            забезпечити комфорт і безпеку кожного клієнта.
          </p>

          <h3>Наші переваги</h3>
          <ul>
            <li>Власне виробництво з європейським обладнанням.</li>
            <li>Гарантія від 3 до 10 років на всі вироби.</li>
            <li>Безкоштовна консультація та виїзд замірника.</li>
            <li>Монтаж «під ключ» за 1 день.</li>
          </ul>

          <h3>Наші досягнення</h3>
          <ol>
            <li>Понад 5000 задоволених клієнтів по всій Україні.</li>
            <li>Більше 200 корпоративних партнерів.</li>
            <li>Переможець конкурсу «Надійний виробник року 2024».</li>
          </ol>

          <blockquote>
            “Ми не просто встановлюємо ворота — ми створюємо безпечний простір
            для вашого дому та бізнесу.”
          </blockquote>

          <p>
            Якщо ви шукаєте компанію, яка дотримується принципів
            <strong>чесності, якості та відповідальності</strong>, — ви
            потрапили за адресою. Ми з гордістю реалізовуємо проекти будь-якої
            складності — від гаражних воріт до великих промислових систем.
          </p>

          <h4>Приклади робіт</h4>
          <img
            src="https://picsum.photos/300/300?20"
            alt="Наші встановлені ворота"
          />

          <p>
            Детальніше про наші послуги ви можете дізнатися у розділі
            <a href="/services">«Послуги»</a> або звернутися до нас за
            телефоном.
          </p>

          <hr />

          <h5>Контактна інформація</h5>
          <table>
            <thead>
              <tr>
                <th>Філія</th>
                <th>Адреса</th>
                <th>Телефон</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Київ</td>
                <td>вул. Сагайдачного, 24</td>
                <td>+38 (044) 123-45-67</td>
              </tr>
              <tr>
                <td>Львів</td>
                <td>вул. Зеленська, 10</td>
                <td>+38 (032) 987-65-43</td>
              </tr>
            </tbody>
          </table>

          <h6>Дякуємо, що обираєте нас 💛</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.swiper-slide .hero__image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

:deep(.swiper-pagination-bullet) {
  background: white !important;
  opacity: 0.7;
}

:deep(.swiper-pagination-bullet-active) {
  background: $bg-color-brown !important;
  opacity: 1;
}

:deep(.hero__slider .swiper) {
  height: 500px;
}

:deep(.swiper-navigation-icon) {
  color: $bg-color-brown;
}

.swiper-button-prev {
  rotate: 180deg;
}

// Наші послуги
.our-services {
  padding: 50px 0 50px 0;
  background-color: $bg-color-light-grey;

  &__header {
    margin-bottom: 20px;
    padding: 0 15px;
  }

  &__content {
    padding: 15px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0 20px 0 #000000;
    }
  }

  &__name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $text-color-white;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  &__img {
    width: 100%;
    height: 350px;
  }
}

// Проєкти
.projects {
  padding: 50px 0 50px 0;
}

.projects-section__swiper {
  padding: 15px;
}

.projects-card {
  display: flex;
  flex-direction: column;
}

.projects-card__img {
  border-radius: 5px;
  cursor: zoom-in;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
}

.projects-card__name {
  font-size: 18px;
  font-weight: 500;
  padding: 10px;
}

// Чому ми
.why-us {
  padding: 50px 0 50px 0;
  background-color: $bg-color-light-grey;

  &__content {
    padding: 15px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 40px;
    background-color: $bg-color-white;
    border-radius: 5px;
  }

  &__title-item {
    display: block;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  &__desc {
    max-height: 40px;
    overflow: hidden;
  }
}

// Про компанію
.about-company {
  padding: 50px 0 50px 0;

  &__content {
    padding: 15px;
  }

  &__title {
    text-align: center;
    margin-bottom: 40px;
  }

  &__text {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    line-height: 1.8;
    color: #333;
    text-align: justify;

    /* Абзаци */
    p {
      margin-bottom: 20px;
    }

    /* Заголовки */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 600;
      line-height: 1.4;
      margin: 30px 0 15px;
      color: #222;
    }

    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 26px;
    }
    h3 {
      font-size: 22px;
    }
    h4 {
      font-size: 18px;
    }
    h5 {
      font-size: 16px;
    }
    h6 {
      font-size: 14px;
    }

    /* Виділення */
    strong {
      font-weight: 600;
      color: #7a4e2b;
    }

    em {
      font-style: italic;
      color: #555;
    }

    span {
      color: inherit;
    }

    /* Списки */
    ul,
    ol {
      margin: 20px 0 20px 25px;
      padding: 0;
      list-style-position: outside;
    }

    ul {
      list-style-type: disc;
    }

    ol {
      list-style-type: decimal;
    }

    li {
      margin-bottom: 8px;
      line-height: 1.7;

      &:last-child {
        margin-bottom: 0;
      }
    }

    /* Цитати */
    blockquote {
      margin: 30px 0;
      padding: 15px 25px;
      border-left: 4px solid #7a4e2b;
      font-style: italic;
      color: #555;
      background: #fff;
      border-radius: 4px;
    }

    /* Зображення */
    img {
      display: block;
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 25px auto;
    }

    /* Посилання */
    a {
      color: #7a4e2b;
      text-decoration: underline;
      transition: color 0.3s ease;

      &:hover {
        color: #55321c;
      }
    }

    /* Горизонтальна лінія */
    hr {
      border: none;
      border-top: 1px solid #ddd;
      margin: 30px 0;
    }

    /* Таблиці */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 25px 0;
      font-size: 15px;

      th,
      td {
        border: 1px solid #ddd;
        padding: 10px 15px;
        text-align: left;
      }

      th {
        background: #f3f3f3;
        font-weight: 600;
      }

      tr:nth-child(even) {
        background: #fafafa;
      }
    }
  }

  &__quote {
    margin-top: 30px;
    padding-left: 20px;
    border-left: 4px solid #7a4e2b;
    font-style: italic;
    color: #555;
  }
}
</style>
