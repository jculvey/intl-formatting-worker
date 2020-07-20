const html = `<!doctype html>
<html>
  <head>
    <style>
      .localeTitle {
        font-weight: bold;
        width: 70px;
      }
    </style>
  </head>

  <div id="container">
    <h1>Formatting with Intl</h1>

    <h3>Formatting today's date via toLocaleDateString</h3>

    <table>
      <thead>
        <tr>
          <td><h4>Locale</h4></td>
          <td><h4>Formatted Date</h4></td>
        </tr>
      </thead>
      <tbody id="datesTable">
      </tbody>
    </table>

    <h3>Formatting the current time via toLocaleTimeString</h3>

    <table>
      <thead>
        <tr>
          <td><h4>Locale</h4></td>
          <td><h4>Formatted Time</h4></td>
        </tr>
      </thead>
      <tbody id="timesTable">
      </tbody>
    </table>

    <h3>Formatting a large number</h3>

    <table>
      <thead>
        <tr>
          <td><h4>Locale</h4></td>
          <td><h4>Formatted Numbers</h4></td>
        </tr>
      </thead>
      <tbody id="numbersTable">
      </tbody>
    </table>

  </div>
  <!-- ... -->
  <script>
    var locales = ['de-DE', 'en-US', 'en-GB', 'es-ES', 'es-CL', 'fr-FR', 'hi-IN', 'in-ID', 'ja-JP', 'ko-KR', 'pt-BR', 'pt-PT', 'ru-RU'];

    // Dates
    var localeDates = {};
    var now = new Date(2020, 2, 4);
    var datesTable = document.querySelector("#datesTable");

    for (var i = 0; i < locales.length; i++) {
      var locale = locales[i];
      localeDates[locale] = now.toLocaleDateString(locale);
    }

    for (var i = 0; i < locales.length; i++) {
      var locale = locales[i];
      var row = document.createElement('tr');

      var title = document.createElement('td');
      title.textContent = locale;
      title.setAttribute('class', 'localeTitle');
      row.appendChild(title);

      var value = document.createElement('td');
      value.textContent = localeDates[locale];
      row.appendChild(value);

      datesTable.appendChild(row);
    }

    // Times
    var localeTimes = {};
    var now = new Date();
    var timesTable = document.querySelector("#timesTable");

    for (var i = 0; i < locales.length; i++) {
      var locale = locales[i];
      localeTimes[locale] = now.toLocaleTimeString(locale);
    }

    for (var i = 0; i < locales.length; i++) {
      var locale = locales[i];
      var row = document.createElement('tr');

      var title = document.createElement('td');
      title.textContent = locale;
      title.setAttribute('class', 'localeTitle');
      row.appendChild(title);

      var value = document.createElement('td');
      value.textContent = localeTimes[locale];
      row.appendChild(value);

      timesTable.appendChild(row);
    }

    // Numbers
    var localeNumbers = {};
    var number = 300000.03
    var numbersTable = document.querySelector("#numbersTable");

    for (var i = 0; i < locales.length; i++) {
      var locale = locales[i];
      localeNumbers[locale] = number.toLocaleString(locale);
    }

    for (var i = 0; i < locales.length; i++) {
      var locale = locales[i];
      var row = document.createElement('tr');

      var title = document.createElement('td');
      title.textContent = locale;
      title.setAttribute('class', 'localeTitle');
      row.appendChild(title);

      var value = document.createElement('td');
      value.textContent = localeNumbers[locale];
      row.appendChild(value);

      numbersTable.appendChild(row);
    }
  </script>
</html>
`

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest() {
  return new Response(html, {
    headers: { 'content-type': 'text/html' },
  })
}
