const ducks = [{
    color: 'blue',
    isRubber: true,
    gender: 'female',
    IsMigrator: false,
    socialStatus: 'ready to mingle',
    diet: 'vegan',
    age: 47,
    featherNum: Object,
    name: 'Regina',
    imageUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/885/9633/Navy-Blue-Rubber-Duck-Adline-3__81336.1568313092.jpg?c=2&imbypass=on',
  },

  {
    color: 'green',
    isRubber: false,
    gender: 'female',
    IsMigrator: false,
    socialStatus: 'ready to mingle',
    diet: 'vegan',
    age: 47,
    featherNum: Object,
    name: 'Reginae',
    imageUrl: 'https://www.amsterdamduckstore.com/wp-content/uploads/2019/12/Green-rubber-duck-front-Amsterdam-Duck-Store.jpg'

  },

  {
    color: 'orange',
    isRubber: false,
    gender: 'female',
    IsMigrator: false,
    socialStatus: 'ready to mingle',
    diet: 'vegan',
    age: 47,
    featherNum: Object,
    name: 'Roberta',
    imageUrl: 'http://www.duckshop.com/shop_cfg/rubberducks/Badeente5669.JPG',
  },
  {
    color: 'blue',
    isRubber: true,
    gender: 'male',
    IsMigrator: false,
    socialStatus: 'ready to mingle',
    diet: 'vegan',
    age: 47,
    featherNum: Object,
    name: 'Regina',
    imageUrl: 'https://www.wkar.org/sites/wkar/files/styles/medium/public/201812/blue_rubber_duck.jpg'
  },
  {
    color: 'green',
    isRubber: true,
    gender: 'male',
    IsMigrator: false,
    socialStatus: 'ready to mingle',
    diet: 'vegan',
    age: 47,
    featherNum: Object,
    name: 'Rex',
    imageUrl: 'https://www.amsterdamduckstore.com/wp-content/uploads/2019/12/Green-rubber-duck-slant-left-Amsterdam-Duck-Store.jpg'
  },


  {
    color: 'orange',
    isRubber: true,
    gender: 'male',
    IsMigrator: false,
    socialStatus: 'ready to mingle',
    diet: 'vegan',
    age: 47,
    featherNum: Object,
    name: 'Robert',
    imageUrl: 'https://www.imprintitems.com/userfiles/files/asi-media/5651672.jpg'
  },
  {
    color: 'blue',
    isRubber: true,
    gender: 'male',
    IsMigrator: false,
    socialStatus: 'ready to mingle',
    diet: 'vegan',
    age: 47,
    featherNum: Object,
    name: 'Ralph',
    imageUrl: 'https://www.wkar.org/sites/wkar/files/styles/medium/public/201812/blue_rubber_duck.jpg',
  },

  {
    color: 'green',
    isRubber: false,
    gender: 'male',
    IsMigrator: false,
    socialStatus: 'ready to mingle',
    diet: 'vegan',
    age: 47,
    featherNum: Object,
    name: 'Rudyard',
    imageUrl: 'https://www.amsterdamduckstore.com/wp-content/uploads/2019/12/Green-rubber-duck-slant-left-Amsterdam-Duck-Store.jpg'
  }
];


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const duckPrinter = (quacks) => {
  let domString = '<div class="row">';

  for (let i = 0; i < quacks.length; i++) {
    const quack = quacks[i];

    domString += `
          <div class="card-seperation col-md-6 col-lg-4">
            <div class="card duck">
              <img src="${quack.imageUrl}" class="card-img-top rounded mx-auto d-block">
              <div class="card-body">
                <h5 class="card-title">${quack.name}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">>Age: ${quack.age}</li>
                <li class="list-group-item">${quack.gender} </li>
                <li class="list-group-item">${quack.diet}</li>
                <li class="list-group-item">${quack.socialStatus}</li>
                <li class="list-group-item">${quack.IsMigrator}</li>
              </ul>  
            </div>
          </div>
        </div>
      `;
  }

  domString += '</div>';

  printToDom('duck-cards', domString);
};

const filterDucks = (event) => {
  const buttonId = event.target.id;

  if (buttonId === 'all') {
    duckPrinter();
    return;
  }

  const key = event.target.attributes['data-filter'].value;
  const lilDucks = [];

  for (let i = 0; i < ducks.length; i++) {
    const quack = ducks[i];
    if (buttonId === 'rubber' && !quack.isRubber) {
      lilDucks.push(quack);
      continue;
    }

    if(quack[key] === buttonId) {
      lilDucks.push(quack);
    }
  }
  duckPrinter(lilDucks);
};

const clickEvents = () => {
  document.querySelector('#small').addEventListener('click', filterDucks);
  document.querySelector('#medium').addEventListener('click', filterDucks);
  document.querySelector('#large').addEventListener('click', filterDucks);
  document.querySelector('#male').addEventListener('click', filterDucks);
  document.querySelector('#female').addEventListener('click', filterDucks);
  document.querySelector('#rubber').addEventListener('click', filterDucks);
  document.querySelector('#all').addEventListener('click', filterDucks);
};


const init = () => {
  duckPrinter(ducks);
  clickEvents();
};


init();
