"use strict"

class TallyItemModel
    constructor: ->
        @records = []

    add: (itemName) ->
        @records.push
            count: 0
            item: itemName

    increment: (itemName) ->
        item = find.call @, itemName

        item.count++

    decrement: (itemName) ->
        item = find.call @, itemName

        item.count--

    getAllRecords: ->
        _.clone @records

    find = (itemName) ->
        _.find @records, { item: itemName }

@tally or= {}
@tally.ItemModel = TallyItemModel
