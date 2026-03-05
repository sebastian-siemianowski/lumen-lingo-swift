import Dashboard from './pages/Dashboard';
import FlashCards from './pages/FlashCards';
import FlashCardsCategories from './pages/FlashCardsCategories';
import Grammar from './pages/Grammar';
import GrammarCategories from './pages/GrammarCategories';
import Home from './pages/Home';
import Journey from './pages/Journey';
import LanguageSelection from './pages/LanguageSelection';
import Membership from './pages/Membership';
import Profile from './pages/Profile';
import WordBuilder from './pages/WordBuilder';
import WordBuilderCategories from './pages/WordBuilderCategories';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Dashboard": Dashboard,
    "FlashCards": FlashCards,
    "FlashCardsCategories": FlashCardsCategories,
    "Grammar": Grammar,
    "GrammarCategories": GrammarCategories,
    "Home": Home,
    "Journey": Journey,
    "LanguageSelection": LanguageSelection,
    "Membership": Membership,
    "Profile": Profile,
    "WordBuilder": WordBuilder,
    "WordBuilderCategories": WordBuilderCategories,
}

export const pagesConfig = {
    mainPage: "Dashboard",
    Pages: PAGES,
    Layout: __Layout,
};