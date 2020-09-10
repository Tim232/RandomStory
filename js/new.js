const choice = list => list[Math.floor(Math.random() * list.length)]

const characters = [
    '키키',
    '샌즈',
    '파피루스',
    '무민',
    '미니박스',
    '오류',
    '디토',
    '시녕',
    '고야이',
    '포차',
    '머멍이',
    '스캇',
    '선셋',
    '두곰'
]

const getCharacter = () => {
    c = choice(characters)
    characters.splice(characters.indexOf(c))
    return c
}

const howOld = [
    '아주 먼 옛날 ',
    '아주 가까운 옛날 '
]

const when = [
    '고야이가 머멍이였을때',
    '샌즈랑 파피루스가 행복하게 산책하고있었을때',
    '디스코드가 드디어 슬랙을 인수했을때',
    '인터넷 익스플로러가 생겼을때',
    '인터넷 익스플로러가 서비스를 종료했을때',
    '유튜브 프리미엄이 무료가 됬을때',
    '샌즈 주식회사가 대기업이 되었을때',
    '깃허브랑 깃랩이랑 합쳐졌을때'
]

const doing = [
    '게임',
    '디코',
    '고야이와 딩가딩가',
    '고야이 죽이기'
]

const quotes = [
    '사실 샌즈는 파피루스의 아들이다!',
    '머멍이랑 고야이랑 같은 종이다!',
    '인터넷 익스플로러는 최고의 브라우저다!',
    'HTML은 최고의 백엔드 프로그래밍 언어다!',
    '사실 미니박스는 메가박스다!',
    '당신은 죽었다!',
    '당신은 사실 고야이다!',
    'I am your father',
    'I am your son',
    '디스코드는 망했다!'
]

const reactions = [
    '너무 감격스러워',
    '충격을 받아',
    '감동을 받아',
    '너무 신나서',
    '너무 즐거워서',
    '사실이라는게 밝혀져',
    '키키가 키키해서',
    '환생한것 같아서'
]

const response = [
    '춤을 추었다',
    '죽었다',
    '기묘한 이야기를 관람했다',
    '그 사실을 모두한테 알렸다',
    '샌즈를 이겼다',
    '그르르! 를 외쳤다',
    '개발을 관뒀다',
    '악독해졌다',
    '환생했다',
    '키키한테 니트로를 기부했다',
    'HTML라는 최고의 백엔드 프로그래밍 언어로 웹을 개발해서 최고의 브라우저인 인터넷 익스플로러로 사이트를 보았다'
]

const character = getCharacter()

const content = `내 이름은 ${character}, 지금부터 이야기를 하나 말하겠다<br>시간은 ${choice(howOld)} ${choice(when)} 쯤의 이야기다<br><br>`
content += `나는 ${choice(doing)}하고 있었다.<br>갑자기 ${getCharacter()}(이)가 나타나 이렇게 말했다<br><br>"${choice(quotes)}"<br><br>나는 그것을 듣고 ${choice(reactions)} ${choice(response)}`

document.getElementsByClassName('content')[0].innerHTML = content