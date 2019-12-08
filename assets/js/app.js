const options = {
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      //url: 'about.html',
      content: ` <div class="page">
        <div class="page-content">
          <div class="block">
            <p>This page created dynamically</p>
          </div>
        </div>
      </div>`
    },
  ],
  on: {
    // each object key means same name event handler
    pageInit: function (page) {
      // do something on page init
      console.log('init')
    },
    popupOpen: function (popup) {
      // do something on popup open
    },
  },
}

const app = new Framework7(options);
const mainView = app.views.create('.view-main');
