import { Question } from "@/lib/types";

export const questions: readonly Question[] = [
  // Logic (1–10)
  {
    id: 1,
    text: "All cats are mammals. All mammals are warm-blooded. Which statement must be true?",
    options: [
      "All warm-blooded animals are cats.",
      "All cats are warm-blooded.",
      "Some mammals are not cats.",
      "No cats are warm-blooded.",
    ],
    correctAnswerIndex: 1,
    category: "logic",
    explanation:
      "If all cats are mammals and all mammals are warm-blooded, then all cats must also be warm-blooded.",
  },
  {
    id: 2,
    text: "If it rains, the ground gets wet. The ground is wet. What can we validly conclude?",
    options: [
      "It rained.",
      "It might have rained, but we cannot be certain.",
      "The ground is always wet.",
      "It did not rain.",
    ],
    correctAnswerIndex: 1,
    category: "logic",
    explanation:
      "A wet ground could have other causes (a sprinkler, someone spilled water). This is the logical fallacy of affirming the consequent.",
  },
  {
    id: 3,
    text: "No reptiles are birds. All snakes are reptiles. Which statement follows?",
    options: [
      "Some snakes are birds.",
      "No snakes are birds.",
      "All birds are reptiles.",
      "Some reptiles are birds.",
    ],
    correctAnswerIndex: 1,
    category: "logic",
    explanation:
      "Since all snakes are reptiles and no reptiles are birds, no snakes can be birds.",
  },
  {
    id: 4,
    text: "HAND is to GLOVE as FOOT is to ___?",
    options: ["Sock", "Shoe", "Toe", "Leg"],
    correctAnswerIndex: 0,
    category: "logic",
    explanation:
      "A glove is worn on a hand; a sock is worn on a foot. The closest functional analogy is sock.",
  },
  {
    id: 5,
    text: "Doctor is to Hospital as Teacher is to ___?",
    options: ["Classroom", "Student", "Book", "School"],
    correctAnswerIndex: 3,
    category: "logic",
    explanation:
      "A doctor typically works in a hospital; a teacher typically works in a school.",
  },
  {
    id: 6,
    text: "Tom is taller than Jerry. Jerry is taller than Mike. Who is the shortest?",
    options: ["Tom", "Jerry", "Mike", "Cannot be determined"],
    correctAnswerIndex: 2,
    category: "logic",
    explanation:
      "The order from tallest to shortest is Tom > Jerry > Mike, so Mike is the shortest.",
  },
  {
    id: 7,
    text: "What is the logical negation of 'All students passed the exam'?",
    options: [
      "No students passed the exam.",
      "Some students did not pass the exam.",
      "All students failed the exam.",
      "Most students passed the exam.",
    ],
    correctAnswerIndex: 1,
    category: "logic",
    explanation:
      "Negating 'all' means at least one did not; 'some students did not pass' is the correct negation.",
  },
  {
    id: 8,
    text: "If A is greater than B, and B is greater than C, then:",
    options: [
      "A is less than C.",
      "A is greater than C.",
      "A is equal to C.",
      "Nothing can be determined.",
    ],
    correctAnswerIndex: 1,
    category: "logic",
    explanation: "Transitive relation: A > B and B > C means A > C.",
  },
  {
    id: 9,
    text: "All meetings are boring. This event is not boring. Therefore:",
    options: [
      "This event is a meeting.",
      "This event is not a meeting.",
      "Some meetings are not boring.",
      "All events are boring.",
    ],
    correctAnswerIndex: 1,
    category: "logic",
    explanation:
      "If every meeting is boring, a non-boring event cannot be a meeting.",
  },
  {
    id: 10,
    text: "Which number does not belong: 2, 3, 5, 9, 11?",
    options: ["2", "3", "9", "11"],
    correctAnswerIndex: 2,
    category: "logic",
    explanation: "2, 3, 5, and 11 are prime numbers. 9 is composite (3 × 3).",
  },

  // Pattern recognition (11–20)
  {
    id: 11,
    text: "What comes next in the sequence: 2, 4, 8, 16, 32, ___?",
    options: ["48", "56", "64", "66"],
    correctAnswerIndex: 2,
    category: "pattern",
    explanation: "Each term is multiplied by 2. 32 × 2 = 64.",
  },
  {
    id: 12,
    text: "What comes next in the sequence: 1, 1, 2, 3, 5, 8, ___?",
    options: ["11", "12", "13", "15"],
    correctAnswerIndex: 2,
    category: "pattern",
    explanation:
      "This is the Fibonacci sequence: each term is the sum of the two previous terms. 5 + 8 = 13.",
  },
  {
    id: 13,
    text: "What comes next in the sequence: 3, 6, 11, 18, 27, ___?",
    options: ["34", "36", "38", "40"],
    correctAnswerIndex: 2,
    category: "pattern",
    explanation:
      "The pattern is n² + 2: 1²+2=3, 2²+2=6, 3²+2=11, 4²+2=18, 5²+2=27, 6²+2=38.",
  },
  {
    id: 14,
    text: "What comes next in the sequence: 1, 4, 9, 16, 25, ___?",
    options: ["30", "36", "42", "49"],
    correctAnswerIndex: 1,
    category: "pattern",
    explanation:
      "These are perfect squares: 1², 2², 3², 4², 5², so the next is 6² = 36.",
  },
  {
    id: 15,
    text: "What letter comes next in the pattern: A, C, E, G, ___?",
    options: ["H", "I", "J", "K"],
    correctAnswerIndex: 1,
    category: "pattern",
    explanation:
      "The pattern skips every other letter: A, (B), C, (D), E, (F), G, (H), I.",
  },
  {
    id: 16,
    text: "A pattern of shapes repeats: circle, square, triangle, circle, square, ___. What comes next?",
    options: ["Circle", "Square", "Triangle", "Rectangle"],
    correctAnswerIndex: 2,
    category: "pattern",
    explanation:
      "The repeating cycle is circle, square, triangle. After circle and square comes triangle.",
  },
  {
    id: 17,
    text: "What comes next in the sequence: 1, 8, 27, 64, ___?",
    options: ["100", "115", "125", "216"],
    correctAnswerIndex: 2,
    category: "pattern",
    explanation:
      "These are perfect cubes: 1³, 2³, 3³, 4³, so the next is 5³ = 125.",
  },
  {
    id: 18,
    text: "What comes next in the sequence: 2, 3, 5, 7, 11, ___?",
    options: ["12", "13", "14", "15"],
    correctAnswerIndex: 1,
    category: "pattern",
    explanation: "These are prime numbers in order. The next prime after 11 is 13.",
  },
  {
    id: 19,
    text: "What comes next in the sequence: 20, 18, 16, 14, ___?",
    options: ["10", "12", "13", "15"],
    correctAnswerIndex: 1,
    category: "pattern",
    explanation: "Each term decreases by 2. 14 − 2 = 12.",
  },
  {
    id: 20,
    text: "What comes next in the sequence: 1, 2, 4, 7, 11, ___?",
    options: ["14", "15", "16", "17"],
    correctAnswerIndex: 2,
    category: "pattern",
    explanation:
      "The differences increase by 1 each time: +1, +2, +3, +4, so the next difference is +5. 11 + 5 = 16.",
  },

  // Verbal / spatial (21–30)
  {
    id: 21,
    text: "Which word is most nearly opposite in meaning to ABUNDANT?",
    options: ["Plentiful", "Scarce", "Generous", "Wealthy"],
    correctAnswerIndex: 1,
    category: "verbal-spatial",
    explanation:
      "Abundant means plentiful; scarce means insufficient in quantity.",
  },
  {
    id: 22,
    text: "Which word is most nearly similar in meaning to EPHEMERAL?",
    options: ["Eternal", "Fleeting", "Solid", "Ancient"],
    correctAnswerIndex: 1,
    category: "verbal-spatial",
    explanation:
      "Ephemeral means lasting for a very short time, like fleeting.",
  },
  {
    id: 23,
    text: "BOOK is to READ as FOOD is to ___?",
    options: ["Cook", "Eat", "Grow", "Buy"],
    correctAnswerIndex: 1,
    category: "verbal-spatial",
    explanation: "A book is read; food is eaten.",
  },
  {
    id: 24,
    text: "Which 3D shape has no vertices (corners)?",
    options: ["Cube", "Pyramid", "Sphere", "Cylinder"],
    correctAnswerIndex: 2,
    category: "verbal-spatial",
    explanation:
      "A sphere is a perfectly round shape with no corners, edges, or vertices.",
  },
  {
    id: 25,
    text: "Which word does not belong with the others?",
    options: ["Apple", "Banana", "Carrot", "Orange"],
    correctAnswerIndex: 2,
    category: "verbal-spatial",
    explanation:
      "Apple, banana, and orange are fruits; carrot is a vegetable.",
  },
  {
    id: 26,
    text: "You are facing north. You turn 90° to your right, then turn 180°. Which direction are you facing now?",
    options: ["North", "East", "South", "West"],
    correctAnswerIndex: 3,
    category: "verbal-spatial",
    explanation:
      "North → 90° right = East. East → 180° = West. You end up facing west.",
  },
  {
    id: 27,
    text: "Which word is most nearly similar in meaning to BENEVOLENT?",
    options: ["Cruel", "Kind", "Selfish", "Angry"],
    correctAnswerIndex: 1,
    category: "verbal-spatial",
    explanation: "Benevolent means well-meaning and kindly.",
  },
  {
    id: 28,
    text: "PAINTER is to CANVAS as SCULPTOR is to ___?",
    options: ["Brush", "Marble", "Gallery", "Color"],
    correctAnswerIndex: 1,
    category: "verbal-spatial",
    explanation:
      "A painter works on a canvas; a sculptor works on materials such as marble.",
  },
  {
    id: 29,
    text: "How many faces does a cube have?",
    options: ["4", "6", "8", "12"],
    correctAnswerIndex: 1,
    category: "verbal-spatial",
    explanation: "A cube has 6 square faces.",
  },
  {
    id: 30,
    text: "Which word is most nearly opposite in meaning to RIGID?",
    options: ["Stiff", "Flexible", "Solid", "Firm"],
    correctAnswerIndex: 1,
    category: "verbal-spatial",
    explanation: "Rigid means unable to bend; flexible is its opposite.",
  },
];
