import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | tests');

test('visiting /tests', function(assert) {
  visit('/tests');

  andThen(function() {
    assert.equal(currentURL(), '/tests');
  });
});

test('should link to list of features.', function (assert) {
  visit('/tests');
  click('a:contains("Features")');
  andThen(function() {
    assert.equal(currentURL(), '/features', 'should navigate to features');
  });
});

test('should link to list of tests', function (assert) {
  visit('/tests');
  click('a:contains("Tests")');
  andThen(function() {
    assert.equal(currentURL(), '/tests', 'should navigate to tests');
  });
});
