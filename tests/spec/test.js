/* global describe, it */

(function() {
    'use strict';

    describe('Handling initial user input before DOM node creation', function() {
        var inputArg;

        before(function() {
            sinon.spy(jsTally, 'createDomNodesFromUserInput');
        });

        beforeEach(function() {
            jsTally.handleUserInput({
                target: {
                    elements: [{
                        value: '10\n1\nthree\nfour'
                    }]
                }
            });

            inputArg = jsTally.createDomNodesFromUserInput.args[0][0];
        });

        afterEach(function() {
            jsTally.createDomNodesFromUserInput.reset();
        });

        it('should be split on new lines', function() {
            inputArg.should.have.length(4);
        });
        // it('should be alphabatized', function() {
        //     inputArg.should.be.eql(['1', '10', 'four', 'three']);
        // });
    });

})();
