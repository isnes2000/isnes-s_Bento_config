// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘

// Print the first List
const printFirstList = () => {
  let icon = `<i class="list__head la la-${CONFIG.firstListIcon} la-3x"></i>`;
  const position = 'beforeend';
  list_1.insertAdjacentHTML(position, icon);
  for (const link of CONFIG.lists.firstList) {
    // List item
    let item = `
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${link.link}"
        class="list__link"
        >${link.name}</a
        >
    `;
    const position = 'beforeend';
    list_1.insertAdjacentHTML(position, item);
  }
};

// Print the second List
const printSecondList = () => {
  let icon = `<i class="list__head la la-${CONFIG.secondListIcon} la-3x"></i>`;
  const position = 'beforeend';
  list_2.insertAdjacentHTML(position, icon);
  for (const link of CONFIG.lists.secondList) {
    // List item
    let item = `
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${link.link}"
          class="list__link"
          >${link.name}</a
          >
      `;
    const position = 'beforeend';
    list_2.insertAdjacentHTML(position, item);
  }
};

printFirstList();
printSecondList();
