/*
 * notificationObj argument is a so called cotainer Object
 * for the variety of properties you will need in the real
 * implemenation needs to define the variety of logic
 *
 * Initial it needs notificationObj.text property to work
 * var notificationObj = {};
 * notificationObj.text = 'Text to publish to the channel'
 *
 */
function slackNotify(notificationObj){
    /*
     * YoursAppWebhookURL is the string looks like this one:
     * https://hooks.slack.com/services/ABCDEFG/HIJKLMOP/QRStUvWXyZ0123456
     */
    var url = 'https://hooks.slack.com/services/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';

    if( notificationObj.hasOwnProperty('text') ){

        $.ajax({
            url         : url,
            data        : 'payload=' + JSON.stringify({ 'text': notificationObj.text }),
            dataType    : 'json',
            processData : false,
            type        : 'POST',
        });
    }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
