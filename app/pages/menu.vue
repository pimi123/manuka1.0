<template>
  <div class="menu-page">
    <!-- Hero Section -->
    <section class="menu-hero">
      <div class="menu-hero__overlay"></div>
      <div class="menu-hero__content">
        <h1>Our Menu</h1>
        <p>Carefully crafted dishes inspired by nature</p>
      </div>
    </section>

    <!-- Menu Content -->
    <section class="menu-section">
      <div class="menu-section__inner">
        <!-- Filter Tabs -->
        <div class="menu-tabs">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            :class="['menu-tabs__btn', { active: activeCategory === category }]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Menu Items Grid -->
        <div class="menu-items">
          <div
            v-for="item in filteredMenu"
            :key="item.id"
            class="menu-item"
          >
            <div class="menu-item__header">
              <h3>{{ item.name }}</h3>
              <span class="menu-item__price">${{ item.price }}</span>
            </div>
            <p class="menu-item__description">{{ item.description }}</p>
            <div v-if="item.allergens" class="menu-item__allergens">
              <span class="allergen-label">Allergens:</span>
              <span>{{ item.allergens }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Wine Pairings Section -->
    <section class="wine-section">
      <div class="wine-section__inner">
        <h2>Wine Pairings</h2>
        <p class="wine-section__subtitle">Curated selections to complement your meal</p>

        <div class="wine-list">
          <div
            v-for="wine in wines"
            :key="wine.id"
            class="wine-item"
          >
            <div class="wine-item__header">
              <h4>{{ wine.name }}</h4>
              <span class="wine-item__price">${{ wine.price }}</span>
            </div>
            <p class="wine-item__details">
              <span class="wine-type">{{ wine.type }}</span> • 
              <span class="wine-region">{{ wine.region }}</span>
            </p>
            <p class="wine-item__notes">{{ wine.notes }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Note Section -->
    <section class="menu-note">
      <div class="menu-note__inner">
        <p>
          Our menu is seasonal and subject to change based on ingredient availability.
          For specific dietary requirements or allergies, please inform your server.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'Menu - Manuka'
})

const activeCategory = ref('Appetizers')

const categories = ['Appetizers', 'Main Courses', 'Desserts', 'Beverages']

const menuItems = [
  // Appetizers
  {
    id: 1,
    category: 'Appetizers',
    name: 'Wild Mushroom Tartine',
    price: 14,
    description: 'Toasted sourdough with roasted forest mushrooms, truffle oil, and fresh thyme',
    allergens: 'Gluten, Truffle'
  },
  {
    id: 2,
    category: 'Appetizers',
    name: 'Charred Beet & Goat Cheese',
    price: 12,
    description: 'Roasted beets with creamy goat cheese, candied walnuts, and pomegranate reduction',
    allergens: 'Nuts, Dairy'
  },
  {
    id: 3,
    category: 'Appetizers',
    name: 'Pan-Seared Scallops',
    price: 18,
    description: 'Three diver scallops with brown butter, lemon, and micro greens',
    allergens: 'Shellfish, Dairy'
  },
  {
    id: 4,
    category: 'Appetizers',
    name: 'Heirloom Tomato Salad',
    price: 11,
    description: 'Seasonal tomatoes, fresh basil, burrata, aged balsamic',
    allergens: 'Dairy'
  },

  // Main Courses
  {
    id: 5,
    category: 'Main Courses',
    name: 'Herb-Crusted Lamb Loin',
    price: 42,
    description: 'Lamb loin with rosemary crust, served with root vegetable purée and red wine jus',
    allergens: 'Gluten'
  },
  {
    id: 6,
    category: 'Main Courses',
    name: 'Pan-Roasted Duck Breast',
    price: 38,
    description: 'Organic duck breast with cherry gastrique, wild rice, and seasonal vegetables',
    allergens: 'None'
  },
  {
    id: 7,
    category: 'Main Courses',
    name: 'Wild Halibut en Papillote',
    price: 40,
    description: 'Fresh halibut steamed in parchment with asparagus, lemon, and white wine',
    allergens: 'Fish, Shellfish'
  },
  {
    id: 8,
    category: 'Main Courses',
    name: 'Wagyu Beef Ribeye',
    price: 52,
    description: '12oz Japanese wagyu with truffle butter, roasted bone marrow, and microgreens',
    allergens: 'Dairy, Gluten'
  },
  {
    id: 9,
    category: 'Main Courses',
    name: 'Seasonal Vegetable Medley',
    price: 28,
    description: 'Roasted seasonal vegetables with quinoa, tahini dressing, and toasted seeds',
    allergens: 'Sesame, Nuts'
  },

  // Desserts
  {
    id: 10,
    category: 'Desserts',
    name: 'Dark Chocolate Torte',
    price: 12,
    description: 'Rich 72% chocolate cake with raspberry coulis and vanilla bean cream',
    allergens: 'Dairy, Gluten, Nuts'
  },
  {
    id: 11,
    category: 'Desserts',
    name: 'Lavender Panna Cotta',
    price: 11,
    description: 'Silky lavender-infused panna cotta with candied lemon and shortbread',
    allergens: 'Dairy, Gluten'
  },
  {
    id: 12,
    category: 'Desserts',
    name: 'Seasonal Fruit Tart',
    price: 10,
    description: 'Butter pastry shell with pastry cream and fresh seasonal berries',
    allergens: 'Dairy, Gluten, Eggs'
  },
  {
    id: 13,
    category: 'Desserts',
    name: 'Mango Sorbet',
    price: 8,
    description: 'Refreshing mango sorbet with coconut tuile and mint',
    allergens: 'None'
  },

  // Beverages
  {
    id: 14,
    category: 'Beverages',
    name: 'Espresso',
    price: 4,
    description: 'Single or double shot',
    allergens: 'None'
  },
  {
    id: 15,
    category: 'Beverages',
    name: 'Specialty Tea',
    price: 6,
    description: 'Selection of premium loose-leaf teas',
    allergens: 'None'
  },
  {
    id: 16,
    category: 'Beverages',
    name: 'House-Made Lemonade',
    price: 7,
    description: 'Fresh lemon, mint, and sparkling water',
    allergens: 'None'
  },
  {
    id: 17,
    category: 'Beverages',
    name: 'Seasonal Mocktail',
    price: 10,
    description: 'Ask your server for today\'s special',
    allergens: 'Varies'
  }
]

const wines = [
  {
    id: 1,
    name: 'Sancerre',
    type: 'White',
    region: 'Loire Valley, France',
    price: 58,
    notes: 'Crisp and elegant with mineral notes. Perfect with seafood and lighter dishes.'
  },
  {
    id: 2,
    name: 'Châteauneuf-du-Pape',
    type: 'Red',
    region: 'Rhône Valley, France',
    price: 68,
    notes: 'Full-bodied with dark fruit. Excellent with lamb and rich meat dishes.'
  },
  {
    id: 3,
    name: 'Barolo',
    type: 'Red',
    region: 'Piedmont, Italy',
    price: 65,
    notes: 'Complex and structured. Pairs beautifully with duck and beef.'
  },
  {
    id: 4,
    name: 'Albariño',
    type: 'White',
    region: 'Galicia, Spain',
    price: 48,
    notes: 'Refreshing and aromatic. Great with scallops and seafood.'
  },
  {
    id: 5,
    name: 'Pinot Noir',
    type: 'Red',
    region: 'Central Otago, New Zealand',
    price: 55,
    notes: 'Silky with red fruit notes. Versatile pairing for most dishes.'
  }
]

const filteredMenu = computed(() => {
  return menuItems.filter(item => item.category === activeCategory.value)
})
</script>

<style scoped lang="scss">
.menu-page {
  background: #ffffff;
}

// Hero Section
.menu-hero {
  position: relative;
  height: 50vh;
  width: 100%;
  background-image: url('../assets/images/hero-banner-img.JPG');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  &__overlay {
    position: absolute;
    inset: 0;
    z-index: 1;

    background:
      linear-gradient(
        to bottom,
        rgba(184, 139, 111, 0.42) 0%,
        rgba(184, 139, 111, 0.28) 30%,
        rgba(184, 139, 111, 0.14) 58%,
        rgba(0, 0, 0, 0.10) 78%,
        rgba(0, 0, 0, 0.22) 100%
      );
  }

  &__content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: #fff;

    h1 {
      font-size: clamp(48px, 6vw, 72px);
      font-weight: 300;
      margin: 0 0 16px;
      letter-spacing: -0.02em;
    }

    p {
      font-size: clamp(14px, 2vw, 18px);
      letter-spacing: 0.08em;
      margin: 0;
      text-transform: uppercase;
    }
  }
}

// Menu Section
.menu-section {
  background: #ffffff;
  padding: 80px 8vw;

  &__inner {
    max-width: 1200px;
    margin: 0 auto;
  }
}

// Filter Tabs
.menu-tabs {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 60px;
  flex-wrap: wrap;

  &__btn {
    padding: 12px 24px;
    background: #f9f7f5;
    border: 2px solid transparent;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #2e2622;

    &:hover {
      border-color: #b8896f;
      background: #ffffff;
    }

    &.active {
      background: #b8896f;
      color: #ffffff;
      border-color: #b8896f;
    }
  }
}

// Menu Items Grid
.menu-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
  margin-bottom: 60px;
}

.menu-item {
  padding: 24px;
  background: #f9f7f5;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: #f0ece9;
    transform: translateY(-4px);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;

    h3 {
      font-size: 16px;
      font-weight: 500;
      margin: 0;
      color: #2e2622;
      flex: 1;
    }
  }

  &__price {
    font-size: 16px;
    font-weight: 600;
    color: #b8896f;
    white-space: nowrap;
  }

  &__description {
    font-size: 13px;
    line-height: 1.6;
    color: rgba(46, 38, 34, 0.75);
    margin: 0 0 12px;
  }

  &__allergens {
    font-size: 11px;
    color: rgba(184, 139, 111, 0.8);
    letter-spacing: 0.05em;

    .allergen-label {
      font-weight: 600;
    }
  }
}

// Wine Section
.wine-section {
  background: #b8896f;
  color: #ffffff;
  padding: 80px 8vw;

  &__inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    font-size: clamp(32px, 4vw, 52px);
    font-weight: 300;
    margin: 0 0 12px;
    letter-spacing: -0.02em;
    text-align: center;
  }

  &__subtitle {
    text-align: center;
    font-size: 14px;
    letter-spacing: 0.08em;
    margin: 0 0 48px;
    opacity: 0.9;
  }
}

.wine-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.wine-item {
  padding: 24px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 8px;

    h4 {
      font-size: 16px;
      font-weight: 500;
      margin: 0;
      flex: 1;
    }
  }

  &__price {
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
  }

  &__details {
    font-size: 12px;
    margin: 8px 0 12px;
    opacity: 0.85;
    letter-spacing: 0.05em;

    .wine-type,
    .wine-region {
      font-weight: 500;
    }
  }

  &__notes {
    font-size: 13px;
    line-height: 1.6;
    margin: 0;
    opacity: 0.9;
  }
}

// Menu Note
.menu-note {
  background: #f9f7f5;
  padding: 48px 8vw;
  text-align: center;

  &__inner {
    max-width: 700px;
    margin: 0 auto;

    p {
      font-size: 14px;
      line-height: 1.8;
      color: rgba(46, 38, 34, 0.75);
      margin: 0;
    }
  }
}

// Responsive
@media (max-width: 768px) {
  .menu-section {
    padding: 60px 24px;
  }

  .menu-tabs {
    gap: 8px;

    &__btn {
      padding: 10px 16px;
      font-size: 12px;
    }
  }

  .menu-items {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .wine-section {
    padding: 60px 24px;
  }

  .wine-list {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .menu-note {
    padding: 40px 24px;
  }
}

@media (max-width: 480px) {
  .menu-hero__content {
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 12px;
    }
  }

  .menu-tabs {
    gap: 6px;

    &__btn {
      padding: 8px 12px;
      font-size: 11px;
    }
  }

  .menu-item {
    padding: 16px;
  }
}
</style>
