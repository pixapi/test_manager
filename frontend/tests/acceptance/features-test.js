import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | features');

test('visiting /features', function(assert) {
  visit('/features');

  andThen(function() {
    assert.equal(currentURL(), '/features');
  });
});

test('should link to list of features.', function (assert) {
  visit('/features');
  click('a:contains("Features")');
  andThen(function() {
    assert.equal(currentURL(), '/features', 'should navigate to features');
  });
});

test('should link to list of tests', function (assert) {
  visit('/features');
  click('a:contains("Tests")');
  andThen(function() {
    assert.equal(currentURL(), '/tests', 'should navigate to tests');
  });
});
