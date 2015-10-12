
const DOM_VK_END = 35;
const DOM_VK_HOME = 36;
const DOM_VK_LEFT = 37;
const DOM_VK_UP = 38;
const DOM_VK_RIGHT = 39;
const DOM_VK_DOWN = 40;

module.exports = function isMovement(keyEvent) {
  switch (keyEvent.which) {
  case DOM_VK_END:
  case DOM_VK_HOME:
  case DOM_VK_DOWN:
  case DOM_VK_UP:
  case DOM_VK_RIGHT:
  case DOM_VK_LEFT:
    return true;
  default:
    return false;
  }
};
