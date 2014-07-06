"use strict"

class TallyController
    constructor: (@model, @view) ->
        @view.bindEvent "startTally", addItemsToModel.bind @
        @view.bindEvent "incrementItem", incrementItem.bind @
        @view.bindEvent "decrementItem", decrementItem.bind @

    addItem = (item) ->
        @model.add item

    addItemsToModel = (items) ->
        addItem.call @, item for item in items

        @view.renderItems @model.getAllRecords()

    decrementItem = (itemName) ->
        @model.decrement itemName

        @view.renderItems @model.getAllRecords()

    incrementItem = (itemName) ->
        @model.increment itemName

        @view.renderItems @model.getAllRecords()

@tally or= {}
@tally.Controller = TallyController
