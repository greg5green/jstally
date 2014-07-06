"use strict"

class TallyView
    constructor: ->
        @itemsTemplate = _.template "
            <table class='table table-striped table-responsive'>
                <thead>
                    <tr>
                        <th class='table-increment'>Increment</th>
                        <th class='table-decrement'>Decrement</th>
                        <th>Item</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    <% _.each(items, function(item) { %>
                    <tr>
                        <td class='table-increment'><span class='glyphicon glyphicon-plus-sign'></span></td>
                        <td class='table-decrement'><span class='glyphicon glyphicon-minus-sign'></span></td>
                        <td class='table-item'><%- item.item %></td>
                        <td class='table-count'><%- item.count %></td>
                    </tr>
                    <% }); %>
                </tbody>
            </table>"

        @$contentPanel = $ "#content-panel"
        @$tallyInput = $ "#tally-input"
        @$tallyStartBtn = $ "#convert-tally-input"

    renderItems: (data) ->
        @$contentPanel.html @itemsTemplate { items: data }

    bindEvent: (event, callback) ->
        switch event
            when "startTally" then @$tallyStartBtn.on "click", startTally.bind @, callback
            when "decrementItem" then @$contentPanel.on "click", ".table-decrement span", getItemNameAndExecuteCallback.bind @, callback
            when "incrementItem" then @$contentPanel.on "click", ".table-increment span", getItemNameAndExecuteCallback.bind @, callback

    getItemNameAndExecuteCallback = (callback, event) ->
        itemName = $ event.target
            .parent()
            .siblings ".table-item"
                .text()

        callback itemName

    startTally = (callback, event) ->
        userInput = @$tallyInput.val()
        items = helper.splitUserInput userInput

        event.preventDefault()

        callback items

@tally or= {}
@tally.View = TallyView
