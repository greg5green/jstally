;(function($, exports) {
    'use strict';

    function TallyController(model, view) {
        this.model = model;
        this.view = view;

        this.view.bind('startTally', $.proxy(addItemsToModel, this));
        this.view.bind('incrementItem', $.proxy(incrementItem, this));
        this.view.bind('decrementItem', $.proxy(decrementItem, this));
    }

    exports.tally = exports.tally || {};
    exports.tally.Controller = TallyController;

    // Private functions
    function addItem(item) {
        this.model.add(item);
    }

    function addItemsToModel(items) {
        _.forEach(items, addItem, this);

        this.view.renderItems(this.model.getAllRecords());
    }

    function decrementItem(itemName) {
        this.model.decrement(itemName);

        this.view.renderItems(this.model.getAllRecords());
    }

    function incrementItem(itemName) {
        this.model.increment(itemName);

        this.view.renderItems(this.model.getAllRecords());
    }

})(jQuery, window);
