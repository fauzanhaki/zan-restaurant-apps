/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('Showing empty favorite restaurant', async ({ I }) => {
  I.seeElement('.favoriteNull');
  I.see(`You don't have any favorite restaurant yet`);
});

Scenario('Do favorite to one of the restaurants', async ({ I }) => {
  I.see(`You don't have any favorite restaurant yet`);

  I.amOnPage('');

  I.seeElement('.card h3 a.name');
  const firstResto = locate('.card h3 a.name').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('.card');
  const likedRestoTitle = await I.grabTextFrom('.name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Do unfavorite to one of the restaurants', async ({ I }) => {
  I.see(`You don't have any favorite restaurant yet`);

  I.amOnPage('');

  I.seeElement('.card h3 a.name');
  const firstResto = locate('.card h3 a.name').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('.card');
  const likedRestoTitle = await I.grabTextFrom('.name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  // unfavorit
  I.amOnPage('#/favorite');

  I.seeElement('.card h3 a.name');
  const favResto = locate('.card h3 a.name').first();
  I.click(favResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('.favoriteNull');
});
