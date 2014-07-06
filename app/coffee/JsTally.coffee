"use strict"

JsTally = ->
    @model = new tally.ItemModel
    @view = new tally.View
    @controller = new tally.Controller this.model, this.view

new JsTally
