import Quill from '@lxr/quill';
import emojiMap from "./emoji-map";

const Parchment = Quill.import('parchment');
class EmojiBlot extends Parchment.Embed {
  static create(value) {
    let node = super.create();
    if (typeof value === 'object') {
      EmojiBlot.buildSpan(value, node);
    } else if (typeof value === "string") {
      const valueObj = emojiMap[value];
      if (valueObj) {
        EmojiBlot.buildSpan(valueObj, node);
      }
    }
    node.setAttribute('contenteditable', false);

    return node;
  }

  static value(node) {
    return node.dataset.name;
  }

  static buildSpan(value, node) {
    node.setAttribute('data-name', value.name);
    let emojiSpan = document.createElement('span');
    // unicode can be '1f1f5-1f1ea',see emoji-list.js.
    if (value.unicode) {
      emojiSpan.classList.add(this.emojiClass);
      emojiSpan.classList.add(this.emojiPrefix + value.name);
      emojiSpan.innerText = String.fromCodePoint(...EmojiBlot.parseUnicode(value.unicode));
    } else if (value.html) {
      emojiSpan.classList.add(this.emojiHtmlClass);
      emojiSpan.innerHTML = value.html;
    }
    node.appendChild(emojiSpan);
  }
  static parseUnicode(string) {
    return string.split('-').map(str => parseInt(str, 16));
  }
}

EmojiBlot.blotName = 'emoji';
EmojiBlot.className = 'ql-emojiblot';
EmojiBlot.tagName = 'span';
EmojiBlot.emojiClass = 'ap';
EmojiBlot.emojiPrefix = 'ap-';
EmojiBlot.emojiHtmlClass = 'ap-html';

export default EmojiBlot;