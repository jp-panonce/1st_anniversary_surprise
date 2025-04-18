const all_messages = [
    [["Why you're awesome"],[" You're the friend everyone wishes they had"]],
    [["Why you're awesome"],[" you brighten my day and everyone else's"]],
    [["Why you're awesome"],[" you're a great listener"]],
    [["Why you're awesome"],[" you make everyone's days feel brighter"]],
    [["Why you're awesome"],[" your smile makes other's smile"]],
    [["Why you're awesome"],[" you are one of a kind"]],
    [["Why you're awesome"],[" you have a beautiful smile"]],
    [["Why you're awesome"],[" I admire your confidence"]],
    [["Why you're awesome"],[" I like it when you laugh"]],
    [["Why you're awesome"],[" You tell the best stories"]],
    [["Why you're awesome"],[" I lover your sense of humor"]],
    [["Why you're awesome"],[" you color my world"]],
    [["Why you're awesome"],[" you always know how to make me smile"]],
    [["Why you're awesome"],[" you are resilient"]],
    [["Why you're awesome"],[" you are such a great friend"]],
    [["Why you're awesome"],[" you spread kindness everywhere"]],
    [["Why you're awesome"],[" Your butt is perfect"]],
    [["Why you're awesome"],[" your smile lights up the room"]],
    [["Why you're awesome"],[" your mind is insanely cool and interesting"]],
    [["Why you're awesome"],[" you are so fun to hang out with"]],
    [["Why you're awesome"],[" you always smell good"]],
    [["Why you're awesome"],[" You are gorgeous"]],
    [["Why you're awesome"],[" your cute voice"]],
    [["Why you're awesome"],[" your amazing personality"]],
    [["Why you're awesome"],[" your sparkling eyes"]],
    [["Why you're awesome"],[" you have AMAZIIING boobies"]],
    [["My message to you"],[" Thank you for being you"]],
    [["My message to you"],[" You matter"]],
    [["My message to you"],["you are doing an amazing job in life"]],
    [["My message to you"],[" Trust yourself, you know more than you think you do"]],
    [["My message to you"],[" Everyday is a fresh start"]],
    [["My message to you"],[" You are loved more than you know"]],
    [["My message to you"],[" Stand up for yourself and others"]],
    [["My message to you"],[" Just be as you are today"]],
    [["My message to you"],[" I'm so glad you're in my life"]],
    [["My message to you"],[" Take some time to just chill"]],
    [["My message to you"],[" You are amazing, remember that!"]],
    [["My message to you"],[" Thank you for being you"]],
    [["My message to you"],[" You are precious"]],
    [["My message to you"],[" Your are more than enough"]],
    [["My message to you"],[" You are wonderful!!! yes you"]],
    [["My message to you"],[" You can do anything you set your mind to"]],
    [["My message to you"],[" you're a star"]],
    [["My message to you"],[" I am so proud of you"]],
    [["My message to you"],[" Dream Big!"]],
    [["My message to you"],[" You are always enough"]],
    [["My message to you"],[" Be proud of every step you take"]],
    [["My message to you"],[" There's no one like you"]],
    [["My message to you"],[" Choose to be kind"]],
    [["My message to you"],[" You make the world a better place, just by being you"]],
    [["My message to you"],[" Even though you might not believe it, you have always been good enough and people care about you"]],
    [["My message to you"],[" Hope you know that your smile is enough to make my day"]],
    [["My message to you"],[" You're my happy place"]],
    [["My message to you"],[" Being with you feels like a warm hug for my soul"]],
    [["My message to you"],[" Thank you for being my cozy corner in this crazy world"]],
    [["My message to you"],[" I love you so much"]],
    [["My message to you"],[" You're the cutest person eveeeer!!"]],
    [["My message to you"],[" You're the person I want to come home to"]],
    [["My message to you"],[" I like spending time with you, even if we do nothing"]],
    [["My message to you"],[" When I'm with you, great moments don't need to be loud"]],
    [["My message to you"],[" You deserve to be loved without having to hide the parts of yourself that you think are unloved"]],
    [["My message to you"],[" Take a deep breath, you got this"]],
    [["My message to you"],[" I love you forever"]],
    [["My message to you"],[" Your smile is the sweetest thing I've ever seen"]],
    [["My message to you"],[" If you want to talk, I'm here. Also, I'm happy to hear your silence"]],
    [["My message to you"],[" When you can't look at the bright side, I will sit with you in the dark"]],
    [["My message to you"],[" Drink some water you beautiful human"]],
    [["My message to you"],[" you're not just cute, you're CUTE AS FUCK!!"]],
    [["My message to you"],[" I thank God for giving me eyes so I could I see you"]],
    [["My message to you"],[" I hope your bowel movement today is as lovely as you are"]],
    [["My message to you"],[" you're so pretty, you remind me of the moon"]],
    [["My message to you"],[" I love your everything"]],
    [["My message to you"],[" You are worth loving, worth talking to, worth caring for"]],
    [["My message to you"],[" I hope you know how special you are"]],
    [["My message to you"],[" you're gorgeous as fuck"]],
    [["My message to you"],[" you're hot as hell 🔥"]],
    [["My message to you"],[" the moon reminds me of you, so beautiful and so bright"]],
    [["My message to you"],[" When I saw you, I stopped using Google. Because I knew the search was over"]],
    [["My message to you"],[" When can I see you again?"]],
    [["My message to you"],[" HUGGGSSSS!!!!!"]],
    [["Quote/Verse/Lyrics"],[" Look at the stars, Look how they shine for you \n- Yellow | Coldplay"]],
    [["Quote/Verse/Lyrics"],["Adventure is out there"],["- Up (Movie)"]],
    [["Quote/Verse/Lyrics"],["Thanks for the adventure"],["- Up (Movie)"]],
    [["Quote/Verse/Lyrics"],["You are my greatest adventure"],["- Up (Movie)"]],
    [["Quote/Verse/Lyrics"],["You are my sunshine, my only sunshine"],["- You Are My Sunshine | Jimmie Davis"]],
    [["Quote/Verse/Lyrics"],["You make me happy when skies are gray"],["- You Are My Sunshine | Jimmie Davis"]],
    [["Quote/Verse/Lyrics"],["You never know dear how much I love you"],["- You Are My Sunshine | Jimmie Davis"]],
    [["Quote/Verse/Lyrics"],["Please don't take my sunshine away"],["- You Are My Sunshine | Jimmie Davis"]],
    [["Quote/Verse/Lyrics"],["I love you to the moon and back"],["- Sam McBratney"]],
    [["Quote/Verse/Lyrics"],["You're the peanut butter to my jelly"],["- Unknown"]],
    [["Quote/Verse/Lyrics"],["You're the apple of my eye, You're the straw to my berry"],["- Perfect Two | Auburn"]],
    [["Quote/Verse/Lyrics"],["Ikaw nga ba ang icing sa ibabaw ng cupcake ko?"],["- Kim CHiu | Mr. Right"]]


]

function pickRandomMessage() {
    const randomIndex = Math.floor(Math.random() * all_messages.length);

    const messageCategoryElement = document.getElementById("random_message_category");
    const messageElement = document.getElementById("random_message");
    const messageSubElement = document.getElementById("message_subtitle");

    const thirdElement = (all_messages[randomIndex]).length==3 ? all_messages[randomIndex][2] : " ";
    console.log(all_messages.length)
    console.log(randomIndex)
    messageCategoryElement.textContent = "<3";
    setTimeout(() => {
        messageCategoryElement.textContent = all_messages[randomIndex][0];
        messageElement.textContent = all_messages[randomIndex][1];
        if (thirdElement) {
            messageSubElement.textContent = all_messages[randomIndex][2];
        }
    }, 700);
    // messageCategoryElement.textContent = all_messages[randomIndex][0];
    // messageElement.textContent = all_messages[randomIndex][1];
    // if (thirdElement){
    //     messageSubElement.textContent = all_messages[randomIndex][2];
    // }


    // return messages[randomIndex][0] + " " + messages[randomIndex][1];
}