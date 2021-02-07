const webpush = require('web-push');

const vapidKeys = {
  "publicKey": "BNNWctVklwSAxXao5q74XR-gNsD0OMjqSnAqVeb9_f-nbzkJptsd_ZISPVRdY5D5Rts-23gy9k5kI6AVc1bnZmM",
  "privateKey": "xcoaqcFgoown0W1e1TIRDkR-fP_eZ2iH9Ni4Kh6S5hY"
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

module.exports.sendPush = (notificationPayload) => {
  
  const allSubscriptions = [  
    {
      "endpoint": "https://fcm.googleapis.com/fcm/send/fe7x72p0--A:APA91bFGcWA-UqdSII2U4HQt8TChoFxfn07KP2R_L_7DrtB5wZx9Z0nAOz63Hm5M8p7_b2ssErdcUgx3jP3u6r3ZLOwi7O8qIna6F6BzfYVZtH9YEVuF5k9s0V_6iuJogC1oq1NfUlMB",
      "expirationTime": null,
      "keys": {
        "p256dh": "BBwKeL892wM2ihay8kxfd9uiZYndZiojJWkSxTS3CWRDZMKLexG2_nrsQnlKgIE5D6gid__97Jg2EbQGo4-s_YM",
        "auth": "gOz-j79TNlsyJDr-cXJL7w"
      }
    }
  ];
  
  return Promise.all(allSubscriptions.map(sub => webpush.sendNotification(
    sub, JSON.stringify(notificationPayload) )))
    
} 