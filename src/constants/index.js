import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from '../utils'

export const navLists = ['Store', 'Mac', 'iPhone', 'Support']

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      'Apresentando o A17 Pro.',
      'Chip revolucionário.',
      'Desempenho inovador.',
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ['Titânio.', 'Tão forte. Tão leve. Tão Pro.'],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      'O iPhone 15 Pro Max tem o',
      'maior zoom óptico',
      'de um iPhone. Impressionante.',
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ['Novo botão de Ação.', 'O que o seu vai fazer?'],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
]

export const models = [
  {
    id: 1,
    title: 'iPhone 15 Pro em Titânio Natural',
    color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
    img: yellowImg,
  },
  {
    id: 2,
    title: 'iPhone 15 Pro em Titânio Azul',
    color: ['#53596E', '#6395ff', '#21242e'],
    img: blueImg,
  },
  {
    id: 3,
    title: 'iPhone 15 Pro em Titânio Branco',
    color: ['#C9C8C2', '#ffffff', '#C9C8C2'],
    img: whiteImg,
  },
  {
    id: 4,
    title: 'iPhone 15 Pro em Titânio Preto',
    color: ['#454749', '#3b3b3b', '#181819'],
    img: blackImg,
  },
]

export const sizes = [
  { label: '6.1"', value: 'small' },
  { label: '6.7"', value: 'large' },
]

export const footerLinks = [
  'Política de Privacidade',
  'Termos de Uso',
  'Política de Vendas',
  'Legal',
  'Mapa do Site',
]
