const all_messages = [
    ["Why you're awesome"," You're the friend everyone wishes they had"],
["Why you're awesome"," you brighten my day and everyone else's"],
["Why you're awesome"," you're a great listener"],
["Why you're awesome"," you make everyone's days feel brighter"],
["Why you're awesome"," your smile makes other's smile"],
["Why you're awesome"," you are one of a kind"],
["Why you're awesome"," you have a beautiful smile"],
["Why you're awesome"," I admire your confidence"],
["Why you're awesome"," I like it when you laugh"],
["Why you're awesome"," You tell the best stories"],
["Why you're awesome"," I love your sense of humor"],
["Why you're awesome"," you color my world"],
["Why you're awesome"," you always know how to make me smile"],
["Why you're awesome"," you are resilient"],
["Why you're awesome"," you are such a great friend"],
["Why you're awesome"," you spread kindness everywhere"],
["Why you're awesome"," Your butt is perfect"],
["Why you're awesome"," your smile lights up the room"],
["Why you're awesome"," your mind is insanely cool and interesting"],
["Why you're awesome"," you are so fun to hang out with"],
["Why you're awesome"," you always smell good"],
["Why you're awesome"," You are gorgeous"],
["Why you're awesome"," your cute voice"],
["Why you're awesome"," your amazing personality"],
["Why you're awesome"," your sparkling eyes"],
["Why you're awesome"," you have AMAZIIING boobies"],
["A message to you"," Thank you for being you"],
["A message to you"," You matter"],
["A message to you","you are doing an amazing job in life"],
["A message to you"," Trust yourself, you know more than you think you do"],
["A message to you"," Everyday is a fresh start"],
["A message to you"," You are loved more than you know"],
["A message to you"," Stand up for yourself and others"],
["A message to you"," Just be as you are today"],
["A message to you"," I'm so glad you're in my life"],
["A message to you"," Take some time to just chill"],
["A message to you"," You are amazing, remember that!"],
["A message to you"," Thank you for being you"],
["A message to you"," You are precious"],
["A message to you"," Your are more than enough"],
["A message to you"," You are wonderful!!! yes you"],
["A message to you"," You can do anything you set your mind to"],
["A message to you"," you're a star"],
["A message to you"," I am so proud of you"],
["A message to you"," Dream Big!"],
["A message to you"," You are always enough"],
["A message to you"," Be proud of every step you take"],
["A message to you"," There's no one like you"],
["A message to you"," Choose to be kind"],
["A message to you"," You make the world a better place, just by being you"],
["A message to you"," Even though you might not believe it, you have always been good enough and people care about you"],
["A message to you"," Hope you know that your smile is enough to make my day"],
["A message to you"," You're my happy place"],
["A message to you"," Being with you feels like a warm hug for my soul"],
["A message to you"," Thank you for being my cozy corner in this crazy world"],
["A message to you"," I love you so much"],
["A message to you"," You're the cutest person eveeeer!!"],
["A message to you"," You're the person I want to come home to"],
["A message to you"," I like spending time with you, even if we do nothing"],
["A message to you"," When I'm with you, great moments don't need to be loud"],
["A message to you"," You deserve to be loved without having to hide the parts of yourself that you think are unloved"],
["A message to you"," Take a deep breath, you got this"],
["A message to you"," I love you forever"],
["A message to you"," Your smile is the sweetest thing I've ever seen"],
["A message to you"," If you want to talk, I'm here. Also, I'm happy to hear your silence"],
["A message to you"," When you can't look at the bright side, I will sit with you in the dark"],
["A message to you"," Drink some water you beautiful human"],
["A message to you"," you're not just cute, you're CUTE AS FUCK!!"],
["A message to you"," I thank God for giving me eyes so I could I see you"],
["A message to you"," I hope your bowel movement today is as lovely as you are"],
["A message to you"," you're so pretty, you remind me of the moon"],
["A message to you"," I love your everything"],
["A message to you"," You are worth loving, worth talking to, worth caring for"],
["A message to you"," I hope you know how special you are"],
["A message to you"," you're gorgeous as fuck"],
["A message to you"," you're hot as hell 🔥"],
["A message to you"," the moon reminds me of you, so beautiful and so bright"],
["A message to you"," When I saw you, I stopped using Google. Because I knew the search was over"],
["A message to you"," When can I see you again?"],
["A message to you"," HUGGGSSSS!!!!!"],
["Quote/Verse/Lyrics"," Look at the stars, Look how they shine for you \n- Yellow | Coldplay"],
["Quote/Verse/Lyrics","Adventure is out there","Up (Movie)"],
["Quote/Verse/Lyrics","Thanks for the adventure","Up (Movie)"],
["Quote/Verse/Lyrics","You are my greatest adventure","Up (Movie)"],
["Quote/Verse/Lyrics","You are my sunshine, my only sunshine","You Are My Sunshine | Jimmie Davis"],
["Quote/Verse/Lyrics","You make me happy when skies are gray","You Are My Sunshine | Jimmie Davis"],
["Quote/Verse/Lyrics","You never know dear how much I love you","You Are My Sunshine | Jimmie Davis"],
["Quote/Verse/Lyrics","Please don't take my sunshine away","You Are My Sunshine | Jimmie Davis"],
["A message to you","I love you to the moon and back"],
["Quote/Verse/Lyrics","You're the apple of my eye, You're the straw to my berry","Perfect Two, Auburn"],
["Quote/Verse/Lyrics","Ikaw nga ba ang icing sa ibabaw ng cupcake ko?","Kim Chiu, Mr. Right"],
["A message to you","I would spend the rest of my life making you happy, coz you made me happier than I have ever been"],
["A message to you","I'll bring you any food you want. "],
["A message to you","You are my favorite carbon-based life form"],
["A message to you","You make me feel like you love me so much"],
["A message to you","I appreciate you with all my heart"],
["A message to you","You are worth the wait"],
["A message to you","I wish you're here by my side"],
["A message to you","You're in my head rent free throughout the day"],
["A message to you","You're my forever"],
["A message to you","When I'm with you, everything just feels right"],
["A message to you","Thank you for being you"],
["A message to you","You're a beautiful combination of braveness and kindness"],
["A message to you","You are why people learn to wait"],
["A message to you","you'll always be my bubu"],
["A message to you","you're sexy and we both know it hihi"],
["A message to you","All you have to do is exist"],
["A message to you","I miss you"],
["A message to you","I can't believe I know someone as remarkable as you"],
["A message to you","you have an amazing ass"],
["A message to you","it amazes me how you always smell so good"],
["A message to you","you're a skillful thief. You stole my heart without me noticing it."],
["A message to you","let's order some food. Hehe"],
["A message to you","I sleep better when you're next to me"],
["A message to you","You're absolutely beautiful"]


]

const all_gifs = [
    "bubu-cute-dancing.gif",
    "bubu-dudu-cuddle.gif",
    "dudu_flying_kiss.gif",
    "dudu-bubu-spin.gif",
    "dudu-carrying-bubu.gif"
]

function pickRandomMessage() {
    const randomIndex = Math.floor(Math.random() * all_messages.length);
    const randomIndex_1 = Math.floor(Math.random() * all_gifs.length);

    const messageCategoryElement = document.getElementById("random_message_category");
    const messageElement = document.getElementById("random_message");
    const messageSubElement = document.getElementById("message_subtitle");
    const messageCover = document.getElementById("message_cover");

    const thirdElement = (all_messages[randomIndex]).length==3 ? all_messages[randomIndex][2] : " ";
    messageCategoryElement.textContent = "<3";
    setTimeout(() => {
        messageCategoryElement.textContent = all_messages[randomIndex][0];
        messageElement.textContent = all_messages[randomIndex][1];
        messageCover.src = "images/" + all_gifs[randomIndex_1];
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