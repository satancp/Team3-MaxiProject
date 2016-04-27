// var shell = require('shelljs/global');
// // var command1 = "osascript -e ";
// // var command2 = 'tell application "Terminal" to do script ';
// // var command3 = "sshpass -p 'tianze1228' ssh -o StrictHostKeyChecking=no wangzh1228@143.167.238.68";
// // var command4 = " -e ";
// // var command5 = '"cd /Users/wangzh1228/Desktop/MyCloud"';
// // var command6 = '"grunt serve"';
// // var command7 = '"delay 2"';
// // var command = command1 + "'" + command2 + '"' + command3 + '"' + "'" + command4 + "'" + command7 + "'" + command4 + "'" + command2 + command5 + " in front window'" + command4 + "'" + command2 + command6 + " in front window'";
// var command = "x-terminal-emulator";
// shell.exec(command, {silent:false}).stdout;
var nodemailer = require('nodemailer');

function sendConfirmationMail() {
  console.log("hello");
  var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'zx603852402@gmail.com',
        pass: 'wsxjw113'
    }
  };
  var transporter = nodemailer.createTransport(smtpConfig);
  var mailOptions = {
    from: 'zx603852402@gmail.com',
    to: "zx603852402@vip.qq.com",
    subject: 'Hello New User', 
    text: 'Hello, welcome to join in material sheffield. Please click this confirmation url to complete your registeration.', 
    html: '<b>Hello, welcome to join in material sheffield.</b><br/><p>Please click this confirmation url to complete your registeration.</p>' 
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
  console.log("hello");
}
sendConfirmationMail();