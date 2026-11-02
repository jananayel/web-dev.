function addName() {
  const input = document.getElementById('name');
  const name = input.value.trim();

  if (!name) return;

  document.getElementById('title').textContent = `Hello, ${name}!`;

  const li = document.createElement('li');
  li.textContent = name;
  document.getElementById('list').appendChild(li);

  input.value = '';
}

function removeName(e) {
  if (e.target.nodeName === 'LI') {
    const name = e.target.textContent;
    document.getElementById('title').textContent = `Goodbye, ${name}! see you later.`;
    e.target.remove();
  }
}

document.getElementById('greet').addEventListener('click', addName);
document.getElementById('list').addEventListener('click', removeName);















/*
const TOTAL_SEATS = 20;
let seatsLeft = TOTAL_SEATS;
let totalGuests = 0;

// update numbers onthe top 
function updateStats() {
    const count = document.getElementById('list').children.length;

    document.getElementById('count').textContent = count;
    document.getElementById('guests').textContent = totalGuests;
    document.getElementById('seats').textContent = seatsLeft;

    document.getElementById('seats').className = seatsLeft <= 5 ? 'low' : '';

    // show "no reservations" and hide "clear all" when lists empty
    document.getElementById('empty').style.display = count === 0 ? 'block' : 'none';
    document.getElementById('clear').style.display = count === 0 ? 'none' : 'inline-block';
}

function showError(message) {
    document.getElementById('error').textContent = message;
}

// add a reservation
function addReservation() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    const people = Number(document.getElementById('people').value);
    const time = document.getElementById('time').value;

    if (!name) {
        showError('Please enter a name.');
        return;
    }
    if (!Number.isInteger(people) || people < 1 || people > 8) {
        showError('Guests must be between 1 and 8.');
        return;
    }
    if (!time) {
        showError('Please pick a time.');
        return;
    }
    if (people > seatsLeft) {
        showError(`Sorry, only ${seatsLeft} seats left.`);
        return;
    }

    showError('');

    // build the reservation item
    const li = document.createElement('li');
    li.dataset.people = people;

    const info = document.createElement('div');
    const strong = document.createElement('strong');
    strong.textContent = name;
    const details = document.createElement('span');
    details.textContent = `${people} ${people === 1 ? 'guest' : 'guests'} at ${time}`;
    info.appendChild(strong);
    info.appendChild(details);

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = '✕';
    cancelBtn.className = 'cancel';

    li.appendChild(info);
    li.appendChild(cancelBtn);
    document.getElementById('list').appendChild(li);

    // update totals and title
    seatsLeft -= people;
    totalGuests += people;
    document.getElementById('title').textContent = `Table booked for ${name}!`;
    updateStats();

    // reset the form
    nameInput.value = '';
    document.getElementById('people').value = 2;
    document.getElementById('time').value = '';
    nameInput.focus();
}

// cancel a reservation when its ✕ is clicked
function cancelReservation(e) {
    if (e.target.classList.contains('cancel')) {
        const li = e.target.parentElement;
        const name = li.querySelector('strong').textContent;
        const people = Number(li.dataset.people);

        seatsLeft += people;
        totalGuests -= people;
        li.remove();

        document.getElementById('title').textContent = `Reservation for ${name} cancelled.`;
        updateStats();
    }
}

// remove everything
function clearAll() {
    if (!confirm('Cancel all reservations?')) return;

    document.getElementById('list').innerHTML = '';
    seatsLeft = TOTAL_SEATS;
    totalGuests = 0;
    document.getElementById('title').textContent = 'Book a Table';
    showError('');
    updateStats();
}

// event listeners
document.getElementById('reserve').addEventListener('click', addReservation);
document.getElementById('list').addEventListener('click', cancelReservation);
document.getElementById('clear').addEventListener('click', clearAll);

// pressing Enter in the name box also reserves
document.getElementById('name').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') addReservation();
});

updateStats();


*/