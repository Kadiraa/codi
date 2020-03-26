//////////////////////////// Core Logic/////////////////////////////////////////////////
function messageLoad(key){

  alert('key');
// if (key=='welcomeMenu'){
//   alert( JSON.parse({"message":'नमस्ते 🙏यह भारत सरकार के कोरोनावायरस (COVID-19) हेल्पडेस्क जागरूकता पैदा करने और आपको और आपके परिवार को सुरक्षित रखने में मदद करने के लिए है।<br><br>किसी भी आपात स्थिति के लिए 👇हेल्पलाइन: 011-23978046 | टोल-फ्री नंबर: 1075ईमेल: ncov2019@gov.in<br><br>कृपया निम्न विकल्पों में से चुनें ',"tickets":[["1","1. भारत में कोरोनावायरस पर नवीनतम अपडेट"],["2","2. कोरोनावायरस क्या है और इसके लक्षण क्या हैं?"],["3","3. कोरोनावायरस के जोखिम को कैसे कम करें?"],["4","4. एम्स-निदेशक द्वारा पेशेवर सलाह"],["5","5. कोरोनावायरस पर अधिक जानिए (जनता कर्फ्यू सहित)"],["6","6. सहायता कहाँ से प्राप्त करें?"]]}));
// }


}

function messanger(key){

          var data = messageLoad(key);
          alert (data);

          var btn = document.createElement("span");
          btn.id="Breathing";
          btn.className="chat_msg_item chat_msg_item_admin";
          btn.innerHTML = '<div class="chat_avatar"><img src="https://miro.medium.com/max/600/1*t3PcRikIrq42teXReodcRQ.png"/></div> '+'<div>'+data.message+'</div>';
          document.getElementById('spanner').appendChild(btn);
    
          data.tickets.forEach(element => {
          var temp = document.createElement('ul');
          temp.id=element[0];
          temp.className="chat_msg_item chat_msg_item_admin tags";
          temp.innerHTML='<li>'+element[1]+'</li>';
          temp.addEventListener('click',function(){messanger(element[0]);});
          document.getElementById("spanner").appendChild(temp);
          });

}

function removetickets(key){           
  $('ul').fadeOut("slow");
  var btn = document.createElement("span");
  btn.innerHTML="<ul class='chat_msg_item chat_msg_item_user tags'><li>"+key+"</li></ul>";
  document.getElementById('spanner').appendChild(btn);
  
}


function sendMenu(){
$(document).ready(function(){
    var key="welcomeMenu";
    messanger(key);
  });
}



///////////////////////////////////////// Design ////////////////////////////////////////////////////////////
$('#chat_converse').css('display', 'block');
$('#chat_body').css('display', 'none');
$('#chat_form').css('display', 'none');
$('.chat_login').css('display', 'none');
$('.chat_fullscreen_loader').css('display', 'block');

$('#prime').click(function() {
  toggleFab();
  messageLoad('welcomeMenu');
});

//Toggle chat and links
function toggleFab() {
  $('.prime').toggleClass('zmdi-comment-outline');
  $('.prime').toggleClass('zmdi-close');
  $('.prime').toggleClass('is-active');
  $('.prime').toggleClass('is-visible');
  $('#prime').toggleClass('is-float');
  $('.chat').toggleClass('is-visible');
  $('.fab').toggleClass('is-visible');
  
}

  $('#chat_fullscreen_loader').click(function(e) {
      $('.fullscreen').toggleClass('zmdi-window-maximize');
      $('.fullscreen').toggleClass('zmdi-window-restore');
      $('.chat').toggleClass('chat_fullscreen');
      $('.fab').toggleClass('is-hide');
      $('.header_img').toggleClass('change_img');
      $('.img_container').toggleClass('change_img');
      $('.chat_header').toggleClass('chat_header2');
      $('.fab_field').toggleClass('fab_field2');
      $('.chat_converse').toggleClass('chat_converse2');
  });

