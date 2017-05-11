import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | landing page');

test('visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should link to list of features.', function (assert) {
  visit('/');
  click('a:contains("Features")');
  andThen(function() {
    assert.equal(currentURL(), '/features', 'should navigate to features');
  });
});

test('should link to list of tests', function (assert) {
  visit('/');
  click('a:contains("Tests")');
  andThen(function() {
    assert.equal(currentURL(), '/tests', 'should navigate to tests');
  });
});
