;(function() {
    'use strict';

    describe('TallyController', function() {

        describe('creating a new model and view', function() {

            before(function() {

                // Set up any needed spies
                sinon.spy(TallyItemModel.prototype, 'add');

                // create the html needed for init
                $('body').append($('<form id="tally-input-form" style="display: none;"><textarea></textarea></form>'));

                // manually init to set up handlers
                tallyController.init();

                // Set up the text area and trigger the event handler
                $('textarea').val('JavaScript\nRuby');
                $('#tally-input-form').trigger('submit');
            });

            after(function() {
                $('#tally-input-form').remove();

                tallyController = undefined;
            });

            it('should have created a new model', function() {
                tallyController.should.have.a.property('tallyItemModel');
            });

            it('should have added the inputted items to the model', function() {
                var addMethod = tallyController.tallyItemModel.add;

                addMethod.callCount.should.equal(2);
                addMethod.getCall(0).args[0].should.equal('JavaScript');
                addMethod.getCall(1).args[0].should.equal('Ruby');
            });

        });

    });

})();
