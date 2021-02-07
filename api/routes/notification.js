  const express = require('express'),
    router = express.Router();


  const push = require('../../utils/push');



  router.get('/push', (req,res) => {


    const notificationPayload = {
      "notification": {
          "title": "Angular News",
          "body": "Newsletter Available!",
          "icon": "assets/main-page-logo-small-hat.png",
          "vibrate": [100, 50, 100],
          "data": {
              "dateOfArrival": Date.now(),
              "primaryKey": 1
          },
          "actions": [{
              "action": "explore",
              "title": "Go to the site"
          }]
      }
    };
    push.sendPush(notificationPayload)
    .then(() => res.status(200).json({message: 'Notificacion enviada.'}))
    .catch(err => {
        console.error("Error sending notification, reason: ", err);
        res.sendStatus(500);
    });;
  })

  module.exports = router;