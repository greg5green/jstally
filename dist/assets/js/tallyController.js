;(function($, exports) {
    'use strict';

    function TallyController() {
        this.init();
    }

    TallyController.prototype.init = function() {
        $('#tally-input-form').on('submit', $.proxy(_addItemsToStore, this));

        // $('.container').on('click', 'td.table-increment', $.proxy(_incrementItem, this));
    };

    $(function() {
        exports.tallyController = new TallyController();
    });


    // Private functions
    function _addItem(item) {
        this.tallyItemModel.add(item);
    }

    function _addItemsToStore(event) {
        var userInput = event.target[0].value,
            items = helper.splitUserInput(userInput);

        event.preventDefault();

        // Create the store if it doesn't exist yet
        if (!this.tallyItemModel) {
            _createStore.call(this);
        }

        // Add the items from the user input
        _.forEach(items, _addItem, this);

        // _drawTallyItemView(this.tallyItemModel.getAllRecords());
    }

    function _createStore() {
        this.tallyItemModel = new TallyItemModel();
    }

    // function _drawTallyItemView(items) {
    //     // TODO: Clean this up.
    //     var template = _.template($( "#items-view" ).html(), { items: items });
    //     $('#content-panel').empty().append(template);
    // }

    // function _incrementItem(event) {
    //     var target = event.target.parentNode.parentNode
    //     this.tallyItemModel.increment($(target).find('.table-item').html());
    //     _drawTallyItemView(this.tallyItemModel.getAllRecords());
    // }

})(jQuery, window);
