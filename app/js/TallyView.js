;(function(jQuery, exports) {
    'user strict';

    function TallyView() {
        this.itemsTemplate = _.template(
            '<table class="table table-striped table-responsive">' +
                '<tr>' +
                    '<th class="table-increment">Increment</th>' +
                    '<th class="table-decrement">Decrement</th>' +
                    '<th>Item</th>' +
                    '<th>Count</th>' +
                '</tr>' +
                '<% _.each(items, function(item) { %>' +
                '<tr>' +
                    '<td class="table-increment"><span class="glyphicon glyphicon-plus-sign"></span></td>' +
                    '<td class="table-decrement"><span class="glyphicon glyphicon-minus-sign"></span></td>' +
                    '<td class="table-item"><%- item.item %></td>' +
                    '<td class="table-count"><%- item.count %></td>' +
                '</tr>' +
                '<% }); %>' +
            '</table>'
        );

        this.$contentPanel = $('#content-panel');
        this.$tallyInput = $('#tally-input');
        this.$tallyStartBtn = $('#convert-tally-input');
    }

    TallyView.prototype.renderItems = function(data) {
        this.$contentPanel.html(this.itemsTemplate({ items: data }));
    };

    TallyView.prototype.bind = function(event, callback) {
        if (event === 'startTally') {
            this.$tallyStartBtn.on('click', $.proxy(startTally, this, callback));
        }

        else if (event === 'decrementItem') {
            this.$contentPanel.on('click', '.table-decrement span',
                    $.proxy(getItemNameAndExecuteCallback, this, callback));
        }

        else if (event === 'incrementItem') {
            this.$contentPanel.on('click', '.table-increment span',
                    $.proxy(getItemNameAndExecuteCallback, this, callback));
        }
    };

    exports.tally = exports.tally || {};
    exports.tally.View = TallyView;

    // Private functions
    function getItemNameAndExecuteCallback(callback, event) {
        var itemName = $(event.target).parent().siblings('.table-item').text();

        callback(itemName);
    }

    function startTally(callback, event) {
        var userInput = this.$tallyInput.val(),
            items = helper.splitUserInput(userInput);

        event.preventDefault();

        callback(items);
    }

})($, window);
