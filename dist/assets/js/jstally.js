;var jsTally = (function($) {

    function splitUserInput(input) {
        return input.split('\n');
    }

    function sortUserInput(input) {
        return input.sort(function(a, b) {
            return a > b;
        });
    }

    return {
        init: function() {
            $('#tally-input-form').on('submit', function(event) {
                event.preventDefault();

                handlerUserInput(event);
            });
        },

        handleUserInput: function(event) {
            var userInput = splitUserInput(event.target.elements[0].value),
                sortedUserInput = sortUserInput(userInput);

            this.createDomNodesFromUserInput(sortedUserInput);
        },

        createDomNodesFromUserInput: function (input) {

        }
    }

})(jQuery);

jQuery(function() {
    jsTally.init();
});
