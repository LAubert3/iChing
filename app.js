const mainImg = document.getElementById('mainImg')
const main = document.getElementById('main')
const ln = document.getElementById('line')
const other = document.getElementById('other')
const six = document.getElementById('id6')
const five = document.getElementById('id5')
const four = document.getElementById('id4')
const three = document.getElementById('id3')
const two = document.getElementById('id2')
const one = document.getElementById('id1')
const enter = document.getElementById('enterBtn')
const clear = document.getElementById('clear')
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const span1 = document.getElementById('span1')
const span2 = document.getElementById('span2')
span2.style.display = 'none'
const loadIcon = document.getElementById('rollCage')
loadIcon.style.display = 'none'
const auto = document.getElementById('autoBtn')
const cast = document.getElementById('cast')
const centerText = document.getElementById('center-text')

function alternateColors(elementId) {
  const text = elementId.innerText
  elementId.innerHTML = ''

  Array.from(text).forEach((char, index) => {
    const span = document.createElement('span')
    span.innerText = char
    span.style.animation = `colorChange 2s infinite ${index * 0.1}s linear`
    elementId.appendChild(span)
  })
}

const style = document.createElement('style')
style.innerHTML = `
@keyframes colorChange {
0% { color: red; }
50% { color: blue; }
100% { color: red; }
}
`
document.head.appendChild(style)
alternateColors(centerText)

const hexagrams = {
  1: {
    name: '乾 (Qián) - The Creative',
    mainExplanation: {
      image:
        'Heaven above, heaven below: Heaven in constant motion. Thus the superior man makes himself strong and untiring.',
      text: 'The Creative works sublime success, Furthering through perseverance.',
    },
    lineExplanations: [
      'Hidden dragon. Do not act.',
      'Dragon appearing in the field. It furthers one to see the great man.',
      'All day long the superior man is creatively active. At nightfall, his mind is still beset with cares. Danger. No blame.',
      'Wavering flight over the depths. No blame.',
      'Flying dragon in the heavens. It furthers one to see the great man.',
      'Arrogant dragon will have cause to repent.',
    ],
  },
  2: {
    name: '坤 (Kūn) - The Receptive',
    mainExplanation: {
      image:
        'Earth above, earth below: The image of the receptive. Thus the superior man who has breadth of character carries the outer world.',
      text: 'The Receptive brings about sublime success, Furthering through the perseverance of a mare.',
    },
    lineExplanations: [
      'When there is hoarfrost underfoot, Solid ice is not far off.',
      'Straight, square, great. Without purpose, yet nothing remains unfurthered.',
      'Hidden lines. One is able to remain persevering. If you follow the way of the receptive, you will have peace.',
      'A tied-up sack. No blame, no praise.',
      'A yellow lower garment brings supreme good fortune.',
      'Dragons fight in the meadow. Their blood is black and yellow.',
    ],
  },
  3: {
    name: '屯 (Zhūn) - Difficulty at the Beginning',
    mainExplanation: {
      image:
        'Clouds and thunder: The image of difficulty at the beginning. Thus the superior man brings order out of confusion.',
      text: 'Difficulty at the Beginning works supreme success, Furthering through perseverance. Nothing should be undertaken. It furthers one to appoint helpers.',
    },
    lineExplanations: [
      'Hesitation and hindrance. It furthers one to remain persevering. It furthers one to appoint helpers.',
      'Difficulties pile up. Horse and wagon part. He is not a robber; he wants to woo at the right time. As a result, he does not succeed. To go meets with approval.',
      'Whoever hunts deer without the forester only loses his way in the forest. The superior man understands the signs of the time And prefers to desist. To go on brings humiliation.',
      'Horse and wagon part. Strive for union. To go brings good fortune. Everything acts to further.',
      'Difficulties pile up. Horse and wagon part. He is not a robber; he wants to woo at the right time. As a result, he does not succeed. To go meets with approval.',
      'Difficulties pile up. Horse and wagon part. He is not a robber; he wants to woo at the right time. As a result, he does not succeed. To go meets with approval.',
    ],
  },
  4: {
    name: '蒙 (Méng) - Youthful Folly',
    mainExplanation: {
      image:
        'A spring wells up at the foot of the mountain: The image of youthful folly. Thus the superior man fosters his character by thoroughness in all that he does.',
      text: 'Youthful folly has success. It is not I who seek the young fool; The young fool seeks me. At the first oracle I inform him. If he asks two or three times, it is importunity. If he importunes, I give him no information. Perseverance furthers.',
    },
    lineExplanations: [
      'To make a fool develop, it furthers one to apply discipline. The fetters should be removed. To go on in this way brings humiliation.',
      'To bear with fools in kindliness brings good fortune. To know how to take women brings good fortune. The son is capable of taking charge of the household.',
      'Take not a maiden who, when she sees a man of bronze, loses possession of herself. Nothing furthers.',
      'Entangled folly brings humiliation.',
      'Childlike folly brings good fortune.',
      'In punishing folly It does not further one To commit transgressions. The only thing that furthers Is to prevent transgressions.',
    ],
  },
  5: {
    name: '需 (Xū) - Waiting (Nourishment)',
    mainExplanation: {
      image:
        'Clouds rise up to heaven: The image of waiting. Thus the superior man eats and drinks, is joyous and of good cheer.',
      text: 'Waiting. If you are sincere, you have light and success. Perseverance brings good fortune. It furthers one to cross the great water.',
    },
    lineExplanations: [
      'Waiting in the meadow. It furthers one to abide in what endures. No blame.',
      'Waiting on the sand. There is some gossip. The end brings good fortune.',
      'Waiting in the mud Brings about the arrival of the enemy.',
      'Waiting in blood. Get out of the pit.',
      'Waiting with food and drink. Perseverance brings good fortune.',
      'One falls into the pit. Three uninvited guests arrive. Honor them, and in the end, there will be good fortune.',
    ],
  },
  6: {
    name: '訟 (Sòng) - Conflict',
    mainExplanation: {
      image:
        'Heaven and water go their opposite ways: The image of conflict. Thus in all his transactions the superior man carefully considers the beginning.',
      text: 'Conflict. You are sincere and are being obstructed. A cautious halt halfway brings good fortune. Going through to the end brings misfortune. It furthers one to see the great man. It does not further one to cross the great water.',
    },
    lineExplanations: [
      'If one does not perpetuate the affair, there is a little gossip. In the end, good fortune comes.',
      "One cannot engage in conflict; one returns home, gives way. The people of one's town, three hundred households, remain free of guilt.",
      'To nourish oneself on ancient virtue induces perseverance. Danger. In the end, good fortune comes. If by chance you are in the service of a king, Seek not works.',
      "One cannot engage in conflict, one turns back and submits to fate, changes one's attitude, and finds peace in perseverance. Good fortune.",
      'To contend before him Brings supreme good fortune.',
      'Even if by chance a leather belt is bestowed on one, by the end of a morning, it will have been snatched away three times.',
    ],
  },
  7: {
    name: '師 (Shī) - The Army',
    mainExplanation: {
      image:
        'In the middle of the earth is water: The image of the army. Thus the superior man increases his masses by generosity toward the people.',
      text: 'The Army. The army needs perseverance and a strong man. Good fortune without blame.',
    },
    lineExplanations: [
      'An army must set forth in proper order. If the order is not good, misfortune threatens.',
      'In the midst of the army. Good fortune. No blame. The king bestows a triple decoration.',
      'Perchance the army carries corpses in the wagon. Misfortune.',
      'The army retreats. No blame.',
      'There is game in the field. It furthers one to catch it. Without blame. Let the eldest lead the army. The younger transports corpses; then perseverance brings misfortune.',
      'The great prince issues commands, founds states, vests families with fiefs. Inferior people should not be employed.',
    ],
  },
  8: {
    name: '比 (Bǐ) - Holding Together (Union)',
    mainExplanation: {
      image:
        'Water on the face of the earth: The image of holding together. Thus the kings of antiquity bestowed the different states as fiefs and cultivated friendly relations with the feudal lords.',
      text: 'Holding together brings good fortune. Inquire of the oracle once again whether you possess sublimity, constancy, and perseverance; then there is no blame. Those who are uncertain gradually join. Whoever comes too late teets with misfortune.',
    },
    lineExplanations: [
      'Hold to him in truth and loyalty; this is without blame. Truth, like a full earthen bowl: Thus in the end good fortune comes from without.',
      'Hold to him inwardly. Perseverance brings good fortune.',
      'You hold together with the wrong people.',
      'Hold to him outwardly also. Perseverance brings good fortune.',
      'Manifestation of holding together. In the hunt, the king uses beaters on three sides only And forgoes game that runs off in front. The citizens need no warning. Good fortune.',
      'He finds no head for holding together. Misfortune.',
    ],
  },
  9: {
    name: '小畜 (Xiǎo Chù) - The Taming Power of the Small',
    mainExplanation: {
      image:
        'The wind drives across heaven: The image of the taming power of the small. Thus the superior man refines the outward aspect of his nature.',
      text: 'The taming power of the small has success. Dense clouds, no rain from our western region.',
    },
    lineExplanations: [
      'Return to the way. How could there be blame in this? Good fortune.',
      'He allows himself to be drawn into returning. Good fortune.',
      'The spokes burst out of the wagon wheels. Man and wife roll their eyes.',
      'If you are sincere, blood vanishes, and fear gives way. No blame.',
      'If you are sincere and walk in the middle, and report with a seal to the prince, good fortune.',
      'The rain comes, there is rest. This is due to the lasting effect of character. Perseverance brings the woman into danger. The moon is nearly full. If the superior man persists, misfortune comes.',
    ],
  },
  10: {
    name: '履 (Lǚ) - Treading (Conduct)',
    mainExplanation: {
      image:
        'Heaven above, the lake below: The image of treading. Thus the superior man discriminates between high and low, And thereby fortifies the thinking of the people.',
      text: 'Treading. Treading upon the tail of the tiger. It does not bite the man. Success.',
    },
    lineExplanations: [
      'Simple conduct. Progress without blame.',
      'Treading a smooth, level course. The perseverance of a dark man brings good fortune.',
      'A one-eyed man is able to see; a lame man is able to tread. He treads on the tail of the tiger. The tiger bites the man. Misfortune. Thus a warrior acts on behalf of his great prince.',
      'He treads on the tail of the tiger. Caution and circumspection Lead ultimately to good fortune.',
      'Resolute conduct. Perseverance with awareness of danger.',
      'Look to your conduct and weigh the favorable signs. When everything is fulfilled, supreme good fortune comes.',
    ],
  },
  11: {
    name: '泰 (Tài) - Peace',
    mainExplanation: {
      image:
        'Heaven and earth unite: the image of peace. Thus the ruler divides and completes the course of heaven and earth, And so aids the people.',
      text: 'Peace. The small departs, The great approaches. Good fortune. Success.',
    },
    lineExplanations: [
      'When ribbon grass is pulled up, the sod comes with it. Each according to his kind. Undertakings bring good fortune.',
      "Bearing with the uncultured in gentleness, fording the river with resolution, not neglecting what is distant, not regarding one's companions: Thus one may manage to walk in the middle.",
      'No plain not followed by a slope. No going not followed by a return. He who remains persevering in danger Is without blame. Do not complain about this truth; enjoy the good fortune you still possess.',
      'He flutters down, not boasting of his wealth, together with his neighbor, guileless and sincere.',
      'The sovereign I gives his daughter in marriage. This brings blessing and supreme good fortune.',
      'The wall falls back into the moat. Use no army now. Make your commands known within your own town. Perseverance brings humiliation.',
    ],
  },
  12: {
    name: '否 (Pǐ) - Standstill (Stagnation)',
    mainExplanation: {
      image:
        'Heaven and earth do not unite: The image of standstill. Thus the superior man falls back upon his inner worth In order to escape the difficulties. He does not permit himself to be honored with revenue.',
      text: 'Standstill. Evil people do not further The perseverance of the superior man. The great departs; the small approaches.',
    },
    lineExplanations: [
      'When ribbon grass is pulled up, the sod comes with it. Each according to his kind. Perseverance brings good fortune and success.',
      'They bear and endure; This means good fortune for inferior people. The standstill serves to help the great man attain success.',
      'They bear shame.',
      'He who acts at the command of the highest remains without blame. Those of like mind partake of the blessing.',
      'Standstill is giving way. Good fortune for the great man. What if it should fail, what if it should fail? In this way he ties it to a cluster of mulberry shoots.',
      'The standstill comes to an end. First standstill, then good fortune.',
    ],
  },
  13: {
    name: '同人 (Tóng Rén) - Fellowship with Men',
    mainExplanation: {
      image:
        'Heaven together with fire: The image of fellowship with men. Thus the superior man organizes the clans And makes distinctions between things.',
      text: 'Fellowship with Men in the open. Success. It furthers one to cross the great water. The perseverance of the superior man furthers.',
    },
    lineExplanations: [
      'Fellowship with men at the gate. No blame.',
      'Fellowship with men in the clan. Humiliation.',
      'He hides weapons in the thicket; he climbs the high hill in front of it. For three years he does not rise up.',
      'He climbs up on his wall; he cannot attack. Good fortune.',
      'Men bound in fellowship first weep and lament, but afterward they laugh. After great struggles they succeed in meeting.',
      'Fellowship with men in the meadow. No remorse.',
    ],
  },
  14: {
    name: '大有 (Dà Yǒu) - Possession in Great Measure',
    mainExplanation: {
      image:
        'Fire in heaven above: The image of possession in great measure. Thus the superior man curbs evil and furthers good, and thereby obeys the benevolent will of heaven.',
      text: 'Possession in great measure. Supreme success.',
    },
    lineExplanations: [
      'No relationship with what is harmful; there is no blame in this. If one remains conscious of difficulty, one remains without blame.',
      'A big wagon for loading. One may undertake something. No blame.',
      'A prince offers it to the Son of Heaven. A petty man cannot do this.',
      'He makes a difference between himself and his neighbor. No blame.',
      'He whose truth is accessible, yet dignified, Has good fortune.',
      'He is blessed by heaven. Good fortune. Nothing that does not further.',
    ],
  },
  15: {
    name: '謙 (Qiān) - Modesty',
    mainExplanation: {
      image:
        'Within the earth, a mountain: The image of modesty. Thus the superior man reduces that which is too much, and augments that which is too little. He weighs things and makes them equal.',
      text: 'Modesty creates success. The superior man carries things through.',
    },
    lineExplanations: [
      'Modesty that comes to expression. Perseverance brings good fortune.',
      'Modesty that comes to expression. Perseverance brings good fortune.',
      'A superior man of modesty and merit carries things to conclusion. Good fortune.',
      'Nothing that would not further modesty In movement.',
      "No boasting of wealth before one's neighbor. It is favorable to attack with force. Nothing that would not further.",
      "Modesty that comes to expression. It is favorable to set armies marching To chastise one's own city and one's country.",
    ],
  },
  16: {
    name: '豫 (Yù) - Enthusiasm',
    mainExplanation: {
      image:
        'Thunder comes resounding out of the earth: The image of enthusiasm. Thus the ancient kings made music In order to honor merit, and offered it With splendor to the Supreme Deity, inviting their ancestors to be present.',
      text: 'Enthusiasm. It furthers one to install helpers And to set armies marching.',
    },
    lineExplanations: [
      'Enthusiasm that expresses itself brings misfortune.',
      'Firm as a rock. Not a whole day. Perseverance brings good fortune.',
      'Enthusiasm that looks upward creates remorse. Hesitation brings remorse.',
      'The source of enthusiasm. He achieves great things. Doubt not. You gather friends around you As a hair clasp gathers the hair.',
      'Persistently ill, and still does not die.',
      'Deluded enthusiasm. But if after completion one changes, There is no blame.',
    ],
  },
  17: {
    name: '隨 (Suí) - Following',
    mainExplanation: {
      image:
        'Thunder in the middle of the lake: The image of following. Thus the superior man at nightfall Goes indoors for rest and recuperation.',
      text: 'Following has supreme success. Perseverance furthers. No blame.',
    },
    lineExplanations: [
      'The standard is changing. Perseverance brings good fortune. To go out of the door in company Produces deeds.',
      'If one clings to the little boy, One loses the strong man.',
      'If one clings to the strong man, One loses the little boy. Through following one finds what one seeks. It furthers one to remain persevering.',
      "Following creates success. Perseverance brings misfortune. To go one's way with sincerity brings clarity. How could there be blame in this?",
      'Sincere in the good. Good fortune.',
      'He meets with firm allegiance And is still further bound. The king introduces him To the Western Mountain.',
    ],
  },
  18: {
    name: '蠱 (Gǔ) - Work on What Has Been Spoiled (Decay)',
    mainExplanation: {
      image:
        'The wind blows low on the mountain: The image of decay. Thus the superior man stirs up the people And strengthens their spirit.',
      text: 'Work on what has been spoiled Has supreme success. It furthers one to cross the great water. Before the starting point, three days. After the starting point, three days.',
    },
    lineExplanations: [
      'Setting right what has been spoiled by the father. If there is a son, No blame rests upon the departed father. Danger. In the end, good fortune.',
      'Setting right what has been spoiled by the mother. One must not be too persevering.',
      'Setting right what has been spoiled by the father. There will be little remorse. No great blame.',
      'Tolerating what has been spoiled by the father. In continuing one sees humiliation.',
      'Setting right what has been spoiled by the father. One meets with praise.',
      'He does not serve kings and princes; sets himself higher goals.',
    ],
  },
  19: {
    name: '臨 (Lín) - Approach',
    mainExplanation: {
      image:
        'The earth above the lake: The image of approach. Thus the superior man is inexhaustible In his will to teach, And without limits In his tolerance and protection of the people.',
      text: 'Approach has supreme success. Perseverance furthers. When the eighth month comes, there will be misfortune.',
    },
    lineExplanations: [
      'Joint approach. Perseverance brings good fortune.',
      'Joint approach. Good fortune. Everything furthers.',
      'Comfortable approach. Nothing that would further. If one is induced to grieve over it, One becomes free of blame.',
      'Complete approach. No blame.',
      'Wise approach. This is right for a great prince. Good fortune.',
      'Great-hearted approach. Good fortune. No blame.',
    ],
  },
  20: {
    name: '觀 (Guān) - Contemplation (View)',
    mainExplanation: {
      image:
        'The wind blows over the earth: The image of contemplation. Thus the kings of old visited the regions of the world, contemplated the people, and gave them instruction.',
      text: 'Contemplation. The ablution has been made, But not yet the offering. Full of trust they look up to him.',
    },
    lineExplanations: [
      'Boy-like contemplation. For an inferior man, no blame. For a superior man, humiliation.',
      'Contemplation through the crack of the door. Furthering for the perseverance of a woman.',
      'Contemplation of my life decides the choice between advance and retreat.',
      'Contemplation of the light of the kingdom. It furthers one to exert influence as the guest of a king.',
      'Contemplation of my life. The superior man is without blame.',
      'Contemplation of his life. The superior man is without blame.',
    ],
  },
  21: {
    name: '噬嗑 (Shì Kè) - Biting Through',
    mainExplanation: {
      image:
        'Thunder and lightning: The image of biting through. Thus the kings of former times made firm the laws Through clearly defined penalties.',
      text: 'Biting through has success. It is favorable to let justice be administered.',
    },
    lineExplanations: [
      'His feet are fastened in the stocks, So that his toes disappear. No blame.',
      'Bites through tender meat, So that his nose disappears. No blame.',
      'Bites on old dried meat and strikes on something poisonous. Slight humiliation. No blame.',
      'Bites on dried gristly meat. Receives metal arrows. It furthers one to be mindful of difficulties and to be persevering. Good fortune.',
      'Bites on dried lean meat. Receives yellow gold. Perseveringly aware of danger. No blame.',
      'His neck is fastened in the wooden cangue, So that his ears disappear. Misfortune.',
    ],
  },
  22: {
    name: '賁 (Bì) - Grace',
    mainExplanation: {
      image:
        'Fire at the foot of the mountain: The image of grace. Thus does the superior man proceed When clearing up current affairs. But he dares not decide controversial issues in this way.',
      text: 'Grace has success. In small matters It is favorable to undertake something.',
    },
    lineExplanations: [
      'He lends grace to his toes, leaves the carriage, and walks.',
      'Lends grace to the beard on his chin.',
      'Graceful and moist. Constant perseverance brings good fortune.',
      'Grace or simplicity? A white horse comes as if on wings. He is not a robber, he will woo at the right time.',
      'Grace in hills and gardens. The roll of silk is meager and small. Humiliation, but in the end good fortune.',
      'Simple grace. No blame.',
    ],
  },
  23: {
    name: '剝 (Bō) - Splitting Apart',
    mainExplanation: {
      image:
        'The mountain rests on the earth: The image of splitting apart. Thus those in power strengthen their position By giving generously to those below them.',
      text: 'Splitting Apart. It does not further one To go anywhere.',
    },
    lineExplanations: [
      'The leg of the bed is split. Those who persevere are destroyed. Misfortune.',
      'The bed is split at the edge. Those who persevere are destroyed. Misfortune.',
      'He splits with them. No blame.',
      'The bed is split up to the skin. Misfortune.',
      'A shoal of fishes. Favor comes through the court ladies. Everything acts to further.',
      'There is a large fruit still uneaten. The superior man receives a carriage. The house of the inferior man is split apart.',
    ],
  },
  24: {
    name: '復 (Fù) - Return (The Turning Point)',
    mainExplanation: {
      image:
        'Thunder within the earth: The image of the turning point. Thus the kings of antiquity closed the passes At the time of solstice. Merchants and strangers did not go about, and the ruler did not travel through the provinces.',
      text: 'Return. Success. Going out and coming in without error. Friends come without blame. To and fro goes the way. On the seventh day comes return. It furthers one to have somewhere to go.',
    },
    lineExplanations: [
      'Return from a short distance. No need for remorse. Great good fortune.',
      'Return from a short distance. No need for remorse. Great good fortune.',
      'Repeated return. Danger. No blame.',
      'Walking in the midst of others, One returns alone.',
      'Noblehearted return. No remorse.',
      'Missing the return. Misfortune. Misfortune from within and without. If armies are set marching in this way, one will in the end suffer a great defeat, disastrous for the ruler of the country. For ten years It will not be possible to attack again.',
    ],
  },
  25: {
    name: '無妄 (Wú Wàng) - Innocence (The Unexpected)',
    mainExplanation: {
      image:
        'Under heaven thunder rolls: All things attain the natural state of innocence. Thus the kings of old, rich in virtue, and in harmony with the time, fostered and nourished all beings.',
      text: 'Innocence. Supreme success. Perseverance furthers. If someone is not as he should be, he has misfortune, and it does not further him To undertake anything.',
    },
    lineExplanations: [
      'Innocent behavior brings good fortune.',
      'If one does not count on the harvest while plowing, nor on the use of the ground while clearing it, It furthers one to undertake something.',
      "Undeserved misfortune. The cow that was tethered by someone ss the wanderer's gain, the citizen's loss.",
      'He who can be persevering remains without blame.',
      'Use no medicine in an illness Incurred through no fault of your own. It will pass of itself.',
      'Innocent action brings misfortune. Nothing furthers.',
    ],
  },
  26: {
    name: '大畜 (Dà Xù) - The Taming Power of the Great',
    mainExplanation: {
      image:
        'Heaven within the mountain: The image of the taming power of the great. Thus the superior man acquaints himself with many sayings of antiquity and many deeds of the past, in order to strengthen his character thereby.',
      text: 'The Taming Power of the Great. Perseverance furthers. Not eating at home brings good fortune. It furthers one to cross the great water.',
    },
    lineExplanations: [
      'Danger is at hand. It furthers one to desist.',
      'The axletrees are taken from the wagon.',
      'A good horse that follows others. Awareness of danger, with perseverance, furthers. Practice chariot driving and armed defense daily. It furthers one to have somewhere to go.',
      'The headboard of a young bull. Great good fortune.',
      'The tusk of a gelded boar. Good fortune.',
      'One attains the way of heaven. Success.',
    ],
  },
  27: {
    name: '頤 (Yí) - The Corners of the Mouth (Providing Nourishment)',
    mainExplanation: {
      image:
        'At the foot of the mountain, thunder: The image of providing nourishment. Thus the superior man is careful of his words and temperate in eating and drinking.',
      text: 'The Corners of the Mouth. Perseverance brings good fortune. Pay heed to the providing of nourishment and to what a man seeks To fill his own mouth with.',
    },
    lineExplanations: [
      'You let your magic tortoise go, and look at me with the corners of your mouth drooping. Misfortune.',
      'Turning to the summit for provision of nourishment, deviates from the way. To continue brings misfortune.',
      'Turning away from nourishment. Perseverance brings misfortune. Do not act thus for ten years. Nothing serves to further.',
      'Turning to the summit For provision of nourishment brings good fortune. Spying about with sharp eyes Like a tiger with insatiable craving. No blame.',
      'Turning away from the path. To remain persevering brings good fortune. One should not cross the great water.',
      'The source of nourishment. Awareness of danger brings good fortune. It furthers one to cross the great water.',
    ],
  },
  28: {
    name: '大過 (Dà Guò) - Preponderance of the Great',
    mainExplanation: {
      image:
        'The lake rises above the trees: The image of preponderance of the great. Thus the superior man, when he stands alone, Is unconcerned, and if he has to renounce the world, he is undaunted.',
      text: 'Preponderance of the Great. The ridgepole sags to the breaking point. It furthers one to have somewhere to go. Success.',
    },
    lineExplanations: [
      'To spread white rushes underneath. No blame.',
      'A dry poplar sprouts at the root. An older man takes a young wife. Everything furthers.',
      'The ridgepole sags to the breaking point. Misfortune.',
      'The ridgepole is braced. Good fortune. If there are ulterior motives, it is humiliating.',
      'A withered poplar puts forth flowers. An older woman takes a husband. No blame. No praise.',
      "One must go through the water. It goes over one's head. Misfortune. No blame.",
    ],
  },
  29: {
    name: '坎 (Kǎn) - The Abysmal (Water)',
    mainExplanation: {
      image:
        'Water flows on uninterruptedly and reaches its goal: The image of the Abysmal repeated. Thus the superior man walks in lasting virtue And carries on the business of teaching.',
      text: 'The Abysmal repeated. If you are sincere, you have success in your heart, And whatever you do succeeds.',
    },
    lineExplanations: [
      'Repetition of the Abysmal. In the abyss one falls into a pit. Misfortune.',
      'The abyss is dangerous. One should strive to attain small things only.',
      'Forward and backward, abyss on abyss. In danger like this, pause at first and wait, otherwise you will fall into a pit in the abyss. Do not act in this way.',
      'A jug of wine, a bowl of rice with it; earthen vessels Simply handed in through the window. There is certainly no blame in this.',
      'The abyss is not filled to overflowing, it is filled only to the rim. No blame.',
      'Bound with cords and ropes, shut in between thorn-hedged prison walls: For three years one does not find the way. Misfortune.',
    ],
  },
  30: {
    name: '離 (Lí) - The Clinging, Fire',
    mainExplanation: {
      image:
        'That which is bright rises twice: The image of fire. Thus the great man, by perpetuating this brightness, illumines the four quarters of the world.',
      text: 'The Clinging. Perseverance furthers. It brings success. Care of the cow brings good fortune.',
    },
    lineExplanations: [
      'The footprints run crisscross. If one is seriously intent, no blame.',
      'Yellow light. Supreme good fortune.',
      'In the light of the setting sun, men either beat the pot and sing or loudly bewail the approach of old age. Misfortune.',
      'Its coming is sudden; It flames up, dies down, is thrown away.',
      'Tears in floods, sighing and lamentation. Good fortune.',
      'The king uses him to march forth and chastise. Then it is best to kill the leaders and take captive the followers. No blame.',
    ],
  },
  31: {
    name: '咸 (Xián) - Influence (Wooing)',
    mainExplanation: {
      image:
        'A lake on the mountain: The image of influence. Thus the superior man encourages people to approach him By his readiness to receive them.',
      text: 'Influence. Success. Perseverance furthers. To take a maiden to wife brings good fortune.',
    },
    lineExplanations: [
      'The influence shows itself in the big toe.',
      'The influence shows itself in the calves of the legs. Misfortune. Tarrying brings good fortune.',
      'The influence shows itself in the thighs. Holds to that which follows it. To continue is humiliating.',
      'Perseverance brings good fortune. Remorse disappears. If a man is agitated in mind, and his thoughts go hither and thither, only those friends On whom he fixes his conscious thoughts Will follow.',
      'The influence shows itself in the back of the neck. No remorse.',
      'The influence shows itself in the jaws, cheeks, and tongue.',
    ],
  },
  32: {
    name: '恆 (Héng) - Duration',
    mainExplanation: {
      image:
        'Thunder and wind: The image of duration. Thus the superior man stands firm And does not change his direction.',
      text: 'Duration. Success. No blame. Perseverance furthers. It furthers one to have somewhere to go.',
    },
    lineExplanations: [
      'Seeking duration too hastily brings misfortune persistently. Nothing that would further.',
      'Remorse disappears.',
      'He who does not give duration to his character Meets with disgrace. Persistent humiliation.',
      'No game in the field.',
      "Giving duration to one's character through perseverance. This is good fortune for a woman, misfortune for a man.",
      'Restlessness as an enduring condition brings misfortune.',
    ],
  },
  33: {
    name: '遯 (Dùn) - Retreat',
    mainExplanation: {
      image:
        'Mountain under heaven: The image of retreat. Thus the superior man keeps the inferior man at a distance, Not angrily but with reserve.',
      text: 'Retreat. Success. In what is small, perseverance furthers.',
    },
    lineExplanations: [
      'At the tail in retreat. This is dangerous. One must not wish to undertake anything.',
      'He holds him fast with yellow oxhide. No one can tear him loose.',
      'A halted retreat Is nerve-wracking and dangerous. To retain people as men- and maidservants Brings good fortune.',
      'Voluntary retreat brings good fortune to the superior man and downfall to the inferior man.',
      'Friendly retreat. Perseverance brings good fortune.',
      'Cheerful retreat. Everything serves to further.',
    ],
  },
  34: {
    name: '大壯 (Dà Zhuàng) - The Power of the Great',
    mainExplanation: {
      image:
        'Thunder in heaven above: The image of the power of the great. Thus the superior man does not tread upon paths That do not accord with established order.',
      text: 'The Power of the Great. Perseverance furthers.',
    },
    lineExplanations: [
      'Power in the toes. Continuing brings misfortune. This is certainly true.',
      'Perseverance brings good fortune.',
      'The inferior man works through power. The superior man does not act thus. To continue is dangerous. A goat butts against a hedge And gets its horns entangled.',
      'Perseverance brings good fortune. Remorse disappears. The hedge opens; there is no entanglement. Power depends upon the axle of a big cart.',
      'Loses the goat with ease. No remorse.',
      'A goat butts against a hedge. It cannot go backward, it cannot go forward. Nothing serves to further. If one notes the difficulty, this brings good fortune.',
    ],
  },
  35: {
    name: '晉 (Jìn) - Progress',
    mainExplanation: {
      image:
        'The sun rises over the earth: The image of progress. Thus the superior man himself brightens his bright virtue.',
      text: 'Progress. The powerful prince Is honored with horses in large numbers. In a single day he is granted audience three times.',
    },
    lineExplanations: [
      'Progressing, but turning back. Perseverance brings good fortune. If one meets with no confidence, one should remain calm. No mistake.',
      "Progressing, but in sorrow. Perseverance brings good fortune. Then one obtains great happiness from one's ancestress.",
      'All are in accord. Remorse disappears.',
      'Progress like a hamster. Perseverance brings danger.',
      'Remorse disappears. Take not gain and loss to heart. Undertakings bring good fortune. Everything serves to further.',
      "Making progress with the horns is permissible Only for the purpose of punishing one's own city. To be conscious of danger brings good fortune. No blame. Perseverance brings humiliation.",
    ],
  },
  36: {
    name: '明夷 (Míng Yí) - Darkening of the Light',
    mainExplanation: {
      image:
        'The light has sunk into the earth: The image of darkening of the light. Thus does the superior man live with the great mass: He veils his light, yet still shines.',
      text: 'Darkening of the Light. In adversity It furthers one to be persevering.',
    },
    lineExplanations: [
      'Darkening of the light during flight. He lowers his wings. The superior man does not eat for three days on his wanderings. But he has somewhere to go. The host has occasion to gossip about him.',
      'Darkening of the light injures him in the left thigh. He gives aid with the strength of a horse. Good fortune.',
      'Darkening of the light during the hunt in the south. Their great leader is captured. One must not expect perseverance too soon.',
      'He penetrates the left side of the belly. One gets at the very heart of the darkening of the light and leaves gate and courtyard.',
      'Darkening of the light as with Prince Chi. Perseverance furthers.',
      'Not light but darkness. First he climbs up to heaven, then he plunges into the depths of the earth.',
    ],
  },
  37: {
    name: '家人 (Jiā Rén) - The Family [The Clan]',
    mainExplanation: {
      image:
        'Wind comes forth from fire: The image of the family. Thus the superior man has substance in his words And duration in his way of life.',
      text: 'The Family. The perseverance of the woman furthers.',
    },
    lineExplanations: [
      'Firm seclusion within the family. Remorse disappears.',
      'She should not follow her whims. She must attend within to the food. The perseverance of the woman brings good fortune.',
      'When tempers flare up in the family, too great severity brings remorse. Good fortune nonetheless. When woman and children are in tears at the outset, in the end, laughter comes.',
      'She is the treasure of the house. Great good fortune.',
      'As a king he approaches his family. Fear not. Good fortune.',
      'His work commands respect. In the end good fortune comes.',
    ],
  },
  38: {
    name: '睽 (Kuí) - Opposition',
    mainExplanation: {
      image:
        'Above, fire; below, the lake: The image of opposition. Thus amid all fellowship The superior man retains his individuality.',
      text: 'Opposition. In small matters, good fortune.',
    },
    lineExplanations: [
      'Remorse disappears. If you lose your horse, do not run after it; it will return of its own accord. When you see evil people, guard yourself against mistakes.',
      'One meets his lord in a narrow street. No blame.',
      "One sees the wagon dragged back, The oxen halted, a man's hair and nose cut off. Not a good beginning, but a good end.",
      'Isolated through opposition, one meets a like-minded man With whom one can associate in good faith. Despite the danger, no blame.',
      'Remorse disappears. The companion bites his way through the wrappings. If one goes to him, how could it be a mistake?',
      "Isolated through opposition, one sees one's companion as a pig covered with dirt, as a wagon full of devils. First one draws a bow against him, then one lays the bow aside. He is not a robber; he will woo at the right time. As one goes, rain falls; then good fortune comes.",
    ],
  },
  39: {
    name: '蹇 (Jiǎn) - Obstruction',
    mainExplanation: {
      image:
        'Water on the mountain: The image of obstruction. Thus the superior man turns his attention to himself and molds his character.',
      text: 'Obstruction. The southwest furthers. The northeast does not further. It furthers one to see the great man. Perseverance brings good fortune.',
    },
    lineExplanations: [
      'Going leads to obstructions, coming meets with praise.',
      "The king's servant is beset by obstruction upon obstruction, but it is not his own fault.",
      'Going leads to obstructions, coming leads to great good fortune.',
      'Going leads to obstructions, coming leads to union.',
      'Difficulties in blessing. A little perseverance brings good fortune. Great perseverance brings misfortune.',
      'Going leads to obstructions, coming leads to great good fortune. It furthers one to see the great man.',
    ],
  },
  40: {
    name: '解 (Xiè) - Deliverance',
    mainExplanation: {
      image:
        'Thunder and rain set in: The image of deliverance. Thus the superior man pardons mistakes And forgives misdeeds.',
      text: 'Deliverance. The southwest furthers. If there is no longer anything where one has to go, return brings good fortune. If there is still something where one has to go, hastening brings good fortune.',
    },
    lineExplanations: [
      'Without blame.',
      'One kills three foxes in the field and receives a yellow arrow. Perseverance brings good fortune.',
      'If a man carries a burden on his back and nonetheless rides in a carriage, he thereby encourages robbers to draw near. Perseverance leads to humiliation.',
      'Deliver yourself from your great toe. Then the companion comes, and him you can trust.',
      'If only the superior man can deliver himself, it brings good fortune. Thus he proves to inferior men that he is in earnest.',
      'The prince shoots at a hawk on a high wall. He kills it. Everything serves to further.',
    ],
  },
  41: {
    name: '損 (Sǔn) - Decrease',
    mainExplanation: {
      image:
        'At the foot of the mountain, the lake: The image of decrease. Thus the superior man controls his anger and restrains his instincts.',
      text: 'Decrease combined with sincerity brings about supreme good fortune Without blame. One may be persevering in this. It furthers one to undertake something. How is this to be carried out? One may use two small bowls for the sacrifice.',
    },
    lineExplanations: [
      "Going quickly when one's tasks are finished Is without blame. But one must reflect on how much one may decrease others.",
      'Perseverance furthers. To undertake something brings misfortune. Without decreasing oneself, one is able to bring increase to others.',
      'When three people journey together, their number decreases by one. When one man journeys alone, he finds a companion.',
      'If a man decreases his faults, it makes the other hasten to come and rejoice. No blame.',
      'Someone does indeed increase him. Ten pairs of tortoises cannot oppose it. Supreme good fortune.',
      'If one is increased without depriving others, there is no blame. Perseverance brings good fortune. It furthers one to undertake something. One obtains servants but no longer has a separate home.',
    ],
  },
  42: {
    name: '益 (Yì) - Increase',
    mainExplanation: {
      image:
        'Wind and thunder: The image of increase. Thus the superior man: if he sees good, he imitates it; if he has faults, he rids himself of them.',
      text: 'Increase. It furthers one to undertake something. It furthers one to cross the great water.',
    },
    lineExplanations: [
      'It furthers one to accomplish great deeds. Supreme good fortune. No blame.',
      'Someone does indeed increase him; ten pairs of tortoises cannot oppose it. Constant perseverance brings good fortune. The king presents him before God. Good fortune.',
      'One is enriched through unfortunate events. No blame if you are sincere and walk in the middle, and report with a seal to the prince.',
      'If you walk in the middle and report with a seal to the prince, he will follow. It furthers one to be used in the removal of the capital.',
      'If in truth you have a kind heart, ask not. Supreme good fortune. Truly, kindness will be recognized as your virtue.',
      'He brings increase to no one. Indeed, someone even strikes him. He does not keep his heart constantly steady. Misfortune.',
    ],
  },
  43: {
    name: '夬 (Guài) - Breakthrough (Resoluteness)',
    mainExplanation: {
      image:
        'The lake has risen up to heaven: The image of breakthrough. Thus the superior man Dispenses riches downward and refrains from resting on his virtue.',
      text: "Breakthrough. One must resolutely make the matter known at the court of the king. It must be announced truthfully. Danger. It is necessary to notify one's own city. It does not further to resort to arms. It furthers one to undertake something.",
    },
    lineExplanations: [
      'Mighty in the forward-striding toes. When one goes and is not equal to the task, one makes a mistake.',
      'A cry of alarm. Arms at evening and at night. Fear nothing.',
      'To be powerful in the cheekbones Brings misfortune. The superior man is firmly resolved. He walks alone and is caught in the rain. He is bespattered, and people murmur against him. No blame.',
      'There is no skin on his thighs, And walking comes hard. If a man were to let himself be led like a sheep, remorse would disappear. But if these words are heard They will not be believed.',
      'In dealing with weeds, firm resolution is necessary. Walking in the middle remains free of blame.',
      'No cry. In the end there will be good fortune.',
    ],
  },
  44: {
    name: '姤 (Gòu) - Coming to Meet',
    mainExplanation: {
      image:
        'Under heaven, wind: The image of coming to meet. Thus does the prince act when disseminating his commands and proclaiming them to the four quarters of heaven.',
      text: 'Coming to Meet. The maiden is powerful. One should not marry such a maiden.',
    },
    lineExplanations: [
      'It must be checked with a brake of bronze. Perseverance brings good fortune. If one lets it take its course, one experiences misfortune.',
      'There is a fish in the tank. No blame. Does not further guests.',
      'There is no skin on his thighs, and walking comes hard. If a man were to let himself be led like a sheep, remorse would disappear. But if these words are heard They will not be believed.',
      'No fish in the tank. This leads to misfortune.',
      'A melon covered with willow leaves. Hidden lines. Then it drops down to one from heaven.',
      'He comes to meet with his horns. Humiliation. No blame.',
    ],
  },
  45: {
    name: '萃 (Cuì) - Gathering Together (Massing)',
    mainExplanation: {
      image:
        'Over the earth, the lake: The image of gathering together. Thus the superior man renews his weapons In order to meet the unforeseen.',
      text: 'Gathering Together. Success. The king approaches his temple. It furthers one to see the great man. This brings success. Perseverance furthers. To bring great offerings creates good fortune. It furthers one to undertake something.',
    },
    lineExplanations: [
      'If you are sincere, but not to the end, There will sometimes be confusion, sometimes gathering together. If you call out, then after one grasp of the hand you can laugh again. Regret not. Going is without blame.',
      'Letting oneself be drawn Brings good fortune and remains blameless. If one is sincere, It furthers one to bring even a small offering.',
      'Gathering together amid sighs. Nothing that would further. Going is without blame. Slight humiliation.',
      'Great good fortune. No blame.',
      'If in gathering together one has position, this brings no blame. If there are some who are not yet sincerely in the work, sublime and enduring perseverance is needed. Then remorse disappears.',
      'Lamenting and sighing, floods of tears. No blame.',
    ],
  },
  46: {
    name: '升 (Shēng) - Pushing Upward',
    mainExplanation: {
      image:
        'Within the earth, wood grows: The image of pushing upward. Thus the superior man of devoted character Heaps up small things In order to achieve something high and great.',
      text: 'Pushing Upward has supreme success. One must see the great man. Fear not. Departure toward the south brings good fortune.',
    },
    lineExplanations: [
      'Pushing upward that meets with confidence brings great good fortune.',
      'If one is sincere, It furthers one to bring even a small offering. No blame.',
      'One pushes upward into an empty city.',
      'The king offers him Mount Qi. Good fortune. No blame.',
      'Perseverance brings good fortune. One pushes upward by steps.',
      'Pushing upward in darkness. It furthers one To be unremittingly persevering.',
    ],
  },
  47: {
    name: '困 (Kùn) - Oppression (Exhaustion)',
    mainExplanation: {
      image:
        'There is no water in the lake: The image of exhaustion. Thus the superior man stakes his life on following his will.',
      text: 'Oppression. Success. Perseverance. The great man brings good fortune. No blame. When one has something to say, it is not believed.',
    },
    lineExplanations: [
      'One sits oppressed under a bare tree and strays into a gloomy valley. For three years one sees nothing.',
      'One is oppressed while at meat and drink. The man with the scarlet knee bands is just coming. It furthers one to offer sacrifice. To set forth brings misfortune. No blame.',
      'A man permits himself to be oppressed by stone, and leans on thorns and thistles. He enters his house and does not see his wife. Misfortune.',
      'He comes very quietly, oppressed in a golden carriage. Humiliation, but the end is reached.',
      'His nose and feet are cut off. Oppression at the hands of the man with the purple knee bands. Joy comes softly. It furthers one to make offerings and libations.',
      "He is oppressed by creeping vines. He moves uncertainly and says, 'Movement brings remorse.' If one feels remorse over this and makes a start, good fortune comes.",
    ],
  },
  48: {
    name: '井 (Jǐng) - The Well',
    mainExplanation: {
      image:
        'Water over wood: The image of the well. Thus the superior man encourages the people at their work, and exhorts them to help one another.',
      text: 'The Well. The town may be changed, but the well cannot be changed. It neither decreases nor increases. They come and go and draw from the well. If one gets down almost to the water and the rope does not go all the way, or the jug breaks, it brings misfortune.',
    },
    lineExplanations: [
      'One does not drink the mud of the well. No animals come to an old well.',
      'At the wellhole one shoots fishes. The jug is broken and leaks.',
      "The well is cleaned, but no one drinks from it. This is my heart's sorrow, for one might draw from it. If the king were clear-minded, good fortune might be enjoyed in common.",
      'The well is being lined. No blame.',
      'In the well there is a clear, cold spring from which one can drink.',
      'One draws from the well Without hindrance. It is dependable. Supreme good fortune.',
    ],
  },
  49: {
    name: '革 (Gé) - Revolution (Molting)',
    mainExplanation: {
      image:
        'Fire in the lake: The image of revolution. Thus the superior man sets the calendar in order and makes the seasons clear.',
      text: 'Revolution. On your own day you are believed. Supreme success, furthering through perseverance. Remorse disappears.',
    },
    lineExplanations: [
      'Wrapped in the hide of a yellow cow.',
      "When one's own day comes, one may create revolution. Starting brings good fortune. No blame.",
      'Starting brings misfortune. Perseverance brings danger. When talk of revolution has gone the rounds three times, one may commit himself, and men will believe him.',
      'Remorse disappears. Men believe him. Changing the form of government brings good fortune.',
      'The great man changes like a tiger. Even before he questions the oracle, he is believed.',
      'The superior man changes like a panther. The inferior man molts in the face. Starting brings misfortune. To remain persevering brings good fortune.',
    ],
  },
  50: {
    name: '鼎 (Dǐng) - The Cauldron',
    mainExplanation: {
      image:
        'Fire over wood: The image of the cauldron. Thus the superior man consolidates his fate By making his position correct.',
      text: 'The Cauldron. Supreme good fortune. Success.',
    },
    lineExplanations: [
      'A cauldron with upturned legs. Furthers removal of stagnating stuff. One takes a concubine for the sake of her son. No blame.',
      'There is food in the cauldron. My comrades are envious, but they cannot harm me. Good fortune.',
      'The handle of the cauldron is altered. One is impeded in his way of life. The fat of the pheasant is not eaten. Once rain falls, remorse is spent. Good fortune comes in the end.',
      "The legs of the cauldron are broken. The prince's meal is spilled and his person is soiled. Misfortune.",
      'The cauldron has yellow handles, golden carrying rings. Perseverance furthers.',
      'The cauldron has jade rings. Great good fortune. Nothing that would not act to further.',
    ],
  },
  51: {
    name: '震 (Zhèn) - The Arousing (Shock, Thunder)',
    mainExplanation: {
      image:
        'Thunder repeated: The image of shock. Thus in fear and trembling the superior man sets his life in order and examines himself.',
      text: 'Shock brings success. Shock comes—oh, oh! Laughing words—ha, ha! The shock terrifies for a hundred miles, and he does not let fall the sacrificial spoon and chalice.',
    },
    lineExplanations: [
      'Shock comes—oh, oh! Then follows laughing words—ha, ha! Good fortune.',
      'Shock comes bringing danger. A hundred thousand times you lose your treasures and must climb the nine hills. Do not go in pursuit of them. After seven days you will get them back.',
      'Shock comes and makes one distraught. If shock spurs to action one remains free of misfortune.',
      'Shock is mired.',
      'Shock goes hither and thither. Danger. However, nothing at all is lost. Yet there are things to be done.',
      "Shock brings ruin and terrified gazing around. Going ahead brings misfortune. If it has not yet touched one's own body but has reached one's neighbor first, there is no blame. One's comrades have something to talk about.",
    ],
  },
  52: {
    name: '艮 (Gèn) - Keeping Still, Mountain',
    mainExplanation: {
      image:
        'Mountains standing close together: The image of keeping still. Thus the superior man does not permit his thoughts to go beyond his situation.',
      text: 'Keeping Still. Keeping his back still so that he no longer feels his body. He goes into his courtyard and does not see his people. No blame.',
    },
    lineExplanations: [
      'Keeping his toes still. No blame. Continued perseverance furthers.',
      'Keeping his calves still. He cannot rescue him whom he follows. His heart is not glad.',
      'Keeping his hips still. Making his sacrum stiff. Dangerous. The heart suffocates.',
      'Keeping his trunk still. No blame.',
      'Keeping his jaw still. The words have order. Remorse disappears.',
      'Noblehearted keeping still. Good fortune.',
    ],
  },
  53: {
    name: '漸 (Jiàn) - Development (Gradual Progress)',
    mainExplanation: {
      image:
        'On the mountain, a tree: The image of development. Thus the superior man abides in dignity and virtue, in order to improve the mores.',
      text: 'Development. The maiden Is given in marriage. Good fortune. Perseverance furthers.',
    },
    lineExplanations: [
      'The wild goose gradually draws near the shore. The young son is in danger. There is talk. No blame.',
      'The wild goose gradually draws near the cliff. Eating and drinking in peace and concord. Good fortune.',
      'The wild goose gradually draws near the plateau. The man goes forth and does not return. The woman carries a child but does not bring it forth. Misfortune. It furthers one to fight off robbers.',
      'The wild goose gradually draws near the tree. Perhaps it will find a flat branch. No blame.',
      'The wild goose gradually draws near the summit. For three years the woman has no child. In the end nothing can hinder her. Good fortune.',
      'The wild goose gradually draws near the cloud heights. Its feathers can be used for the sacred dance. Good fortune.',
    ],
  },
  54: {
    name: '歸妹 (Guī Mèi) - The Marrying Maiden',
    mainExplanation: {
      image:
        'Thunder over the lake: The image of the marrying maiden. Thus the superior man understands the transitory in the light of the eternity of the end.',
      text: 'The Marrying Maiden. Undertakings bring misfortune. Nothing that would further.',
    },
    lineExplanations: [
      'The marrying maiden as a concubine. A lame man who is able to tread. Undertakings bring good fortune.',
      'A one-eyed man who is able to see. The perseverance of a solitary man furthers.',
      'The marrying maiden as a slave. She marries as a concubine.',
      'The marrying maiden draws out the allotted time. A late marriage comes in due course.',
      'The sovereign I gave his daughter in marriage. The embroidered garments of the princess Were not as gorgeous As those of the servingmaid. The moon that is nearly full brings good fortune.',
      'The woman holds the basket, but there are no fruits in it. The man stabs the sheep, but no blood flows. Nothing that acts to further.',
    ],
  },
  55: {
    name: '豐 (Fēng) - Abundance (Fullness)',
    mainExplanation: {
      image:
        'Both thunder and lightning come: The image of abundance. Thus the superior man decides lawsuits And carries out punishments.',
      text: 'Abundance has success. The king attains abundance. Be not sad. Be like the sun at midday.',
    },
    lineExplanations: [
      'When a man meets his destined ruler, They can be together ten days, and it is not a mistake. Going meets with recognition.',
      'The curtain is of such fullness That the polestars can be seen at noon. Through going one meets with mistrust and hate. If one rouses him through truth, good fortune comes.',
      'The underbrush is of such abundance That the small stars can be seen at noon. He breaks his right arm. No blame.',
      'The curtain is of such fullness that the polestars can be seen at noon. He meets his ruler, who is of like kind. Good fortune.',
      'Lines are coming, blessing and fame draw near. Good fortune.',
      'His house is in a state of abundance. He screens off his family. He peers through the gate and no longer perceives anyone. For three years he sees nothing. Misfortune.',
    ],
  },
  56: {
    name: '旅 (Lǚ) - The Wanderer',
    mainExplanation: {
      image:
        'Fire on the mountain: The image of the wanderer. Thus the superior man Is clear-minded and cautious In imposing penalties, and protracts no lawsuits.',
      text: 'The Wanderer. Success through smallness. Perseverance brings good fortune to the wanderer.',
    },
    lineExplanations: [
      'If the wanderer busies himself with trivial things, he draws down misfortune upon himself.',
      'The wanderer comes to an inn. He has his property with him. He wins the steadfastness of a young servant.',
      "The wanderer's inn burns down. He loses the steadfastness of his young servant. Danger.",
      'The wanderer rests in a shelter. He obtains his property and an ax. My heart is not glad.',
      'He shoots a pheasant. It drops with the first arrow. In the end this brings both praise and office.',
      "The bird's nest burns up. The wanderer laughs at first, then must needs lament and weep. Through carelessness he loses his cow. Misfortune.",
    ],
  },
  57: {
    name: '巽 (Xùn) - The Gentle (The Penetrating, Wind)',
    mainExplanation: {
      image:
        'Winds following one upon the other: The image of the gently penetrating. Thus the superior man spreads his commands abroad and carries out his undertakings.',
      text: 'The Gentle. Success through what is small. It furthers one to have somewhere to go. It furthers one to see the great man.',
    },
    lineExplanations: [
      'In advancing and in retreating, the perseverance of a warrior furthers.',
      'Penetration under the bed. Priests and magicians are used in great number. Good fortune. No blame.',
      'Repeated penetration. Humiliation.',
      'Remorse vanishes. During the hunt Three kinds of game are caught.',
      'Perseverance brings good fortune. Remorse vanishes. Nothing that does not further. No beginning, but an end. Before the change, three days. After the change, three days. Good fortune.',
      'Penetration under the bed. He loses his property and his ax. Perseverance brings misfortune.',
    ],
  },
  58: {
    name: '兌 (Duì) - The Joyous, Lake',
    mainExplanation: {
      image:
        'Lakes resting on one another: The image of the joyous. Thus the superior man joins with his friends For discussion and practice.',
      text: 'The Joyous. Success. Perseverance is favorable.',
    },
    lineExplanations: [
      'Contented joyousness. Good fortune.',
      'Sincere joyousness. Good fortune. Remorse disappears.',
      'Coming joyousness. Misfortune.',
      'Joyousness that is weighed is not at peace. After ridding himself of mistakes, a man has joy.',
      'Sincerity toward disintegrating influences is dangerous.',
      'Seductive joyousness.',
    ],
  },
  59: {
    name: '渙 (Huàn) - Dispersion (Dissolution)',
    mainExplanation: {
      image:
        'The wind drives over the water: The image of dispersion. Thus the kings of old sacrificed to the Lord and built temples.',
      text: 'Dispersion. Success. The king approaches his temple. It furthers one to cross the great water. Perseverance furthers.',
    },
    lineExplanations: [
      'He brings help with the strength of a horse. Good fortune.',
      'At the dissolution He hurries to that which supports him. Remorse disappears.',
      'He dissolves his self. No remorse.',
      'He dissolves his bond with his group. Supreme good fortune. Dispersion leads in turn to accumulation. This is something that ordinary men do not think of.',
      'His loud cries are as dissolving as sweat. Dissolution. A king abides without blame.',
      'He dissolves his blood. Departing, keeping at a distance, going out is without blame.',
    ],
  },
  60: {
    name: '節 (Jié) - Limitation',
    mainExplanation: {
      image:
        'Water over lake: The image of limitation. Thus the superior man creates number and measure, and examines the nature of virtue and correct conduct.',
      text: 'Limitation. Success. Galling limitation must not be persevered in.',
    },
    lineExplanations: [
      'Not going out of the door and the courtyard is without blame.',
      'Not going out of the gate and the courtyard brings misfortune.',
      'He who knows no limitation will have cause to lament. No blame.',
      'Contented limitation. Success.',
      'Sweet limitation brings good fortune. Going brings esteem.',
      'Galling limitation. Perseverance brings misfortune. Remorse disappears.',
    ],
  },
  61: {
    name: '中孚 (Zhōng Fú) - Inner Truth',
    mainExplanation: {
      image:
        'Wind over lake: The image of inner truth. Thus the superior man discusses criminal cases In order to delay executions.',
      text: 'Inner Truth. Pigs and fishes. Good fortune. It furthers one to cross the great water. Perseverance furthers.',
    },
    lineExplanations: [
      'Being prepared brings good fortune. If there are secret designs, it is disquieting.',
      'A crane calling in the shade. Its young answers it. I have a good goblet. I will share it with you.',
      'He finds a comrade. Now he beats the drum, now he stops. Now he sobs, now he sings.',
      'The moon nearly at the full. The team horse goes astray. No blame.',
      'He possesses truth, which links together. No blame.',
      'Cockcrow penetrating to heaven. Perseverance brings misfortune.',
    ],
  },
  62: {
    name: '小過 (Xiǎo Guò) - Preponderance of the Small',
    mainExplanation: {
      image:
        'Thunder on the mountain: The image of preponderance of the small. Thus in his conduct the superior man gives preponderance to reverence. In bereavement he gives preponderance to grief. In his expenditures he gives preponderance to thrift.',
      text: 'Preponderance of the Small. Success. Perseverance furthers. Small things may be done; great things should not be done. The flying bird brings the message: It is not well to strive upward, it is well to remain below. Great good fortune.',
    },
    lineExplanations: [
      'The bird meets with misfortune through flying.',
      'She passes by her ancestor and meets her ancestress. He does not reach his prince and meets the official. No blame.',
      'If one is not extremely careful, Somebody may come up from behind and strike him. Misfortune.',
      'No blame. He meets him without passing by. Going brings danger. One must be on guard. Do not act. Be constantly persevering.',
      'Dense clouds, no rain from our western territory. The prince shoots and hits him who is in the cave.',
      'He passes him by, not meeting him. The flying bird leaves him. Misfortune. This means bad luck and injury.',
    ],
  },
  63: {
    name: '既濟 (Jì Jì) - After Completion',
    mainExplanation: {
      image:
        'Water over fire: The image of the condition In after completion. Thus the superior man takes thought of misfortune and arms himself against it in advance.',
      text: 'After Completion, success in small matters. Perseverance furthers. At the beginning good fortune; at the end disorder.',
    },
    lineExplanations: [
      'He breaks his wheels. He gets his tail in the water. No blame.',
      'The woman loses the curtain of her carriage. Do not run after it; on the seventh day you will get it.',
      "The Illustrious Ancestor disciplines the Devil's Country. After three years he conquers it. Inferior people must not be employed.",
      'The finest clothes turn to rags. Be careful all day long.',
      'The neighbor in the east who slaughters an ox does not attain as much real happiness As the neighbor in the west with his simple sacrifice.',
      'He gets his head in the water. Danger.',
    ],
  },
  64: {
    name: '未濟 (Wèi Jì) - Before Completion',
    mainExplanation: {
      image:
        'Fire over water: The image of the condition before transition. Thus the superior man is careful In the differentiation of things, so that each finds its place.',
      text: 'Before Completion. Success. But if the little fox, after nearly completing the crossing, gets his tail in the water, there is nothing that would further.',
    },
    lineExplanations: [
      'He gets his tail in the water. Humiliating.',
      'He brakes his wheels. Perseverance brings good fortune.',
      'Before completion, attack brings misfortune. It furthers one to cross the great water.',
      "Perseverance brings good fortune. Remorse disappears. Shock, thus to discipline the Devil's Country. For three years, great realms are awarded.",
      'Perseverance brings good fortune. No remorse. The light of the superior man is true. Good fortune.',
      'There is drinking of wine In genuine confidence. No blame. But if one wets his head, he loses it, in truth.',
    ],
  },
}

const hexLines = [
  { linePattern: [1, 1, 1, 1, 1, 1], number: 1 },
  { linePattern: [0, 0, 0, 0, 0, 0], number: 2 },
  { linePattern: [1, 0, 0, 0, 1, 0], number: 3 },
  { linePattern: [0, 1, 0, 0, 0, 1], number: 4 },
  { linePattern: [1, 1, 1, 0, 1, 0], number: 5 },
  { linePattern: [0, 1, 0, 1, 1, 1], number: 6 },
  { linePattern: [0, 1, 0, 0, 0, 0], number: 7 },
  { linePattern: [0, 0, 0, 0, 1, 0], number: 8 },
  { linePattern: [1, 1, 1, 0, 1, 1], number: 9 },
  { linePattern: [1, 1, 0, 1, 1, 1], number: 10 },
  { linePattern: [1, 1, 1, 0, 0, 0], number: 11 },
  { linePattern: [0, 0, 0, 1, 1, 1], number: 12 },
  { linePattern: [1, 0, 1, 1, 1, 1], number: 13 },
  { linePattern: [1, 1, 1, 1, 0, 1], number: 14 },
  { linePattern: [0, 0, 1, 0, 0, 0], number: 15 },
  { linePattern: [0, 0, 0, 1, 0, 0], number: 16 },
  { linePattern: [1, 0, 0, 1, 1, 0], number: 17 },
  { linePattern: [0, 1, 1, 0, 0, 1], number: 18 },
  { linePattern: [1, 1, 0, 0, 0, 0], number: 19 },
  { linePattern: [0, 0, 0, 0, 1, 1], number: 20 },
  { linePattern: [1, 0, 0, 1, 0, 1], number: 21 },
  { linePattern: [1, 0, 1, 0, 0, 1], number: 22 },
  { linePattern: [0, 0, 0, 0, 0, 1], number: 23 },
  { linePattern: [1, 0, 0, 0, 0, 0], number: 24 },
  { linePattern: [1, 0, 0, 1, 1, 1], number: 25 },
  { linePattern: [1, 1, 1, 0, 0, 1], number: 26 },
  { linePattern: [1, 0, 0, 0, 0, 1], number: 27 },
  { linePattern: [0, 1, 1, 1, 1, 0], number: 28 },
  { linePattern: [0, 1, 0, 0, 1, 0], number: 29 },
  { linePattern: [1, 0, 1, 1, 0, 1], number: 30 },
  { linePattern: [0, 0, 1, 1, 1, 0], number: 31 },
  { linePattern: [0, 1, 1, 1, 0, 0], number: 32 },
  { linePattern: [0, 0, 1, 1, 1, 1], number: 33 },
  { linePattern: [1, 1, 1, 1, 0, 0], number: 34 },
  { linePattern: [0, 0, 0, 1, 0, 1], number: 35 },
  { linePattern: [1, 0, 1, 0, 0, 0], number: 36 },
  { linePattern: [1, 0, 1, 0, 1, 1], number: 37 },
  { linePattern: [1, 1, 0, 1, 0, 1], number: 38 },
  { linePattern: [0, 0, 1, 0, 1, 0], number: 39 },
  { linePattern: [0, 1, 0, 1, 0, 0], number: 40 },
  { linePattern: [1, 1, 0, 0, 0, 1], number: 41 },
  { linePattern: [1, 0, 0, 0, 1, 1], number: 42 },
  { linePattern: [1, 1, 1, 1, 1, 0], number: 43 },
  { linePattern: [0, 1, 1, 1, 1, 1], number: 44 },
  { linePattern: [0, 0, 0, 1, 1, 0], number: 45 },
  { linePattern: [0, 1, 1, 0, 0, 0], number: 46 },
  { linePattern: [0, 1, 0, 1, 1, 0], number: 47 },
  { linePattern: [0, 1, 1, 0, 1, 0], number: 48 },
  { linePattern: [1, 0, 1, 1, 1, 0], number: 49 },
  { linePattern: [0, 1, 1, 1, 0, 1], number: 50 },
  { linePattern: [1, 0, 0, 1, 0, 0], number: 51 },
  { linePattern: [0, 0, 1, 0, 0, 1], number: 52 },
  { linePattern: [0, 0, 1, 0, 1, 1], number: 53 },
  { linePattern: [1, 1, 0, 1, 0, 0], number: 54 },
  { linePattern: [1, 0, 1, 1, 0, 0], number: 55 },
  { linePattern: [0, 0, 1, 1, 0, 1], number: 56 },
  { linePattern: [0, 1, 1, 0, 1, 1], number: 57 },
  { linePattern: [1, 1, 0, 1, 1, 0], number: 58 },
  { linePattern: [0, 1, 0, 0, 1, 1], number: 59 },
  { linePattern: [1, 1, 0, 0, 1, 0], number: 60 },
  { linePattern: [1, 1, 0, 0, 1, 1], number: 61 },
  { linePattern: [0, 0, 1, 1, 0, 0], number: 62 },
  { linePattern: [1, 0, 1, 0, 1, 0], number: 63 },
  { linePattern: [0, 1, 0, 1, 0, 1], number: 64 },
]

option1.addEventListener('click', function () {
  span1.style.display = 'block'
  span2.style.display = 'none'
  auto.textContent = 'Start'
  auto.style.display = 'none'
  loadIcon.style.display = 'none'
})

option2.addEventListener('click', function () {
  span1.style.display = 'none'
  span2.style.display = 'block'
  autoCover.style.display = 'none'
  handleStartAndIcon()
})

function handleStartAndIcon() {
  auto.style.display = 'inline'
  loadIcon.style.display = 'none'
  autoCover.style.display = 'none'
}

let r1 = false,
  r2 = false,
  r3 = false,
  r4 = false,
  r5 = false,
  r6 = false

let casts = []

let autoList = []

let tempNum = 0

function checkThreeDigits() {
  casts = []

  for (let i = 0; i < autoList.length; i += 3) {
    let segment = autoList.slice(i, i + 3).join('')

    //2^3 = 8 Combinations
    switch (segment) {
      case '000':
        casts.push('d0')
        break
      case '001':
        casts.push('0')
        break
      case '010':
        casts.push('0')
        break
      case '011':
        casts.push('1')
        break
      case '100':
        casts.push('0')
        break
      case '101':
        casts.push('1')
        break
      case '110':
        casts.push('1')
        break
      case '111':
        casts.push('d1')
        break
      default:
        console.log(`Incomplete segment at index ${i}`)
    }
  }
}

const input = document.getElementById('inputAPI')

input.addEventListener('focus', function () {
  handleStartAndIcon()
})

const autoCover = document.getElementById('autoCover')
autoCover.style.display = 'none'

auto.addEventListener('click', async function () {
  loadIcon.style.display = 'inline'
  auto.style.display = 'none'
  autoCover.style.display = 'inline'
  //autoCover.style.backgroundColor = 'bisque'
  autoCover.style.background = 'none'
  autoCover.textContent = 'Tossing...'
  centerText.style.visibility = 'hidden'

  async function generateNumber() {
    const inputValue = input.value

    try {
      const apiKey = inputValue
      const response = await fetch(`https://api.random.org/json-rpc/2/invoke`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'generateIntegers',
          params: {
            apiKey: apiKey,
            n: 1, //Number of random numbers
            min: 0, //Min value
            max: 1, //Max value
            replacement: true,
          },
          id: 1,
        }),
      })

      const data = await response.json()
      const randomNumber = data.result.random.data[0]
      console.log('Random Number: ' + randomNumber)
      return randomNumber
    } catch (error) {
      console.error('Error fetching random number:', error)
      autoCover.textContent = 'Invalid API Key'
      loadIcon.style.display = 'none'
    }
  }

  //Delay
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  //Random numbers asynchronously wait for API #'s to generate
  async function processRandomNumbers() {
    for (let i = 1; i < 7; i++) {
      for (let j = 1; j < 4; j++) {
        let newNum = await generateNumber()
        autoList.push(newNum)
        console.log('autoList: ' + autoList)
      }
      checkThreeDigits()
      await delay(500)
    }
    autoRoll()
    handleStartAndIcon()
  }

  await processRandomNumbers()
})

auto.addEventListener('mouseenter', function () {
  auto.style.backgroundColor = 'rgb(237, 154, 47)'
})

auto.addEventListener('mouseout', function () {
  auto.style.backgroundColor = 'rgb(235, 176, 98)'
})

function createLine(e, v) {
  const line = document.createElement('div')
  line.style.height = '50%'
  line.style.width = v === 1 ? '92%' : '45%'
  line.style.border = 'solid'
  line.style.borderColor = 'white'
  line.style.backgroundColor = 'black'
  line.style.borderRadius = '5px'
  e.appendChild(line)

  if (v === 0) {
    const line2 = document.createElement('div')
    line2.style.height = '50%'
    line2.style.width = '45%'
    line2.style.border = 'solid'
    line2.style.borderColor = 'white'
    line2.style.backgroundColor = 'black'
    line2.style.borderRadius = '5px'
    e.appendChild(line2)
  }
}

function createOppositeLine(e, v) {
  const line = document.createElement('div')
  line.style.height = '50%'
  line.style.width = v === 0 ? '92%' : '45%'
  line.style.border = 'solid'
  line.style.borderColor = 'white'
  line.style.backgroundColor = 'black'
  line.style.borderRadius = '5px'
  e.appendChild(line)

  if (v === 1) {
    const line2 = document.createElement('div')
    line2.style.height = '50%'
    line2.style.width = '45%'
    line2.style.border = 'solid'
    line2.style.borderColor = 'white'
    line2.style.backgroundColor = 'black'
    line2.style.borderRadius = '5px'
    e.appendChild(line2)
  }
}

function changedHex() {
  const originalElement = document.querySelector('.square')

  if (originalElement) {
    const clonedElement = originalElement.cloneNode(true)
    const clonedChildren = Array.from(
      clonedElement.querySelectorAll('.box')
    ).reverse()

    clonedChildren.forEach((child, index) => {
      while (child.firstChild) {
        child.removeChild(child.firstChild)
      }
      const castValue = casts[index]
      if (castValue === 'd1') {
        createOppositeLine(child, 1)
      } else if (castValue === 'd0') {
        createOppositeLine(child, 0)
      } else if (castValue === '1') {
        createLine(child, 1)
      } else if (castValue === '0') {
        createLine(child, 0)
      }
    })

    const container = document.querySelector('.container')

    if (container) {
      container.appendChild(clonedElement)
    } else {
      console.error('Container element not found')
    }
  } else {
    console.error('Original element not found')
  }
}

function autoRoll() {
  for (i = 0; i < casts.length; i++) {
    roll()
  }
}

function roll() {
  if (r1 === false) {
    if (casts[0] === 'd1' || casts[0] === '1') {
      createLine(one, 1)
    } else if (casts[0] === 'd0' || casts[0] === '0') {
      createLine(one, 0)
    }
    r1 = true
  } else if (r2 === false) {
    if (casts[1] === 'd1' || casts[1] === '1') {
      createLine(two, 1)
    } else if (casts[1] === 'd0' || casts[1] === '0') {
      createLine(two, 0)
    }
    r2 = true
  } else if (r3 === false) {
    if (casts[2] === 'd1' || casts[2] === '1') {
      createLine(three, 1)
    } else if (casts[2] === 'd0' || casts[2] === '0') {
      createLine(three, 0)
    }
    r3 = true
  } else if (r4 === false) {
    if (casts[3] === 'd1' || casts[3] === '1') {
      createLine(four, 1)
    } else if (casts[3] === 'd0' || casts[3] === '0') {
      createLine(four, 0)
    }
    r4 = true
  } else if (r5 === false) {
    if (casts[4] === 'd1' || casts[4] === '1') {
      createLine(five, 1)
    } else if (casts[4] === 'd0' || casts[4] === '0') {
      createLine(five, 0)
    }
    r5 = true
  } else if (r6 === false) {
    if (casts[5] === 'd1' || casts[5] === '1') {
      createLine(six, 1)
    } else if (casts[5] === 'd0' || casts[5] === '0') {
      createLine(six, 0)
    }
    r6 = true
    readIChing()
    if (
      casts[0] === 'd1' ||
      casts[0] === 'd0' ||
      casts[1] === 'd1' ||
      casts[1] === 'd0' ||
      casts[2] === 'd1' ||
      casts[2] === 'd0' ||
      casts[3] === 'd1' ||
      casts[3] === 'd0' ||
      casts[4] === 'd1' ||
      casts[4] === 'd0' ||
      casts[5] === 'd1' ||
      casts[5] === 'd0'
    ) {
      changedHex()
    }
  }
}

function coinCast() {
  let v = cast.value
  if (v) {
    casts.push(v)
  }

  if (casts.length > 6) {
    casts.pop()
  }
  console.log(casts)
  roll()
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}

function readIChing() {
  let newList = []
  let changingLines = []

  for (let i = 0; i < casts.length; i++) {
    if (casts[i] === 'd1' || casts[i] === '1') {
      newList.push(1)
    } else if (casts[i] === 'd0' || casts[i] === '0') {
      newList.push(0)
    }

    if (casts[i] === 'd1' || casts[i] === 'd0') {
      changingLines.push(i)
    }
  }

  console.log('newList: ' + newList)
  console.log('changingLines: ' + changingLines)
  for (const hex of hexLines) {
    if (arraysEqual(newList, hex.linePattern)) {
      mainImg.innerHTML =
        `<p>Hexagram ${hex.number}:</p><p>` +
        `<p>Name ${hexagrams[hex.number].name}:</p><p>` +
        '<p>Image:</p><p>' +
        hexagrams[hex.number].mainExplanation.image.replace(/\n/g, '<br>') +
        '</p>'

      main.innerHTML =
        '<p>Judgment:</p><p>' +
        hexagrams[hex.number].mainExplanation.text.replace(/\n/g, '<br>') +
        '</p>'

      if (changingLines.length > 0) {
        let lineExplanations = changingLines
          .map((index) => {
            return (
              '<p>Line ' +
              (index + 1) +
              ':</p><p>' +
              hexagrams[hex.number].lineExplanations[index].replace(
                /\n/g,
                '<br>'
              ) +
              '</p>'
            )
          })
          .join('')
        ln.innerHTML = lineExplanations

        ln.innerHTML +=
          '</p><hr style="border: none; border-top: 1px solid #000; margin: 10px 0;">'

        let newHexList = newList.map((val, index) => {
          return changingLines.includes(index) ? 1 - val : val
        })

        console.log('newHexList: ' + newHexList)

        for (const newHex of hexLines) {
          if (arraysEqual(newHexList, newHex.linePattern)) {
            other.innerHTML +=
              `<br><br><p>Hexagram ${newHex.number}:</p><p>` +
              `<p>Name ${hexagrams[newHex.number].name}:</p><p>` +
              '<p>Image:</p><p>' +
              hexagrams[newHex.number].mainExplanation.image.replace(
                /\n/g,
                '<br>'
              ) +
              '</p>' +
              '<p>Judgment:</p><p>' +
              hexagrams[newHex.number].mainExplanation.text.replace(
                /\n/g,
                '<br>'
              ) +
              '</p>'
            break
          }
        }
      } else {
        ln.innerHTML = '<p>No changing lines</p>'
      }

      break
    }
  }
}

//enter
enter.addEventListener('mouseenter', function () {
  enter.style.backgroundColor = 'rgb(237, 154, 47)'
})

enter.addEventListener('mouseout', function () {
  enter.style.backgroundColor = 'rgb(235, 176, 98)'
})

enter.addEventListener('click', function () {
  coinCast()
  centerText.style.visibility = 'hidden'
})

//clear
function clearHex(e) {
  mainImg.innerHTML = ''
  main.innerHTML = ''
  ln.innerHTML = ''
  other.innerHTML = ''
  r1 = r2 = r3 = r4 = r5 = r6 = false
  casts = []
  autoList = []

  const childDivs = e.querySelectorAll('div')
  if (childDivs.length >= 1) {
    e.removeChild(childDivs[0])
    if (childDivs.length >= 2) {
      e.removeChild(childDivs[1])
    }
  }

  const container = document.getElementById('cont')
  if (container && container.children.length >= 2) {
    container.removeChild(container.children[1])
  }
}

clear.addEventListener('mouseenter', function () {
  clear.style.backgroundColor = 'rgb(237, 154, 47)'
})

clear.addEventListener('mouseout', function () {
  clear.style.backgroundColor = 'rgb(235, 176, 98)'
})

clear.addEventListener('click', function () {
  clearHex(one)
  clearHex(two)
  clearHex(three)
  clearHex(four)
  clearHex(five)
  clearHex(six)
  centerText.style.visibility = 'visible'
})

//info icon
const icon = document.getElementById('info-span')
const tooltip = document.querySelector('.tooltip')
tooltip.style.visibility = 'hidden'
tooltip.style.backgroundColor = 'white'
tooltip.style.borderRadius = '10px'
tooltip.style.padding = '5px'
tooltip.style.position = 'fixed'

icon.addEventListener('mouseover', () => {
  tooltip.style.opacity = '1'
  tooltip.style.visibility = 'visible'
})

icon.addEventListener('mouseout', () => {
  tooltip.style.opacity = '0'
  tooltip.style.visibility = 'hidden'
})

tooltip.addEventListener('mouseover', () => {
  tooltip.style.opacity = '1'
  tooltip.style.visibility = 'visible'
})

tooltip.addEventListener('mouseout', () => {
  tooltip.style.opacity = '0'
  tooltip.style.visibility = 'hidden'
})
