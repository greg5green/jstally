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
        var item = this.find(itemName);

        item.count++;
    };

    TallyItemModel.prototype.decrement = function(itemName) {
        var item = this.find(itemName);

        item.count--;
    };

    TallyItemModel.prototype.find = function(itemName) {
        return _.find(this.records, { item: itemName });
    };

    exports.TallyItemModel = TallyItemModel;

})(jQuery, window);
