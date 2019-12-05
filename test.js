//Import .env
require('dotenv').config();
//package to use the file system
var fs = require("fs");

var deployStack = require('./deploy-stack.js');

//var createLambda = require('./create-lambda.js');

const sourceEmail = "mailer@torus-digital.com";
const form = "testseventeen";

function initDeployment(formName) {
  var dir = `forms/${formName}`;
  if (!fs.existsSync(dir)){
      fs.mkdir(dir, (err) => {
        if (err) {
          throw err;
        }
        else {
          deployStack(form)
        }
      });
  }
  else {
    //createLambda(myFormFields, form, sourceEmail, "deploy")
  }
}

initDeployment(form)