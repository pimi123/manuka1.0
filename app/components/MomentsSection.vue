<template>
  <section class="moments-section">
    <div class="moments-section__inner">
      <div class="moments-section__content">
        <h2>Moments that stay with you softly.</h2>
        <p>
          From quiet dinners to special gatherings, Manuka creates the kind of
          environment where memories are made in the subtle details — the clink
          of glass, the warmth of the light, and the shared stillness.
        </p>
      </div>

      <div class="moments-section__quote">
        <span class="moments-section__star">★</span>

        <blockquote>
          “An orchestration of silence and flavor that I haven’t found anywhere
          else. Truly a masterclass in restraint.”
        </blockquote>

        <p>— Journal of Modern Living</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.moments-section {
  background: #ffffff;
  color: #2e2622;
  padding: 120px 8vw;

  &__inner {
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 420px;
    align-items: center;
    gap: 120px;
  }

  &__content {
    max-width: 520px;

    h2 {
      font-size: clamp(32px, 4vw, 52px);
      line-height: 1.05;
      font-weight: 400;
      margin: 0 0 28px;
      letter-spacing: -0.03em;
      color: #2e2622;
    }

    p {
      font-size: 14px;
      line-height: 1.8;
      color: rgba(46, 38, 34, 0.8);
      margin: 0;
      max-width: 460px;
    }
  }

  &__quote {
    background: #b8896f;
    color: #ffffff;
    padding: 56px 52px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 24px;
  }

  &__star {
    color: #ffffff;
    font-size: 22px;
    line-height: 1;
  }

  blockquote {
    font-size: clamp(22px, 2.4vw, 31px);
    line-height: 1.13;
    font-style: italic;
    font-weight: 400;
    margin: 52px 0 44px;
    letter-spacing: -0.025em;
    color: rgba(255, 255, 255, 0.94);
  }

  &__quote p {
    margin: 0;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
  }
}

@media (max-width: 900px) {
  .moments-section {
    padding: 80px 24px;

    &__inner {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    &__content {
      max-width: 100%;
    }

    &__quote {
      min-height: auto;
      padding: 40px 32px;
    }

    blockquote {
      margin: 40px 0;
    }
  }
}

@media (max-width: 520px) {
  .moments-section {
    padding: 64px 20px;

    &__quote {
      padding: 32px 24px;
    }

    &__content p {
      font-size: 13px;
    }
  }
}
</style>