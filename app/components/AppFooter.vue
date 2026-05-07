<template>
  <footer class="footer">
    <div class="footer__container">

      <!-- left -->
      <div class="footer__col">
        <h3>OPENING HOURS</h3>

        <p>Monday - Friday : 07:00 - 11:00</p>
        <p>Saturday - Sunday : 07:00 - 12:00</p>

        <div class="footer__space"></div>

        <p>Booking Time: 24/7</p>
        <a href="tel:+38344000000">+383 44 000 000</a>
      </div>

      <!-- center -->
      <div class="footer__center">
        <h2>MANUKA</h2>
        <span>RESTAURANT</span>

        <p>Rr. Ramadan Rexhepi</p>
        <p>Afer Spitalit te Pergjithshem</p>
        <p>70 000 Ferizaj, Kosove</p>

        <div class="footer__socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
      </div>

      <!-- right -->
      <div class="footer__col footer__right">
        <h3>NAVIGATION</h3>

        <div class="footer__links">
          <NuxtLink to="/">HOME</NuxtLink>
          <NuxtLink to="/menu">MENU</NuxtLink>
          <NuxtLink to="/about">ABOUT</NuxtLink>
          <NuxtLink to="/contact">CONTACT</NuxtLink>
        </div>

        <a href="#" class="footer__book">Book your table!</a>
      </div>

    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: #b8896f;
  padding: 70px 20px;
  color: #2e2622;
}

.footer__container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: start;
  gap: 40px;
}

.footer__col,
.footer__center {
  text-align: center;
}

.footer__col h3,
.footer__center h2 {
  margin: 0 0 22px;
  font-weight: 500;
}

.footer__col h3 {
  font-size: 28px;
}

.footer__center h2 {
  font-size: 48px;
  letter-spacing: .08em;
  margin-bottom: 0;
}

.footer__center span {
  display: block;
  font-size: 11px;
  letter-spacing: .25em;
  margin-bottom: 24px;
}

.footer p,
.footer a {
  margin: 0 0 8px;
  font-size: 15px;
  color: inherit;
  text-decoration: none;
  line-height: 1.6;
}

.footer__space {
  height: 16px;
}

.footer__socials {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 18px;
}

.footer__links {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  gap: 10px 35px;
  margin-bottom: 28px;
}

.footer__links a {
  letter-spacing: .08em;
}

.footer__book {
  font-style: italic;
}

@media (max-width: 768px) {
  .footer__container {
    grid-template-columns: 1fr;
    gap: 50px;
  }
}
</style>