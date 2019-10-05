var db = require("../models");



module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });


  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });



  // nodemailer /////////////////////////////////
  app.get("/login", (req,res) =>{
    res.render("profile")
  })



  app.post("/send", (req, res) =>{
    const nodemailer = require('nodemailer');

    const output =`<p> You have a new contact request </p>
    <P> Thank you for joing the squad </p>
    <ul>     
    <li>Name: ${req.body.name}</li>
    <li>email: ${req.body.email}</il>
    </ul>`;


    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
  let transporter = nodemailer.createTransport({
  host: `${req.body.email}`,
   port: 587,
   secure: false,
   auth:{
     user: "bucketlistusa271@gmail.com",
     pass: "bucketlist123456789"
   },
   tls: {
     rejectunauthorized:false
   }

  
  });
    



   // send mail with defined transport object
   let info = await transporter.sendMail({
    from: '" butketlist.com " <bucketlistusa271@gmail.com>', // sender address
    to: `${req.body.email}`,
    subject: 'registration', // Subject line
    text: `hey ${req.body.name} have successfully signed up `, // plain text body
    html: output

    
});

console.log('Message sent: %s', info.messageId);
console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
main().catch(console.error);



    }

});
  
  

// /////////////////////////////////////////

  
}


  // Render 404 page for any unmatched routes
