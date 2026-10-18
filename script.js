let globalStoredGiftData = "";

const assetCacheStorage = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6w5Uoi4ZWz19FEcu4lMW6Nwjeay11Yw0emzuw9MRQGw&s=10'
];

window.addEventListener('DOMContentLoaded', () => {
    assetCacheStorage.forEach((src) => {
        const imageBucketObj = new Image();
        imageBucketObj.src = src;
    });
});

function activateLayerVisibility(targetId) {
    const element = document.getElementById(targetId);
    element.classList.remove('hide-element');
    setTimeout(() => {
        element.classList.add('fade-in-active');
    }, 50);
}

function deactivateLayerVisibility(targetId) {
    const element = document.getElementById(targetId);
    element.classList.remove('fade-in-active');
    element.classList.add('hide-element');
}

function checkCredentials() {
    const userField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const errorTextDisplay = document.getElementById('error-msg');
    
    const cleanUser = userField.value.trim();
    const cleanPass = passwordField.value.trim();

    if (cleanUser === "gehna.19" && cleanPass === "avi123") {
        document.getElementById('login-screen').classList.remove('active-layer');
        document.getElementById('dynamic-main-bg').classList.add('main-bg-active');
        
        const navSystem = document.getElementById('main-nav');
        navSystem.style.display = 'flex';
        
        activateLayerVisibility('envelope-section');
        activateLayerVisibility('designer-signature-badge');
    } else {
        errorTextDisplay.innerText = "Invalid credentials. Please enter the correct details.";
    }
}

function openEnvelope() {
    const instructionText = document.getElementById('env-instruction');
    instructionText.innerText = "Opening letter...";
    
    setTimeout(() => {
        deactivateLayerVisibility('envelope-section');
        activateLayerVisibility('floating-card-section');
    }, 1200);
}

function goToHarryPotter() {
    deactivateLayerVisibility('floating-card-section');
    activateLayerVisibility('potter-section');
}

function sendGiftRequest() {
    const wishlistContent = document.getElementById('gift-input').value.trim();
    
    if (wishlistContent === "") {
        alert("Please write a gift request inside the box first.");
        return;
    }
    
    globalStoredGiftData = wishlistContent;
    const heartBubble = document.getElementById('heart-anim');
    heartBubble.style.display = "block";
    
    setTimeout(() => {
        deactivateLayerVisibility('potter-section');
        activateLayerVisibility('party-section');
    }, 1600);
}

function selectParty(choiceToken) {
    if (choiceToken === 'yes') {
        activateLayerVisibility('dish-input-area');
    }
}

function submitDish() {
    const textFoodVal = document.getElementById('dish-input').value.trim();
    
    if (textFoodVal === "") {
        alert("Please enter a valid dish name to move forward.");
        return;
    }
    
    deactivateLayerVisibility('party-section');
    activateLayerVisibility('final-section');
}

function unpackMagicalGift() {
    deactivateLayerVisibility('falling-gift-mystery-box');
    activateLayerVisibility('final-surprise-box');
}

function triggerEnd() {
    alert("PARTY YAAD RAKHNA BHULNA NAHI");
}
