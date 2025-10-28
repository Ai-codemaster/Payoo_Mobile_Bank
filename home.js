const transactionData = [];

// Reusable Function

// Get Input Value ParseInt()

function getInputValueNumber(id) {
  const inputValueNumber = parseInt(document.getElementById(id).value);
  return inputValueNumber;
}

// Get Input Value

function getInputValue(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}

// Get InnerText ParseInt()

function getInputText(id) {
  const inputValueText = parseInt(document.getElementById(id).innerText);
  return inputValueText;
}

// Section Show Reusable Function

const sections = [
  'addMoneySection',
  'cashOutSection',
  'transferMoneySection',
  'getBonusSection',
  'payBillSection',
  'transactionsSection',
];

function showSection(sectionId) {
  for (const id of sections) {
    const section = document.getElementById(id);
    if (id === sectionId) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }
}

// Section Button BG Color Change Reusable Function

const sectionBtn = [
  'addMoneyBtn',
  'cashOutBtn',
  'transferMoneyBtn',
  'getBonusBtn',
  'payBillBtn',
  'transactionsBtn',
];

function showColorBtn(btnId) {
  for (const id of sectionBtn) {
    const sectionButton = document.getElementById(id);
    if (id === btnId) {
      sectionButton.classList.add('border-blue-400', 'bg-blue-100');
      sectionButton.classList.remove('border-gray-300', 'hover:bg-green-100');
    } else {
      sectionButton.classList.remove('border-blue-400', 'bg-blue-100');
      sectionButton.classList.add('border-gray-300', 'hover:bg-green-100');
    }
  }
}

// Add Money Section Feature

document
  .getElementById('add-money-btn')
  .addEventListener('click', function (e) {
    e.preventDefault();
    const accountNumber = getInputValue('account-number');
    const amount = getInputValueNumber('add-amount');
    const pin = getInputValueNumber('add-pin');
    const availableBalance = getInputText('available-balance');

    if (accountNumber.length !== 11) {
      alert('Please Provide A Valid Number');
      return;
    }

    if (pin !== 1234) {
      alert('Please Provide A Valid Pin Number');
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    document.getElementById('available-balance').innerText =
      totalNewAvailableBalance;

    const data = {
      name: 'Add Money',
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);

    console.log(transactionData);
  });

// Cash Out Section Feature

document
  .getElementById('cashOut-money-btn')
  .addEventListener('click', function (e) {
    e.preventDefault();
    const agentNumber = getInputValue('agent-number');
    const withdrawAmount = getInputValueNumber('withdraw-amount');
    const withdrawPin = getInputValueNumber('withdraw-pin');
    const availableBalance = getInputText('available-balance');

    if (agentNumber.length !== 11) {
      alert('Please Provide A Valid Number');
      return;
    }

    if (withdrawPin !== 1234) {
      alert('Please Provide A Valid Pin Number');
      return;
    }

    if (withdrawAmount > availableBalance) {
      alert('Not Enough Balance');
      return;
    }

    const totalNewAvailableBalance = availableBalance - withdrawAmount;

    document.getElementById('available-balance').innerText =
      totalNewAvailableBalance;
  });

// Transfer Money Section Feature

document
  .getElementById('transfer-money-btn')
  .addEventListener('click', function (e) {
    e.preventDefault();
    const transferAccountNumber = getInputValue('transfer-account-number');
    const transferAmount = getInputValueNumber('transfer-amount');
    const transferPin = getInputValueNumber('transfer-pin');
    const availableBalance = getInputText('available-balance');

    if (transferAccountNumber.length !== 11) {
      alert('Please Provide A Valid Number');
      return;
    }

    if (transferPin !== 1234) {
      alert('Please Provide A Valid Pin Number');
      return;
    }

    if (transferAmount > availableBalance) {
      alert('Not Enough Balance');
      return;
    }

    const totalNewAvailableBalance = availableBalance - transferAmount;

    document.getElementById('available-balance').innerText =
      totalNewAvailableBalance;
  });

// Get Bonus Section Feature

document
  .getElementById('get-bonus-btn')
  .addEventListener('click', function (e) {
    e.preventDefault();
    const getCouponValue = getInputValue('getBonusCoupon');
    const availableBalance = getInputText('available-balance');

    const coupon1 = 'Ashraful@12';
    const coupon2 = 'Ashraful@13';
    const coupon3 = 'Ashraful@14';

    console.log(coupon1, coupon2, coupon3, getCouponValue);

    if (
      getCouponValue !== coupon1 &&
      getCouponValue !== coupon2 &&
      getCouponValue !== coupon3
    ) {
      alert('Your Coupon Code Is Invalid, Please Provide Valid Coupon Code');
    } else if (getCouponValue === coupon1) {
      document.getElementById('available-balance').innerText =
        availableBalance + 1000;
    } else if (getCouponValue === coupon2) {
      document.getElementById('available-balance').innerText =
        availableBalance + 2000;
    } else if (getCouponValue === coupon3) {
      document.getElementById('available-balance').innerText =
        availableBalance + 3000;
    }
  });

// Add Money Button Event Handler

document.getElementById('addMoneyBtn').addEventListener('click', function () {
  showSection('addMoneySection');
  showColorBtn('addMoneyBtn');
});

// Cash Out Button Event Handler

document.getElementById('cashOutBtn').addEventListener('click', function () {
  showSection('cashOutSection');
  showColorBtn('cashOutBtn');
});

// Transfer Money Button Event Handler

document
  .getElementById('transferMoneyBtn')
  .addEventListener('click', function () {
    showSection('transferMoneySection');
    showColorBtn('transferMoneyBtn');
  });

// Get Bonus Button Event Handler

document.getElementById('getBonusBtn').addEventListener('click', function () {
  showSection('getBonusSection');
  showColorBtn('getBonusBtn');
});

// Pay Bill Button Event Handler

document.getElementById('payBillBtn').addEventListener('click', function () {
  showSection('payBillSection');
  showColorBtn('payBillBtn');
});

// Transactions Button Event Handler

document
  .getElementById('transactionsBtn')
  .addEventListener('click', function () {
    showSection('transactionsSection');
    showColorBtn('transactionsBtn');

    const transactionContainer = document.getElementById(
      'transactionContainer'
    );
    transactionContainer.innerText = '';

    for (const data of transactionData) {
      const div = document.createElement('div');
      div.innerHTML = `
      <div
          class="flex items-center justify-between bg-white p-3 rounded-2xl border-1 border-gray-300 mt-2 mx-2"
        >
          <div class="flex items-center gap-3">
            <div class="p-3 bg-[#F4F5F7] rounded-full">
              <img src="./assets/wallet1.png" alt="" />
            </div>
            <div class="text-[#080808b3]">
              <h1 class="font-semibold">${data.name}</h1>
              <p class="text-sm font-mono">Today ${data.date}</p>
            </div>
          </div>
          <div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      `;

      transactionContainer.appendChild(div);
    }
  });

// Logout Button

document.getElementById('logOutButton').addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = './index.html';
});
