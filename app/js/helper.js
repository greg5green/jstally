;(function($, exports) {

    exports.helper = {
        sortUserInput: function(input) {
            return input.sort(function(a, b) {
                return a > b;
            })
        },
        splitUserInput: function(input) {
            return input.split('\n').map(function(item) {
                return $.trim(item);
            });
        }
    };

})(jQuery, window);
