const assert = require('assert');
/* eslint-disable no-undef */
Feature('Liking Resto');

Before(({ I }) => {
  // root URL : http:localhost:9000
  I.amOnPage('/#/favorite');
});

Scenario('showing empty your favorite restaurant', ({ I }) => {
  I.seeElement('#favoriteResto');
  I.see('Favorite Movie Not Found', '#favoriteResto');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Favorite Movie Not Found', '#favoriteResto');

  I.amOnPage('/');
  I.seeElement('.card-resto a');
  const firstResto = locate('.card-content-title').first();
  const firstRestoTittle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.card-resto');
  const likedRestoTittle = await I.grabTextFrom('.card-content-title');
  assert.strictEqual(firstRestoTittle, likedRestoTittle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.waitForElement('.card-resto', 10);
  I.seeElement('.card-resto');
  const likedRestoTittle = await I.grabTextFrom('.card-content-title');
  I.click(likedRestoTittle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#favoriteResto');
  I.dontSeeElement('.card-resto');
  I.dontSeeElement('.card-content-title');
});
