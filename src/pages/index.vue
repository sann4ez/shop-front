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
  <Header />

  <main class="main">
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
            <button
              ref="prevEl"
              class="swiper-button-prev custom-prev"
            ></button>
            <button
              ref="nextEl"
              class="swiper-button-next custom-next"
            ></button>
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

    <slot />
  </main>

  <footer class="footer">
    <div class="container">
      <p>© 2024 Всі права захищені</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.main {
  padding-top: 72px;
}

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
</style>
