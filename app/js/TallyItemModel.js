;(function($, exports) {
    'use strict';

    function TallyItemModel() {
        this.records = [];
    }

    TallyItemModel.prototype.add = function(itemName) {
        this.records.push({
            count: 0,
            item: itemName
        });
    };

    TallyItemModel.prototype.increment = function(itemName) {
        var item = find.call(this, itemName);

        item.count++;
    };

    TallyItemModel.prototype.decrement = function(itemName) {
        var item = find.call(this, itemName);

        item.count--;
    };

    TallyItemModel.prototype.getAllRecords = function() {
        return _.clone(this.records);
    };

    exports.tally = exports.tally || {};
    exports.tally.ItemModel = TallyItemModel;

    // Private functions
    function find(itemName) {
        return _.find(this.records, { item: itemName });
    }

})(jQuery, window);
