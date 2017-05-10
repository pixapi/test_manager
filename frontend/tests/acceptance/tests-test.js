import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | tests');

test('visiting /tests', function(assert) {
  visit('/tests');

  andThen(function() {
    assert.equal(currentURL(), '/tests');
  });
});
