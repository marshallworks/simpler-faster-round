const STATE = {
  data: JSON.parse(document.getElementById('pokemon-data').textContent),
  left: {
    id: 0,
    name: document.getElementById('name-left'),
    img: document.getElementById('img-left'),
    vote: document.getElementById('vote-left'),
  },
  right: {
    id: 0,
    name: document.getElementById('name-right'),
    img: document.getElementById('img-right'),
    vote: document.getElementById('vote-right'),
  },
};

function vote(state, id) {
  console.log(id);
  if (id === 0) console.log('init');
  const leftId = Math.floor(Math.random() * state.data.length) + 1;
  const rightId = Math.floor(Math.random() * state.data.length) + 1;

  const left = state.data[leftId - 1];
  const right = state.data[rightId - 1];

  state.left.id = leftId;
  state.right.id = rightId;
  state.left.name.textContent = left[0];
  state.right.name.textContent = right[0];
  state.left.img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${leftId}.png`;
  state.right.img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rightId}.png`;
}

STATE.left.vote.addEventListener('click', () => {
  vote(STATE, STATE.left.id);
});
STATE.right.vote.addEventListener('click', () => {
  vote(STATE, STATE.right.id);
});
STATE.left.img.addEventListener('click', () => {
  vote(STATE, STATE.left.id);
});
STATE.right.img.addEventListener('click', () => {
  vote(STATE, STATE.right.id);
});

vote(STATE, 0);

