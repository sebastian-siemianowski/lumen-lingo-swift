export const getCategoryDisplayName = (key) => {
  const categoryNames = {
    'ser_estar': 'Ser vs Estar',
    'present_tense': 'Present Tense',
    'past_tense': 'Past Tense',
    'future_tense': 'Future Tense',
    'preterite': 'Preterite',
    'imperfect': 'Imperfect',
    'articles': 'Articles',
    'pronouns': 'Pronouns',
    'adjectives': 'Adjectives',
    'prepositions': 'Prepositions',
    'questions': 'Questions',
    'negation': 'Negation',
    'comparatives': 'Comparatives',
    'subjunctive': 'Subjunctive',
    'conditionals': 'Conditionals',
    'imperatives': 'Imperatives',
    'reflexive_verbs': 'Reflexive Verbs'
  };

  return categoryNames[key] || key?.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};