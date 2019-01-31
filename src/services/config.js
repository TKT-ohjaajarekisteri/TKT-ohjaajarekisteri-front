let url = 'http://localhost:3004/'

if (window.location.hostname === 'tkt-ohjaajarekisteri-front.herokuapp.com') {
  url = 'https://tkt-ohjaajarekisteri-back.herokuapp.com/'
}

export default url