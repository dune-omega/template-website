var chatDiv = document.createElement("div");
chatDiv.className = "fb-customerchat";
chatDiv.setAttribute("page_id", "268094280486053");
chatDiv.setAttribute("theme_color", "#FF9D4D");
chatDiv.setAttribute("greeting_dialog_display", "show");

document.body.appendChild(chatDiv);

window.fbAsyncInit = function() {
    FB.init({
        appId: '850652791742367',
        autoLogAppEvents: true,
        xfbml: true,
        version: "v3.2"
    });
};
(function(d, s, id) {
        while (document.getElementById("facebook-jssdk")) {
          var element = document.getElementById("facebook-jssdk");
          element.parentNode.removeChild(element);
        }

        var fjs = d.getElementsByTagName(s)[0];
        var js,
          parent = d.getElementsByTagName(s)[0].parentNode;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        parent.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");