// ALL 23 lessons definition, as hardcoded list
const lessons = [
  // BEGINNER
  { id: 1, level: 'beginner', name: 'Home Row Left Hand',    keys: ['a','s','d','f'], practiceText: 'asdf fads add fads sad', targetWpm: 20 },
  { id: 2, level: 'beginner', name: 'Home Row Right Hand',   keys: ['j','k','l',';'], practiceText: 'jkl; jll jkl lkj kjl', targetWpm: 20 },
  { id: 3, level: 'beginner', name: 'Home Row Both Hands',   keys: ['a','s','d','f','j','k','l',';'], practiceText: 'as all fall jak ask', targetWpm: 22 },
  { id: 4, level: 'beginner', name: 'Top Row Left',          keys: ['q','w','e','r','t'], practiceText: 'we two were there wet', targetWpm: 22 },
  { id: 5, level: 'beginner', name: 'Top Row Right',         keys: ['y','u','i','o','p'], practiceText: 'you your up out pour', targetWpm: 22 },
  { id: 6, level: 'beginner', name: 'Full Top Row',          keys: ['q','w','e','r','t','y','u','i','o','p'], practiceText: 'quite proper writer poetry', targetWpm: 24 },
  { id: 7, level: 'beginner', name: 'Bottom Row Left',       keys: ['z','x','c','v'], practiceText: 'cave crave exact vex', targetWpm: 24 },
  { id: 8, level: 'beginner', name: 'Bottom Row Right',      keys: ['b','n','m'], practiceText: 'name nine many men number', targetWpm: 24 },
  { id: 9, level: 'beginner', name: 'Full Bottom Row',       keys: ['z','x','c','v','b','n','m'], practiceText: 'combine minimum maximum', targetWpm: 26 },
  { id: 10, level: 'beginner', name: 'Full Alphabet',        keys: [...'abcdefghijklmnopqrstuvwxyz'], practiceText: 'the quick brown fox jumps', targetWpm: 26 },
  // INTERMEDIATE
  { id: 11, level: 'intermediate', name: 'Capital Letters & Shift', keys: [], practiceText: 'Hello World My Name Is', targetWpm: 28 },
  { id: 12, level: 'intermediate', name: 'Numbers Row',    keys: [...'1234567890'], practiceText: '12 cats 34 dogs born 1990', targetWpm: 28 },
  { id: 13, level: 'intermediate', name: 'Common Punctuation', keys: ['.',',','!','?'], practiceText: 'Hello, world! How are you?', targetWpm: 28 },
  { id: 14, level: 'intermediate', name: 'Symbols', keys: ['@','#','$','%','&'], practiceText: 'email@site.com #tag $100', targetWpm: 28 },
  { id: 15, level: 'intermediate', name: 'Speed Drill: Common Words', keys: [], practiceText: '', targetWpm: 32 },
  { id: 16, level: 'intermediate', name: 'Speed Drill: Short Sentences', keys: [], practiceText: '', targetWpm: 32 },
  { id: 17, level: 'intermediate', name: 'Problem Keys Review', keys: ['q','z','x','p',';'], practiceText: '', targetWpm: 26 },
  // ADVANCED
  { id: 18, level: 'advanced', name: 'Paragraphs', keys: [], practiceText: '', targetWpm: 32 },
  { id: 19, level: 'advanced', name: 'Numbers + Words Mixed', keys: [], practiceText: 'Call 555-1234 or visit Room 42', targetWpm: 34 },
  { id: 20, level: 'advanced', name: 'Code Typing', keys: [], practiceText: 'function hello() { return 42; }', targetWpm: 34 },
  { id: 21, level: 'advanced', name: 'Speed Challenge', keys: [], practiceText: '', targetWpm: 40 },
  { id: 22, level: 'advanced', name: 'Accuracy Challenge', keys: [], practiceText: '', targetWpm: 34 },
  { id: 23, level: 'advanced', name: 'Master Test', keys: [], practiceText: '', targetWpm: 38 }
];

export default lessons;
