;(function($, exports) {
    'use strict';

    function TallyItemModel() {
        this.records = [];
    }

    TallyItemModel.prototype.add = function(itemName) {
        // var uniqueId = _.uniqueId();

        this.records.push({
            count: 0,
            item: itemName
        });
    };

    TallyItemModel.prototype.increment = function(itemName) {
        var item = _find.call(this, itemName);

        item.count++;
    };

    TallyItemModel.prototype.decrement = function(itemName) {
        var item = _find.call(this, itemName);

        item.count--;
    };

    TallyItemModel.prototype.getAllRecords = function() {
        return _.clone(this.records);
    };


    // Private functions
    function _find(itemName) {
        return _.find(this.records, { item: itemName });
    }

    exports.TallyItemModel = TallyItemModel;

})(jQuery, window);
