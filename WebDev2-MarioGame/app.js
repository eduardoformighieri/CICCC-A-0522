function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const init = () => {
  const avatar = document.getElementById('avatar');
  const coin = document.getElementById('coin');
  const score = document.getElementById('score');

  let totalScore = 0;
  score.innerText = `Score: ${totalScore}`;

  moveCoin();

  const acceptedMoves = {
    ArrowDown() {
      moveVertical(avatar, 50);
    },
    ArrowUp() {
      moveVertical(avatar, -50);
    },
    ArrowRight() {
      moveHorizontal(avatar, 50);
    },
    ArrowLeft() {
      moveHorizontal(avatar, -50);
    },
  };

  const moveAvatar = (event) => {
    const movement = acceptedMoves[event.key];
    if (movement) {
      movement();
    }
    if (isTouching(avatar, coin)) {
      totalScore++;
      score.innerText = `score: ${totalScore}`;
      moveCoin();
    }
  };

  window.onkeydown = moveAvatar;
};

const moveVertical = (element, amount) => {
  const currTop = extractPos(element.style.top);
  element.style.top = `${currTop + amount}px`;
};

const moveHorizontal = (element, amount) => {
  const currLeft = extractPos(element.style.left);
  element.style.left = `${currLeft + amount}px`;
};

const extractPos = (position) => {
  if (!position) return 100;
  return parseInt(position.slice(0, -2));
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

init();
