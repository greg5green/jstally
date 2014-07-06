@helper =
    sortUserInput: (input) ->
        input.sort (a, b) ->
            a > b
    splitUserInput: (input) ->
        input
            .split "\n"
            .map (item) ->
                $.trim item
