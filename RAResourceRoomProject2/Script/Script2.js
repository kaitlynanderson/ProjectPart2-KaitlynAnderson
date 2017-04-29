// Subscription page code //


$(document).ready(function() {
  $("#join_list").click(function() {
      var emailAddress = $("email_address").val();
      var firstName = $("first_name").val();
      var isValid = true;

      if (emailAddress == "") {
        $("#email_address1").next().text("This field is required.");
        isValid = false;
      } else {
          $("#email_address").next().text("");
      }

      if ($("#first_name").val() == "") {
        $("#first_name").next().text("This field is required.");
        isValid = false;
      } else {
          $("#first_name").next().text("")
      }

      if (isValid) {
        $("#email_form").submit();
      }
  });
});
