;(function($, exports) {

    exports.helper = {
        sortUserInput: function(input) {
            return input.sort(function(a, b) {
                return a > b;
            })
        },
        splitUserInput: function(input) {
            return _.map(input.split('\n'), function(item) {
                return $.trim(item);
            });
        }
    };

})(jQuery, window);
