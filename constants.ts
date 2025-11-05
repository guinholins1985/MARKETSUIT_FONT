
import type { MarketingTool } from './types';
import {
  Icon3D,
  IconCalculator,
  IconFAQ,
  IconCaption,
  IconWatermark,
  IconPolicy,
  IconBanner,
  IconContent,
  IconOptimizer,
  IconAd,
  IconInfographic,
  IconMeme,
  IconStory,
} from './components/icons/ToolIcons';

export const TOOLS: MarketingTool[] = [
  {
    title: "Gerador de Mockups 3D com IA",
    description: "Transforme uma imagem 2D do seu produto em uma visualização 3D ou 360° imersiva e profissional.",
    icon: Icon3D,
  },
  {
    title: "Calculadora de Lucratividade com IA",
    description: "Simule cenários, compare marketplaces e receba uma estratégia completa para otimizar suas vendas no Brasil.",
    icon: IconCalculator,
  },
  {
    title: "Gerador de Perguntas Frequentes",
    description: "Faça o upload da imagem de um produto e nossa IA criará 40 perguntas e respostas frequentes para seu e-commerce.",
    icon: IconFAQ,
  },
  {
    title: "Impulso Criativo: Gerador de Legendas",
    description: "Descreva o seu post, escolha as redes sociais e deixe a IA criar legendas perfeitas para você.",
    icon: IconCaption,
  },
  {
    title: "Removedor de Marcas D'água",
    description: "Inteligência Artificial para limpar suas imagens de forma rápida e eficiente.",
    icon: IconWatermark,
  },
  {
    title: "Gerador de Política de Trocas",
    description: "Crie uma política profissional para sua loja em segundos com o poder da IA do Gemini.",
    icon: IconPolicy,
  },
  {
    title: "Gerador de Banners Promocionais",
    description: "Crie banners profissionais para marketplaces em segundos. Basta preencher as informações da sua campanha.",
    icon: IconBanner,
  },
  {
    title: "Crie Conteúdo de Marketing",
    description: "Faça upload de uma imagem ou cole um link. Nossa IA gerará textos de alta conversão para todas as suas necessidades.",
    icon: IconContent,
  },
  {
    title: "Otimizador de Anúncios IA",
    description: "Cole a URL do seu produto e deixe a IA criar um anúncio perfeito e otimizado para a mais alta performance.",
    icon: IconOptimizer,
  },
  {
    title: "Gerador de Anúncios com IA",
    description: "Crie textos de anúncios de alta conversão para Google Ads e Meta Ads em segundos.",
    icon: IconAd,
  },
  {
    title: "Gerador de Infográficos com IA",
    description: "Cole a URL de um produto e deixe a IA criar um infográfico de benefícios impressionante.",
    icon: IconInfographic,
  },
  {
    title: "Gerador de Memes IA",
    description: "Transforme imagens em ouro viral com humor de outro nível e aumente o engajamento.",
    icon: IconMeme,
  },
  {
    title: "Gerador de Imagens para Stories",
    description: "Crie visuais incríveis para seus stories. Envie um produto, descreva um cenário e deixe a IA fazer a mágica.",
    icon: IconStory,
  },
];
