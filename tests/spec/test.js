/* global describe, it */

(function() {
    'use strict';

    describe('tally', function() {
        describe('the only/future init method', function() {
            it('should return the same thing you pass it', function() {
                var one = true,
                    two = [1, 2, 3],
                    three = { myKey: 'value' };

                assert(one, jstally(one));
                assert(two, jstally(two));
                assert(three, jstally(three));
            });
        });
    });
})();
