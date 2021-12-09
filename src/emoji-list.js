import {
  icon,
} from '@fortawesome/fontawesome-svg-core';
import {faAngry} from '@fortawesome/free-regular-svg-icons/faAngry';
import {faFrown} from '@fortawesome/free-regular-svg-icons/faFrown';
import {faGrin} from '@fortawesome/free-regular-svg-icons/faGrin';
import {faGrinBeam} from '@fortawesome/free-regular-svg-icons/faGrinBeam';
import {faGrinBeamSweat} from '@fortawesome/free-regular-svg-icons/faGrinBeamSweat';
import {faGrinTears} from '@fortawesome/free-regular-svg-icons/faGrinTears';
import {faGrinTongue} from '@fortawesome/free-regular-svg-icons/faGrinTongue';
import {faGrinTongueWink} from '@fortawesome/free-regular-svg-icons/faGrinTongueWink';
import {faLaugh} from '@fortawesome/free-regular-svg-icons/faLaugh';
import {faMeh} from '@fortawesome/free-regular-svg-icons/faMeh';
import {faSadCry} from '@fortawesome/free-regular-svg-icons/faSadCry';
import {faSadTear} from '@fortawesome/free-regular-svg-icons/faSadTear';
import {faSmile} from '@fortawesome/free-regular-svg-icons/faSmile';
import {faSurprise} from '@fortawesome/free-regular-svg-icons/faSurprise';
import {faTired} from '@fortawesome/free-regular-svg-icons/faTired';

// code_decimal 和 html 只能存在一个 优先使用element
// "code_decimal": "&#128175;",
let emojiList = [
  /** people */
  {
    "name": "far-grin",
    "shortname": ":grin:",
    "html": icon(faGrin).html,
    "category": "p",
    "emoji_order": "1"
  },
  {
    "name": "far-grin-beam",
    "shortname": ":grinbeam:",
    "html": icon(faGrinBeam).html,
    "category": "p",
    "emoji_order": "2"
  },
  {
    "name": "far-grin-tears",
    "shortname": ":grintears:",
    "html": icon(faGrinTears).html,
    "category": "p",
    "emoji_order": "3"
  },
  {
    "name": "far-grin-beam-sweat",
    "shortname": ":grinbeamsweat:",
    "html": icon(faGrinBeamSweat).html,
    "category": "p",
    "emoji_order": "4"
  },
  {
    "name": "far-laugh",
    "shortname": ":laugh:",
    "html": icon(faLaugh).html,
    "category": "p",
    "emoji_order": "5"
  },
  {
    "name": "far-smile",
    "shortname": ":smile:",
    "html": icon(faSmile).html,
    "category": "p",
    "emoji_order": "6"
  },
  {
    "name": "far-meh",
    "shortname": ":meh:",
    "html": icon(faMeh).html,
    "category": "p",
    "emoji_order": "7"
  },
  {
    "name": "far-grin-tongue",
    "shortname": ":grintongue:",
    "html": icon(faGrinTongue).html,
    "category": "p",
    "emoji_order": "8"
  },
  {
    "name": "far-grin-tongue-wink",
    "shortname": ":grintonguewink:",
    "html": icon(faGrinTongueWink).html,
    "category": "p",
    "emoji_order": "9"
  },
  {
    "name": "far-frown",
    "shortname": ":frown:",
    "html": icon(faFrown).html,
    "category": "p",
    "emoji_order": "10"
  },
  {
    "name": "far-sad-tear",
    "shortname": ":sadtear:",
    "html": icon(faSadTear).html,
    "category": "p",
    "emoji_order": "11"
  },
  {
    "name": "far-sad-cry",
    "shortname": ":sadcry:",
    "html": icon(faSadCry).html,
    "category": "p",
    "emoji_order": "12"
  },
  {
    "name": "far-tired",
    "shortname": ":tired:",
    "html": icon(faTired).html,
    "category": "p",
    "emoji_order": "13"
  },
  {
    "name": "far-surprise",
    "shortname": ":surprise:",
    "html": icon(faSurprise).html,
    "category": "p",
    "emoji_order": "14"
  },
  {
    "name": "far-angry",
    "shortname": ":angry:",
    "html": icon(faAngry).html,
    "category": "p",
    "emoji_order": "15"
  },
];

export default emojiList;
