import {
  icon,
} from '@fortawesome/fontawesome-svg-core';
import {
  faAngry,
  faFrown,
  faGrin,
  faGrinBeam,
  faGrinBeamSweat,
  faGrinTears,
  faGrinTongue,
  faGrinTongueWink,
  faLaugh,
  faMeh,
  faSadCry,
  faSadTear,
  faSmile,
  faSurprise,
  faTired,
} from '@fortawesome/free-regular-svg-icons';

let emojiList = [
  /** people */
  {
    "name": "p-grin",
    "shortname": ":grin:",
    // code_decimal 和 html 只能存在一个 优先使用element
    // "code_decimal": "&#128175;",
    "html": icon(faGrin).html,
    "category": "p",
    "emoji_order": "1"
  },
  {
    "name": "p-grin-beam",
    "shortname": ":grinbeam:",
    "html": icon(faGrinBeam).html,
    "category": "p",
    "emoji_order": "2"
  },
  {
    "name": "p-grin-tears",
    "shortname": ":grintears:",
    "html": icon(faGrinTears).html,
    "category": "p",
    "emoji_order": "3"
  },
  {
    "name": "p-grin-beam-sweat",
    "shortname": ":grinbeamsweat:",
    "html": icon(faGrinBeamSweat).html,
    "category": "p",
    "emoji_order": "4"
  },
  {
    "name": "p-laugh",
    "shortname": ":laugh:",
    "html": icon(faLaugh).html,
    "category": "p",
    "emoji_order": "5"
  },
  {
    "name": "p-smile",
    "shortname": ":smile:",
    "html": icon(faSmile).html,
    "category": "p",
    "emoji_order": "6"
  },
  {
    "name": "p-meh",
    "shortname": ":meh:",
    "html": icon(faMeh).html,
    "category": "p",
    "emoji_order": "7"
  },
  {
    "name": "p-grin-tongue",
    "shortname": ":grintongue:",
    "html": icon(faGrinTongue).html,
    "category": "p",
    "emoji_order": "8"
  },
  {
    "name": "p-grin-tongue-wink",
    "shortname": ":grintonguewink:",
    "html": icon(faGrinTongueWink).html,
    "category": "p",
    "emoji_order": "9"
  },
  {
    "name": "p-frown",
    "shortname": ":frown:",
    "html": icon(faFrown).html,
    "category": "p",
    "emoji_order": "10"
  },
  {
    "name": "p-sad-tear",
    "shortname": ":sadtear:",
    "html": icon(faSadTear).html,
    "category": "p",
    "emoji_order": "11"
  },
  {
    "name": "p-sad-cry",
    "shortname": ":sadcry:",
    "html": icon(faSadCry).html,
    "category": "p",
    "emoji_order": "12"
  },
  {
    "name": "p-tired",
    "shortname": ":tired:",
    "html": icon(faTired).html,
    "category": "p",
    "emoji_order": "13"
  },
  {
    "name": "p-surprise",
    "shortname": ":surprise:",
    "html": icon(faSurprise).html,
    "category": "p",
    "emoji_order": "14"
  },
  {
    "name": "p-angry",
    "shortname": "angry",
    "html": icon(faAngry).html,
    "category": "p",
    "emoji_order": "15"
  },
];

console.log(emojiList);

export default emojiList;
