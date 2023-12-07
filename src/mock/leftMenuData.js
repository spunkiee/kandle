import affiliate from "../assets/affiliate.png";
import badges from "../assets/badges.png";
import blog from "../assets/blog.png";
import explore from "../assets/explore.png";
import favorites from "../assets/favorites.png";
import games from "../assets/games.png";
import kandlepedia from "../assets/kandlepedia.png";
import language from "../assets/language.png";
import portfolio from "../assets/portfolio.png";
import promotions from "../assets/promotions.png";
import rewards from "../assets/rewards.png";
import support from "../assets/support.png";
import userGuides from "../assets/user-guides.png";
import winners from "../assets/winners.png";

const topMenuData = [
  [
    {
      id: 1,
      name: "Explore",
      activeImage: null,
      inactiveImage: explore,
    },
    {
      id: 2,
      name: "Favorites",
      activeImage: null,
      inactiveImage: favorites,
    },
  ],
  [
    {
      id: 3,
      name: "Games",
      activeImage: games,
      inactiveImage: null,
    },
  ],
  [
    {
      id: 14,
      name: "Portfolio",
      activeImage: null,
      inactiveImage: portfolio,
    },
  ],
  [
    {
      id: 4,
      name: "Rewards",
      activeImage: null,
      inactiveImage: rewards,
    },
  ],
  [
    {
      id: 5,
      name: "Winners",
      activeImage: null,
      inactiveImage: winners,
    },
    {
      id: 6,
      name: "Badges",
      activeImage: null,
      inactiveImage: badges,
    },
    {
      id: 7,
      name: "Promotion",
      activeImage: null,
      inactiveImage: promotions,
    },
  ],
  [
    {
      id: 8,
      name: "Affiliate",
      activeImage: null,
      inactiveImage: affiliate,
    },
    {
      id: 9,
      name: "Kandlepedia",
      activeImage: null,
      inactiveImage: kandlepedia,
    },
    {
      id: 10,
      name: "User Guides",
      activeImage: null,
      inactiveImage: userGuides,
    },
    {
      id: 11,
      name: "Blog",
      activeImage: null,
      inactiveImage: blog,
    },
  ],
];

const bottomMenuData = [
  [
    {
      id: 12,
      name: "Live Support",
      activeImage: null,
      inactiveImage: support,
    },
  ],
  [
    {
      id: 13,
      name: "Language: English",
      activeImage: null,
      inactiveImage: language,
    },
  ],
];

export { topMenuData, bottomMenuData };
