/* global describe, it */

(function() {
    'use strict';

    describe('tally', function() {
        describe('the only/future init method', function() {
            it('should return the same thing you pass it', function() {
                var one = true,
                    two = [1, 2, 3],
                    three = { myKey: 'value' };

                assert(one, tally(one));
                assert(two, tally(two));
                assert(three, tally(three));
            });
        });
    });
})();
