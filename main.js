const STATE = {
  data: JSON.parse(document.getElementById('pokemon-data').textContent),
  left: {
    id: 0,
    name: document.getElementById('name-left'),
    img: document.getElementById('img-left'),
    vote: document.getElementById('vote-left')
  },
  right: {
    id: 0,
    name: document.getElementById('name-right'),
    img: document.getElementById('img-right'),
    vote: document.getElementById('vote-right')
  },
  showResultsToggle: document.getElementById('show-hide-results'),
  resultsTarget: document.getElementById('results')
};

function vote(state, id) {
  state.resultsTarget.classList.add('hide');
  state.showResultsToggle.textContent = 'Show Results';
  if (id !== 0) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/vote', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechanged = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log('vote', id);
      }
    };
    xhr.send(`for=${id}&against=${id === state.left.id ? state.right.id : state.left.id}`);
  }
  const leftId = Math.floor(Math.random() * state.data.length) + 1;
  const rightId = Math.floor(Math.random() * state.data.length) + 1;
  const left = state.data[leftId - 1];
  const right = state.data[rightId - 1];
  state.left.id = leftId;
  state.right.id = rightId;
  state.left.name.textContent = left[0];
  state.right.name.textContent = right[0];
  state.left.img.alt = `A pixelated image of ${left[0]}.`;
  state.right.img.alt = `A pixelated image of ${right[0]}.`;
  state.left.img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${leftId}.png`;
  state.right.img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rightId}.png`;
}

STATE.left.vote.addEventListener('mousedown', () => {
  vote(STATE, STATE.left.id);
});
STATE.right.vote.addEventListener('mousedown', () => {
  vote(STATE, STATE.right.id);
});
STATE.left.img.addEventListener('mousedown', () => {
  vote(STATE, STATE.left.id);
});
STATE.right.img.addEventListener('mousedown', () => {
  vote(STATE, STATE.right.id);
});
document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowLeft': {
      vote(STATE, STATE.left.id);
    } break;
    case 'ArrowRight': {
      vote(STATE, STATE.right.id);
    } break;
  }
});
STATE.showResultsToggle.addEventListener('click', () => {
  const show = STATE.resultsTarget.classList.contains('hide');
  if (show) {
    STATE.showResultsToggle.textContent = 'Hide Results';
    STATE.resultsTarget.classList.remove('hide');
  } else {
    STATE.showResultsToggle.textContent = 'Show Results';
    STATE.resultsTarget.classList.add('hide');
  }
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/results', true);
  xhr.onload = () => {
    const target = STATE.resultsTarget;
    target.textContent = '';
    const data = JSON.parse(xhr.response);
    for (let i = 0; i < data.length; ++i) {
      const res = data[i];
      const poke = STATE.data[res[0] - 1];
      const total = res[2] + res[3];
      const forProportion = total > 0 ? (res[2] / total) : 0;
      const row = document.createElement('div');
      const place = document.createElement('span');
      const img = document.createElement('img');
      const name = document.createElement('span');
      const percent = document.createElement('span');
      row.className = 'row';
      place.textContent = `${i + 1}`;
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res[0]}.png`;
      img.alt = `A pixelated image of ${poke[0]}.`;
      name.textContent = poke[0];
      percent.textContent = `${(forProportion * 100).toFixed(2)}% of ${total} votes`;
      row.append(place, img, name, percent);
      target.append(row);
    }
  };
  xhr.send(null);
});

vote(STATE, 0);

