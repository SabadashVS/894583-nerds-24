// Модальное окно

var BtnContacts = document.querySelector(".btn-contacts");
  
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".write-us-form");
var userName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

var isStorageSupportName = true;
var isStorageSupportEmail = true;
var storageName = "";
var storageEmail = "";

function modalClose () {
    popup.classList.remove("modal-show");
}

function removeAnimationClose () {
    popup.classList.remove("modal-close-animation");
}

try {
    storageName = localStorage.getItem("userName");
} catch (err) {
    isStorageSupportName = false;
}

try {
    storageName = localStorage.getItem("email");
} catch (err) {
    isStorageSupportEmail = false;
}

BtnContacts.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  
    if (storageName) {
        userName.value = storageName;
        email.focus();
    } else {
        name.focus();
    }
    
    if (storageEmail) {
        email.value = storageEmail;
        message.focus();
    } else {
        email.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-close-animation");
    setTimeout(modalClose, 580);
    popup.classList.remove("modal-error");
    userName.classList.remove("modal-blinking");
    email.classList.remove("modal-blinking");
    message.classList.remove("modal-blinking");
    setTimeout(removeAnimationClose, 600);
});

form.addEventListener("submit", function (evt) {
    if (!userName.value || !email.value || !message.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        userName.classList.remove("modal-blinking");
        email.classList.remove("modal-blinking");
        message.classList.remove("modal-blinking");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        if (!userName.value) {
            userName.classList.add("modal-blinking");
        }
        if (!email.value) {
            email.classList.add("modal-blinking");
        }
        if (!message.value) {
            message.classList.add("modal-blinking");
        }
    } else {
        if (isStorageSupport) {
            localStorage.setItem("userName", name.value);
            localStorage.setItem("email", email.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.add("modal-close-animation");
            setTimeout(modalClose, 580);
            popup.classList.remove("modal-error");
            userName.classList.remove("modal-blinking");
            email.classList.remove("modal-blinking");
            message.classList.remove("modal-blinking");
            setTimeout(removeAnimationClose, 600);
        }
    }
});

// Карта

var latlng = new google.maps.LatLng("59.939109", "30.321458");
var myOptions = {
zoom: 17,
center: latlng,
navigationControlOptions: {
style: google.maps.NavigationControlStyle.SMALL
},
mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("makemap_canvas"),myOptions);
map.scrollwheel=true;
map.setOptions({ mapTypeControl:true});
var marker = new google.maps.Marker({
	position: {lat: 59.938738, lng: 30.323758},
	map: map,
	title: 'NЁRDS DESIGN STUDIO',
	icon: {
		url: "img/map-marker.png",
		scaledSize: new google.maps.Size(231,190)
	}
});