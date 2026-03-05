export const getCategoryDisplayName = (key) => {
  const categoryNames = {
    'greetings_basics': 'Greetings & Basics',
    'family': 'Family',
    'numbers': 'Numbers',
    'colors': 'Colors',
    'food_drink': 'Food & Drink',
    'time_dates': 'Time & Dates',
    'weather': 'Weather',
    'places': 'Places',
    'body_parts': 'Body Parts',
    'transportation': 'Transportation',
    'work_office': 'Work & Office',
    'education': 'Education',
    'hobbies_activities': 'Hobbies & Activities',
    'shopping': 'Shopping',
    'absolute_basics': 'Absolute Basics',
    'common_phrases': 'Common Phrases',
    'travel_transport': 'Travel & Transport',
    'family_relationships': 'Family & Relationships',
    'weather_nature': 'Weather & Nature',
    'body_health': 'Body & Health',
    'home_furniture': 'Home & Furniture',
    'clothing_accessories': 'Clothing & Accessories',
    'hobbies_sports': 'Hobbies & Sports',
    'work_education': 'Work & Education',
    'emotions_feelings': 'Emotions & Feelings',
    'technology_media': 'Technology & Media'
  };

  return categoryNames[key] || key?.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};