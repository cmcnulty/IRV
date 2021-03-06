var result = $('#result');

$(function() {

    $('#candidates').change(updateButton).keydown(updateButton);
    $('#ballots').change(updateButton).keydown(updateButton);
    $('#incompleteBallots').change(updateButton);
    $('#threshold').change(updateButton).keydown(updateButton);

    function updateButton() {
        $('#submit').html('Submit').removeClass('btn-success').addClass('btn-primary');
    }

    $('#submit').click(function(event) {
        event.preventDefault();
        result.html('');
        $('#submit').html('Re-Submit').removeClass('btn-primary').addClass('btn-success');
        $('#result-group').show();

        var candidateNames = $('#candidates').val().split('\n');
        var ballots = Irv.readBallots($('#ballots').val());
        var orderedBallots = Irv.reorderBallots(ballots, candidateNames);
        var incompleteBallots = $('#incompleteBallots').is(':checked');
        var tiebreakerSecondary = $('#tiebreakerSecondary').is(":checked");
        var threshold = $('#threshold').val();

        if (Irv.validateInput(candidateNames, orderedBallots, incompleteBallots, threshold)) {
            Irv.calculateWinner(candidateNames, orderedBallots, tiebreakerSecondary, threshold);
        }

        $('html, body').animate({scrollTop: $(document).height()}, 'slow');
    });

});
