// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘

window.onload = displayClock();
// Clock function
function displayClock() {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dayNames = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];

  // Get clock elements
  var d = new Date();
  var mm = monthNames[d.getMonth()];
  var dd = d.getDate();
  var dayname = dayNames[d.getDay()] + ',';
  var min = (mins = ('0' + d.getMinutes()).slice(-2));
  var hh = d.getHours();
  var ampm = '';

  // Hour format
  if (CONFIG.twelveHourFormat) {
    ampm = hh >= 12 ? ' pm' : ' am';
    hh = hh % 12;
    hh = hh ? hh : 12;
  }

  // Display clock elements
  document.getElementById('hour').innerText = hh;
  document.getElementById('separator').innerHTML = ' : ';
  document.getElementById('minutes').innerText = min + ampm;

  document.getElementById('month').innerText = mm;
  document.getElementById('day-name').innerText = dayname;
  document.getElementById('day').innerText = dd;
  document.getElementById('suffix').innerText = ["st","nd","rd"][((dd+90)%100-10)%10-1]||"th";

  setTimeout(displayClock, 1000);
}
