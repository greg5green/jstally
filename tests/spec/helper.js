;(function() {
    'use strict';

    describe('helper', function() {
        it('should be should split records on new lines', function() {
            var testInput = 'JavaScript\nRuby\nPython',
                splitInput = helper.splitUserInput(testInput);

            splitInput.should.be.an('array');
            splitInput.should.have.length(3);
            splitInput.should.contain('JavaScript');
            splitInput.should.contain('Ruby');
            splitInput.should.contain('Python');
        });

    });

})();
