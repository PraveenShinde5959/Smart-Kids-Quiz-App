// constants.ts
import { QuizCategory } from './types';

/**
 * Preloaded quiz questions and categories.
 * Each category contains an array of QuizQuestion objects.
 * Questions are age-appropriate and educational for 7-12 year olds.
 */
export const quizCategories: QuizCategory[] = [
  {
    id: 'logic',
    name: 'Logic & Reasoning',
    emoji: '🧠',
    questions: [
      {
        question: 'What has an eye, but cannot see?',
        options: ['A needle', 'A potato', 'A storm', 'A key'],
        answer: 'A needle',
      },
      {
        question: 'Which word in the dictionary is spelled incorrectly?',
        options: ['Incorrectly', 'Separate', 'Believe', 'Friend'],
        answer: 'Incorrectly',
      },
      {
        question: 'I am always hungry, I must always be fed, the finger I lick will soon turn red. What am I?',
        options: ['Fire', 'A pet', 'A monster', 'A vacuum cleaner'],
        answer: 'Fire',
      },
      {
        question: 'What has cities, but no houses; forests, but no trees; and water, but no fish?',
        options: ['A map', 'A book', 'A desert', 'A painting'],
        answer: 'A map',
      },
      {
        question: 'What can travel around the world while staying in a corner?',
        options: ['A stamp', 'A thought', 'A letter', 'A picture'],
        answer: 'A stamp',
      },
      {
        question: 'I have to be broken before you can use me. What am I?',
        options: ['An egg', 'A promise', 'A secret', 'A mirror'],
        answer: 'An egg',
      },
      {
        question: 'What is full of holes but still holds water?',
        options: ['A sponge', 'A sieve', 'A colander', 'A net'],
        answer: 'A sponge',
      },
      {
        question: 'What question can you never answer yes to?',
        options: ['Are you asleep yet?', 'Do you like pizza?', 'Is it raining?', 'Are you happy?'],
        answer: 'Are you asleep yet?',
      },
      {
        question: 'What is always in front of you but can’t be seen?',
        options: ['The future', 'Your nose', 'Your reflection', 'A ghost'],
        answer: 'The future',
      },
      {
        question: 'The more you take, the more you leave behind. What am I?',
        options: ['Footsteps', 'Memories', 'Photographs', 'Secrets'],
        answer: 'Footsteps',
      },
    ],
  },
  {
    id: 'math',
    name: 'Math Fun',
    emoji: '🔢',
    questions: [
      {
        question: 'What is 7 multiplied by 8?',
        options: ['56', '48', '64', '72'],
        answer: '56',
      },
      {
        question: 'If a triangle has sides of 3cm, 4cm, and 5cm, what kind of triangle is it?',
        options: ['Right-angled', 'Equilateral', 'Isosceles', 'Obtuse'],
        answer: 'Right-angled',
      },
      {
        question: 'What is the sum of all angles in a quadrilateral?',
        options: ['360 degrees', '180 degrees', '90 degrees', '270 degrees'],
        answer: '360 degrees',
      },
      {
        question: 'If you buy 3 apples for $1.50, how much does one apple cost?',
        options: ['$0.50', '$0.75', '$0.45', '$1.00'],
        answer: '$0.50',
      },
      {
        question: 'What is the next number in the sequence: 2, 4, 6, 8, ...?',
        options: ['10', '9', '12', '11'],
        answer: '10',
      },
      {
        question: 'How many minutes are in 2 hours?',
        options: ['120 minutes', '60 minutes', '180 minutes', '90 minutes'],
        answer: '120 minutes',
      },
      {
        question: 'What is 25% of 200?',
        options: ['50', '25', '75', '100'],
        answer: '50',
      },
      {
        question: 'If you subtract 15 from 40, what do you get?',
        options: ['25', '30', '15', '35'],
        answer: '25',
      },
      {
        question: 'A square has a perimeter of 20 cm. What is the length of one side?',
        options: ['5 cm', '4 cm', '10 cm', '2 cm'],
        answer: '5 cm',
      },
      {
        question: 'What is 12 divided by 3?',
        options: ['4', '3', '6', '2'],
        answer: '4',
      },
    ],
  },
  {
    id: 'science',
    name: 'Science Basics',
    emoji: '🔬',
    questions: [
      {
        question: 'What planet is known as the "Red Planet"?',
        options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
        answer: 'Mars',
      },
      {
        question: 'What is the process by which plants make their food?',
        options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Germination'],
        answer: 'Photosynthesis',
      },
      {
        question: 'What is the largest organ in the human body?',
        options: ['Skin', 'Heart', 'Brain', 'Liver'],
        answer: 'Skin',
      },
      {
        question: 'Which gas do plants absorb from the atmosphere?',
        options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
        answer: 'Carbon Dioxide',
      },
      {
        question: 'What force pulls objects towards the center of the Earth?',
        options: ['Gravity', 'Magnetism', 'Friction', 'Tension'],
        answer: 'Gravity',
      },
      {
        question: 'What state of matter has a definite shape and a definite volume?',
        options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
        answer: 'Solid',
      },
      {
        question: 'What is the closest star to Earth?',
        options: ['The Sun', 'Proxima Centauri', 'Sirius', 'Alpha Centauri'],
        answer: 'The Sun',
      },
      {
        question: 'Which part of a plant absorbs water and nutrients from the soil?',
        options: ['Roots', 'Leaves', 'Stem', 'Flowers'],
        answer: 'Roots',
      },
      {
        question: 'What is the main component of the air we breathe?',
        options: ['Nitrogen', 'Oxygen', 'Carbon Dioxide', 'Argon'],
        answer: 'Nitrogen',
      },
      {
        question: 'What causes day and night on Earth?',
        options: ['Earth spinning on its axis', 'Earth orbiting the Sun', 'The Moon orbiting Earth', 'The Sun moving'],
        answer: 'Earth spinning on its axis',
      },
    ],
  },
  {
    id: 'brainTeasers',
    name: 'Brain Teasers',
    emoji: '💡',
    questions: [
      {
        question: 'What has an eye but cannot see?',
        options: ['A needle', 'A storm', 'A potato', 'A key'],
        answer: 'A needle',
      },
      {
        question: 'What is always coming but never arrives?',
        options: ['Tomorrow', 'Yesterday', 'Today', 'Never'],
        answer: 'Tomorrow',
      },
      {
        question: 'What has to be broken before you can use it?',
        options: ['An egg', 'A secret', 'A heart', 'A promise'],
        answer: 'An egg',
      },
      {
        question: 'What is so fragile that saying its name breaks it?',
        options: ['Silence', 'Glass', 'A secret', 'A promise'],
        answer: 'Silence',
      },
      {
        question: 'What has a head and a tail, but no body?',
        options: ['A coin', 'A snake', 'A river', 'A story'],
        answer: 'A coin',
      },
      {
        question: 'What can you catch, but not throw?',
        options: ['A cold', 'A ball', 'A frisbee', 'A fish'],
        answer: 'A cold',
      },
      {
        question: 'What runs around the whole yard without moving?',
        options: ['A fence', 'A dog', 'A path', 'A car'],
        answer: 'A fence',
      },
      {
        question: 'What has hands but cannot clap?',
        options: ['A clock', 'A tree', 'A person', 'A ghost'],
        answer: 'A clock',
      },
      {
        question: 'What gets wet while drying?',
        options: ['A towel', 'A sponge', 'A shirt', 'A river'],
        answer: 'A towel',
      },
      {
        question: 'What has many keys but can’t open a single lock?',
        options: ['A piano', 'A keyboard', 'A ring', 'A safe'],
        answer: 'A piano',
      },
    ],
  },
  {
    id: 'generalKnowledge',
    name: 'General Knowledge',
    emoji: '📚',
    questions: [
      {
        question: 'What is the capital city of France?',
        options: ['Paris', 'Rome', 'Berlin', 'Madrid'],
        answer: 'Paris',
      },
      {
        question: 'Which animal is known as the "King of the Jungle"?',
        options: ['Lion', 'Tiger', 'Elephant', 'Bear'],
        answer: 'Lion',
      },
      {
        question: 'How many continents are there in the world?',
        options: ['7', '5', '6', '8'],
        answer: '7',
      },
      {
        question: 'What is the longest river in the world?',
        options: ['Nile River', 'Amazon River', 'Yangtze River', 'Mississippi River'],
        answer: 'Nile River',
      },
      {
        question: 'Which country is famous for the Great Wall?',
        options: ['China', 'India', 'Japan', 'Egypt'],
        answer: 'China',
      },
      {
        question: 'What is the largest ocean on Earth?',
        options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        answer: 'Pacific Ocean',
      },
      {
        question: 'What is the highest mountain in the world?',
        options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
        answer: 'Mount Everest',
      },
      {
        question: 'Which of these is NOT a primary color?',
        options: ['Green', 'Red', 'Blue', 'Yellow'],
        answer: 'Green',
      },
      {
        question: 'What is the common name for an uncharged particle found in the nucleus of an atom?',
        options: ['Neutron', 'Proton', 'Electron', 'Photon'],
        answer: 'Neutron',
      },
      {
        question: 'In which city would you find the Colosseum?',
        options: ['Rome', 'Athens', 'London', 'Cairo'],
        answer: 'Rome',
      },
    ],
  },
  {
    id: 'history',
    name: 'History Highlights',
    emoji: '⏳',
    questions: [
      {
        question: 'Who was the first president of the United States?',
        options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
        answer: 'George Washington',
      },
      {
        question: 'Which ancient civilization built the pyramids?',
        options: ['Egyptians', 'Romans', 'Greeks', 'Mayans'],
        answer: 'Egyptians',
      },
      {
        question: 'What year did the Titanic sink?',
        options: ['1912', '1905', '1920', '1918'],
        answer: '1912',
      },
      {
        question: 'Who discovered America in 1492?',
        options: ['Christopher Columbus', 'Ferdinand Magellan', 'Marco Polo', 'Vasco da Gama'],
        answer: 'Christopher Columbus',
      },
      {
        question: 'Which war was fought between the North and South regions of the United States?',
        options: ['Civil War', 'World War I', 'Revolutionary War', 'Cold War'],
        answer: 'Civil War',
      },
      {
        question: 'What was the primary weapon of medieval knights?',
        options: ['Sword', 'Bow and arrow', 'Spear', 'Axe'],
        answer: 'Sword',
      },
      {
        question: 'Who was a famous queen of ancient Egypt, known for her beauty and power?',
        options: ['Cleopatra', 'Nefertiti', 'Hatshepsut', 'Ankhesenamun'],
        answer: 'Cleopatra',
      },
      {
        question: 'Which continent is home to the Great Wall of China?',
        options: ['Asia', 'Europe', 'Africa', 'North America'],
        answer: 'Asia',
      },
      {
        question: 'Who invented the light bulb?',
        options: ['Thomas Edison', 'Alexander Graham Bell', 'Isaac Newton', 'Marie Curie'],
        answer: 'Thomas Edison',
      },
      {
        question: 'What was the name of the first man on the moon?',
        options: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'Michael Collins'],
        answer: 'Neil Armstrong',
      },
    ],
  },
];
