

export const renderPage = function() {
    // TODO: Copy your code from a04 to render the hero card

    //import playerData from "fantasystats.js"
    //alert("A")
    return `<section>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <a href="http://nfl.com">
      <img src="logo.png" width="100" height="100">
    </a>
    <div class="navbar-brand">

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" onclick="window.open('index.html','_self')">
        Home
      </a>

      <a class="navbar-item" onclick="window.open('players.html', '_self')">
        Players
      </a>

      <a class="navbar-item" onclick="window.open('teams.html', '_self')">
        Teams
      </a>

      <a class="navbar-item" onclick="window.open('myTeam.html', '_self')">
        My Team
      </a>
      <a class="navbar-item">
        <input class="input" type="text" placeholder="Search">
      </a>
    
      
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-info" onclick="window.open('signup.html', '_self')">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" onclick="window.open('signup.html', '_self')">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>`;


    //
};

/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadPage = function() {

     // Grab a jQuery reference to the root HTML element
     const $root = $('#root');
    
     
     $root.append(renderPage());
};


/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadPage();
    alert("running")
    const pubRoot = new axios.create({
        baseURL: "http://localhost:3000/private"
    });
      

      async function createAuthor({first = 'New', last = 'NEW2', numBooks = 0}) {
        return await pubRoot.post(`/admin`, {
          data: {first, last, numBooks}
        })
      }
      
      async function getAllAuthors() {
        return await pubRoot.get('/admin');
      }
      
      (async () => {
        await createAuthor({
          first: "chris",
          numBooks: 4
        });
      })();
});
