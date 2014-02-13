;(function() {
    'use strict';

    describe('TallyItemModel', function() {
        var tallyItemModel;

        before(function() {
            tallyItemModel = new TallyItemModel();
        });

        after(function() {
            tallyItemModel = undefined;
        });

        it('should create an empty array during model instantiation', function() {
            tallyItemModel.should.have.a.property('records').that.is.an('array');
        });

        it('should have be able to add new tally items with an initial count of 0', function() {
            tallyItemModel.add('JavaScript');

            tallyItemModel.should.have.a.deep.property('records[0].item', 'JavaScript');
            tallyItemModel.should.have.a.deep.property('records[0].count', 0);
        });

        it('should be able to increment a record count by item name', function() {
            tallyItemModel.increment('JavaScript');

            tallyItemModel.should.have.a.deep.property('records[0].count').that.equals(1);
        });

        it('should be able to decrease a record count by item name', function() {
            tallyItemModel.decrement('JavaScript');

            tallyItemModel.should.have.a.deep.property('records[0].count').that.equals(0);
        });

        it('should be able to find an item by name', function() {
            var jsItem = tallyItemModel.find('JavaScript');

            jsItem.should.deep.equal({ item: 'JavaScript', count: 0 });
        });

    });

})();
