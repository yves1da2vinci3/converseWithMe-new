import { ScenarioType } from '../types/roleplay';

// Liste enrichie de scénarios
export const scenarios: ScenarioType[] = [
  {
    id: 'interview',
    title: "Entretien d'embauche",
    description:
      'Préparez-vous pour un entretien en langue étrangère et impressionnez vos recruteurs',
    icon: 'briefcase-outline',
    difficulty: 'Intermédiaire',
    duration: '15-20 min',
    popular: true,
    category: 'business',
    topics: ['Carrière', 'Compétences', 'Expérience'],
    characters: [
      {
        id: 'recruiter',
        name: 'Marie Dupont',
        role: 'Recruteuse RH',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        description:
          'Une recruteuse expérimentée qui vous posera des questions sur votre parcours et vos compétences.',
      },
      {
        id: 'manager',
        name: 'Thomas Martin',
        role: 'Directeur technique',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        description:
          "Un manager qui évaluera vos compétences techniques et votre adéquation avec l'équipe.",
      },
    ],
  },
  {
    id: 'cafe',
    title: 'Au café',
    description:
      'Apprenez à commander et à discuter dans un café comme un local',
    icon: 'coffee-outline',
    difficulty: 'Débutant',
    duration: '5-10 min',
    popular: false,
    category: 'everyday',
    topics: ['Nourriture', 'Boissons', 'Conversations informelles'],
    characters: [
      {
        id: 'barista',
        name: 'Lucas',
        role: 'Barista',
        avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
        description:
          'Un barista sympathique qui prendra votre commande et pourra discuter de sujets variés.',
      },
      {
        id: 'waiter',
        name: 'Camille',
        role: 'Serveuse',
        avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
        description:
          'Une serveuse qui vous aidera à choisir parmi les spécialités du café.',
      },
    ],
  },
  {
    id: 'shopping',
    title: 'Shopping',
    description:
      'Perfectionnez votre vocabulaire commercial et vos compétences de négociation',
    icon: 'shopping-outline',
    difficulty: 'Débutant',
    duration: '10-15 min',
    popular: true,
    category: 'everyday',
    topics: ['Vêtements', 'Prix', 'Tailles', 'Couleurs'],
    characters: [
      {
        id: 'salesassistant',
        name: 'Sophie',
        role: 'Vendeuse',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
        description:
          'Une vendeuse attentionnée qui vous aidera à trouver ce que vous cherchez.',
      },
    ],
  },
  {
    id: 'presentation',
    title: 'Présentation professionnelle',
    description:
      "Entraînez-vous à faire une présentation formelle lors d'une réunion d'affaires",
    icon: 'medal-outline',
    difficulty: 'Avancé',
    duration: '20-25 min',
    popular: false,
    category: 'business',
    topics: ['Présentation', 'Données', 'Questions-réponses'],
    characters: [
      {
        id: 'colleague',
        name: 'Antoine',
        role: 'Collègue',
        avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
        description:
          'Un collègue qui vous écoutera et posera des questions pertinentes sur votre présentation.',
      },
    ],
  },
  {
    id: 'hotel',
    title: "Réservation d'hôtel",
    description:
      "Apprenez à réserver une chambre d'hôtel et à demander des informations",
    icon: 'bed-outline',
    difficulty: 'Débutant',
    duration: '10-15 min',
    popular: true,
    category: 'travel',
    topics: ['Hébergement', 'Réservation', 'Services', 'Informations'],
    characters: [
      {
        id: 'receptionist',
        name: 'Julie',
        role: 'Réceptionniste',
        avatar: 'https://randomuser.me/api/portraits/women/39.jpg',
        description:
          "Une réceptionniste serviable qui répondra à toutes vos questions sur l'hôtel.",
      },
    ],
  },
];

export const categories = [
  { id: 'popular', name: 'Populaires' },
  { id: 'beginner', name: 'Débutant' },
  { id: 'intermediate', name: 'Intermédiaire' },
  { id: 'advanced', name: 'Avancé' },
  { id: 'travel', name: 'Voyage' },
  { id: 'business', name: 'Affaires' },
  { id: 'everyday', name: 'Quotidien' },
];
