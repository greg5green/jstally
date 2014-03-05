;(function() {
    'use strict';

    function JsTally() {
        this.model = new tally.ItemModel();
        this.view = new tally.View();
        this.controller = new tally.Controller(this.model, this.view);
    }

    new JsTally();
})();
