$(document).ready(function() {
  // Getting references to our form and input
  var signUpButton = $(".signup");
  var usernameInput = $("input#username-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  var repeatPasswordInput = $("input#repeat-password-input");
  var repeatEmailInput = $("input#repeat-email-input");

  // Username "on-the-fly" validation
  usernameInput.bind('input propertychange', function() {
    if (usernameInput.val().trim().length < 6) {
      $("#username-form").removeClass("has-success");

      $("#username-form").addClass("has-error");
      $("#username-feedback").text("username must be at least 6 characters long");
    } else {
      $("#username-form").removeClass("has-error");

      $("#username-form").addClass("has-success");
      $("#username-feedback").text("Username valid!");
    }
  });

  // Email "on-the-fly" validation
  emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  emailInput.bind('input propertychange', function() {
    if (!emailRegEx.test($(this).val()))
    {
      $("#email-form").removeClass("has-success");

      $("#email-form").addClass("has-error");
      $("#email-feedback").text("Invalid Email");
      $("#email-additional-feedback").text("Ex: someone@example.com");
    
    } else {
      $("#email-form").removeClass("has-error");

      $("#email-form").addClass("has-success");
      $("#email-feedback").text("Valid Email!");
      $("#email-additional-feedback").text("");
    }
  });

  // Check "on-the-fly" if repeated email matches email
  repeatEmailInput.bind('input propertychange', function() {
    if (emailInput.val().trim() !== repeatEmailInput.val().trim()) {
      $("#email-repeat-form").removeClass("has-success");

      $("#email-repeat-form").addClass("has-error");
      $("#email-repeat-feedback").text("Emails Don't Match");
    } else {
      $("#email-repeat-form").removeClass("has-error");

      $("#email-repeat-form").addClass("has-success");
      $("#email-repeat-feedback").text("Emails Match!");    
    }
  });
  var passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  passwordInput.bind('input propertychange', function() {
    if (!passwordRegEx.test($(this).val())) {
      $("#password-form").removeClass("has-success");

      $("#password-form").addClass("has-error");
      $("#password-feedback").text("Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and must be at least 8 characters long.");
    } else {
      $("#password-form").removeClass("has-error");

      $("#password-form").addClass("has-success");
      $("#password-feedback").text("Password set correctly!");    
    }
  });

  repeatPasswordInput.bind('input propertychange', function() {
    if (passwordInput.val().trim() !== repeatPasswordInput.val().trim()) {
      $("#repeat-password-form").removeClass("has-success");

      $("#repeat-password-form").addClass("has-error");
      $("#repeat-password-feedback").text("Passwords Don't Match");
    } else {
      $("#repeat-password-form").removeClass("has-error");

      $("#repeat-password-form").addClass("has-success");
      $("#repeat-password-feedback").text("Passwords Match!");    
    }
  });

  // Check if emails match each other
  signUpButton.on("click", function(event) {
    // Replace all alerts with modals

    var userData = {
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.email || !userData.password) {
      return alert("Please don't leave fields blank");
    }

    // If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
    usernameInput.val("");
    repeatPasswordInput.val("");
    repeatEmailInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, email, password) {
    $.post("/users/signup", {
      username: username,
      email: email,
      password: password
    }).then(function(data) {
      if (data.duplicateUser) {
        // Replace with Modal
        alert("Sorry, that username has been taken");
      } else {
        window.location = data.redirect;
      }
    }).catch(function(err) {
      console.log(err);
    });
  }

});
